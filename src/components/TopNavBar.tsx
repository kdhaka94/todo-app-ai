"use client";

import { usePathname } from 'next/navigation';

export default function TopNavBar() {
  const pathname = usePathname();

  let title = "The Cognitive Atelier";
  if (pathname === '/inbox') {
    title = "Inbox";
  } else if (pathname === '/projects') {
    title = "The Cognitive Atelier"; // Kept from reference, although projects might be specific
  }

  return (
    <header className="flex justify-between items-center w-full px-6 md:px-8 py-3 md:py-4 bg-[#f8f9fb] dark:bg-slate-900 sticky top-0 z-30 border-none">
      <div className="flex items-center gap-4 md:gap-8 flex-1">
        <h1 className="text-2xl font-bold tracking-tight font-headline text-[#b31f14] dark:text-red-500">
          {title}
        </h1>
        {pathname !== '/' && (
          <div className="hidden lg:flex relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" data-icon="search">search</span>
            <input
              className="w-full bg-surface-container dark:bg-slate-800 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400"
              placeholder={pathname === '/integrations' ? "Search connected apps or recipes..." : (pathname === '/projects' ? "Search project..." : "Search tasks or insights...")}
              type="text"
            />
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors rounded-full active:scale-95" title="AI Assistant">
          <span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
        </button>
        <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors rounded-full active:scale-95" title="Notifications">
          <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
        </button>
        <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors rounded-full active:scale-95" title="Settings">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
        </button>
        <div className="ml-2 w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-surface-container-high dark:border-slate-800">
          <img
            alt="User avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7KyRqgnwd2sS3OUWhIPx00sxJ-pP-iv6OTfowWqpCD8x4LH9dp0eH-tYaIj4M0CkI2myF9Rp3i0O8MEprAh4OOZ6cy9aAOLadQ6JCOivHbY_hPFA88aG-dSgBnqcFav6YeIKjbTyK7cAMfblJ0TWpNPzc2DLAlyp3Y_EH4yR9jMl8H2GhlSbscQ5YFL-Nwzj_6WOCk8AH_-LAGJ6cIu7IUE4O6QogvNOUVt6sw0zjdRXAR2a1eTI1IKv7hWUcQjntPW7qTxTWcYk"
          />
        </div>
      </div>
    </header>
  );
}
