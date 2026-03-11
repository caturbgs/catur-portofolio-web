<script setup lang="ts">
defineProps<{
  company: string;
  title: string;
  period: string;
  description: string;
}>();
</script>

<template>
  <div class="group py-8 first:pt-0 border-b border-muted/20 last:border-0 transition-colors">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
      <div class="space-y-1">
        <h3 class="text-xl font-bold tracking-tight">{{ company }}</h3>
        <p class="font-medium text-foreground/80">{{ title }}</p>
      </div>
      <span class="text-sm font-medium text-muted-foreground/60 tabular-nums">{{ period }}</span>
    </div>
    <div class="mt-4 prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
      <slot />
      <p v-if="description">{{ description }}</p>
    </div>
  </div>
</template>
