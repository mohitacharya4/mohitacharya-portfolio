import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohit Acharya — Senior Software Engineer",
  description:
    "Senior full-stack engineer with 9 years designing and scaling distributed systems and microservices. Backend focus on Java and Spring Boot, with event-driven architectures and cloud-native delivery on AWS and Azure.",
  keywords: [
    "Mohit Acharya",
    "Senior Software Engineer",
    "Java",
    "Spring Boot",
    "Distributed Systems",
    "Microservices",
    "AWS",
    "Backend Engineer",
  ],
  openGraph: {
    title: "Mohit Acharya — Senior Software Engineer",
    description:
      "9 years designing distributed systems & microservices. Java, Spring Boot, AWS, event-driven architecture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Acharya — Senior Software Engineer",
    description:
      "9 years designing distributed systems & microservices. Java, Spring Boot, AWS, event-driven architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
