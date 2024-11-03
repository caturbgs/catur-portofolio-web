<script setup lang="ts">
import { cn } from "@/lib/utils";
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-10', $attrs.class ?? '')"
  >
    <NuxtLink to="/about">
        <Button
            variant="ghost"
            size="xs"
            class="text-base font-medium transition-colors hover:text-current h-10 rounded-md hover:bg-accent/10"
        >
        About
        </Button>
    </NuxtLink>
    <NuxtLink to="/project">
        <Button
            variant="ghost"
            size="xs"
            class="text-base font-medium transition-colors hover:text-current h-10 rounded-md hover:bg-accent/10"
        >
        Project
        </Button>
    </NuxtLink>
  </nav>
</template>
