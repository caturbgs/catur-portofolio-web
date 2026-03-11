<script setup lang="ts">
import { Github, Linkedin } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Using Nuxt Content v3 queryCollection
const { data: projectDoc } = await useAsyncData("project-home", () => {
  return queryCollection("content").path("/project").first();
});

const { data: experienceDoc } = await useAsyncData("experience-home", () => {
  return queryCollection("content").path("/experience").first();
});

// Since the data is in MDC components, we might not be able to easily slice them here
// if they are not in frontmatter. For now, we'll just show the titles or links
// if we can extract them, or just point to the full pages.
// Rauch and Shudin styles prefer simple links to sections.
</script>

<template>
  <div class="space-y-16 pb-20">
    <!-- Hero Section -->
    <section class="space-y-6 pt-6 md:pt-10">
      <div class="space-y-2">
        <h1 class="text-3xl md:text-4xl font-bold tracking-tight">Catur Bagaskara</h1>
        <p class="text-base md:text-lg text-muted-foreground font-medium">
          Senior Software Developer at <span class="text-foreground">Xurya Daya Indonesia</span>
        </p>
      </div>

      <div class="max-w-2xl text-base leading-relaxed text-muted-foreground">
        <p>
          Dedicated Full Stack Developer with a passion for building clean, efficient, and user-centric applications.
          Currently focused on renewable energy solutions and optimizing large-scale systems.
        </p>
      </div>

      <div class="flex items-center gap-4 pt-2">
        <a
          href="https://github.com/caturbgs"
          target="_blank"
          rel="noopener"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github class="size-5" />
          <span class="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/caturbagas"
          target="_blank"
          rel="noopener"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin class="size-5" />
          <span class="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://x.com/gitgudguy_"
          target="_blank"
          rel="noopener"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Twitter class="size-5" />
          <span class="sr-only">Twitter</span>
        </a>
        <a
          href="https://instagram.com/caturbgs_"
          target="_blank"
          rel="noopener"
          class="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Instagram class="size-5" />
          <span class="sr-only">Instagram</span>
        </a>
      </div>
    </section>

    <!-- Brief About -->
    <section class="space-y-4">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">About</h2>
      <p class="text-muted-foreground leading-relaxed">
        Based in Depok, West Java. I love building everything from logic-heavy REST APIs to beautifully designed
        frontend experiences. My expertise lies in systems design, Go, and Vue.js.
      </p>
      <NuxtLink
        to="/about"
        class="inline-flex items-center text-sm font-medium hover:underline decoration-1 underline-offset-4"
      >
        Read more about my journey <span class="ml-1">→</span>
      </NuxtLink>
    </section>

    <!-- Sections: We'll show links to the full pages to keep it minimalist -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <section class="space-y-4">
        <h2 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Work</h2>
        <div class="space-y-1">
          <p class="text-sm text-muted-foreground">Present</p>
          <p class="font-medium">Senior Software Developer at Xurya</p>
        </div>
        <div class="space-y-1">
          <p class="text-sm text-muted-foreground">2022 — 2023</p>
          <p class="font-medium text-muted-foreground">Software Developer at Xurya</p>
        </div>
        <NuxtLink
          to="/experience"
          class="inline-flex items-center text-sm font-medium hover:underline decoration-1 underline-offset-4 pt-2"
        >
          View all experience <span class="ml-1">→</span>
        </NuxtLink>
      </section>

      <section class="space-y-4">
        <h2 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Projects</h2>
        <ul class="space-y-4">
          <li>
            <a href="#" class="group block">
              <span class="font-medium group-hover:underline decoration-1 underline-offset-4"
                >Rooftop Solar Solutions</span
              >
              <p class="text-sm text-muted-foreground line-clamp-1">Pioneering software for renewable energy.</p>
            </a>
          </li>
          <li>
            <a href="#" class="group block">
              <span class="font-medium group-hover:underline decoration-1 underline-offset-4">KESAN App</span>
              <p class="text-sm text-muted-foreground line-clamp-1">Family health and safety application.</p>
            </a>
          </li>
        </ul>
        <NuxtLink
          to="/project"
          class="inline-flex items-center text-sm font-medium hover:underline decoration-1 underline-offset-4 pt-2"
        >
          View all projects <span class="ml-1">→</span>
        </NuxtLink>
      </section>
    </div>

    <!-- Skills (Minimalist) -->
    <section class="space-y-4">
      <h2 class="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Skills & Stack</h2>
      <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <span>Go</span>
        <span>Vue.js / Nuxt</span>
        <span>Systems Design</span>
        <span>PHP / Laravel</span>
        <span>PostgreSQL</span>
        <span>Docker / K8s</span>
      </div>
    </section>
  </div>
</template>
