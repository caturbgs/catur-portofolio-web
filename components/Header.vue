<script setup lang="ts">
const route = useRoute();

function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  return path.replace(/\/+$/, "") || "/";
}

const isHome = computed(() => normalizePath(route.path) === "/");
</script>

<template>
  <header
    class="h-[--header-height-mobile] sm:h-[--header-height] w-full pt-4 sticky top-0 bg-background/80 backdrop-blur-sm z-50"
  >
    <div class="container px-3 sm:px-8 md:max-w-screen-md size-full border-b border-muted/10">
      <div class="flex items-center justify-between w-full h-full pb-2">
        <!-- Logo Name -->
        <span
          v-if="isHome"
          class="text-xs sm:text-sm md:text-base font-bold tracking-tight cursor-default whitespace-nowrap"
          >Catur Bagaskara</span
        >
        <NuxtLink
          v-else
          to="/"
          class="text-xs sm:text-sm md:text-base font-bold tracking-tight hover:text-muted-foreground transition-colors whitespace-nowrap"
        >
          Catur Bagaskara
        </NuxtLink>

        <!-- Navigation Bar + Theme Toggle Button -->
        <Navbar />
      </div>
    </div>
  </header>
</template>
