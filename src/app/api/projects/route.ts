import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    project: {
      name: "Q4 Roadmap",
      title: "Product Launch: Horizon AI",
      velocity: 68
    },
    tasks: [
      {
        id: 1,
        title: "Define Go-to-Market Strategy",
        description: "Coordinate with the marketing and sales leads to align on the initial outreach phase and pricing tiers.",
        aiBreakdown: true,
        checked: false,
        subtasks: []
      },
      {
        id: 2,
        title: "Infrastructure Security Audit",
        description: "",
        aiBreakdown: false,
        checked: true,
        aiInsightsActive: true,
        subtasks: [
          { title: "Run automated vulnerability scanner on production clusters" },
          { title: "Review IAM roles and reduce cross-service permissions" }
        ],
        drafting: "Drafting compliance documentation..."
      },
      {
        id: 3,
        title: "Prepare investor deck for Series B",
        description: "",
        aiBreakdown: false,
        checked: false,
        date: "Oct 24",
        subtasks: []
      }
    ],
    pulse: {
      aheadDays: 2,
      focus: "Optimal",
      message: "You are 2 days ahead of schedule. Focus on 'Security Audit' today to maintain momentum."
    },
    team: [
      { name: "Alex Rivers", role: "Product Lead", status: "online" },
      { name: "Sarah Chen", role: "Backend Eng", status: "offline" }
    ],
    milestone: {
      date: "12 Nov",
      title: "Beta Release v0.9",
      description: "Internal testing cycle begins"
    }
  };

  return NextResponse.json(data);
}
