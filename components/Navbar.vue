<script setup lang="ts">
import { cn } from "@/lib/utils";

// get route
const route = useRoute();

const links = [
  { path: "/about", label: "About" },
  { path: "/project", label: "Project" },
];
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-10', $attrs.class ?? '')"
  >
  <template v-for="link in links" :key="link.path">
    <h2
      v-if="route.path === link.path"
      class="text-base text-gray-400 font-medium px-2 cursor-default"
    >
      {{ link.label }}
    </h2>
    <NuxtLink v-else :to="link.path">
      <Button
        variant="ghost"
        size="xs"
        class="text-base font-medium transition-colors hover:text-current h-10 rounded-md hover:bg-accent/10"
      >
        {{ link.label }}
      </Button>
    </NuxtLink>
  </template>
  </nav>
</template>
