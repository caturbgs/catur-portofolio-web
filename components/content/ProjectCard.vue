<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  url?: string;
}>();
</script>

<template>
  <div class="group relative py-8 transition-all">
    <a v-if="url && url !== '#'" :href="url" target="_blank" rel="noopener noreferrer" class="absolute inset-0 z-10" />
    <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
      <div class="space-y-1 flex-1">
        <h3 class="text-lg font-bold tracking-tight group-hover:text-primary transition-colors flex items-center">
          {{ title }}
          <span class="inline-block ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
            >→</span
          >
        </h3>
        <p class="text-sm text-muted-foreground leading-relaxed max-w-2xl font-medium">{{ description }}</p>
      </div>
      <div class="flex flex-wrap gap-2 text-[10px] uppercase tracking-wider text-muted-foreground/50 font-mono">
        <span v-for="tech in technologies" :key="tech">{{ tech }}</span>
      </div>
    </div>
  </div>
</template>
