# AGENTS.md

## Runtime & Package Manager

Use **Bun** exclusively. Never `npm` or `npx`.

```bash
bun install          # install deps
bun run dev          # dev server → http://localhost:3000
bun run build        # production build (SSR)
bun run generate     # static export (SSG)
bun run preview      # preview production build
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

**Nuxt 4** app with SSR enabled, deployed as a static site to **GitHub Pages**.

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

Build command for GitHub Pages:

```bash
NUXT_APP_BASE_URL=/catur-portofolio-web/ bunx nuxt build --preset github_pages
```

Output goes to `.output/public`. The base URL `/catur-portofolio-web/` is set in `nuxt.config.ts` as `app.baseURL` and must match at build time. Favicon and manifest hrefs are prefixed with this base URL.

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
