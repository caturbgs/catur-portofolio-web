<script setup lang="ts">
useHead({
  title: "Catur Bagaskara",
  meta: [
    { name: "description", content: "Catur Bagaskara" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/png", href: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", type: "image/png", href: "/android-chrome-192x192.png", sizes: "192x192" },
    { rel: "icon", type: "image/png", href: "/android-chrome-512x512.png", sizes: "512x512" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  ],
  bodyAttrs: {
    class: "font-sans antialiased",
  },
});
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
