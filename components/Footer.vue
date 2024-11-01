<script setup lang="ts">
import { Github, Instagram, Twitter } from "lucide-vue-next";
</script>

<template>
    <footer class="w-full h-16 text-sm font-mono">
        <div class="w-full h-full flex justify-between items-center">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <p class="">Catur Bagaskara</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <NuxtLink to="https://github.com/caturbgs" target="_blank" class="flex items-center">
                            <Github class="mr-2 h-4 w-4" />
                            <span>GitHub</span>
                        </NuxtLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <NuxtLink to="https://x.com/gitgudguy_" target="_blank" class="flex items-center">
                            <Twitter class="mr-2 h-4 w-4" />
                            <span>Twitter</span>
                        </NuxtLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                        <NuxtLink to="https://instagram.com/caturbgs_" target="_blank" class="flex items-center">
                            <Instagram class="mr-2 h-4 w-4" />
                            <span>Instagram</span>
                        </NuxtLink>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <NuxtLink to="https://github.com/caturbgs/catur-portofolio-web" target="_blank">
                <p class="underline">Source</p>
            </NuxtLink>
        </div>
    </footer>
</template>
