<script setup lang="ts">
import { cn } from "@/lib/utils";

const route = useRoute();
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-10', $attrs.class ?? '')"
  >
    <NuxtLink to="/">
        <Button
            variant="ghost"
            class="text-base font-medium transition-colors hover:text-primary hover:bg-accent/10"
            :class="{ 'text-primary': route.path === '/' }"
        >
        Home
        </Button>
    </NuxtLink>
    <NuxtLink to="/about">
        <Button
            variant="ghost"
            class="text-base font-medium transition-colors hover:text-primary hover:bg-accent/10"
            :class="{ 'text-primary': route.path === '/about' }"
        >
        About
        </Button>
    </NuxtLink>
    <NuxtLink to="/project">
        <Button
            variant="ghost"
            class="text-base font-medium transition-colors hover:text-primary hover:bg-accent/10"
            :class="{ 'text-primary': route.path === '/project' }"
        >
        Project
        </Button>
    </NuxtLink>
  </nav>
</template>
