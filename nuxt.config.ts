// https://nuxt.com/docs/api/configuration/nuxt-config
import { joinURL } from "ufo";
import { flattenAiMarkdown } from "./lib/flatten-ai-markdown";

// GitHub Pages sets NUXT_APP_BASE_URL=/catur-portofolio-web/. Cloudflare Workers
// and local dev serve the app at the domain root.
const baseURL = process.env.NUXT_APP_BASE_URL ?? "/";
const siteUrl = process.env.NUXT_SITE_URL ?? "https://caturbgs.github.io";

export default defineNuxtConfig({
  hooks: {
    "ai-ready:page:markdown"(context) {
      context.markdown = flattenAiMarkdown(context.markdown);
    },
  },
  ssr: true, // Required for SSG (Static Site Generation)
  compatibilityDate: "2024-11-03",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxtjs/seo",
    "nuxt-ai-ready",
  ],

  // Site Configuration for Nuxt SEO
  // Host only: Nuxt SEO appends app.baseURL. Including the project path here
  // doubled every canonical and sitemap loc (…/catur-portofolio-web/catur-portofolio-web/).
  site: {
    url: siteUrl,
    name: "Catur Bagaskara",
    description:
      "Senior Software Developer specializing in Typescript (Vue.js, ReactJS, and Node.js), Go, Flutter, and Systems Design.",
    defaultLocale: "en",
    // Cloudflare `dev` sets NUXT_SITE_INDEXABLE=false until Pages cutover.
    indexable: process.env.NUXT_SITE_INDEXABLE !== "false",
    trailingSlash: true,
  },

  seo: {
    redirectToCanonicalSiteUrl: false,
  },

  sitemap: {
    zeroRuntime: true,
    excludeAppSources: true,
    urls: ["/", "/about/", "/experience/", "/project/"],
  },

  aiReady: {
    // Static GitHub Pages has no runtime. Caching llms.txt during prerender
    // can reuse an earlier sitemap-only snapshot without page titles.
    llmsTxtCacheSeconds: 0,
    llmsTxt: {
      markdownLinks: true,
      notes: [
        "Personal portfolio of Catur Bagaskara, Senior Software Developer at Xurya Daya Indonesia.",
        "Canonical site: https://caturbgs.github.io/catur-portofolio-web/",
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
      meta: [{ name: "theme-color", content: "#ffffff" }],
    },
  },
  css: ["~/assets/css/tailwind.css", "~/assets/css/global.css"],

  // Shadcn UI Vue
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  // Setup Google Fonts
  googleFonts: {
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
      routes: ["/", "/about/", "/experience/", "/project/", "/sitemap.xml", "/__sitemap__/style.xsl"],
    },
  },

  runtimeConfig: {
    public: {
      apiBase: "/api",
    },
  },
});
