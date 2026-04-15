<script setup lang="ts">
useHead({
  title: "Catur Bagaskara",
  meta: [
    { name: "description", content: "Senior Software Developer at Xurya Daya Indonesia" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/catur-portofolio-web/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/catur-portofolio-web/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/catur-portofolio-web/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/catur-portofolio-web/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/catur-portofolio-web/android-chrome-512x512.png",
      sizes: "512x512",
    },
    {
      rel: "apple-touch-icon",
      href: "/catur-portofolio-web/apple-touch-icon.png",
    },
  ],
  useSeoMeta({
    title: "Catur Bagaskara",
    description: "Senior Software Developer based in Depok, Indonesia. Expertise in Go, Vue.js, and Systems Design.",
    ogTitle: "Catur Bagaskara | Senior Software Developer",
    ogDescription: "Dedicated Full Stack Developer focused on high-performance systems and renewable energy solutions.",
    ogImage: "/catur-logo.svg", // This will be absolute-ified by Nuxt SEO via site.url
  });

useSchemaOrg([
    definePerson({
      name: "Catur Bagaskara",
      image: "/catur-logo.svg",
      sameAs: [
        "https://github.com/caturbgs",
        "https://linkedin.com/in/caturbagas",
      ],
  ...

    jobTitle: "Senior Software Developer",
    worksFor: {
      name: "Xurya Daya Indonesia",
    },
  }),
  defineWebSite({
    name: "Catur Bagaskara Portfolio",
  }),
]);
</script>

<template>
  <Header />
  <main
    class="container px-3 sm:p-8 md:max-w-screen-md min-h-[calc(100vh-(var(--header-height-mobile)*2))] md:min-h-[calc(100vh-(var(--header-height)*2))]"
  >
    <NuxtPage />
  </main>
  <Footer />
  <Toaster rich-colors />
</template>
