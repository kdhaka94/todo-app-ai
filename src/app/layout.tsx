import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TopNavBar from "@/components/TopNavBar";

export const metadata: Metadata = {
  title: "The Cognitive Atelier | Productivity Hub",
  description: "Productivity Hub AI Workspace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-surface text-on-surface overflow-hidden font-body flex min-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col h-screen min-w-0 bg-surface overflow-hidden">
          <TopNavBar />
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {children}
          </div>
        </main>

        {/* Mobile Navigation (Visible only on small screens) */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-panel border-t-0 py-3 px-6 flex justify-between items-center z-50 shadow-2xl">
          <Link className="flex flex-col items-center gap-1 text-[#b31f14]" href="/">
            <span className="material-symbols-outlined" data-icon="today">today</span>
            <span className="text-[10px] uppercase font-bold tracking-tighter">Today</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-500" href="#">
            <span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
            <span className="text-[10px] uppercase font-bold tracking-tighter">Plan</span>
          </Link>
          <div className="relative -mt-10">
            <button className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl" data-icon="add">add</span>
            </button>
          </div>
          <Link className="flex flex-col items-center gap-1 text-slate-500" href="#">
            <span className="material-symbols-outlined" data-icon="psychology">psychology</span>
            <span className="text-[10px] uppercase font-bold tracking-tighter">AI</span>
          </Link>
          <Link className="flex flex-col items-center gap-1 text-slate-500" href="#">
            <span className="material-symbols-outlined" data-icon="settings">settings</span>
            <span className="text-[10px] uppercase font-bold tracking-tighter">Sets</span>
          </Link>
        </nav>
      </body>
    </html>
  );
}
