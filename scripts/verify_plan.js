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

// Test 2: Day 1 engaged (task 1 done, 5 curriculum tasks uncompleted, 1 break skipped) -> should roll over ONLY to Day 2, NOT to Day 3
const day1Task1Id = STUDY_PLAN_WEEKS[0].days[0].tasks[0].id;
const weeks2 = computeWeeksWithRollover(STUDY_PLAN_WEEKS, { [day1Task1Id]: true }, {});
const day2Carried2 = weeks2[0].days[1].tasks.filter(t => t.isCarriedOver).length;
const day3Carried2 = weeks2[0].days[2].tasks.filter(t => t.isCarriedOver).length;
console.log('Test 2 (Day 1 engaged with leftovers):');
console.log('  Day 2 carried-over count =', day2Carried2, day2Carried2 === 5 ? '✓ PASS' : '✗ FAIL');
console.log('  Day 3 carried-over count =', day3Carried2, day3Carried2 === 0 ? '✓ PASS' : '✗ FAIL');

