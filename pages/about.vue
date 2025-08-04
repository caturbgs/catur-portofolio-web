<script setup lang="ts"></script>

<template>
  <h1 class="text-3xl font-bold">About</h1>
  <div class="space-y-4 mt-2 [&_a]:underline [&_a:hover]:text-primary">
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
