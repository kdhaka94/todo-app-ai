"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-4">
          <p className="text-xs uppercase tracking-wider font-inter text-slate-500 font-bold">Good Morning, {data.user.name}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold font-headline tracking-tight text-on-surface leading-none">
            Your focus is shifting toward <span className="text-tertiary">{data.user.focus}.</span>
          </h2>
          <div className="flex gap-3 pt-4">
            <span className="px-4 py-1.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed text-xs font-semibold">AI Recommended</span>
            <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">Focus Mode: ON</span>
          </div>
        </div>

        {/* AI Pulse Quick Summary */}
        <div className="lg:col-span-4 bg-tertiary text-on-tertiary p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-3xl" data-icon="bolt">bolt</span>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">AI Pulse</span>
            </div>
            <p className="text-lg font-headline font-semibold leading-snug">{data.aiPulse.message}</p>
            <button className="bg-surface-container-lowest/20 hover:bg-surface-container-lowest/30 transition-colors w-full py-2 rounded-lg text-sm font-bold border border-white/10">
              View Suggested Schedule
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>
        </div>
      </div>

      {/* Data Visualizations: Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Completion Rate Card */}
        <div className="md:col-span-2 bg-surface-container-lowest dark:bg-slate-800 p-6 rounded-xl ambient-shadow border border-slate-100 dark:border-slate-700">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-headline font-bold text-lg">Completion Flow</h3>
            <span className="text-xs font-bold text-primary">{data.stats.completionRate} vs last week</span>
          </div>
          <div className="h-32 flex items-end justify-between gap-2 px-2">
            <div className="w-full bg-surface-container-low dark:bg-slate-700 rounded-t-lg h-[40%] transition-all hover:bg-primary-fixed"></div>
            <div className="w-full bg-surface-container-low dark:bg-slate-700 rounded-t-lg h-[60%] transition-all hover:bg-primary-fixed"></div>
            <div className="w-full bg-surface-container-low dark:bg-slate-700 rounded-t-lg h-[45%] transition-all hover:bg-primary-fixed"></div>
            <div className="w-full bg-primary-container rounded-t-lg h-[85%]"></div>
            <div className="w-full bg-surface-container-low dark:bg-slate-700 rounded-t-lg h-[50%] transition-all hover:bg-primary-fixed"></div>
            <div className="w-full bg-surface-container-low dark:bg-slate-700 rounded-t-lg h-[70%] transition-all hover:bg-primary-fixed"></div>
            <div className="w-full bg-surface-container-low dark:bg-slate-700 rounded-t-lg h-[65%] transition-all hover:bg-primary-fixed"></div>
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Focus Time */}
        <div className="bg-surface-container-lowest dark:bg-slate-800 p-6 rounded-xl ambient-shadow border border-slate-100 dark:border-slate-700 flex flex-col justify-between">
          <div>
            <h3 className="font-headline font-bold text-lg mb-1">Focus Time</h3>
            <p className="text-3xl font-extrabold font-headline text-tertiary">
              {data.stats.focusTime}<span className="text-sm font-medium text-slate-400 ml-1">hrs</span>
            </p>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">Deep Work</span>
              <span className="font-bold">{data.stats.deepWorkPercentage}%</span>
            </div>
            <div className="w-full h-1.5 bg-surface-container dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="bg-tertiary-container h-full" style={{width: `${data.stats.deepWorkPercentage}%`}}></div>
            </div>
          </div>
        </div>

        {/* AI Coaching Tip */}
        <div className="bg-tertiary-fixed dark:bg-indigo-950 p-6 rounded-xl ambient-shadow border border-tertiary/10">
          <span className="material-symbols-outlined text-tertiary mb-4" data-icon="lightbulb">lightbulb</span>
          <h3 className="font-headline font-bold text-lg mb-2 text-on-tertiary-fixed dark:text-indigo-200">Coach Insight</h3>
          <p className="text-sm text-on-tertiary-fixed/80 dark:text-indigo-300 leading-relaxed font-medium">
            {data.coachInsight}
          </p>
        </div>

        {/* Workload Forecast */}
        <div className="md:col-span-3 bg-surface-container-low dark:bg-slate-800/50 p-8 rounded-xl border border-outline-variant/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-headline font-bold text-xl">Workload Forecast</h3>
              <p className="text-sm text-slate-500">AI-driven projection for Week 42</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-surface-container-lowest dark:bg-slate-700 text-xs font-bold rounded-lg shadow-sm">By Task</button>
              <button className="px-4 py-2 text-xs font-bold rounded-lg text-slate-400 hover:text-on-surface dark:hover:text-slate-200 transition-colors">By Energy</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.workloadForecast.map((day: any, i: number) => (
              <div key={i} className={`p-4 rounded-xl bg-surface-container-lowest dark:bg-slate-800 ${day.type === 'heavy' ? 'border-l-4 border-tertiary' : ''} ${day.type === 'light' ? 'opacity-60' : ''}`}>
                <p className={`text-[10px] font-bold uppercase mb-1 ${day.type === 'optimized' ? 'text-tertiary' : 'text-slate-400'}`}>{day.day}</p>
                <p className={`text-sm font-bold ${day.type === 'optimized' ? 'text-tertiary' : ''}`}>{day.load}</p>
                {day.type === 'heavy' && (
                  <div className="mt-4 flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white dark:border-slate-800"></div>
                    <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white dark:border-slate-800"></div>
                    <div className="w-6 h-6 rounded-full bg-slate-400 border-2 border-white dark:border-slate-800 flex items-center justify-center text-[8px] text-white">{day.tags[0]}</div>
                  </div>
                )}
                {day.type === 'optimized' && (
                  <p className="text-[10px] mt-2 text-slate-500">{day.info}</p>
                )}
                {day.type === 'light' && (
                  <div className="mt-4 h-1 w-full bg-surface-container dark:bg-slate-700 rounded-full"></div>
                )}
                {day.type === 'syncs' && (
                  <div className="mt-4 flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Integration Health */}
        <div className="bg-surface-container-lowest dark:bg-slate-800 p-6 rounded-xl ambient-shadow border border-slate-100 dark:border-slate-700">
          <h3 className="font-headline font-bold text-lg mb-6">Integrations</h3>
          <ul className="space-y-4">
            {data.integrations.map((int: any, i: number) => (
              <li key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container dark:bg-slate-700 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm" data-icon={int.icon}>{int.icon}</span>
                  </div>
                  <span className="text-sm font-medium">{int.name}</span>
                </div>
                <span className={`w-2 h-2 rounded-full ${int.status === 'ok' ? 'bg-green-500' : 'bg-amber-400'}`}></span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
