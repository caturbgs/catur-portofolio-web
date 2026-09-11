# AGENTS.md

## Runtime & Package Manager

Use **Bun** exclusively. Never `npm` or `npx`.

```bash
bun install          # install deps
bun run dev          # dev server → http://localhost:3000
bun run build        # static export (SSG; used by Cloudflare)
bun run generate     # same as build
bun run preview      # preview production build
bun run preview:workers  # wrangler dev
```

## Linting & Formatting

Toolchain is **Biome** (not ESLint/Prettier). No separate typecheck script.

```bash
bun run lint                  # check only, no writes
bun run lint:safe             # auto-fix safe issues
bun run format                # format --write
bun run format:lint:safe      # format + lint safe fixes
bun run format:lint:unsafe    # full check + fix (safe + unsafe) — use for pre-commit cleanup
```

Biome config lives in `biome.json`. It extends a local machine path (`/Users/caturbgs/code/xurya/biome.json`); on other machines this may not resolve — use the repo-local `biome.json` as the effective config.

Filename convention (Biome warns): **kebab-case**, **PascalCase**, or export name. Vue SFCs are typically PascalCase.

Always run `bun run lint` after edits. There is no typecheck script — TypeScript errors surface via Biome or the Nuxt build.

## Architecture

**Nuxt 4** app with SSR enabled, deployed as a static Cloudflare Worker.

- `pages/` — file-based routes (`index.vue`, `about.vue`, `experience.vue`, `project.vue`)
- `components/` — shared components (`Header.vue`, `Navbar.vue`, `Footer.vue`) + `components/ui/` (shadcn-vue)
- `content/` — MDC markdown files (`about.md`, `experience.md`, `project.md`) rendered via Nuxt Content v3
- `content.config.ts` — defines the `content` collection schema (title, description, body required)
- `server/` — Nuxt server routes (currently minimal)
- `lib/` — shared utilities
- `assets/css/` — `tailwind.css` + `global.css`

## Shadcn-Vue

Components live in `./components/ui`. **No prefix** on imports (prefix is `""`). Add components with:

```bash
bunx shadcn-vue@latest add <component>
```

## Content (Nuxt Content v3)

Markdown files use MDC syntax. All files must include frontmatter with `title` and `description` (required by schema). The `body` field is typed explicitly in `content.config.ts`.

## Deployment

| Branch | Host | URL |
|---|---|---|
| `main` | Cloudflare Workers (canonical) | `https://caturbgs.xyz/` |
| `dev` | Development branch | Local/preview only |
| `feat/*` | Cloudflare preview (if enabled) | Wrangler preview URL |

- Production deploys run from `main` through `.github/workflows/deploy-cloudflare-workers.yml`.
- Cloudflare build must stay static: `NITRO_PRESET=static bun run generate`. Never deploy Nuxt SSR as a Worker — `@nuxt/content` then demands D1.
- The Worker uses `caturbgs.xyz` as a Custom Domain. The Cloudflare zone must be active before the first production deployment.

Production deployment locally:

```bash
NITRO_PRESET=static NUXT_SITE_URL=https://caturbgs.xyz NUXT_SITE_INDEXABLE=true bun run generate
bun run deploy
```

## LLM Content (`nuxt-ai-ready`)

`nuxt-ai-ready` is installed alongside `@nuxtjs/seo` and `@nuxt/content`. At the static production build it generates:

- `/llms.txt` — site overview for LLM crawlers
- `/llms-full.txt` — full page markdown
- `.md` routes for prerendered pages (e.g. `/about.md`)

Canonical origin is `https://caturbgs.xyz`. Production MCP is not used — Cloudflare serves the generated static assets.

## SEO Operations

- Canonical production URL: `https://caturbgs.xyz/`.
- `www.caturbgs.xyz` is redirect-only and must remain a 301 redirect to the apex domain.
- The old GitHub Pages URL is retired and returns 404; do not restore GitHub Pages deployment or add Pages-specific base paths.
- Production builds must use `NUXT_SITE_URL=https://caturbgs.xyz` and `NUXT_SITE_INDEXABLE=true`.
- Verify `/robots.txt`, `/sitemap.xml`, canonical tags, Open Graph URLs, and `/llms.txt` after SEO/configuration changes.
- Google Search Console is the source of truth for indexing, canonical selection, sitemap processing, search queries, impressions, and clicks.
- The current post-migration phase is monitoring: sitemap processing and page indexing may take days or weeks. Do not add `noindex` or change canonical URLs based only on a temporary GSC report.
- The long-term SEO checklist and current status live in `docs/seo-long-term-plan.md`.

## Docker

`Dockerfile` + `docker-compose.yaml` for production; `docker-compose-local.yaml` for local container dev.

## No Tests

There is no test suite or test script configured.
