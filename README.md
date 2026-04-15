# Catur Bagaskara Portfolio

A minimalist, high-performance portfolio built with Nuxt 3, Tailwind CSS, and Shadcn Vue.

Inspired by the clean, typography-focused designs of [rauchg.com](https://rauchg.com) and [shud.in](https://shud.in).

## Recent Changes (v1.2.0)

- **Refactor**: Re-styled the entire portfolio to a minimalist, typography-focused design inspired by `rauchg.com` and `shud.in`.
- **Simplification**: Removed heavy UI components (Cards, etc.) in favor of clean, direct layouts.
- **Social Media**: Focused on professional presence by limiting social links to GitHub and LinkedIn.
- **UI Update**: Simplified Navbar and Header for a text-first experience.
- **Content**: Migrated to Nuxt Content v3 with MDC (Markdown Component) for project and experience rendering.

## Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn Vue](https://www.shadcn-vue.com/)
- **Content**: [Nuxt Content v3](https://content.nuxt.com/)
- **Icons**: [Lucide Vue Next](https://lucide.dev/guide/packages/lucide-vue-next)
- **Runtime**: [Bun](https://bun.sh/)

## Features

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
