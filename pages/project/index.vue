<script setup lang="ts">
import ProjectCard from "@/components/content/ProjectCard.vue";

useSeoMeta({
  title: "Projects | Catur Bagaskara",
  ogTitle: "Software Engineering Projects | Catur Bagaskara",
  description:
    "A showcase of my software engineering projects, including renewable energy solutions and enterprise applications.",
});

defineOgImage("Portfolio", {
  title: "Selected Software Engineering Projects",
  description: "Case studies spanning renewable energy, mobility, frontend architecture, and connected systems.",
});

const { data: projects } = await useAsyncData("projects-index", () => {
  return queryCollection("projects").order("title", "ASC").all();
});
</script>

<template>
  <div class="space-y-12 py-10">
    <div class="space-y-4">
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">Projects</h1>
      <p class="text-muted-foreground text-lg max-w-2xl leading-relaxed">
        A selection of my recent work, ranging from large-scale enterprise systems to experimental web applications.
      </p>
    </div>

    <div v-if="projects?.length" class="divide-y divide-border border-t border-border">
      <ProjectCard
        v-for="project in projects"
        :key="project.path"
        :title="project.title"
        :description="project.description"
        :technologies="project.technologies"
        :role="project.role"
        :period="project.period"
        :detail-url="`${project.path}/`"
        :external-url="project.externalUrl"
        :image-url="project.image"
      />
    </div>
    <div v-else class="py-20 text-center text-muted-foreground italic">No projects are available yet.</div>
  </div>
</template>
