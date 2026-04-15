// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  site: {
    url: "https://caturbgs.github.io/catur-portofolio-web",
    name: "Catur Bagaskara",
    description: "Senior Software Developer specializing in Go, Vue.js, and Systems Design.",
    defaultLocale: "en",
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  aiReady: {
    // Zero-config by default
  },

  robots: {
    robotsTxt: false, // Recommended when using base URL
  },

  ogImage: {
    enabled: true,
  },

  // App Config
  app: {
    baseURL: "/catur-portofolio-web/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: "%s | Catur Bagaskara",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/catur-portofolio-web/favicon.ico",
        },
        { rel: "manifest", href: "/catur-portofolio-web/site.webmanifest" },
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

  runtimeConfig: {
    public: {
      apiBase: "/api",
    },
  },
});
