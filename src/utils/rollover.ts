import { WeekPlan, DayPlan, TaskItem } from '../types';

/**
 * Computes weeks with dynamic rollover / carryover of uncompleted tasks.
 * 
 * Rules requested by user:
 * 1. Preparation starts on '2026-09-12' (Day 1).
 * 2. Rollover works ONLY when the student actually worked on a day or that day has passed,
 *    and left specific tasks uncompleted (e.g., completed English on Day 1, but skipped Math).
 * 3. Those uncompleted tasks roll over ONLY to the immediate next day / tomorrow (or next study day),
 *    so future calendar days (e.g., weeks or months ahead) are NOT polluted with backlog ("Otherwise it will be a big mess").
 * 4. A carried-over task retains its exact original id, code, subject, and label, and is badged with [↩ Rollover from {date}].
 * 5. If the user marks the carried-over task as done on the shifted day, it is automatically marked
 *    as completed on BOTH the shifted day and its original day.
 * 6. Once completed, it does NOT roll over to any subsequent days.
 */
export function computeWeeksWithRollover(
  rawWeeks: WeekPlan[],
  completedTaskIds: Record<string, boolean>,
  taskCompletionDay: Record<string, string>,
  dayNotes: Record<string, string> = {},
  todayDateStr: string = '2026-09-12'
): WeekPlan[] {
  // 1. Flatten all days in chronological order
  const allRawDays: DayPlan[] = rawWeeks.flatMap((w) => w.days);
  const KICKOFF_DATE = '2026-09-12';

  // Helper: determine if a day has actively been engaged with and left uncompleted backlog
  const hasDayLeftovers = (day: DayPlan): boolean => {
    if (day.dateStr < KICKOFF_DATE) return false;
    
    // Condition A: The calendar date has passed in time, leaving uncompleted work
    const isPast = day.dateStr < todayDateStr;

    // Condition B: The student engaged on this day (completed at least 1 task or added a note)
    const hasActivity = day.tasks.some((t) => !!completedTaskIds[t.id]) || !!(dayNotes[day.id] || dayNotes[day.dateStr]);

    return isPast || hasActivity;
  };

  // 2. For each day, compute its native tasks and eligible carried-over tasks
  const updatedDaysMap = new Map<string, DayPlan>();

  allRawDays.forEach((day, dayIndex) => {
    // A. Native tasks of this day
    const nativeTasks: TaskItem[] = day.tasks.map((task) => ({
      ...task,
      completed: !!completedTaskIds[task.id],
      isCarriedOver: false,
    }));

    const nativeTaskIds = new Set(nativeTasks.map((t) => t.id));
    const carriedOverTasks: TaskItem[] = [];

    // B. Check earlier days (j < dayIndex) for rollover
    for (let j = 0; j < dayIndex; j++) {
      const prevDay = allRawDays[j];

      // Rollover begins only from kickoff date onwards
      if (prevDay.dateStr < KICKOFF_DATE) continue;

      // Only days that were worked on or passed can generate rollover backlog
      if (!hasDayLeftovers(prevDay)) continue;

      // Determine if `day` is the immediate recipient of leftovers from `prevDay`.
      // It is the immediate recipient if:
      // - It is the very next day (dayIndex === j + 1), OR
      // - The intermediate day was a buffer day (e.g., Sunday) and this is the next study day (dayIndex === j + 2 && allRawDays[j + 1].isBuffer), OR
      // - All intermediate active study days between j and dayIndex have ALSO been worked on/passed and left uncompleted.
      let isEligibleRecipient = false;

      if (dayIndex === j + 1) {
        isEligibleRecipient = true;
      } else if (dayIndex === j + 2 && allRawDays[j + 1].isBuffer) {
        isEligibleRecipient = true;
      } else {
        // For further future days, only receive if ALL intermediate active study days have been engaged with
        const intermediateActiveDays = allRawDays.slice(j + 1, dayIndex).filter((d) => !d.isBuffer);
        if (intermediateActiveDays.length > 0 && intermediateActiveDays.every((d) => hasDayLeftovers(d))) {
          isEligibleRecipient = true;
        }
      }

      prevDay.tasks.forEach((prevTask) => {
        // Buffer and logistics reminders do not roll over as curriculum tasks
        if (prevTask.subject === 'buffer' || prevTask.subject === 'logistics') return;

        // Skip if this task ID already belongs natively to today
        if (nativeTaskIds.has(prevTask.id)) return;

        // Skip duplicates in carriedOverTasks
        if (carriedOverTasks.some((t) => t.id === prevTask.id)) return;

        const isTaskDone = !!completedTaskIds[prevTask.id];
        const completionDay = taskCompletionDay[prevTask.id];

        if (!isTaskDone && isEligibleRecipient) {
          // Case 1: Left uncompleted on prevDay -> rolls over ONLY to the immediate next day/tomorrow
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
        // Case 3: Completed on an earlier day or not eligible recipient -> DO NOT show (prevents cluttering all future days!)
      });
    }

    // Carried over tasks placed first so student prioritizes backlog
    const combinedTasks = [...carriedOverTasks, ...nativeTasks];

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
