<script setup lang="ts">
defineProps<{
  company: string;
  title: string;
  period: string;
  description: string;
}>();
</script>

<template>
  <div class="group py-10 transition-all border-b border-muted/10 last:border-0 first:pt-0">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
      <div class="space-y-1.5 flex-1">
        <h3 class="text-xl font-bold tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
          {{ company }}
        </h3>
        <p class="font-semibold text-foreground/70">{{ title }}</p>
      </div>
      <span class="text-sm font-medium text-muted-foreground font-mono bg-muted/30 px-2 py-0.5 rounded tabular-nums">
        {{ period }}
      </span>
    </div>
    <div class="mt-4 prose prose-sm dark:prose-invert max-w-2xl text-muted-foreground/80 leading-relaxed font-medium">
      <slot />
      <p v-if="description">{{ description }}</p>
    </div>
  </div>
</template>
