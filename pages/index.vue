<script setup lang="ts">
import { Github, Linkedin } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

useSeoMeta({
  title: "Catur Bagaskara | Senior Software Developer",
  ogTitle: "Catur Bagaskara | Senior Software Developer",
  description:
    "Senior Software Developer at Xurya Daya Indonesia. Passionate about Typescript (Vue.js, ReactJS, and Node.js), Go, Flutter, and high-performance system design.",
});
</script>

<template>
  <div class="space-y-24 pb-32">
    <!-- Hero Section -->
    <section class="space-y-8 pt-12 md:pt-20">
      <div class="space-y-4">
        <h1 class="text-pretty text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
          Catur Bagaskara
        </h1>
        <p class="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
          Senior Software Developer at
          <NuxtLink
            to="https://xurya.com"
            target="_blank"
            rel="noopener noreferrer"
            class="text-foreground border-b-2 border-primary/20"
            >Xurya Daya Indonesia</NuxtLink
          >. Focused on building clean, efficient, and user-centric applications for a sustainable future.
        </p>
      </div>

      <div class="flex items-center gap-6 pt-4">
        <NuxtLink
          to="https://github.com/caturbgs"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          class="grid size-11 place-items-center rounded text-muted-foreground transition-[color,transform] hover:scale-110 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Github class="size-6" />
          <span class="sr-only">GitHub</span>
        </NuxtLink>
        <NuxtLink
          to="https://linkedin.com/in/caturbagas"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          class="grid size-11 place-items-center rounded text-muted-foreground transition-[color,transform] hover:scale-110 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Linkedin class="size-6" />
          <span class="sr-only">LinkedIn</span>
        </NuxtLink>
      </div>

      <div class="flex flex-wrap gap-3">
        <Button as-child> <a href="mailto:caturbagas11@gmail.com">Email me</a> </Button>
        <Button as-child variant="outline">
          <NuxtLink
            to="https://drive.google.com/file/d/1WmfurnbJmRYslxEIdwdO7Lcdi6t5QFOk/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View résumé <span aria-hidden="true">↗</span>
          </NuxtLink>
        </Button>
      </div>
    </section>

    <!-- Brief About -->
    <section class="space-y-6">
      <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Profile</h2>
      <div class="max-w-3xl space-y-4">
        <p class="text-lg text-muted-foreground/90 leading-relaxed font-medium">
          Based in Depok, West Java. I specialize in building everything from logic-heavy REST APIs to beautifully
          designed frontend experiences. My expertise lies in Typescript (Vue.js, ReactJS, and Node.js), Go, Flutter,
          and systems design.
        </p>
        <NuxtLink
          to="/about/"
          class="group inline-flex items-center text-sm font-bold tracking-tight hover:text-primary transition-colors"
        >
          Explore my journey <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Work & Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-12">
      <!-- Work Section -->
      <section class="space-y-8">
        <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Work</h2>
        <div class="space-y-10">
          <div class="group space-y-2">
            <p class="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Jul 2023 — Present
            </p>
            <div>
              <h3 class="font-bold text-lg group-hover:text-primary transition-colors">Senior Software Developer</h3>
              <p class="text-muted-foreground font-medium">Xurya Daya Indonesia</p>
            </div>
          </div>
          <div class="group space-y-2">
            <p class="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
              May 2022 — Jul 2023
            </p>
            <div>
              <h3 class="font-bold text-lg text-muted-foreground group-hover:text-primary transition-colors">
                Software Developer
              </h3>
              <p class="text-muted-foreground font-medium">Xurya Daya Indonesia</p>
            </div>
          </div>
        </div>
        <NuxtLink
          to="/experience/"
          class="group inline-flex items-center text-sm font-bold tracking-tight hover:text-primary transition-colors pt-4"
        >
          View full history
          <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </section>

      <!-- Projects Section -->
      <section class="space-y-8">
        <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Featured Projects</h2>
        <div class="space-y-10">
          <NuxtLink to="/project/rooftop-solar-platform/" class="group block space-y-2">
            <p class="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">Renewable Energy</p>
            <div>
              <h3 class="font-bold text-lg group-hover:text-primary transition-colors flex items-center">
                Rooftop Solar Solutions
                <span
                  class="ml-2 opacity-0 transition-[opacity,transform] group-hover:translate-x-1 group-hover:opacity-100"
                  >→</span
                >
              </h3>
              <p class="text-sm text-muted-foreground font-medium leading-relaxed">
                Pioneering software for rooftop solar power solutions in Indonesia.
              </p>
            </div>
          </NuxtLink>
          <NuxtLink to="/project/movic-iot-rental/" class="group block space-y-2">
            <p class="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">Mobility</p>
            <div>
              <h3 class="font-bold text-lg group-hover:text-primary transition-colors flex items-center">
                MOVIC (Car Rental & IoT)
                <span
                  class="ml-2 opacity-0 transition-[opacity,transform] group-hover:translate-x-1 group-hover:opacity-100"
                  >→</span
                >
              </h3>
              <p class="text-sm text-muted-foreground font-medium leading-relaxed">
                Developed an IoT-integrated car rental application for Astra Digital International.
              </p>
            </div>
          </NuxtLink>
        </div>
        <NuxtLink
          to="/project/"
          class="group inline-flex items-center text-sm font-bold tracking-tight hover:text-primary transition-colors pt-4"
        >
          Browse all projects
          <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
        </NuxtLink>
      </section>
    </div>

    <!-- Skills Section -->
    <section class="space-y-8 border-t border-muted/10 pt-16">
      <h2 class="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Expertise</h2>
      <div class="flex flex-wrap gap-x-12 gap-y-6 text-base font-bold tracking-tight text-muted-foreground">
        <span class="hover:text-foreground transition-colors cursor-default">Typescript</span>
        <span class="hover:text-foreground transition-colors cursor-default">Vue.js / Nuxt</span>
        <span class="hover:text-foreground transition-colors cursor-default">ReactJS / Next</span>
        <span class="hover:text-foreground transition-colors cursor-default">Node.js</span>
        <span class="hover:text-foreground transition-colors cursor-default">Go</span>
        <span class="hover:text-foreground transition-colors cursor-default">Flutter</span>
        <span class="hover:text-foreground transition-colors cursor-default">Systems Design</span>
        <span class="hover:text-foreground transition-colors cursor-default">Docker</span>
        <span class="hover:text-foreground transition-colors cursor-default">Google Cloud Platform</span>
      </div>
    </section>
  </div>
</template>
