<script setup lang="ts">
import { usePreferredColorScheme, useScroll, useWindowSize } from "@vueuse/core";

const el = ref<HTMLElement | null>(null);
</script>

<template class="font-sans antialiased">
    <div class="container md:max-w-screen-lg relative">
        <Header />
        <main ref="el" class="w-full h-screen overflow-y-scroll">
            <NuxtPage />
        </main>
        <Footer />
    </div>
    <Toaster rich-colors />
</template>
