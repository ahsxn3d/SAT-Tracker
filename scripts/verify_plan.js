const { STUDY_PLAN_WEEKS } = require('../src/data/studyPlan.ts');

console.log('=== VERIFYING STUDY PLAN WEEKS ===');
console.log('Total weeks:', STUDY_PLAN_WEEKS.length);

let totalDays = 0;
let numberedDays = 0;
let testCount = 0;

for (const w of STUDY_PLAN_WEEKS) {
  console.log(`\n[${w.id}] ${w.title} (${w.days.length} days)`);
  for (const d of w.days) {
    totalDays++;
    if (d.dayNumber) numberedDays++;
    if (d.isTestDay) testCount++;

    if (
      d.dayNumber === 1 ||
      d.dayNumber === 9 ||
      d.dayNumber === 12 ||
      d.dateStr === '2026-09-27' ||
      d.dayNumber === 13 ||
      d.dayNumber === 20 ||
      d.dayNumber === 24 ||
      d.dayNumber === 32 ||
      d.isTestDay ||
      d.dateStr === '2026-11-07'
    ) {
      console.log(`  -> Day ${d.dayNumber || 'N/A'}: ${d.formattedDate} (${d.dateStr}) [${d.tasks.length} tasks, study: ${d.studyTimeMinutes}m, break: ${d.breakTimeMinutes}m]`);
      if (d.specialInstructions) {
        console.log(`     * ${d.specialInstructions}`);
      }
    }
  }
}

console.log(`\nVerification Summary:`);
console.log(`- Total Days: ${totalDays}`);
console.log(`- Numbered Study Days (Phase 1): ${numberedDays}`);
console.log(`- Full Practice Tests: ${testCount}`);

console.log('\n=== TESTING ROLLOVER SYSTEM INTEGRITY ===');
const { computeWeeksWithRollover } = require('../src/utils/rollover');

// Test 1: Day 1 untouched -> should NOT roll over anything to Day 2
const weeks1 = computeWeeksWithRollover(STUDY_PLAN_WEEKS, {}, {});
const day2Carried1 = weeks1[0].days[1].tasks.filter(t => t.isCarriedOver).length;
console.log('Test 1 (Day 1 untouched): Day 2 carried-over count =', day2Carried1, day2Carried1 === 0 ? '✓ PASS' : '✗ FAIL');

// Test 2: Day 1 engaged (task 1 done, remaining curriculum tasks uncompleted) -> should roll over ONLY to Day 2, NOT to Day 3
const day1Task1Id = STUDY_PLAN_WEEKS[0].days[0].tasks[0].id;
const weeks2 = computeWeeksWithRollover(STUDY_PLAN_WEEKS, { [day1Task1Id]: true }, {});
const day1CurriculumLeft = STUDY_PLAN_WEEKS[0].days[0].tasks.filter(t => t.subject !== 'buffer').length - 1;
const day2Carried2 = weeks2[0].days[1].tasks.filter(t => t.isCarriedOver).length;
const day3Carried2 = weeks2[0].days[2].tasks.filter(t => t.isCarriedOver).length;
console.log('Test 2 (Day 1 engaged with leftovers):');
console.log('  Day 2 carried-over count =', day2Carried2, day2Carried2 === day1CurriculumLeft ? '✓ PASS' : '✗ FAIL');
console.log('  Day 3 carried-over count =', day3Carried2, day3Carried2 === 0 ? '✓ PASS' : '✗ FAIL');

// Test 3: User shifts lessons from Sep 19 (Day 6) to Sep 26 (Day 8)
// -> Must NOT appear on Sep 20, 21, 22, 23, 24, 25!
// -> Must appear on Sep 26 with isCarriedOver: false!
const day6 = STUDY_PLAN_WEEKS[0].days[5]; // Sat Sep 19
const taskToShift1 = day6.tasks[0].id;
const taskToShift2 = day6.tasks[1].id;
const targetDateStr = '2026-09-26';

const overrides = {
  [taskToShift1]: targetDateStr,
  [taskToShift2]: targetDateStr,
};

// Simulate user completed task 4 on Sep 19, leaving uncompleted work
const completedOnDay6 = { [day6.tasks[3].id]: true };
const weeks3 = computeWeeksWithRollover(STUDY_PLAN_WEEKS, completedOnDay6, {}, {}, '2026-09-26', overrides);
const allDays3 = weeks3.flatMap(w => w.days);

const intermediateDates = ['2026-09-20', '2026-09-21', '2026-09-22', '2026-09-23', '2026-09-24', '2026-09-25'];
let intermediateLeak = false;

for (const date of intermediateDates) {
  const d = allDays3.find(day => day.dateStr === date);
  if (d) {
    const hasShifted = d.tasks.some(t => t.id === taskToShift1 || t.id === taskToShift2);
    if (hasShifted) {
      console.log(`  ✗ LEAK DETECTED on ${date}: Task appeared unexpectedly!`);
      intermediateLeak = true;
    }
  }
}

const targetDayObj = allDays3.find(d => d.dateStr === targetDateStr);
const shifted1OnTarget = targetDayObj ? targetDayObj.tasks.find(t => t.id === taskToShift1) : null;
const shifted2OnTarget = targetDayObj ? targetDayObj.tasks.find(t => t.id === taskToShift2) : null;

console.log('\nTest 3 (Task shifted from Sep 19 to Sep 26):');
console.log('  Intermediate days (Sep 20-25) clean of shifted tasks =', !intermediateLeak ? '✓ PASS' : '✗ FAIL');
console.log('  Tasks present on target day (Sep 26) =', (shifted1OnTarget && shifted2OnTarget) ? '✓ PASS' : '✗ FAIL');
console.log('  isCarriedOver is false on target day =', (shifted1OnTarget && !shifted1OnTarget.isCarriedOver && shifted2OnTarget && !shifted2OnTarget.isCarriedOver) ? '✓ PASS' : '✗ FAIL');

