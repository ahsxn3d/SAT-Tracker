import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  Coffee, 
  AlertCircle, 
  Play, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Sparkles,
  Trophy,
  RotateCcw
} from 'lucide-react';
import { DayPlan } from '../types';
import { getDayLoadDifficulty } from '../utils/difficulty';

interface DayCardProps {
  day: DayPlan;
  isToday: boolean;
  isTomorrow?: boolean;
  onToggleTask: (dayId: string, taskId: string) => void;
  onLaunchTimer: (dayTitle: string) => void;
  onSaveNotes: (dayId: string, notes: string) => void;
  allPrecedingDaysCompleted?: boolean;
}

export const DayCard: React.FC<DayCardProps> = ({
  day,
  isToday,
  isTomorrow = false,
  onToggleTask,
  onLaunchTimer,
  onSaveNotes,
  allPrecedingDaysCompleted = true,
}) => {
  const [showNotes, setShowNotes] = useState(false);
  const [notesText, setNotesText] = useState(day.userNotes || '');

  const completedCount = day.tasks.filter((t) => t.completed).length;
  const isAllCompleted = day.tasks.length > 0 && completedCount === day.tasks.length;
  const isExamDay = day.dateStr === '2026-11-07';

  const handleNotesBlur = () => {
    onSaveNotes(day.id, notesText);
  };

  const mathCount = day.tasks.filter((t) => t.subject === 'math').length;
  const rwCount = day.tasks.filter((t) => t.subject === 'rw').length;
  const isWeekday = !['Sat', 'Sun'].includes(day.dayOfWeek);

  const diffConfig = getDayLoadDifficulty(day);

  return (
    <div
      id={`day-${day.id}`}
      className={`rounded-2xl border-2 overflow-hidden shadow-grave-card hover:shadow-grave-card-hover smooth-card-hover transition-all duration-300 ${
        isExamDay
          ? 'bg-gradient-to-br from-amber-50/90 via-rose-50/80 to-white/90 border-amber-500 ring-2 ring-amber-400'
          : day.isBuffer
          ? 'bg-gradient-to-br from-emerald-50/90 via-teal-50/60 to-[#e5f0e1]/90 border-emerald-400'
          : isToday
          ? 'bg-[#e5f0e1]/90 border-indigo-500 ring-2 ring-indigo-300'
          : isAllCompleted
          ? 'bg-[#d2e4cd]/75 border-[#a6c4a1]'
          : diffConfig.type === 'light'
          ? 'bg-sky-50/70 backdrop-blur-md border-sky-300 hover:border-sky-500'
          : diffConfig.type === 'intensive'
          ? 'bg-amber-50/70 backdrop-blur-md border-amber-300 hover:border-amber-500'
          : 'bg-[#e5f0e1]/65 backdrop-blur-md border-[#a6c4a1] hover:border-emerald-600'
      }`}
    >
      {/* Day Header */}
      <div
        className={`px-4 py-3 flex items-center justify-between border-b ${
          isExamDay
            ? 'border-amber-200 bg-amber-100/70'
            : day.isBuffer
            ? 'border-emerald-200 bg-emerald-100/50'
            : isToday
            ? 'border-indigo-200 bg-indigo-100/60'
            : diffConfig.type === 'light'
            ? 'border-sky-200 bg-sky-100/50'
            : diffConfig.type === 'intensive'
            ? 'border-amber-200 bg-amber-100/50'
            : 'border-[#a6c4a1]/50 bg-[#d2e4cd]/50'
        }`}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`font-bold text-sm sm:text-base font-luxury ${
              isExamDay
                ? 'text-rose-950'
                : isToday
                ? 'text-indigo-950'
                : 'text-slate-950'
            }`}
          >
            {day.formattedDate}
          </span>

          {isExamDay && (
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-600 text-white font-['JetBrains_Mono'] flex items-center gap-1 shadow-xs">
              <Trophy className="w-3 h-3 text-amber-300" />
              SAT Paper Day
            </span>
          )}

          {isToday && (
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-600 text-white tracking-wide font-['JetBrains_Mono']">
              Today
            </span>
          )}

          {isTomorrow && !isToday && (
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 font-bold tracking-wide font-['JetBrains_Mono'] shadow-xs">
              Tomorrow
            </span>
          )}

          {/* Color Difficulty Badge (Rest, Light, Standard, Sprint, Mock) */}
          {!isExamDay && !isToday && !isTomorrow && (
            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border flex items-center gap-1 font-['JetBrains_Mono'] ${diffConfig.badgeClass}`}>
              {diffConfig.badgeText}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!day.isBuffer && (
            <button
              onClick={() => onLaunchTimer(`${day.formattedDate} (${day.tasks.length} tasks)`)}
              className="p-1.5 text-slate-500 hover:text-indigo-700 hover:bg-indigo-100 rounded-lg transition"
              title="Launch 90-min timer for this day"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
            </button>
          )}

          {/* Completion Badge */}
          <span
            className={`text-xs font-['JetBrains_Mono'] font-black px-2 py-0.5 rounded-md border ${
              isAllCompleted
                ? 'bg-emerald-600 text-white border-emerald-700'
                : 'bg-matcha-input text-slate-800 border-slate-300'
            }`}
          >
            {completedCount}/{day.tasks.length}
          </span>
        </div>
      </div>

      {/* Special exam day reminder */}
      {isExamDay && (
        <div className="p-3 text-xs text-rose-950 bg-amber-100/60 border-b border-amber-300 flex items-start gap-2 font-bold">
          <Trophy className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <span>🎯 SAT Official Paper Day at Crescent Model School. Gates close 7:45 AM.</span>
        </div>
      )}

      {/* Buffer Special Instructions */}
      {day.isBuffer && !isExamDay && (
        <div className="p-3 text-xs text-emerald-950 bg-emerald-100/50 border-b border-emerald-200 flex items-start gap-2 font-semibold">
          <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-extrabold block">
              {allPrecedingDaysCompleted
                ? 'Targets Hit! Sunday is 100% Free 🌿'
                : 'Buffer Catch-up Window 🔄'}
            </span>
            <span className="text-emerald-900 font-medium">
              {day.specialInstructions ||
                'Sundays are strictly for sleeping in, catching up only if needed, or full rest.'}
            </span>
          </div>
        </div>
      )}

      {/* Special instructions for test days / packing days */}
      {!day.isBuffer && !isExamDay && day.specialInstructions && (
        <div className="p-3 text-xs text-indigo-950 bg-indigo-50 border-b border-indigo-200 flex items-start gap-2 font-semibold">
          <AlertCircle className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
          <span className="leading-relaxed">{day.specialInstructions}</span>
        </div>
      )}

      {/* Tasks List */}
      <div className="p-3.5 space-y-2">
        {day.tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => onToggleTask(day.id, task.id)}
            className={`group task-check-card flex items-start gap-3 p-2.5 rounded-xl border-2 cursor-pointer select-none min-h-[44px] ${
              task.completed
                ? 'bg-emerald-50/60 border-emerald-300 text-slate-600'
                : 'bg-matcha-input border-[#a6c4a1]/60 text-slate-900 shadow-xs'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {task.completed ? (
                <span className="task-check-dot">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                </span>
              ) : (
                <span className="task-check-dot">
                  <Circle className="w-5 h-5 text-slate-400 group-hover:text-emerald-600" />
                </span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                {/* Subject Chip */}
                {task.subject === 'math' && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200 font-['JetBrains_Mono']">
                    Math
                  </span>
                )}
                {task.subject === 'rw' && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200 font-['JetBrains_Mono']">
                    RW
                  </span>
                )}
                {task.subject === 'test' && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-900 border border-purple-200 font-['JetBrains_Mono']">
                    Test
                  </span>
                )}
                {task.subject === 'drill' && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-200 font-['JetBrains_Mono']">
                    Drill
                  </span>
                )}
                {task.subject === 'review' && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-900 border border-rose-200 font-['JetBrains_Mono']">
                    Autopsy
                  </span>
                )}
                {task.subject === 'logistics' && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-matcha-sub-dark text-slate-900 border border-[#a6c4a1]/60 font-['JetBrains_Mono']">
                    Prep
                  </span>
                )}

                {task.isCarriedOver && (
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-950 border border-amber-300 font-['JetBrains_Mono'] flex items-center gap-1 shadow-xs">
                    <RotateCcw className="w-2.5 h-2.5 text-amber-700" />
                    <span>Rollover from {task.originalFormattedDate}</span>
                  </span>
                )}

                <span
                  className={`text-xs font-bold ${
                    task.completed ? 'line-through text-slate-500' : 'text-slate-950'
                  }`}
                >
                  {task.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer toolbar: Pacing check + Day reflection notes */}
      <div className="px-4 py-2.5 bg-matcha-sub border-t border-[#a6c4a1]/50 flex items-center justify-between text-xs text-slate-700 font-semibold">
        <div className="flex items-center gap-1.5 font-['JetBrains_Mono']">
          {isWeekday && (mathCount > 0 || rwCount > 0) && (
            <span className="text-[11px] text-slate-700 font-bold">
              Pacing: {mathCount}M &bull; {rwCount}RW
            </span>
          )}
        </div>

        <button
          onClick={() => setShowNotes(!showNotes)}
          className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-950 transition font-bold"
        >
          <FileText className="w-3.5 h-3.5 text-indigo-600" />
          <span>{notesText ? 'Notes (1)' : 'Add note'}</span>
          {showNotes ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Note Expandable Area */}
      {showNotes && (
        <div className="p-3 bg-matcha-sub border-t border-[#a6c4a1]/60">
          <textarea
            rows={2}
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            onBlur={handleNotesBlur}
            placeholder="Reflections, questions to revisit, or energy level..."
            className="w-full text-xs bg-matcha-input border border-[#a6c4a1]/70 rounded-xl p-2.5 font-medium text-slate-900 placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          />
        </div>
      )}
    </div>
  );
};
