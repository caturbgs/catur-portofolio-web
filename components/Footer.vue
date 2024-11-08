<script setup lang="ts">
import { Github, Instagram, Twitter } from "lucide-vue-next";
</script>

<template>
    <footer class="w-full h-[--header-height-mobile] sm:h-[--header-height] text-sm font-mono transition-colors px-2 sm:px-0">
        <div class="w-full h-full flex justify-between items-center">
            <HoverCard :open-delay="0">
                <HoverCardTrigger>
                    <p class="text-gray-500">Catur Bagaskara</p>
                </HoverCardTrigger>
                <HoverCardContent class="w-full p-2">
                    <div class="flex flex-col gap-2">
                        <Button as-child variant="ghost" class="justify-start gap-3 text-sm font-medium transition-colors hover:text-primary hover:bg-accent/10">
                            <NuxtLink to="https://github.com/caturbgs" target="_blank">
                                <Github class="mr-2 size-4" />
                                <p>caturbgs</p>
                            </NuxtLink>
                        </Button>
                        <Button as-child variant="ghost" class="justify-start gap-3 text-sm font-medium transition-colors hover:text-primary hover:bg-accent/10">
                            <NuxtLink to="https://x.com/gitgudguy_" target="_blank">
                                <Twitter class="mr-2 size-4" />
                                <p>gitgudguy_</p>
                            </NuxtLink>
                        </Button>
                        <Button as-child variant="ghost" class="justify-start gap-3 text-sm font-medium transition-colors hover:text-primary hover:bg-accent/10">
                            <NuxtLink to="https://instagram.com/caturbgs_" target="_blank">
                                <Instagram class="mr-2 size-4" />
                                <p>caturbgs_</p>
                            </NuxtLink>
                        </Button>
                    </div>
                </HoverCardContent>
            </HoverCard>

            <NuxtLink to="https://github.com/caturbgs/catur-portofolio-web" target="_blank">
                <p class="border-b border-gray-300 dark:border-gray-500 hover:border-gray-600 dark:hover:border-white">Source</p>
            </NuxtLink>
        </div>
    </footer>
</template>
