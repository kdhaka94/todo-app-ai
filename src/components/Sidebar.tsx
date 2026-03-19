"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Inbox', href: '/inbox', icon: 'inbox' },
    { label: 'Today', href: '/', icon: 'today' }, // Assume dashboard is 'Today'
    { label: 'Upcoming', href: '#', icon: 'calendar_month' },
    { label: 'Projects', href: '/projects', icon: 'list_alt' },
    { label: 'Integrations', href: '/integrations', icon: 'extension' },
  ];

  return (
    <aside className="hidden md:flex flex-col h-full py-6 px-4 bg-[#eceef0] dark:bg-slate-900 w-64 border-r-0 transition-all duration-300 ease-in-out shrink-0">
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
          <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
        </div>
        <div>
          <h2 className="font-headline font-bold text-sm tracking-tight leading-none text-on-surface">Cognitive Engine</h2>
          <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">AI Pulse: Active</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                isActive
                  ? 'text-[#b31f14] dark:text-red-400 font-bold border-r-2 border-[#b31f14] bg-[#f8f9fb] dark:bg-slate-800'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-[#f8f9fb] dark:hover:bg-slate-800'
              }`}
            >
              <span className="material-symbols-outlined text-xl" data-icon={item.icon}>{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <button className="w-full py-3 bg-primary text-on-primary rounded-xl font-headline font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
          Quick Add Task
        </button>
        <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800">
          <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-[#f8f9fb] dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
            <span className="text-sm font-medium">AI Brain</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
