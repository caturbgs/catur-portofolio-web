<script setup lang="ts">
import { Github, Linkedin } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
</script>

<template>
  <footer class="h-[--header-height-mobile] sm:h-[--header-height] text-sm font-mono w-full">
    <div class="mx-auto w-full md:max-w-screen-md px-5 sm:px-8 h-full flex justify-between items-center">
      <Popover>
        <PopoverTrigger as-child> <Button variant="ghost" class="px-2">Catur Bagaskara</Button> </PopoverTrigger>
        <PopoverContent class="w-64 p-2 font-mono" align="start">
          <div class="flex flex-col gap-2">
            <Button
              as-child
              variant="ghost"
              class="justify-start gap-3 text-sm font-medium transition-colors hover:text-primary hover:bg-accent/10"
            >
              <NuxtLink to="https://github.com/caturbgs" target="_blank" rel="noopener noreferrer">
                <Github data-icon="inline-start" />
                <span>caturbgs</span>
              </NuxtLink>
            </Button>
            <Button
              as-child
              variant="ghost"
              class="justify-start gap-3 text-sm font-medium transition-colors hover:text-primary hover:bg-accent/10"
            >
              <NuxtLink to="https://linkedin.com/in/caturbagas" target="_blank" rel="noopener noreferrer">
                <Linkedin data-icon="inline-start" />
                <span>caturbagas</span>
              </NuxtLink>
            </Button>
            <Button as-child variant="ghost" class="justify-start gap-3 text-sm font-medium">
              <a href="mailto:caturbagas11@gmail.com">Email me</a>
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      <NuxtLink
        to="https://github.com/caturbgs/catur-portofolio-web"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-sm border-b border-border py-2 transition-colors hover:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Source
      </NuxtLink>
    </div>
  </footer>
</template>
