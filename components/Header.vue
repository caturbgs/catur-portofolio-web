<script setup lang="ts">
// get route
const route = useRoute();
</script>

<template>
  <header class="h-[--header-height-mobile] sm:h-[--header-height] w-full pt-4">
    <div class="container px-3 sm:px-8 md:max-w-screen-md size-full border-b border-muted/10">
      <div class="flex items-center justify-between w-full h-full pb-2">
        <!-- Logo Name -->
        <span v-if="route.path === '/'" class="text-sm md:text-base font-bold tracking-tight cursor-default"
          >Catur Bagaskara</span
        >
        <NuxtLink
          v-else
          to="/"
          class="text-sm md:text-base font-bold tracking-tight hover:text-muted-foreground transition-colors"
        >
          Catur Bagaskara
        </NuxtLink>

        <!-- Navigation Bar + Theme Toggle Button -->
        <Navbar />
      </div>
    </div>
  </header>
</template>
