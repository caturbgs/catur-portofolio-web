<script setup lang="ts">
import { Button } from "@/components/ui/button";

const route = useRoute();
const projectPath = computed(() => `/project/${String(route.params.slug)}`);

const { data: project } = await useAsyncData(projectPath.value, () => {
  return queryCollection("projects").path(projectPath.value).first();
});

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

useSeoMeta({
  title: () => `${project.value?.title} | Catur Bagaskara`,
  ogTitle: () => `${project.value?.title} | Catur Bagaskara`,
  description: () => project.value?.description,
  ogDescription: () => project.value?.description,
});

defineOgImage("Portfolio", {
  title: project.value.title,
  description: project.value.description,
});
</script>

<template>
  <article v-if="project" class="flex flex-col gap-12 py-10">
    <header class="flex flex-col gap-6">
      <NuxtLink
        to="/project/"
        class="w-fit text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        ← All projects
      </NuxtLink>
      <div class="flex flex-col gap-4">
        <p class="font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {{ project.company }}
          · {{ project.period }}
        </p>
        <h1 class="text-pretty text-3xl font-bold tracking-tight sm:text-5xl">{{ project.title }}</h1>
        <p class="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{{ project.description }}</p>
      </div>
      <dl class="grid gap-6 border-y border-border py-6 sm:grid-cols-2">
        <div class="flex flex-col gap-1">
          <dt class="text-sm font-semibold text-muted-foreground">Role</dt>
          <dd class="font-semibold">{{ project.role }}</dd>
        </div>
        <div class="flex flex-col gap-1">
          <dt class="text-sm font-semibold text-muted-foreground">Technologies</dt>
          <dd>{{ project.technologies.join(" · ") }}</dd>
        </div>
      </dl>
    </header>

    <NuxtImg
      v-if="project.image"
      :src="project.image"
      :alt="`${project.title} project preview`"
      width="1200"
      height="675"
      class="h-auto w-full rounded border border-border object-cover"
    />

    <div class="prose prose-neutral max-w-none dark:prose-invert"><ContentRenderer :value="project" /></div>

    <section class="flex flex-col gap-4 border-t border-border pt-8" aria-labelledby="outcomes-heading">
      <h2 id="outcomes-heading" class="scroll-mt-24 text-xl font-bold">Outcomes</h2>
      <ul class="flex list-disc flex-col gap-2 pl-5 text-muted-foreground">
        <li v-for="outcome in project.outcomes" :key="outcome">{{ outcome }}</li>
      </ul>
    </section>

    <Button v-if="project.externalUrl" as-child class="w-fit">
      <NuxtLink :to="project.externalUrl" target="_blank" rel="noopener noreferrer">
        Visit project website <span aria-hidden="true">↗</span>
      </NuxtLink>
    </Button>
  </article>
</template>
