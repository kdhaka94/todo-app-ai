"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 w-full max-w-6xl mx-auto mb-12">

      {/* Project Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-wider">Active Project</span>
            <span className="text-slate-400 text-sm">•</span>
            <span className="text-slate-500 text-sm font-medium">{data.project.name}</span>
          </div>
          <h2 className="text-4xl font-extrabold font-headline tracking-tighter text-on-surface">
            {data.project.title}
          </h2>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
            <span>Project Velocity</span>
            <span className="text-primary font-bold">{data.project.velocity}%</span>
          </div>
          <div className="w-64 h-2 bg-surface-container dark:bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{width: `${data.project.velocity}%`}}></div>
          </div>
        </div>
      </section>

      {/* Bento Grid Layout for Tasks */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* Main Task Column */}
        <div className="md:col-span-8 space-y-6">
          {data.tasks.map((task: any) => (
            <div key={task.id} className={`${task.aiInsightsActive ? 'bg-surface-container-low dark:bg-slate-800 p-1 rounded-xl' : 'bg-surface-container-lowest dark:bg-slate-800 p-6 shadow-[0px_12px_32px_rgba(25,28,30,0.06)] border border-slate-100 dark:border-slate-700 rounded-xl group relative'}`}>

              {task.aiInsightsActive ? (
                <div className="bg-surface-container-lowest dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-tertiary/10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <input
                        checked={task.checked}
                        readOnly
                        className="w-5 h-5 rounded-md border-surface-variant text-primary focus:ring-primary/20"
                        type="checkbox"
                      />
                      <h3 className="font-headline font-bold text-lg">{task.title}</h3>
                    </div>
                    <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded uppercase">AI Insights Active</span>
                  </div>

                  <div className="ml-8 space-y-4">
                    {task.subtasks.map((st: any, i: number) => (
                      <div key={i} className="flex items-center gap-3 py-2 px-3 bg-surface-container-low dark:bg-slate-800 rounded-lg group/sub">
                        <span className="material-symbols-outlined text-tertiary text-sm" data-icon="subdirectory_arrow_right">subdirectory_arrow_right</span>
                        <span className="text-sm text-on-surface font-medium flex-1">{st.title}</span>
                        <button className="opacity-0 group-hover/sub:opacity-100 text-slate-400 hover:text-primary transition-opacity">
                          <span className="material-symbols-outlined text-sm" data-icon="close">close</span>
                        </button>
                      </div>
                    ))}
                    {task.drafting && (
                      <div className="flex items-center gap-3 py-2 px-3 bg-tertiary/5 border border-dashed border-tertiary/30 rounded-lg animate-pulse">
                        <span className="material-symbols-outlined text-tertiary text-sm" data-icon="generating_tokens">generating_tokens</span>
                        <span className="text-sm text-tertiary/70 italic font-medium">{task.drafting}</span>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                    <span className="material-symbols-outlined text-slate-300" data-icon="drag_indicator">drag_indicator</span>
                  </div>
                  <div className="flex justify-between items-start pl-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <input
                          checked={task.checked}
                          readOnly
                          className="w-5 h-5 rounded-md border-surface-variant text-primary focus:ring-primary/20"
                          type="checkbox"
                        />
                        <h3 className={`font-headline text-lg ${task.checked ? 'font-medium text-slate-600 line-through' : 'font-bold'}`}>{task.title}</h3>
                      </div>

                      {task.description && (
                        <p className="text-slate-500 text-sm ml-8 mb-4 leading-relaxed">{task.description}</p>
                      )}

                      {task.aiBreakdown && (
                        <div className="ml-8">
                          <button className="flex items-center gap-2 px-4 py-2 bg-tertiary-container dark:bg-indigo-950 text-on-tertiary-container dark:text-indigo-200 rounded-lg text-xs font-bold transition-all hover:shadow-[0_0_15px_rgba(73,103,244,0.4)] active:scale-95 group/ai">
                            <span className="material-symbols-outlined text-sm animate-pulse" data-icon="auto_awesome">auto_awesome</span>
                            AI Breakdown
                          </button>
                        </div>
                      )}
                    </div>

                    {task.date && (
                      <div className="flex items-center gap-3 text-slate-400">
                        <span className="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span>
                        <span className="text-xs font-medium">{task.date}</span>
                      </div>
                    )}

                    {!task.date && task.id === 1 && (
                      <div className="flex -space-x-2">
                        <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBS96LF2KsPDKKzBEGx-FXTe_gizRIUmr8gJWUP2G7Hml4Q5hbz9pkv9tNepa-90F6nwkyNG1Hmf0frl_o8m1bLW67YKgUsGaTlkCnfs7ddf2Zm4K050hbswBGefhTMB9CJZUtABXxzePdmD4Zrs_J4KDHGCF5hNgre_MTXjWy_A5Dd3BIj-NfQmcAENYG4y4UPifMeckISM_ZKI7yJEPXCibg1diGfa72dTD5c2s917OA-iK1wmkDZWHAKpgsSM5td_u-k29VLdPL" alt="Team member" />
                        <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1PhzQ_F_ah9dnu6OikpuuTZagRcuRyJByQt-CLlzTR01IOO6nRrr2HsPNNKC35XOEu8oNk5cSQUDpjRwm-7dw8GRX7SDqLHEGA09Hff1e9o2N1AhwVdGoI19CK48oirexZ5SMihnsGBJgbbN8AXXaIBahabxDNRrM8IU2beSNp1tMYlljk5oBZc-duQjb0FOT1giAzzwsiSKpyhi3wKkgwQ-3oJlUUQfPiW6JGedkRaWizO-Mz7jpay3h0OZX3SX_Tb73yl9JSmwV" alt="Team member" />
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Side Context Column */}
        <div className="md:col-span-4 space-y-6">

          {/* AI Project Pulse Card */}
          <div className="bg-surface-container-highest dark:bg-slate-800 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-tertiary" data-icon="insights">insights</span>
              <h4 className="font-headline font-bold text-sm uppercase tracking-wider">AI Project Pulse</h4>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{__html: data.pulse.message.replace('2 days ahead', '<span class="text-primary font-bold">2 days ahead</span>')}}></p>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] uppercase font-bold text-slate-500 tracking-tighter">
                <span>Focus Level</span>
                <span>{data.pulse.focus}</span>
              </div>
              <div className="flex gap-1">
                <div className="h-1.5 flex-1 bg-tertiary rounded-full"></div>
                <div className="h-1.5 flex-1 bg-tertiary rounded-full"></div>
                <div className="h-1.5 flex-1 bg-tertiary rounded-full"></div>
                <div className="h-1.5 flex-1 bg-tertiary/20 rounded-full"></div>
                <div className="h-1.5 flex-1 bg-tertiary/20 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Project Team Card */}
          <div className="bg-surface-container-lowest dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider mb-4">Active Contributors</h4>
            <div className="space-y-4">
              {data.team.map((member: any, i: number) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full object-cover bg-slate-200" src={i === 0 ? "https://lh3.googleusercontent.com/aida-public/AB6AXuBw7R_qwuJIjwGh3fmPfJS-_BpbV_kobvZPweLbVZ323P1OBn030KuFl197KvaO_zec5BzE8NEPdL_opVRxzGHsm6hxLwrIyAYwi9H_11qji8LHJivjcqS2lJTCOdCwzeXcFU8EUnDNZcXan1IbLhpQ7hv8ZqPIFnFYnKI5JPd-fnbP6IG6vMFDiiyKqkh_cNxqgvqlxothzop6t3DGonYkkM6-ZfG6ZdlnhGPqVy7pVJDXCpg3SW5yse5UV8zvZWVimcwKy2nPNvaw" : "https://lh3.googleusercontent.com/aida-public/AB6AXuDS_Hqly3QH8t_OSQbTBMPgnqJdJykSNGmlU0ZvXOasUNPodM9onEW8P1kIFUPW6CFCWS9huykj0i5cSMGXpRozUBBYFkiMp2OEDYQXYSxN9ujhtxx5-Q9-YssXAYIrJnWxS0ps2MOVUMl_JVBeFuOMQDHJ0TPFwfOrWrNeZpuiZvjl5JuLnkPN-Bv_isT2My3gokTpx7dh1lwDyU749Y5jkIFGAIG-YRFybQM4TJuFANI4Y2vfo9PSyQfCLNDIZ6ORRqygGRch7IC0"} alt="Team member" />
                    <div>
                      <p className="text-sm font-bold">{member.name}</p>
                      <p className="text-[10px] text-slate-400 uppercase">{member.role}</p>
                    </div>
                  </div>
                  <span className={`w-2 h-2 rounded-full ${member.status === 'online' ? 'bg-green-500' : 'bg-slate-300'}`}></span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 border-2 border-surface-container-high dark:border-slate-700 rounded-lg text-xs font-bold text-slate-500 dark:text-slate-400 hover:bg-surface-container-low dark:hover:bg-slate-700 transition-colors">
              Manage Team
            </button>
          </div>

          {/* Timeline Shortcut */}
          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/10">
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider text-primary mb-4">Upcoming Milestone</h4>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <span className="text-xl font-extrabold text-primary">{data.milestone.date.split(' ')[0]}</span>
                <span className="text-[10px] uppercase font-bold text-primary/60">{data.milestone.date.split(' ')[1]}</span>
              </div>
              <div className="pt-1">
                <p className="text-sm font-bold text-on-surface">{data.milestone.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{data.milestone.description}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
