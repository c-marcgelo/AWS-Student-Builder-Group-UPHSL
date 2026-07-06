import { EventType } from "@/component/UpcomingEvent/Card"

export const upcomingEvents = [
  {
    title: "Ideathon 2026",
    subtitle:
      "A competitive ideation event where students collaborate to solve real-world challenges using AWS solutions and architecture. Participants develop, refine, and pitch innovative ideas, building skills in creativity, teamwork, and problem solving.",
    date: "April 14, 2026",
    time: "10:30 AM - 1:00 PM",
    location: "Macintosh Laboratory, UPHSL",
    type: EventType.COMPETITION,
  },
  {
    title: "Development with Amazon Q",
    subtitle:
      "A hands-on developer event designed to help students strengthen their programming skills with Amazon Q. Sessions focus on practical development workflows, problem-solving, and career growth to prepare participants for real-world software projects.",
    date: "TBA",
    time: "TBA",
    location: "TBA",
    type: EventType.WORKSHOP,
  },
  {
    title: "Start From Zero with Kiro – An Introduction to Kiro",
    subtitle:
      "A hands-on workshop designed to introduce students to Kiro, Amazon's AI-powered IDE, through practical demonstrations and guided activities that showcase AI-assisted software development workflows and modern engineering practices.",
    date: "August 1, 2026",
    time: "10:00AM - 4:00PM",
    location: "Macintosh Laboratory, UPHSL",
    type: EventType.WORKSHOP,
  }
]
