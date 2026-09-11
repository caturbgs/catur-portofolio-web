// https://nuxt.com/docs/api/configuration/nuxt-config
import { joinURL } from "ufo";
import { flattenAiMarkdown } from "./lib/flatten-ai-markdown";

// Cloudflare Workers and local dev serve the app at the domain root.
const baseURL = process.env.NUXT_APP_BASE_URL ?? "/";
const siteUrl = process.env.NUXT_SITE_URL ?? "https://caturbgs.xyz";

export default defineNuxtConfig({
  hooks: {
    "ai-ready:page:markdown"(context) {
      context.markdown = flattenAiMarkdown(context.markdown);
    },
  },
  ssr: true, // Required for SSG (Static Site Generation)
  compatibilityDate: "2024-11-03",
  devtools: {
    enabled: process.env.NODE_ENV === "development",

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/seo",
    "nuxt-ai-ready",
  ],
  // UI primitives are imported explicitly. Excluding them from component
  // auto-discovery prevents barrel files and Vue files sharing a component name.
  components: [{ path: "~/components", pathPrefix: false, ignore: ["ui/**"] }],

  // Site Configuration for Nuxt SEO
  // Host only: Nuxt SEO appends app.baseURL. Including the project path here
  // doubled every canonical and sitemap loc (…/catur-portofolio-web/catur-portofolio-web/).
  site: {
    url: siteUrl,
    name: "Catur Bagaskara",
    description:
      "Senior Software Developer specializing in Typescript (Vue.js, ReactJS, and Node.js), Go, Flutter, and Systems Design.",
    defaultLocale: "en",
    indexable: process.env.NUXT_SITE_INDEXABLE !== "false",
    trailingSlash: true,
  },

  seo: {
    redirectToCanonicalSiteUrl: false,
  },

  sitemap: {
    zeroRuntime: true,
    excludeAppSources: true,
    urls: [
      "/",
      "/about/",
      "/experience/",
      "/project/",
      "/project/rooftop-solar-platform/",
      "/project/movic-iot-rental/",
    ],
  },

  aiReady: {
    // Static hosting has no runtime. Caching llms.txt during prerender
    // can reuse an earlier sitemap-only snapshot without page titles.
    llmsTxtCacheSeconds: 0,
    llmsTxt: {
      markdownLinks: true,
      notes: [
        "Personal portfolio of Catur Bagaskara, Senior Software Developer at Xurya Daya Indonesia.",
        "Canonical site: https://caturbgs.xyz/",
      ],
      sections: [
        {
          title: "Profiles",
          links: [
            { title: "GitHub", href: "https://github.com/caturbgs", description: "Source and public work" },
            { title: "LinkedIn", href: "https://linkedin.com/in/caturbagas", description: "Career profile" },
          ],
        },
      ],
    },
    mdreamOptions: {
      minimal: true,
      ignoreSelectors: ["header", "footer", "nav"],
    },
  },

  robots: {
    robotsTxt: false, // Recommended when using base URL
  },

  ogImage: {
    enabled: true,
  },

  // App Config
  app: {
    baseURL,
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: "%s",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: joinURL(baseURL, "favicon.ico"),
        },
        { rel: "manifest", href: joinURL(baseURL, "site.webmanifest") },
      ],
      meta: [
        { name: "theme-color", content: "#ffffff", media: "(prefers-color-scheme: light)" },
        { name: "theme-color", content: "#020617", media: "(prefers-color-scheme: dark)" },
      ],
    },
  },
  css: ["~/assets/css/tailwind.css", "~/assets/css/global.css"],

  // Setup Google Fonts
  googleFonts: {
    display: "swap",
    preload: true,
    families: {
      Inter: {
        wght: "200..900",
      },
      Inconsolata: true,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      // Do not list /llms.txt or /llms-full.txt here. AI Ready prerenders them
      // after pages are indexed. Listing them first produces sitemap-only
      // titles (paths, not About/Experience/Projects) and missing .md links.
      routes: [
        "/",
        "/about/",
        "/experience/",
        "/project/",
        "/project/rooftop-solar-platform/",
        "/project/movic-iot-rental/",
        "/sitemap.xml",
        "/__sitemap__/style.xsl",
      ],
    },
  },
});
