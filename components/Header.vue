<script setup lang="ts">
// get route
const route = useRoute();
</script>

<template>
    <header
        class="sticky top-0 z-20 h-[--header-height-mobile] sm:h-[--header-height] w-full transition-colors"
    >
        <div class="flex items-center justify-between w-full h-full">
            <!-- Logo Name -->
            <p v-if="route.path === '/'" class="text-base md:text-2xl font-bold px-2 cursor-default">Catur Bagaskara</p>
            <NuxtLink v-else to="/">
                <Button
                    variant="ghost"
                    size="xs"
                    class="text-base md:text-2xl font-bold transition-colors hover:text-current h-10 rounded-md hover:bg-accent/10"
                >
                Catur Bagaskara
                </Button>
            </NuxtLink>

            <!-- Navigation Bar + Theme Toggle Button -->
            <Navbar />
        </div>
    </header>
</template>
