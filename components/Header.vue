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
    class="min-h-[--header-height-mobile] sm:min-h-[--header-height] w-full pt-4 sticky top-0 bg-background/80 backdrop-blur-sm z-50"
  >
    <div class="mx-auto w-full md:max-w-screen-md px-5 sm:px-8 border-b border-muted/10">
      <div class="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 w-full pb-2">
        <!-- Logo Name -->
        <span
          v-if="isHome"
          class="shrink-0 text-xs sm:text-sm md:text-base font-bold tracking-tight cursor-default whitespace-nowrap"
          >Catur Bagaskara</span
        >
        <NuxtLink
          v-else
          to="/"
          class="shrink-0 text-xs sm:text-sm md:text-base font-bold tracking-tight hover:text-muted-foreground transition-colors whitespace-nowrap"
        >
          Catur Bagaskara
        </NuxtLink>

        <!-- Navigation Bar + Theme Toggle Button -->
        <Navbar />
      </div>
    </div>
  </header>
</template>
