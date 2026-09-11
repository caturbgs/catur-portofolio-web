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
- **Deployment**: Production is hosted on Cloudflare Workers at [caturbgs.xyz](https://caturbgs.xyz/); GitHub Pages is retired.

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

## Production deployment

Generate the static site for Cloudflare Workers:

```bash
NITRO_PRESET=static NUXT_SITE_URL=https://caturbgs.xyz NUXT_SITE_INDEXABLE=true bun run generate
```

Deploy the generated `.output/public` assets to the configured Worker:

```bash
bun run deploy
```

Locally preview production build:

```bash
bun run preview
```

Production deploys from `main` are handled by GitHub Actions. Configure the repository secrets `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` before enabling the workflow.

## SEO

The canonical production URL is `https://caturbgs.xyz/`. Nuxt generates canonical metadata, Open Graph metadata, `robots.txt`, `sitemap.xml`, Schema.org data, and AI discovery files during the static build.

Google Search Console is configured for the `caturbgs.xyz` Domain property. The sitemap is available at [caturbgs.xyz/sitemap.xml](https://caturbgs.xyz/sitemap.xml). After deployment, use Search Console to monitor sitemap processing, indexing, search queries, impressions, clicks, and canonical selection.

The old GitHub Pages URL is retired and returns 404. `www.caturbgs.xyz` redirects permanently to the apex domain. See [docs/seo-long-term-plan.md](docs/seo-long-term-plan.md) for the migration history, current indexing state, and long-term SEO actions.

Google Analytics is optional and is not required for indexing or search ranking. Add GA4 only if visitor behavior and referral traffic need to be measured.
