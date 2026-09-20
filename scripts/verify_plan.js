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
