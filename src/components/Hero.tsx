"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex-1">
          <div className="mb-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={14} />
            <span>{profile.location}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-4 text-xl text-accent sm:text-2xl">
            {profile.title}{" "}
            <span className="text-muted">| {profile.subtitle}</span>
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-muted"
            >
              <LinkedInIcon size={16} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
            >
              <Mail size={16} />
              Email
            </a>
          </div>
          </div>

          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border-2 border-border sm:h-48 sm:w-48">
            <Image
              src="/profile.jpg"
              alt="Mohit Acharya"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
