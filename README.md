# Catur Bagaskara Portfolio

A minimalist, high-performance portfolio built with Nuxt 4, Tailwind CSS, and Nuxt SEO.

Inspired by the clean, typography-focused designs of [rauchg.com](https://rauchg.com) and [shud.in](https://shud.in).

## Recent Changes (v1.2.0)

- **Framework**: Upgraded to **Nuxt 4** for improved performance and modern module support.
- **Refactor**: Re-styled the entire portfolio to a minimalist, typography-focused design inspired by `rauchg.com` and `shud.in`.
- **SEO & AI Discovery**:
  - Integrated **Nuxt SEO** suite for automated Sitemaps, Robots, and Schema.org.
  - Implemented **Nuxt AI Ready** for advanced AI search visibility (ChatGPT, Gemini, etc.).
  - Automated dynamic **OpenGraph** image generation.
- **Simplification**: Removed heavy UI components in favor of clean, direct layouts.
- **Content**: Migrated to Nuxt Content v3 with MDC (Markdown Component) for project and experience rendering.

## Tech Stack

- **Framework**: [Nuxt 4](https://nuxt.com/)
- **SEO**: [Nuxt SEO](https://nuxtseo.com/)
- **AI Discovery**: [Nuxt AI Ready](https://nuxtseo.com/docs/ai-ready/getting-started/introduction)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn Vue](https://www.shadcn-vue.com/)
- **Content**: [Nuxt Content v3](https://content.nuxt.com/)
- **Icons**: [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next)
- **Runtime**: [Bun](https://bun.sh/)

## Features

- **AI-Optimized**: Provides `/llms.txt` and raw markdown for AI agents.
- **Minimalist Design**: Focused on typography and readability.
- **Dark Mode**: Integrated with `view-transition-api` for smooth transitions.
- **Responsive**: Optimized for both mobile and desktop experiences.
- **Sticky Header**: Modern header with backdrop blur effect.
- **Dynamic Content**: Powered by Nuxt Content for easy updates.

## Setup

Make sure to install the dependencies:

```bash
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```
