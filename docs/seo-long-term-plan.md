# Long-term SEO plan — Catur Bagaskara portfolio

Last updated: 11 September 2026

## Goal

Appear on **Google page 1** for name-related queries (ideally near LinkedIn), with a stable canonical site people can share and trust.

Outrank LinkedIn for bare `"Catur Bagaskara"` is a stretch goal and may take years of authority. A realistic near-term win is: portfolio shows up when people search name + intent (GitHub, portfolio, developer).

## Canonical hosts (do not mix)

| Host                                               | Role                                        | Indexable?                        |
| -------------------------------------------------- | ------------------------------------------- | --------------------------------- |
| `https://caturbgs.xyz/`                            | **Canonical** (Cloudflare Workers / `main`) | Yes — promote this URL everywhere |
| `https://caturbgs.github.io/catur-portofolio-web/` | Retired GitHub Pages host                   | No longer deployed                |

**Rule:** Use `https://caturbgs.xyz/` as the only public URL. Redirect `www.caturbgs.xyz` to the apex.

## Current status (GSC + live checks, 11 September 2026)

### What works

- Production is live on Cloudflare Workers at `https://caturbgs.xyz/`.
- Live SEO basics are healthy: `robots: index, follow`, correct canonical/`og:url`, verified GSC Domain property, and a sitemap listing `/`, `/about/`, `/experience/`, `/project/`.
- `www.caturbgs.xyz` returns a permanent redirect to the apex domain, and the old GitHub Pages URL now returns 404.
- Query **`Catur Bagaskara Github`** previously ranked the portfolio **#1**
  ([Google search](https://www.google.com/search?q=Catur+Bagaskara+github)).

### Gaps

| URL            | GSC (URL Inspection)                            | Notes                         |
| -------------- | ----------------------------------------------- | ----------------------------- |
| `/`            | Not indexed — duplicate classification; Google-selected canonical currently `N/A` | User canonical is correct |
| `/about/`      | Waiting for indexing | Included in sitemap |
| `/experience/` | Waiting for indexing | Included in sitemap |
| `/project/`    | Waiting for indexing | Included in sitemap |

- URL Inspection for `/` last crawled 11 September 2026 as Googlebot smartphone; crawling, fetching, and indexing are allowed.
- Submitted sitemap `/sitemap.xml`: GSC currently reports **Couldn't fetch** / 0 discovered, while the live XML returns 200 with four valid URLs. Resubmit once and monitor the report; do not change canonical or robots settings while Google processes the new domain.
- Bare query **`Catur Bagaskara`**: LinkedIn and other social profiles dominate; portfolio is weak on authority, not blocked by robots.

### Cloudflare

Cloudflare Workers is now the production host. The Worker is configured as a Custom Domain for `caturbgs.xyz`; `workers.dev` is not the production canonical. Deployment setup is complete.

---

## Why LinkedIn wins the bare name (and what to do)

Personal-name SERPs favor high-authority profiles. A new `github.io` project site rarely outranks LinkedIn without:

1. Strong **reverse links** (LinkedIn → portfolio),
2. More **indexed** URLs over time,
3. External **citations** (GitHub profile, talks, bios, posts),
4. A stable **custom domain** can improve trust and CTR (not a magic rank boost).

Intent modifiers already work: name + `Github` → portfolio #1. Expand that pattern (portfolio, developer, Vue, etc.) while building authority for the bare name.

---

## Action plan

### Now (this week) — off-site, highest leverage

- [x] LinkedIn → **Website** (Contact info) = `https://caturbgs.xyz/`
      ([contact-info overlay](https://www.linkedin.com/in/caturbagas/overlay/contact-info/))
- [x] LinkedIn → **Featured** → add the same URL (link or screenshot + link)
- [x] GitHub profile → Website = `https://caturbgs.xyz/`
- [x] Resume / email signature / IG bio → `https://caturbgs.xyz/`
- [x] Prefer sharing `https://caturbgs.xyz/` in posts and DMs

Site already lists LinkedIn in Person `sameAs`; the **reverse** link matters more for ranking. Website in Contact info is the main reverse signal; Featured still helps visibility on the profile itself.

### Now — Search Console monitoring

- [ ] Re-check URL Inspection for `/`, `/about/`, `/experience/`, and `/project/`
- [x] Add and verify the `caturbgs.xyz` Domain property
- [x] Submit `https://caturbgs.xyz/sitemap.xml`
- [ ] Confirm the sitemap changes from `Couldn't fetch` to processed
- [ ] Request indexing once for the homepage and important pages if they remain unindexed after the sitemap is processed
- [ ] Note impressions/clicks under Performance (expect slow start)
- [ ] Spot-check queries: `Catur Bagaskara`, `Catur Bagaskara Github`, `Catur Bagaskara portfolio`, `Catur Bagaskara developer`

### Next 1–3 months — content & signals

- [ ] Keep all four routes live and linked from the home page (internal links help discovery)
- [ ] Ship real updates (projects, experience) so pages stay fresh when crawled
- [ ] Earn citations: README links, company/alumni bios, talk slides, open-source profiles — name + link to portfolio
- [ ] Watch GSC for soft 404 / redirect / robots issues; fix **only** if GSC shows a real technical failure

### Completed — custom domain cutover

- Activated `caturbgs.xyz` as the Cloudflare zone and attached it as the Worker Custom Domain.
- Set Nuxt `site.url`, canonical URLs, sitemap, robots, and AI discovery links to `https://caturbgs.xyz/`.
- Configured `www.caturbgs.xyz` as a proxied DNS record with a 301 redirect to the apex.
- Updated GSC and external profile links to the new domain.
- Disabled GitHub Pages; the retired Pages URLs now return 404 and are not maintained as redirects.

A domain alone will **not** put bare `"Catur Bagaskara"` above LinkedIn.

### Completed — Cloudflare deployment

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

| Horizon     | Signal of progress                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------ |
| 2 weeks     | Sitemap is processed; `/about/`, `/experience/`, and `/project/` move toward Indexed                   |
| 1–3 months  | Portfolio appears for name + `portfolio` / `developer`; GSC impressions > 0                           |
| 6–12 months | Stable page-1 presence for several name+intent queries on `caturbgs.xyz`                               |
| Stretch     | Bare `"Catur Bagaskara"` shows portfolio on page 1 under/near LinkedIn                                |
