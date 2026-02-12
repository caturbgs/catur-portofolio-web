<script setup lang="ts">
import { Github, Linkedin } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const { data: projectsDoc } = await useAsyncData("projects-home", () => {
  return queryContent("/projects").findOne();
});
const projects = computed(() => projectsDoc.value?.projects || []);

const { data: experiencesDoc } = await useAsyncData("experiences-home", () => {
  return queryContent("/experience").findOne();
});
const experiences = computed(() => experiencesDoc.value?.experience || []);
</script>

<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold">Catur Bagaskara</h1>
      <p class="text-xl text-muted-foreground">Senior Software Developer at Xurya Daya Indonesia</p>
      <p class="max-w-2xl mx-auto">
        A dedicated Full Stack Developer with a deep passion for website development. Constantly seeking new ways to improve my skills and have honed my expertise in website applications.
      </p>
      <div class="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/caturbagas" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            <Linkedin class="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </a>
        <a href="https://github.com/caturbgs" target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            <Github class="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </a>
      </div>
    </div>

    <!-- About Section -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">About Me</h2>
      <p class="text-muted-foreground">
        I'm a Software Developer based in Depok, West Java. I love to build applications, whether it's a logic-heavy REST API or a beautifully designed website. I'm passionate about both frontend and backend development.
      </p>
      <NuxtLink to="/about">
        <Button variant="link" class="p-0">Read more about me &rarr;</Button>
      </NuxtLink>
    </div>

    <!-- Skills Section -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">Skills</h2>
      <div class="flex flex-wrap gap-2">
        <div class="bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm">Systems Design</div>
        <div class="bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm">Go (Programming Language)</div>
        <div class="bg-primary text-primary-foreground rounded-md px-3 py-1 text-sm">HashiCorp Vault</div>
        <div class="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-sm">Vue.js</div>
        <div class="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-sm">Nuxt</div>
        <div class="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-sm">Backend</div>
        <div class="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-sm">Frontend</div>
        <div class="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-sm">PHP</div>
      </div>
    </div>

    <!-- Recent Projects -->
    <div class="space-y-4" v-if="projects && projects.length">
      <h2 class="text-2xl font-bold">Recent Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card v-for="project in projects.slice(0, 2)" :key="project._path">
          <CardHeader>
            <CardTitle>{{ project.title }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{{ project.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="tech in project.technologies" :key="tech" class="bg-secondary text-secondary-foreground rounded-md px-2 py-1 text-xs">
                {{ tech }}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
       <NuxtLink to="/project">
        <Button variant="link" class="p-0">View all projects &rarr;</Button>
      </NuxtLink>
    </div>

     <!-- Experience Section -->
    <div class="space-y-4" v-if="experiences && experiences.length">
      <h2 class="text-2xl font-bold">Work Experience</h2>
        <Card v-for="experience in experiences.slice(0, 2)" :key="experience.company + experience.title">
            <CardHeader>
                <CardTitle>{{ experience.title }}</CardTitle>
                <p class="text-sm text-muted-foreground">{{ experience.company }} | {{ experience.period }}</p>
            </CardHeader>
            <CardContent>
                <p>{{ experience.description }}</p>
            </CardContent>
        </Card>
        <NuxtLink to="/experience">
            <Button variant="link" class="p-0">View all experiences &rarr;</Button>
        </NuxtLink>
    </div>

  </div>
</template>
