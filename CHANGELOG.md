# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2026-03-11

### Added
- **Nuxt 4 Upgrade**: Upgraded the project to Nuxt 4.4.2 for better performance and module compatibility.
- **Nuxt SEO Integration**: Comprehensive SEO suite with automated Sitemaps, Robots, and Schema.org.
- **AI Discovery (Generative Engine Optimization)**: Integrated `nuxt-ai-ready` to automate AI search visibility.
  - Automatically generates `/llms.txt` and `/llms-full.txt`.
  - Provides on-demand markdown versions of all pages for LLM ingestion.
  - Includes AI content signals in `robots.txt`.
- **Structured Data**: Implemented `Person` and `WebSite` Schema.org JSON-LD in `app.vue` for better knowledge graph presence.
- **Dynamic OpenGraph**: Configured `nuxt-og-image` with brand identity using `catur-logo.svg`.
- **Page-Specific Meta**: Added targeted `useSeoMeta` to all main pages (Home, Projects, Experience, About).

### Fixed
- **Robots Config**: Resolved `robots.txt` generation issue related to base URL paths on GitHub Pages by explicitly configuring `robotsTxt: false`.

## [1.1.0] - 2026-03-11

### Refactored
- **Minimalist Design**: Complete style refactor of `index.vue`, `project.vue`, and `experience.vue` inspired by `rauchg.com` and `shud.in`.
- **Hero Section**: Simplified hero section with focus on clean typography and direct messaging.
- **Projects & Work**: Converted cards to cleaner, minimalist list items in `index.vue`, `ProjectCard.vue`, and `ExperienceCard.vue`.
- **Header & Navbar**: 
  - Simplified navigation links to a text-first look.
  - Added sticky header with backdrop blur effect.
  - Improved mobile responsiveness with adjusted font sizes and spacing.
- **About Page**: Refactored for consistency with the new minimalist style.

### Added
- **Mobile Optimization**: Specific font sizes and responsive padding for better readability on smaller screens.
- **Sticky Header**: Enhanced user experience with a modern, glassmorphism-inspired sticky header.

### Fixed
- **Nuxt Content v3**: Corrected data fetching logic to use `queryCollection("content")` instead of deprecated methods.
- **Linting**: Fixed accessibility and sorting warnings in `Navbar.vue` and UI components.
