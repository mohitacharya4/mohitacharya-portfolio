export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Zocdoc",
    role: "Senior Software Engineer (Full Stack)",
    period: "Apr 2025 – Mar 2026",
    location: "Pune, India",
    highlights: [
      "Led migration of core domain entities from a monolith to Java/Spring Boot microservices using the strangler-fig pattern, cutting over high-traffic paths with zero customer-facing downtime for entities backing 2-3M+ daily patient searches.",
      "Built a data pipeline from scratch: DynamoDB change stream triggers Lambda, fans out through SNS/SQS to sync records — processing 200K+ entity updates/day at p99 sync lag under 1s.",
      "Built an award-winning hackathon tool (React + Spring Boot) using LLMs for auto-reviewing patient feedback, reclaiming nearly 30% of the Trust & Safety team's review bandwidth at 10K+ items/day.",
    ],
  },
  {
    company: "Nitor Infotech (Ascendion)",
    role: "Lead Engineer (Full Stack)",
    period: "Jan 2024 – Mar 2025",
    location: "Pune, India",
    highlights: [
      "Architected and shipped a distributed Java/Spring Boot Event Correlation Engine ingesting 2M+ events/day from 7 heterogeneous sources, improving system reliability 48%.",
      "Cut consumer-facing application load time 92% (8s → 600ms) through rendering, caching, and query optimizations.",
      "Mentored a 12-engineer team on distributed-system design and test automation — 35% fewer defects and 25% fewer production incidents.",
    ],
  },
  {
    company: "Synechron",
    role: "Senior Associate - Technology (Full Stack)",
    period: "Aug 2021 – Jan 2024",
    location: "Pune, India",
    highlights: [
      "Led modernization of a legacy Silverlight platform to React + .NET Core microservices, improving application performance 40%.",
      "Increased throughput up to 60% via Redis caching and server-side compression; led the Rackspace-to-Azure migration architecture.",
    ],
  },
  {
    company: "Icertis",
    role: "Software Engineer (Full Stack)",
    period: "Nov 2019 – Aug 2021",
    location: "Pune, India",
    highlights: [
      "Delivered SAP HANA and SAP Ariba integrations for a mission-critical Contract Lifecycle Management platform using distributed, event-driven patterns, reducing defects 15%.",
    ],
  },
  {
    company: "Thinking Hut IT Solutions (iLink)",
    role: "Software Engineer (Full Stack)",
    period: "Jun 2017 – Nov 2019",
    location: "Pune, India",
    highlights: [
      "Built and launched 6+ production applications (Java/Spring Boot backends, React.js front ends) in agile teams — time-to-market -30%, CSAT +25%.",
      "Established onboarding/training program and mentored 8 engineers, supporting 5 new client wins in a single quarter.",
    ],
  },
];
