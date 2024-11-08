<script setup lang="ts">
const el = ref<HTMLElement | null>(null);
</script>

<template class="font-sans antialiased">
    <div class="container md:max-w-screen-lg relative">
        <Header />
        <main ref="el" class="w-full h-[calc(100vh-(var(--header-height-mobile)*2))] md:h-[calc(100vh-(var(--header-height)*2))]">
            <NuxtPage />
        </main>
        <Footer />
    </div>
    <Toaster rich-colors />
</template>
