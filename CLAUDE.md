# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Smotown Coaching is a Next.js web application for a personal/group coaching facilitator. The app provides information about coaching services and allows visitors to contact the coach.

**Planned features:** Payment service integration, online scheduling.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **React:** v19

## Architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Navigation and Footer
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   └── contact/page.tsx    # Contact page
└── components/             # Reusable React components
    ├── Navigation.tsx      # Site navigation (client component)
    ├── Footer.tsx          # Site footer
    └── ContactForm.tsx     # Contact form with state management (client component)
```

## Key Patterns

- **Client components:** Components using hooks (useState, usePathname) are marked with `"use client"` directive
- **Server components:** Pages and layout are server components by default
- **Styling:** Uses Tailwind utility classes with dark mode support via `dark:` prefix
- **Path alias:** `@/*` maps to `src/*` for imports
