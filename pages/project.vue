<script setup lang="ts">
useSeoMeta({
  title: "Projects | Catur Bagaskara",
  ogTitle: "Software Engineering Projects | Catur Bagaskara",
  description:
    "A showcase of my software engineering projects, including renewable energy solutions and enterprise applications.",
});

const route = useRoute();
const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<template>
  <div class="space-y-12 py-10">
    <div class="space-y-4">
      <h1 class="text-4xl font-bold tracking-tight">Projects</h1>
      <p class="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        A selection of my recent work, ranging from large-scale enterprise systems to experimental web applications.
      </p>
    </div>

    <div class="divide-y divide-muted/10 border-t border-muted/10">
      <ContentRenderer v-if="doc" :value="doc" />
      <div v-else class="py-20 text-center text-muted-foreground italic">Loading projects...</div>
    </div>
  </div>
</template>
