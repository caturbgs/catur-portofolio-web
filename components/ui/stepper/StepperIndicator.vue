<script lang="ts" setup>
import type { StepperIndicatorProps } from "radix-vue";
import { StepperIndicator, useForwardProps } from "radix-vue";
import { computed, type HTMLAttributes } from "vue";

import { cn } from "@/lib/utils";

const props = defineProps<StepperIndicatorProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <StepperIndicator
    v-bind="forwarded"
    :class="cn(
      'inline-flex items-center justify-center rounded-full text-muted-foreground/50 w-10 h-10',
      // Disabled
      'group-data-[disabled]:text-muted-foreground group-data-[disabled]:opacity-50',
      // Active
      'group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground',
      // Completed
      'group-data-[state=completed]:bg-accent group-data-[state=completed]:text-accent-foreground',
      props.class,
    )"
  >
    <slot />
  </StepperIndicator>
</template>
