import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    stats: {
      liveSyncs: 12,
      dailyAutomations: 148
    },
    connectedApps: [
      { name: "Gmail", icon: "mail", status: "Active", desc: "Syncing personal and work threads daily.", colorClass: "bg-red-50 text-red-600", active: true },
      { name: "Google Calendar", icon: "calendar_today", status: "Active", desc: "3 calendars linked for smart scheduling.", colorClass: "bg-blue-50 text-blue-600", active: true },
      { name: "Slack", icon: "forum", status: "Active", desc: "Cognitive Workspace & Team HQ.", colorClass: "bg-purple-50 text-purple-600", active: true },
      { name: "GitHub", icon: "terminal", status: "Syncing", desc: "Tracking PRs and commit activities.", colorClass: "bg-white/10 text-white", theme: "dark", active: true }
    ],
    automationRecipes: [
      {
        id: 1,
        title: "Email Processing",
        description: "If I star a Gmail, create a task in Inbox and summarize the content using AI.",
        successRate: "82% Success Rate",
        status: "active",
        icons: [
          { icon: "mail", colorClass: "text-red-600 bg-red-100" },
          { icon: "psychology", colorClass: "text-slate-600 bg-slate-100" }
        ],
        highlights: [ { word: "Gmail", color: "text-primary" }, { word: "Inbox", color: "text-primary" } ]
      },
      {
        id: 2,
        title: "Meeting Scheduler",
        description: "When a deadline is mentioned in Slack, block time on Google Calendar.",
        successRate: "New Suggestion",
        status: "suggestion",
        icons: [
          { icon: "forum", colorClass: "text-purple-600 bg-purple-100" },
          { icon: "event", colorClass: "text-blue-600 bg-blue-100" }
        ],
        highlights: [ { word: "Slack", color: "text-purple-600" }, { word: "Google Calendar", color: "text-blue-600" } ]
      },
      {
        id: 3,
        title: "Dev Ops Sync",
        description: "Notify Slack channel #dev when a GitHub PR is requested.",
        successRate: "124 Uses Today",
        status: "active",
        icons: [
          { icon: "terminal", colorClass: "text-white bg-slate-900" },
          { icon: "forum", colorClass: "text-purple-600 bg-purple-100" }
        ],
        highlights: [ { word: "Slack", color: "text-purple-600" }, { word: "GitHub", color: "text-on-surface" } ]
      }
    ],
    discoverMore: [
      { name: "Zapier", type: "Automation", icon: "integration_instructions", colorClass: "bg-orange-50 text-orange-600" },
      { name: "Notion", type: "Database", icon: "storage", colorClass: "bg-indigo-50 text-indigo-600" },
      { name: "Drive", type: "Storage", icon: "description", colorClass: "bg-green-50 text-green-600" },
      { name: "Linear", type: "Tracking", icon: "monitoring", colorClass: "bg-blue-400 text-white" },
      { name: "Figma", type: "Design", icon: "camera", colorClass: "bg-red-50 text-red-600" }
    ]
  };

  return NextResponse.json(data);
}
