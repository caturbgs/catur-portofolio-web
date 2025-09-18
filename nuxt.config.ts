// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable server-side rendering for static deployment
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
  ],

  // App Config
  app: {
    baseURL: "/catur-portofolio-web/",
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/catur-portofolio-web/favicon.ico" },
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
