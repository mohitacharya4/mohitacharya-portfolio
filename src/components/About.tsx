"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            About
          </h2>
          <div className="mt-2 h-1 w-12 rounded bg-accent" />

          <div className="mt-8 max-w-3xl space-y-4 text-muted leading-relaxed">
            <p>
              With 9 years of experience across healthcare, contract lifecycle management,
              insurance, and ITSM, I specialize in designing and scaling distributed systems
              that handle millions of transactions daily. My core strength lies in
              decomposing monoliths into resilient microservices, building high-throughput
              event-driven pipelines, and delivering zero-downtime migrations at scale.
            </p>
            <p>
              At Zocdoc, I led the migration of core domain entities from a monolith to
              Java/Spring Boot microservices backing 2-3M+ daily patient searches. At Nitor
              Infotech, I architected an Event Correlation Engine processing 2M+ events/day
              from 7 heterogeneous sources. I&apos;ve consistently delivered measurable impact:
              92% load time reductions, 60% throughput improvements, and 48% reliability gains.
            </p>
            <p>
              Currently cross-skilling into AI engineering — working with LLM/RAG pipelines,
              embeddings, and vector databases — while deepening my expertise in system design
              and data structures & algorithms.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {profile.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-lg border border-border p-4"
              >
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-sm text-muted">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
