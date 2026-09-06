<script setup lang="ts">
import { joinURL } from "ufo";

const { app } = useRuntimeConfig();
const asset = (path: string) => joinURL(app.baseURL, path);
const site = useSiteConfig();

useHead({
  meta: [
    { name: "description", content: "Senior Software Developer at Xurya Daya Indonesia" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: asset("favicon.ico"),
    },
    {
      rel: "icon",
      type: "image/png",
      href: asset("favicon-16x16.png"),
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      href: asset("favicon-32x32.png"),
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: asset("android-chrome-192x192.png"),
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      href: asset("android-chrome-512x512.png"),
      sizes: "512x512",
    },
    {
      rel: "apple-touch-icon",
      href: asset("apple-touch-icon.png"),
    },
  ],
  bodyAttrs: {
    class: "font-sans antialiased",
  },
});

useSeoMeta({
  description:
    "Senior Software Developer based in Depok, Indonesia. Expertise in Typescript (Vue.js, ReactJS, and Node.js), Go, Flutter, and Systems Design.",
  ogTitle: "Catur Bagaskara | Senior Software Developer",
  ogDescription: "Dedicated Full Stack Developer focused on high-performance systems and renewable energy solutions.",
});

useSchemaOrg([
  definePerson({
    name: "Catur Bagaskara",
    url: site.url,
    image: "/catur-logo.svg",
    sameAs: ["https://github.com/caturbgs", "https://linkedin.com/in/caturbagas"],
    jobTitle: "Senior Software Developer",
    worksFor: defineOrganization({
      name: "Xurya Daya Indonesia",
    }),
  }),
  defineWebSite({
    name: "Catur Bagaskara Portfolio",
  }),
]);
</script>

<template>
  <Header />
  <main
    class="mx-auto w-full md:max-w-screen-md px-5 sm:px-8 sm:py-8 min-h-[calc(100vh-(var(--header-height-mobile)*2))] md:min-h-[calc(100vh-(var(--header-height)*2))]"
  >
    <NuxtPage />
  </main>
  <Footer />
  <Toaster rich-colors />
</template>
