export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "Python", "C#", "TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Backend & Architecture",
    skills: [
      "Spring Boot",
      ".NET Core",
      "Microservices",
      "Event-Driven Architecture",
      "REST / GraphQL",
      "System Design (HLD/LLD)",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (Lambda, DynamoDB, SNS/SQS, ECS/EKS, S3, Kinesis)",
      "Azure (Service Bus, AKS, Redis, App Insights)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
    ],
  },
  {
    category: "Data & Messaging",
    skills: [
      "Apache Kafka",
      "RabbitMQ",
      "PostgreSQL",
      "SQL Server",
      "DynamoDB",
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Angular", "TypeScript"],
  },
  {
    category: "AI / LLM",
    skills: ["RAG", "Embeddings", "Vector Databases", "LangChain"],
  },
  {
    category: "Practices",
    skills: [
      "TDD",
      "DSA",
      "SOLID",
      "Design Patterns",
      "OAuth 2.0 / OIDC / JWT",
      "12-Factor App",
    ],
  },
];
