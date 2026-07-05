# Mohit Acharya — Portfolio

Personal portfolio website showcasing my experience as a Senior Software Engineer specializing in Java Backend & Distributed Systems.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Static Export)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Netlify

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Project Structure

```
src/
├── app/            # Next.js app router (layout, page, global styles)
├── components/     # UI sections (Hero, About, Experience, Skills, Projects, Contact)
├── data/           # Static content as TypeScript files (profile, experience, skills, projects)
└── lib/            # Utility functions
```

## Updating Content

All site content lives in `src/data/`. Edit these files to update:

- `profile.ts` — Name, title, summary, contact links
- `experience.ts` — Work history and achievements
- `skills.ts` — Technical skills grouped by category
- `projects.ts` — Featured project highlights

## Deployment

Configured for Netlify via `netlify.toml`. Connect the GitHub repo to Netlify and it will auto-build on push.
