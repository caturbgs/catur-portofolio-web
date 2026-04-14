<script setup lang="ts">
const route = useRoute();
const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<template>
  <div class="space-y-12 py-10">
    <div class="space-y-4">
      <h1 class="text-4xl font-bold tracking-tight">About</h1>
      <p class="text-muted-foreground text-lg max-w-2xl leading-relaxed italic">
        "Design is not just what it looks like and feels like. Design is how it works."
      </p>
    </div>

    <div class="prose prose-neutral dark:prose-invert max-w-none border-t border-muted/10 pt-10">
      <ContentRenderer v-if="doc" :value="doc" />
      <div v-else class="py-20 text-center text-muted-foreground italic">Loading about...</div>
    </div>
  </div>
</template>
