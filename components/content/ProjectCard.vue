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
  <div class="group relative py-12 transition-all border-b border-muted/10 last:border-0">
    <div class="space-y-4">
      <!-- Title Area -->
      <div class="flex items-center justify-between gap-4">
        <NuxtLink v-if="url && url !== '#'" :to="url" target="_blank" rel="noopener noreferrer">
          <h3 class="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors flex items-center">
            {{ title }}
            <span class="inline-block ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              >→</span
            >
          </h3>
        </NuxtLink>
      </div>

      <!-- Description Area -->
      <p class="text-muted-foreground text-base leading-relaxed max-w-2xl font-medium">{{ description }}</p>

      <!-- Technologies Area - Subtle and secondary -->
      <div class="flex flex-wrap gap-x-6 gap-y-2 pt-2">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="text-[12px] font-bold font-mono uppercase tracking-[0.2em] text-muted-foreground/50 hover:text-muted-foreground/80 transition-colors cursor-default"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>
