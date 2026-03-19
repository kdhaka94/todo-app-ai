"use client";

import { useEffect, useState } from "react";

export default function Inbox() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/inbox')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="flex-1 p-8 max-w-5xl mx-auto space-y-12 overflow-y-auto">

        {/* AI Section: Next Actions Bento */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-wider font-inter font-semibold text-slate-500">Intelligent Focus</h2>
            <span className="flex items-center gap-1 text-[10px] bg-tertiary-fixed-dim text-on-tertiary-fixed px-2 py-0.5 rounded-full font-bold">
              <span className="material-symbols-outlined text-[12px]" data-icon="auto_awesome" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
              AI CURATED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* High Priority AI Suggestion Card */}
            {data.aiSuggestions.map((sug: any, i: number) => (
              <div key={i} className="md:col-span-2 glass-card dark:bg-slate-800 rounded-2xl p-6 ambient-shadow border border-white/20 dark:border-slate-700 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-tertiary/10 transition-colors"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-tertiary/10 p-2 rounded-lg">
                      <span className="material-symbols-outlined text-tertiary" data-icon={sug.icon} style={{fontVariationSettings: "'FILL' 1"}}>{sug.icon}</span>
                    </div>
                    <span className="text-[10px] font-bold text-tertiary uppercase">From {sug.source}</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-2">{sug.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{sug.description}</p>
                  <div className="mt-auto flex items-center gap-3">
                    <button className="px-6 py-2.5 bg-tertiary text-on-tertiary rounded-xl font-headline font-bold text-sm ambient-shadow hover:scale-105 active:scale-95 transition-all">
                      Complete Action
                    </button>
                    <button className="p-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                      <span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick AI Insight */}
            <div className="bg-surface-container-low dark:bg-slate-800 rounded-2xl p-6 flex flex-col border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-4 text-tertiary">
                <span className="material-symbols-outlined text-lg" data-icon="schedule">schedule</span>
                <span className="text-xs font-bold uppercase tracking-wider">Time Audit</span>
              </div>
              <h4 className="font-headline font-bold text-lg mb-2">{data.timeAudit.title}</h4>
              <p className="text-xs text-slate-500 mb-6">{data.timeAudit.description}</p>
              <button className="mt-auto w-full py-2 bg-white dark:bg-slate-700 text-tertiary border border-tertiary/10 rounded-lg text-xs font-bold hover:bg-tertiary/5 transition-colors">
                View Productivity Map
              </button>
            </div>
          </div>
        </section>

        {/* Main Content: Central List of Tasks */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-surface-container-high dark:border-slate-700 pb-4">
            <h2 className="text-xl font-headline font-bold">Upcoming Work</h2>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg" data-icon="filter_list">filter_list</span>
                Filter
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {data.upcomingWork.map((task: any) => (
              <div key={task.id} className={`group flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer ${task.ai ? 'bg-tertiary/5 border border-tertiary/10' : 'hover:bg-surface-container-low dark:hover:bg-slate-800'}`}>
                {task.ai ? (
                  <div className="w-6 h-6 rounded-full border-2 border-tertiary/40 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-tertiary text-sm" data-icon="auto_awesome" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-primary flex items-center justify-center transition-colors shrink-0">
                    <span className="material-symbols-outlined text-primary scale-0 group-hover:scale-100 transition-transform text-sm" data-icon="check">check</span>
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-sm font-medium ${task.ai ? 'text-tertiary' : ''}`}>{task.title}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${task.ai ? 'bg-tertiary-container text-on-tertiary-container' : 'bg-secondary-container text-on-secondary-container'}`}>
                      {task.tag}
                    </span>
                  </div>
                  {task.description && (
                    <p className={`text-xs mt-0.5 ${task.ai ? 'text-slate-500 italic' : 'text-slate-400'}`}>
                      {task.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span className={`text-[10px] font-bold ${task.ai ? 'text-tertiary' : 'text-slate-400'}`}>{task.due}</span>
                  {task.ai ? (
                    <button className="bg-tertiary text-white text-[10px] font-bold px-3 py-1 rounded-lg">View Summary</button>
                  ) : (
                    <span className="material-symbols-outlined text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block" data-icon="edit">edit</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="flex items-center gap-3 w-full p-4 text-slate-400 hover:text-primary transition-colors group">
            <span className="material-symbols-outlined" data-icon="add">add</span>
            <span className="text-sm font-medium">Add a new task...</span>
          </button>
        </section>
      </div>

      {/* Contextual AI Insights (Right Sidebar) */}
      <aside className="w-80 bg-[#f2f4f6] dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 overflow-y-auto hidden xl:flex flex-col p-6 space-y-8 shrink-0 custom-scrollbar">
        <div className="space-y-1">
          <h3 className="text-xs uppercase tracking-widest font-bold text-slate-400 font-label">Contextual Intelligence</h3>
          <p className="text-[10px] text-tertiary font-bold">ANALYZING WORKFLOW...</p>
        </div>

        {/* Insight Card 1 */}
        <div className="bg-surface-container-lowest dark:bg-slate-800 rounded-xl p-5 ambient-shadow border border-slate-100 dark:border-slate-700 space-y-3">
          <div className="flex items-center gap-2 text-tertiary">
            <span className="material-symbols-outlined text-lg" data-icon="priority_high">priority_high</span>
            <span className="text-xs font-bold uppercase">Critical Signal</span>
          </div>
          <p className="text-sm font-medium leading-relaxed text-on-surface">You have {data.contextualIntelligence.signals.length} high-priority emails that need tasks created.</p>
          <div className="space-y-2 mt-4">
            {data.contextualIntelligence.signals.map((sig: any, i: number) => (
              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-tertiary/5 text-[11px]">
                <span className="text-slate-600 dark:text-slate-300 truncate mr-2">{sig.from}</span>
                <button className="text-tertiary font-bold shrink-0">{sig.subject}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Insight Card 2 */}
        <div className="bg-tertiary-container dark:bg-indigo-950 text-on-tertiary-container dark:text-indigo-100 rounded-xl p-5 ambient-shadow space-y-3 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-lg" data-icon="auto_awesome" style={{fontVariationSettings: "'FILL' 1"}}>auto_awesome</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">AI Recommendation</span>
            </div>
            <h4 className="font-headline font-bold text-sm">{data.contextualIntelligence.aiRecommendation.title}</h4>
            <p className="text-xs opacity-80 mt-2 leading-relaxed">{data.contextualIntelligence.aiRecommendation.description}</p>
            <button className="mt-4 w-full py-2 bg-on-tertiary-container text-tertiary dark:bg-indigo-100 dark:text-indigo-900 rounded-lg text-[10px] font-black uppercase tracking-widest">Execute Proposal</button>
          </div>
          <div className="absolute bottom-[-20%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>

        {/* Productivity Summary */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Focus Score</span>
            <span className="text-xs font-bold text-primary">{data.contextualIntelligence.focusScore}%</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{width: `${data.contextualIntelligence.focusScore}%`}}></div>
          </div>
          <p className="text-[10px] text-slate-500 mt-3 leading-relaxed">Top of your class. You've completed 5 tasks 2 hours faster than predicted.</p>
        </div>

        <div className="mt-auto bg-surface-container-highest dark:bg-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-2 h-2 bg-green-500 rounded-full absolute -top-0.5 -right-0.5 border border-white"></div>
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400" data-icon="hub">hub</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-slate-500">Connected Brains</p>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300">Gmail, Slack, Notion</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
