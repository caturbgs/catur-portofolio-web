<script setup lang="ts">
const el = ref<HTMLElement | null>(null);
</script>

<template class="font-sans antialiased">
    <div class="container px-3 sm:px-8 md:max-w-screen-md relative">
        <Header />
        <main ref="el" class="w-full h-[calc(100vh-(var(--header-height-mobile)*2))] md:h-[calc(100vh-(var(--header-height)*2))]">
            <NuxtPage />
        </main>
        <Footer />
    </div>
    <Toaster rich-colors />
</template>
