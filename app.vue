<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import { useScroll, useWindowSize } from "@vueuse/core";

const el = ref<HTMLElement | null>(null);

const { y } = useScroll(el);
const { height } = useWindowSize();
const scrollY = computed(() => y.value);
const screenHeight = computed(() => height.value);
</script>

<template class="font-sans antialiased">
    <div>
        <header
            class="fixed top-0 z-20 h-[--navbar-height-mobile] flex justify-center items-center w-full md:h-[--navbar-height]"
            :class="{'bg-black': scrollY >= screenHeight - 100}"
            >
            <div class="flex items-center justify-between container md:max-w-screen-xl">
                <!-- Logo -->
                <NuxtImg src="/logo.png" alt="Logo" class="h-auto w-[40px]" />
                <!-- Navigation Menu -->
                <Navbar />
                <!-- Get Started Button -->
                <Button variant="default" class="rounded-full bg-secondary text-black hover:secondary font-bold hover:text-white">Get Started</Button>
            </div>
        </header>
        <main ref="el" class="w-full h-screen overflow-y-scroll">
            <NuxtPage />
        </main>
    </div>
    <Toaster rich-colors />
</template>
