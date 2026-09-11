<script setup lang="ts">
defineProps<{
  company: string;
  title: string;
  period: string;
  description: string;
}>();
</script>

<template>
  <article class="group border-b border-border py-10 first:pt-0 last:border-0">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
      <div class="space-y-1.5 flex-1">
        <h3 class="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
          {{ company }}
        </h3>
        <p class="font-semibold text-muted-foreground">{{ title }}</p>
      </div>
      <span
        class="w-fit self-start rounded bg-muted/30 px-2 py-0.5 font-mono text-sm font-medium text-muted-foreground tabular-nums"
      >
        {{ period }}
      </span>
    </div>
    <div class="prose prose-sm mt-4 max-w-2xl font-medium leading-relaxed text-muted-foreground dark:prose-invert">
      <slot />
      <p v-if="description">{{ description }}</p>
    </div>
  </article>
</template>
