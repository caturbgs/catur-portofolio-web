<script setup lang="ts">
const route = useRoute()
const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>

<template>
  <h1 class="text-3xl font-bold">About</h1>
  <div class="space-y-4 mt-2 [&_a]:underline [&_a:hover]:text-primary">
    <ContentRenderer v-if="doc" :value="doc" />
  </div>
</template>
