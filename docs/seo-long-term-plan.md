# Long-term SEO plan — Catur Bagaskara portfolio

Last updated: 11 September 2026

## Goal

Appear on **Google page 1** for name-related queries (ideally near LinkedIn), with a stable canonical site people can share and trust.

Outrank LinkedIn for bare `"Catur Bagaskara"` is a stretch goal and may take years of authority. A realistic near-term win is: portfolio shows up when people search name + intent (GitHub, portfolio, developer).

## Canonical hosts (do not mix)

| Host | Role | Indexable? |
|---|---|---|
| `https://caturbgs.xyz/` | **Canonical** (Cloudflare Workers / `main`) | Yes — promote this URL everywhere |
| `https://caturbgs.github.io/catur-portofolio-web/` | Retired GitHub Pages host | No longer deployed |

**Rule:** Use `https://caturbgs.xyz/` as the only public URL. Redirect `www.caturbgs.xyz` to the apex.

## Current status (GSC + live checks, Sep 2026)

### What works

- Pages homepage is **indexed** (“URL is on Google”).
- Live SEO basics are healthy: `robots: index, follow`, correct canonical/`og:url`, GSC verify file 200, sitemap lists `/`, `/about/`, `/experience/`, `/project/`.
- Query **`Catur Bagaskara Github`** already ranks the portfolio **#1**  
  ([Google search](https://www.google.com/search?q=Catur+Bagaskara+github)).

### Gaps

| URL | GSC (URL Inspection) | Notes |
|---|---|---|
| `/` | Indexed | Keep as primary landing |
| `/about/` | Not indexed — *Crawled - currently not indexed* | Indexing requested 6 Sep 2026 |
| `/experience/` | Not indexed — *URL is unknown to Google* | Indexing requested 6 Sep 2026 |
| `/project/` | Not indexed — *URL is unknown to Google* | Indexing requested 6 Sep 2026 |

- Pages report: **1 indexed / 0 not indexed** (subpages often “unknown”, so they don’t appear under Not indexed yet).
- Submitted sitemap `/sitemap.xml`: GSC still **Couldn't fetch** / 0 discovered even though the live XML returns 200 with 4 locs. Treat as Google↔GitHub Pages fetch flakiness unless a real parse error appears.
- Bare query **`Catur Bagaskara`**: LinkedIn and other social profiles dominate; portfolio is weak on authority, not blocked by robots.

### Cloudflare

Cloudflare Workers is now the production host. The Worker is configured as a Custom Domain for `caturbgs.xyz`; `workers.dev` is not the production canonical.

---

## Why LinkedIn wins the bare name (and what to do)

Personal-name SERPs favor high-authority profiles. A new `github.io` project site rarely outranks LinkedIn without:

1. Strong **reverse links** (LinkedIn → portfolio),
2. More **indexed** URLs over time,
3. External **citations** (GitHub profile, talks, bios, posts),
4. Optional: a **custom domain** for trust/CTR (not a magic rank boost).

Intent modifiers already work: name + `Github` → portfolio #1. Expand that pattern (portfolio, developer, Vue, etc.) while building authority for the bare name.

---

## Action plan

### Now (this week) — off-site, highest leverage

- [ ] LinkedIn → **Website** (Contact info) = `https://caturbgs.xyz/`
      ([contact-info overlay](https://www.linkedin.com/in/caturbagas/overlay/contact-info/))
- [ ] LinkedIn → **Featured** → add the same URL (link or screenshot + link)
- [ ] GitHub profile → Website = `https://caturbgs.xyz/`
- [ ] Resume / email signature / IG bio → `https://caturbgs.xyz/`
- [ ] Prefer sharing `https://caturbgs.xyz/` in posts and DMs

Site already lists LinkedIn in Person `sameAs`; the **reverse** link matters more for ranking. Website in Contact info is the main reverse signal; Featured still helps visibility on the profile itself.

### Next 1–2 weeks — Search Console

- [ ] Re-check URL Inspection for `/about/`, `/experience/`, `/project/`
- [ ] Submit `https://caturbgs.xyz/sitemap.xml` and confirm sitemap status
- [ ] Note impressions/clicks under Performance (expect slow start)
- [ ] Spot-check queries: `Catur Bagaskara`, `Catur Bagaskara Github`, `Catur Bagaskara portfolio`, `Catur Bagaskara developer`

### Next 1–3 months — content & signals

- [ ] Keep all four routes live and linked from the home page (internal links help discovery)
- [ ] Ship real updates (projects, experience) so pages stay fresh when crawled
- [ ] Earn citations: README links, company/alumni bios, talk slides, open-source profiles — name + link to portfolio
- [ ] Watch GSC for soft 404 / redirect / robots issues; fix **only** if GSC shows a real technical failure

### Completed — custom domain cutover

| Keep `github.io` | Buy own domain |
|---|---|
| Free, already ranking for name+Github | Better brand, CTR, trust |
| Fine for SEO if URL stays stable | Still needs LinkedIn/backlinks |
| Path looks “project-ish” | Cleaner personal brand |

**If you buy one:**

1. Activate `caturbgs.xyz` as a Cloudflare zone and attach it as the Worker Custom Domain.
2. Set Nuxt `site.url` / canonical to `https://caturbgs.xyz/`.
3. Redirect `www.caturbgs.xyz` to the apex with a Cloudflare Redirect Rule.
4. Update GSC property, LinkedIn, GitHub, sitemap, and profile links.
5. Disable GitHub Pages; the retired Pages URLs are not maintained as redirects.

A domain alone will **not** put bare `"Catur Bagaskara"` above LinkedIn.

### Cloudflare deployment

Production deploys run from `main` with `NITRO_PRESET=static bun run generate` followed by `bun run deploy`. GitHub Actions requires `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` repository secrets.

---

## Do / don’t

**Do**

- Share one canonical URL everywhere.
- Use LinkedIn Featured + Website.
- Revisit GSC monthly for coverage and queries.
- Treat name + intent keywords (`Github`, `portfolio`, `developer`) as early wins.

**Don’t**

- Do not promote the `workers.dev` preview hostname as the canonical URL.
- Rewrite SEO config again without GSC evidence of a new crawl bug.
- Bounce canonicals between hosts.
- Assume a custom domain replaces backlinks.

---

## Quick reference URLs

- Portfolio (canonical): https://caturbgs.xyz/
- Sitemap: https://caturbgs.xyz/sitemap.xml
- LinkedIn: https://linkedin.com/in/caturbagas
- GitHub: https://github.com/caturbgs
- GSC property: `https://caturbgs.xyz/`
- Proof query (page 1 #1 as of Sep 2026): [Catur Bagaskara Github](https://www.google.com/search?q=Catur+Bagaskara+github)

## Success metrics

| Horizon | Signal of progress |
|---|---|
| 2 weeks | `/about/`, `/experience/`, `/project/` move toward Indexed; sitemap healthier |
| 1–3 months | Portfolio appears for name + `portfolio` / `developer`; GSC impressions > 0 |
| 6–12 months | Stable page-1 presence for several name+intent queries; optional custom domain live with one canonical |
| Stretch | Bare `"Catur Bagaskara"` shows portfolio on page 1 under/near LinkedIn |
