"use client";

import { useEffect, useState } from "react";

export default function Integrations() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/integrations')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 space-y-12">

      {/* Section: Header & Stats */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-label font-bold text-primary mb-2 block">Central Hub</span>
          <h2 className="text-4xl font-headline font-extrabold tracking-tight text-on-surface leading-tight">Integration Center</h2>
          <p className="text-slate-500 mt-2 max-w-md">Connect your ecosystem and let the Cognitive Engine orchestrate your workflows across platforms.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-container-low dark:bg-slate-800 px-6 py-4 rounded-2xl">
            <p className="text-[10px] uppercase tracking-widest font-label font-bold text-slate-400 mb-1">Active Syncs</p>
            <p className="text-2xl font-headline font-extrabold text-on-surface">
              {data.stats.liveSyncs} <span className="text-sm font-medium text-tertiary">Live</span>
            </p>
          </div>
          <div className="bg-surface-container-low dark:bg-slate-800 px-6 py-4 rounded-2xl">
            <p className="text-[10px] uppercase tracking-widest font-label font-bold text-slate-400 mb-1">Daily Automations</p>
            <p className="text-2xl font-headline font-extrabold text-on-surface">{data.stats.dailyAutomations}</p>
          </div>
        </div>
      </section>

      {/* Section: Connected Apps */}
      <section className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-on-surface">Connected Ecosystem</h3>
          <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
            Explore Directory <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.connectedApps.map((app: any, i: number) => (
            <div key={i} className={`${app.theme === 'dark' ? 'bg-on-surface' : 'bg-surface-container-lowest dark:bg-slate-800'} p-6 rounded-3xl shadow-[0px_12px_32px_rgba(25,28,30,0.06)] flex flex-col justify-between group relative overflow-hidden`}>
              {app.theme === 'dark' && <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>}

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-12 h-12 rounded-2xl ${app.colorClass} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-3xl`} data-icon={app.icon}>{app.icon}</span>
                </div>
                <div className="flex flex-col items-end">
                  <label className="inline-flex items-center cursor-pointer">
                    <input defaultChecked={app.active} className="sr-only peer" type="checkbox" />
                    <div className={`w-11 h-6 ${app.theme === 'dark' ? 'bg-white/20 peer-checked:bg-tertiary' : 'bg-slate-200 dark:bg-slate-600 peer-checked:bg-primary'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all relative`}></div>
                  </label>
                  <span className={`text-[10px] font-bold mt-2 ${app.theme === 'dark' ? 'text-tertiary-fixed' : 'text-primary'}`}>{app.status}</span>
                </div>
              </div>
              <div className="relative z-10">
                <h4 className={`font-headline font-bold text-lg mb-1 ${app.theme === 'dark' ? 'text-white' : ''}`}>{app.name}</h4>
                <p className={`text-sm leading-relaxed ${app.theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: AI Automation Recipes */}
      <section className="max-w-7xl mx-auto py-8">
        <div className="bg-surface-container-low dark:bg-slate-900 rounded-[2.5rem] p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-tertiary/10 rounded-full blur-[100px]"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-tertiary" data-icon="bolt" style={{fontVariationSettings: "'FILL' 1"}}>bolt</span>
                <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Intelligence Engine</span>
              </div>
              <h3 className="text-3xl font-headline font-extrabold leading-tight mb-4">AI Automation Recipes</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">Our neural engine monitors your connected apps to suggest high-impact productivity flows tailored to your behavior.</p>
              <button className="px-6 py-3 bg-tertiary text-on-tertiary rounded-xl font-bold flex items-center gap-2 hover:bg-tertiary/90 transition-all shadow-lg shadow-tertiary/20">
                <span className="material-symbols-outlined text-sm" data-icon="auto_awesome">auto_awesome</span>
                Generate New Recipe
              </button>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">

              {data.automationRecipes.map((recipe: any) => (
                <div key={recipe.id} className="bg-surface-container-lowest dark:bg-slate-800 p-6 rounded-[2rem] hover:translate-y-[-4px] transition-transform cursor-pointer group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex -space-x-2">
                      {recipe.icons.map((ic: any, index: number) => (
                        <div key={index} className={`w-8 h-8 rounded-full flex items-center justify-center border-2 border-surface-container-lowest dark:border-slate-800 ${ic.colorClass}`}>
                          <span className="material-symbols-outlined text-xs" data-icon={ic.icon}>{ic.icon}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{recipe.title}</span>
                  </div>
                  <p className="text-on-surface font-medium mb-4 leading-snug">
                    {/* Simplified highlighting logic for demonstration */}
                    {recipe.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-tertiary font-bold flex items-center gap-1">{recipe.successRate}</span>
                    <span className={`material-symbols-outlined ${recipe.status === 'active' ? 'text-primary' : 'text-slate-300 group-hover:text-primary'} transition-colors`} data-icon={recipe.status === 'active' ? 'toggle_on' : 'add_circle'} style={{fontVariationSettings: "'opsz' 48"}}>{recipe.status === 'active' ? 'toggle_on' : 'add_circle'}</span>
                  </div>
                </div>
              ))}

              <div className="bg-surface-container-lowest/50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 p-6 rounded-[2rem] flex flex-col items-center justify-center group hover:border-primary/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary" data-icon="add">add</span>
                </div>
                <p className="text-sm font-bold text-slate-400 group-hover:text-primary">Custom Recipe</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section: Browse New (Horizontal Scroll) */}
      <section className="max-w-7xl mx-auto space-y-6 pb-20">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-headline font-bold text-on-surface">Discover More</h3>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span></button>
            <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span></button>
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {data.discoverMore.map((app: any, i: number) => (
            <div key={i} className="min-w-[200px] bg-surface-container-lowest dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${app.colorClass}`}>
                <span className="material-symbols-outlined" data-icon={app.icon}>{app.icon}</span>
              </div>
              <div>
                <p className="font-bold text-sm">{app.name}</p>
                <p className="text-[10px] text-slate-400">{app.type}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
