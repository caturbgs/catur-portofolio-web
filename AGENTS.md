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

**Nuxt 4** app with SSR enabled, deployed as a static site. See Deployment for which branch goes where.

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

Hosting is split by branch. Do not point Cloudflare Workers Builds at `main` until cutover.

| Branch | Host | URL |
|---|---|---|
| `main` | GitHub Pages (canonical) | `https://caturbgs.github.io/catur-portofolio-web/` |
| `dev` | Cloudflare Worker (experimental) | `https://catur-portofolio-web.caturbgs.workers.dev` |
| `feat/*` | Cloudflare preview (if Builds previews are on) | `https://<branch>-catur-portofolio-web.caturbgs.workers.dev` |

- Setup PRs (`feat/cloudflare-workers`) merge into **`dev`**, not `main`.
- **Cutover:** PR `dev` → `main`, set `NUXT_SITE_INDEXABLE=true`, then disable the GitHub Pages workflow.
- Until cutover, Cloudflare build var `NUXT_SITE_INDEXABLE=false` (noindex). Pages stays indexed.
- Cloudflare build must stay static: `NITRO_PRESET=static bun run generate`. Never `nuxt build` as Worker SSR — `@nuxt/content` then demands D1.

GitHub Pages (`main` only):

```bash
NUXT_APP_BASE_URL=/catur-portofolio-web/ bunx nuxt build --preset github_pages
```

Cloudflare (`dev`): output is `.output/public`, served as Workers static assets via `wrangler.jsonc`. `NUXT_APP_BASE_URL` defaults to `/`. GitHub Actions still overrides the Pages subpath on `main`.

## LLM Content (`nuxt-ai-ready`)

`nuxt-ai-ready` is installed alongside `@nuxtjs/seo` and `@nuxt/content`. At GitHub Pages build time it generates:

- `/llms.txt` — site overview for LLM crawlers
- `/llms-full.txt` — full page markdown
- `.md` routes for prerendered pages (e.g. `/about.md`)

Canonical origin is `https://caturbgs.github.io/catur-portofolio-web`. Production MCP is not used — GitHub Pages is static.

## Docker

`Dockerfile` + `docker-compose.yaml` for production; `docker-compose-local.yaml` for local container dev.

## No Tests

There is no test suite or test script configured.
