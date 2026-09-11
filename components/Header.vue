<script setup lang="ts">
const route = useRoute();

function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  return path.replace(/\/+$/, "") || "/";
}

const isHome = computed(() => normalizePath(route.path) === "/");

const brandMarkClass = "shrink-0 font-bold tracking-tight";
</script>

<template>
  <header
    class="min-h-[--header-height-mobile] sm:min-h-[--header-height] w-full pt-4 sticky top-0 bg-background/80 backdrop-blur-sm z-50"
  >
    <div class="mx-auto w-full md:max-w-screen-md px-5 sm:px-8 border-b border-muted/10">
      <div class="flex items-center justify-between gap-x-3 w-full pb-4">
        <!-- Logo: stacked on mobile so nav keeps one row; single line from sm up -->
        <span v-if="isHome" :class="[brandMarkClass, 'cursor-default']" aria-label="Catur Bagaskara">
          <span class="flex flex-col text-sm leading-[1.15] sm:hidden" aria-hidden="true">
            <span>Catur</span>
            <span>Bagaskara</span>
          </span>
          <span class="hidden sm:inline text-sm md:text-base whitespace-nowrap">Catur Bagaskara</span>
        </span>
        <NuxtLink
          v-else
          to="/"
          :class="[
            brandMarkClass,
            'rounded-sm transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background',
          ]"
          aria-label="Catur Bagaskara home"
        >
          <span class="flex flex-col text-sm leading-[1.15] sm:hidden" aria-hidden="true">
            <span>Catur</span>
            <span>Bagaskara</span>
          </span>
          <span class="hidden sm:inline text-sm md:text-base whitespace-nowrap">Catur Bagaskara</span>
        </NuxtLink>

        <!-- Navigation Bar + Theme Toggle Button -->
        <Navbar />
      </div>
    </div>
  </header>
</template>
