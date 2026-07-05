export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Monolith-to-Microservices Migration",
    description:
      "Led incremental decomposition of a healthcare monolith to Java/Spring Boot microservices using the strangler-fig pattern. Built a DynamoDB → Lambda → SNS/SQS data pipeline processing 200K+ entity updates/day with p99 sync lag under 1 second. Zero customer-facing downtime for entities backing 2-3M+ daily searches.",
    tags: ["Java", "Spring Boot", "AWS", "DynamoDB", "Lambda", "SNS/SQS", "Microservices"],
  },
  {
    title: "Event Correlation Engine",
    description:
      "Architected a distributed event correlation system ingesting 2M+ events/day from 7 heterogeneous sources. Improved system reliability by 48% and enabled real-time correlation across services using Java/Spring Boot.",
    tags: ["Java", "Spring Boot", "Event-Driven", "Distributed Systems", "Real-time Processing"],
  },
  {
    title: "LLM-Powered Review Automation",
    description:
      "Award-winning hackathon tool that auto-reviews patient visit feedback using LLMs. Items scored at 90%+ confidence are auto-approved; lower-confidence items route to manual review. Reclaimed 30% of the Trust & Safety team's review bandwidth at 10K+ feedback items/day.",
    tags: ["React", "Spring Boot", "LLM", "AI/ML", "PII Compliance"],
  },
];
