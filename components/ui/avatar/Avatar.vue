<script setup lang="ts">
import { AvatarRoot } from "radix-vue";
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";
import { type AvatarVariants, avatarVariant } from ".";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    size?: AvatarVariants["size"];
    shape?: AvatarVariants["shape"];
  }>(),
  {
    size: "sm",
    shape: "circle",
  },
);
</script>

<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot />
  </AvatarRoot>
</template>
