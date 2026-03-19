import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    user: {
      name: "Curator",
      focus: "Strategic Deep Work"
    },
    aiPulse: {
      message: "You have 4 hours of unallocated high-energy time on Tuesday."
    },
    stats: {
      completionRate: "+12%",
      focusTime: 24.5,
      deepWorkPercentage: 65
    },
    coachInsight: "Your productivity peaks between 9 AM and 11 AM. Move your 'Creative Writing' block there for 20% faster completion.",
    workloadForecast: [
      { day: "Monday", load: "Heavy Load", tags: ["+2"], type: "heavy" },
      { day: "Tuesday", load: "AI Optimized", info: "3 Deep Work sessions added", type: "optimized" },
      { day: "Wednesday", load: "Light Flow", type: "light" },
      { day: "Thursday", load: "Client Syncs", dots: 2, type: "syncs" }
    ],
    integrations: [
      { name: "MailSync", icon: "mail", status: "ok" },
      { name: "CloudBrain", icon: "cloud", status: "ok" },
      { name: "GitFlow", icon: "account_tree", status: "warning" }
    ]
  };

  return NextResponse.json(data);
}
