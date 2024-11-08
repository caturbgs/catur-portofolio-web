<script setup lang="ts">
// get route
const route = useRoute();
</script>

<template>
    <header class="h-[--header-height-mobile] sm:h-[--header-height] w-full">
        <div class="container px-3 sm:px-8 md:max-w-screen-md size-full">
            <div class="flex items-center justify-between w-full h-full">
                <!-- Logo Name -->
                <span v-if="route.path === '/'" class="-ml-2 text-base md:text-xl font-semibold px-2 cursor-default">Catur
                    Bagaskara</span>
                <NuxtLink v-else to="/">
                    <Button variant="ghost" size="xs"
                        class="-ml-2 text-base md:text-xl font-semibold transition-colors hover:text-current h-10 rounded-md hover:bg-accent/10">
                        Catur Bagaskara
                    </Button>
                </NuxtLink>

                <!-- Navigation Bar + Theme Toggle Button -->
                <Navbar />
            </div>
        </div>
    </header>
</template>
