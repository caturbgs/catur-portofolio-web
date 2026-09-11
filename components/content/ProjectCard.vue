<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  technologies: string[];
  role: string;
  period: string;
  imageUrl?: string;
  detailUrl: string;
  externalUrl?: string;
}>();
</script>

<template>
  <article class="group relative border-b border-border py-12 last:border-0">
    <div class="flex flex-col gap-5">
      <NuxtImg
        v-if="imageUrl"
        :src="imageUrl"
        :alt="`${title} project preview`"
        width="1200"
        height="675"
        loading="lazy"
        class="h-auto w-full rounded border border-border object-cover"
      />
      <div class="flex flex-col gap-2">
        <p class="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {{ role }}
          · {{ period }}
        </p>
        <NuxtLink
          :to="detailUrl"
          class="w-fit rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <h2 class="flex items-center text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
            {{ title }}
            <span class="ml-3 inline-block transition-[opacity,transform] group-hover:translate-x-1" aria-hidden="true"
              >→</span
            >
          </h2>
        </NuxtLink>
      </div>

      <p class="text-muted-foreground text-base leading-relaxed max-w-2xl font-medium">{{ description }}</p>

      <div class="flex flex-wrap gap-x-3 sm:gap-x-6 gap-y-1.5 pt-2">
        <span
          v-for="tech in technologies"
          :key="tech"
          class="cursor-default font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground sm:tracking-[0.2em]"
        >
          {{ tech }}
        </span>
      </div>
      <NuxtLink
        v-if="externalUrl"
        :to="externalUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="w-fit text-sm font-semibold text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Visit live website <span aria-hidden="true">↗</span>
      </NuxtLink>
    </div>
  </article>
</template>
