<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
  }>(),
  {
    title: "Catur Bagaskara",
    description: "Senior Software Developer",
  },
);
</script>

<template>
  <div
    style="width: 1200px; height: 600px; display: flex; flex-direction: column; justify-content: space-between; padding: 72px; background: #ffffff; color: #0f172a; font-family: Inter;"
  >
    <div style="display: flex; align-items: center; gap: 18px; font-size: 28px; font-weight: 700;">
      <div style="width: 22px; height: 22px; background: #133f87;"></div>
      Catur Bagaskara
    </div>
    <div style="display: flex; flex-direction: column; gap: 24px; max-width: 980px;">
      <div style="font-size: 66px; line-height: 1.05; font-weight: 800; letter-spacing: -2px;">{{ title }}</div>
      <div style="font-size: 30px; line-height: 1.35; color: #475569;">{{ description }}</div>
    </div>
    <div style="display: flex; justify-content: space-between; font-size: 22px; color: #64748b;">
      <span>Software Engineering · Systems Design</span>
      <span>caturbgs.xyz</span>
    </div>
  </div>
</template>
