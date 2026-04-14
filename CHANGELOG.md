# Changelog

All notable changes to this project will be documented in this file.

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
