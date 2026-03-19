import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    aiSuggestions: [
      {
        source: "Gmail Snippet",
        title: "Finalize Q3 Strategic Review",
        description: "Based on 3 emails from Sarah Chen regarding the 'Urgent: Q3 Budget Adjustments' thread. High intent detected for today before 5:00 PM.",
        icon: "mail"
      }
    ],
    timeAudit: {
      title: "Afternoon Drift",
      description: "You've spent 40% more time on 'Low Priority' tasks today than average. Re-center on Deep Work?"
    },
    upcomingWork: [
      {
        id: 1,
        title: "Re-write brand guidelines for The Atelier",
        description: "Focus on typography and color philosophy sections.",
        tag: "Creative",
        due: "TODAY",
        ai: false
      },
      {
        id: 2,
        title: "Monthly sync with Engineering team",
        description: "",
        tag: "Internal",
        due: "TOMORROW",
        ai: false
      },
      {
        id: 3,
        title: "Review 'Product Roadmap' feedback",
        description: "Consolidated 14 comments into a 3-point summary for you.",
        tag: "AI Suggested",
        due: "URGENT",
        ai: true
      },
      {
        id: 4,
        title: "Order new office chair for home studio",
        description: "",
        tag: "Personal",
        due: "FRI, OCT 25",
        ai: false
      }
    ],
    contextualIntelligence: {
      signals: [
        { from: "Mark (CEO)", subject: "Convert" },
        { from: "Subject: Legal Review...", subject: "Convert" }
      ],
      aiRecommendation: {
        title: "Clear your Calendar",
        description: "I noticed 2 overlapping meetings on Thursday. Should I propose a reschedule for the 'Project Sync'?"
      },
      focusScore: 84
    }
  };

  return NextResponse.json(data);
}
