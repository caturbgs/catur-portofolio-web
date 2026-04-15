<script setup lang="ts">
useSeoMeta({
  title: "Experience | Catur Bagaskara",
  ogTitle: "Work History & Experience | Catur Bagaskara",
  description:
    "Career history of Catur Bagaskara, featuring senior roles in software development and systems engineering.",
});

const route = useRoute();
const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<template>
  <div class="space-y-12 py-10">
    <div class="space-y-4">
      <h1 class="text-4xl font-bold tracking-tight">Experience</h1>
      <p class="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        My professional journey as a software developer, focused on building reliable systems and impactful user
        experiences.
      </p>
    </div>

    <div class="prose prose-neutral dark:prose-invert max-w-none border-t border-muted/10 pt-10">
      <ContentRenderer v-if="doc" :value="doc" />
      <div v-else class="py-20 text-center text-muted-foreground italic">Loading experience...</div>
    </div>
  </div>
</template>
