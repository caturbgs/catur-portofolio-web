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
    "nuxt-llms",
  ],

  // Site Configuration for Nuxt SEO
  // Host only: Nuxt SEO appends app.baseURL. Including the project path here
  // doubled every canonical and sitemap loc (…/catur-portofolio-web/catur-portofolio-web/).
  site: {
    url: "https://caturbgs.github.io",
    name: "Catur Bagaskara",
    description:
      "Senior Software Developer specializing in Typescript (Vue.js, ReactJS, and Node.js), Go, Flutter, and Systems Design.",
    defaultLocale: "en",
    indexable: true,
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

  llms: {
    domain: "https://caturbgs.github.io/catur-portofolio-web",
    title: "Catur Bagaskara Portfolio",
    description: "Personal portfolio of Catur Bagaskara, a Senior Software Developer.",
    full: {
      title: "Catur Bagaskara Portfolio (Full Content)",
      description: "Complete career history, projects, and technical skills for deep LLM ingestion.",
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
    baseURL: "/catur-portofolio-web/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      titleTemplate: "%s",
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

  nitro: {
    prerender: {
      routes: ["/sitemap.xml", "/__sitemap__/style.xsl"],
    },
  },

  runtimeConfig: {
    public: {
      apiBase: "/api",
    },
  },
});
