<script setup lang="ts"></script>

<template>
  <h1 class="text-3xl font-bold">About</h1>
  <div class="space-y-4 mt-2">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ullam dolor? Magnam tenetur blanditiis,
      placeat at quod quo possimus quia mollitia minima tempore fugit, laboriosam fugiat veniam vero laborum quas!
    </p>
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
