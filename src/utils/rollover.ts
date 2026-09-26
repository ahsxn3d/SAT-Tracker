import { WeekPlan, DayPlan, TaskItem } from '../types';

/**
 * Computes weeks with dynamic rollover / carryover of uncompleted tasks.
 * 
 * Rules:
 * 1. Preparation starts on '2026-09-14' (Day 1).
 * 2. Rollover works ONLY when the student actually worked on a day and left specific tasks uncompleted
 *    (e.g., completed English on Day 1, but skipped Math). Untouched / unstarted days do NOT roll over!
 * 3. Those uncompleted tasks roll over ONLY to the immediate next active study day (tomorrow),
 *    so future calendar days and rest buffer days are NOT polluted with backlog.
 * 4. Explicitly shifted / rescheduled tasks (taskScheduleOverrides):
 *    - Belong ONLY to their scheduled target date.
 *    - Never appear or roll over on intermediate days.
 *    - Are treated as regular scheduled lessons (isCarriedOver = false) and do NOT display rollover badges or icons.
 * 5. If the user marks the carried-over task as done on the shifted day, it is automatically marked
 *    as completed on BOTH the shifted day and its original day.
 * 6. Once completed, it does NOT roll over to any subsequent days.
 */
export function computeWeeksWithRollover(
  rawWeeks: WeekPlan[],
  completedTaskIds: Record<string, boolean>,
  taskCompletionDay: Record<string, string>,
  dayNotes: Record<string, string> = {},
  todayDateStr: string = '2026-09-14',
  taskScheduleOverrides: Record<string, string> = {}
): WeekPlan[] {
  // 1. Flatten all days in chronological order
  const allRawDays: DayPlan[] = rawWeeks.flatMap((w) => w.days);
  const KICKOFF_DATE = '2026-09-14';

  // Helper: determine if a day has actively been engaged with and left uncompleted backlog
  const hasDayLeftovers = (day: DayPlan): boolean => {
    if (day.dateStr < KICKOFF_DATE) return false;

    // Must have active curriculum tasks (exclude buffer/rest & logistics)
    // AND CRITICALLY: Exclude tasks that have been explicitly rescheduled to another date
    const activeTasks = day.tasks
      .filter((t) => t.subject !== 'buffer' && t.subject !== 'logistics')
      .filter((t) => {
        const targetDate = taskScheduleOverrides[t.id];
        return !targetDate || targetDate === day.dateStr;
      });

    const completedCount = activeTasks.filter((t) => !!completedTaskIds[t.id]).length;
    const hasUncompleted = activeTasks.some((t) => !completedTaskIds[t.id]);
    const hasNotes = !!(dayNotes[day.id] || dayNotes[day.dateStr]);

    // Engagement requirement:
    // Only days where the user actually completed at least 1 task (or added specific notes)
    // AND left some tasks incomplete have legitimate leftovers!
    // Untouched / unstarted days NEVER dump their syllabus into tomorrow.
    const hasEngagement = completedCount > 0 || (hasNotes && day.dateStr <= todayDateStr);

    return hasEngagement && hasUncompleted;
  };

  // 2. For each day, compute its native tasks, scheduled shift tasks, and eligible carried-over tasks
  const updatedDaysMap = new Map<string, DayPlan>();

  allRawDays.forEach((day, dayIndex) => {
    // A. Native tasks of this day (exclude tasks shifted away to another date)
    const nativeTasks: TaskItem[] = day.tasks
      .filter((task) => {
        const targetDate = taskScheduleOverrides[task.id];
        return !targetDate || targetDate === day.dateStr;
      })
      .map((task) => ({
        ...task,
        completed: !!completedTaskIds[task.id],
        isCarriedOver: false,
      }));

    const nativeTaskIds = new Set(nativeTasks.map((t) => t.id));

    // B. Explicit Schedule Overrides (Lessons deliberately scheduled/shifted to THIS specific date)
    // IMPORTANT: These are scheduled lessons, NOT uncompleted rollovers, so isCarriedOver = false
    const scheduledShiftTasks: TaskItem[] = [];
    allRawDays.forEach((otherDay) => {
      if (otherDay.dateStr === day.dateStr) return;
      otherDay.tasks.forEach((origTask) => {
        const targetDate = taskScheduleOverrides[origTask.id];
        if (targetDate === day.dateStr) {
          if (!nativeTaskIds.has(origTask.id) && !scheduledShiftTasks.some((t) => t.id === origTask.id)) {
            const isDone = !!completedTaskIds[origTask.id];
            scheduledShiftTasks.push({
              ...origTask,
              completed: isDone,
              isCarriedOver: false, // NOT a rollover! Intentionally scheduled by user/AI.
              isRescheduled: true,
              originalDayId: otherDay.id,
              originalDateStr: otherDay.dateStr,
              originalFormattedDate: otherDay.formattedDate,
              completedOnDateStr: isDone ? (taskCompletionDay[origTask.id] || day.dateStr) : undefined,
            });
          }
        }
      });
    });

    const scheduledShiftTaskIds = new Set(scheduledShiftTasks.map((t) => t.id));
    const carriedOverTasks: TaskItem[] = [];

    // C. Check earlier days (j < dayIndex) for automatic uncompleted rollover
    for (let j = 0; j < dayIndex; j++) {
      const prevDay = allRawDays[j];

      // Rollover begins only from kickoff date onwards
      if (prevDay.dateStr < KICKOFF_DATE) continue;

      // Only days that were engaged with and left uncompleted backlog can generate rollover
      if (!hasDayLeftovers(prevDay)) continue;

      // Determine if `day` is the immediate recipient of leftovers from `prevDay`.
      // Rollover lands ONLY on the immediate next ACTIVE study day (never on buffer rest days!):
      let isEligibleRecipient = false;

      if (dayIndex === j + 1 && !day.isBuffer) {
        isEligibleRecipient = true;
      } else if (dayIndex === j + 2 && allRawDays[j + 1].isBuffer && !day.isBuffer) {
        isEligibleRecipient = true;
      } else if (dayIndex > j + 1 && !day.isBuffer) {
        const allIntermediatesAreBuffer = allRawDays.slice(j + 1, dayIndex).every((d) => d.isBuffer);
        if (allIntermediatesAreBuffer) {
          isEligibleRecipient = true;
        }
      }

      prevDay.tasks.forEach((prevTask) => {
        // Buffer and logistics reminders do not roll over as curriculum tasks
        if (prevTask.subject === 'buffer' || prevTask.subject === 'logistics') return;

        // CRITICAL: If this task has an explicit schedule override,
        // it belongs ONLY to its scheduled date! It MUST NOT roll over to any intermediate days!
        if (taskScheduleOverrides[prevTask.id]) return;

        // Skip if this task ID already belongs natively to today or scheduled shifts
        if (nativeTaskIds.has(prevTask.id)) return;
        if (scheduledShiftTaskIds.has(prevTask.id)) return;
        if (carriedOverTasks.some((t) => t.id === prevTask.id)) return;

        const isTaskDone = !!completedTaskIds[prevTask.id];
        const completionDay = taskCompletionDay[prevTask.id];

        if (!isTaskDone && isEligibleRecipient) {
          // Case 1: Left uncompleted on prevDay -> rolls over ONLY to the immediate next study day
          carriedOverTasks.push({
            ...prevTask,
            completed: false,
            isCarriedOver: true,
            originalDayId: prevDay.id,
            originalDateStr: prevDay.dateStr,
            originalFormattedDate: prevDay.formattedDate,
          });
        } else if (isTaskDone && completionDay === day.dateStr) {
          // Case 2: Was completed on THIS specific shifted day -> show completed on this day!
          carriedOverTasks.push({
            ...prevTask,
            completed: true,
            isCarriedOver: true,
            originalDayId: prevDay.id,
            originalDateStr: prevDay.dateStr,
            originalFormattedDate: prevDay.formattedDate,
            completedOnDateStr: day.dateStr,
          });
        }
      });
    }

    // Carried over backlog first, then native tasks, then scheduled shifts
    const combinedTasks = [...carriedOverTasks, ...nativeTasks, ...scheduledShiftTasks];

    updatedDaysMap.set(day.id, {
      ...day,
      userNotes: dayNotes[day.id] || dayNotes[day.dateStr] || '',
      tasks: combinedTasks,
      hasCarriedOverTasks: carriedOverTasks.length > 0,
      carriedOverCount: carriedOverTasks.length,
    });
  });

  // 3. Reconstruct WeekPlan array
  return rawWeeks.map((week) => ({
    ...week,
    days: week.days.map((d) => updatedDaysMap.get(d.id) || d),
  }));
}

