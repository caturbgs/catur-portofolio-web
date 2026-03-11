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
  <div class="group py-6 space-y-2">
    <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
      <h3 class="text-xl font-bold tracking-tight">
        <a
          v-if="url && url !== '#'"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline decoration-1 underline-offset-4 transition-all"
        >
          {{ title }}
        </a>
        <span v-else>{{ title }}</span>
      </h3>
      <div class="flex flex-wrap gap-x-3 text-xs font-medium text-muted-foreground/60">
        <span v-for="tech in technologies" :key="tech">{{ tech }}</span>
      </div>
    </div>
    <p class="text-muted-foreground leading-relaxed max-w-3xl">{{ description }}</p>
  </div>
</template>
