<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Computer, Moon, Sun } from "lucide-vue-next";

// get route
const route = useRoute();

// Get the color mode from the theme
const colorMode = useColorMode();
const colorModeWithSystem = computed(() =>
  colorMode.store.value === "auto" ? colorMode.system.value : colorMode.store.value,
);
// Use the cycle list to cycle through the color modes
const { state, next } = useCycleList(["auto", "light", "dark"] as const, { initialValue: colorModeWithSystem });

// Update color mode when the state changes
watchEffect(() => {
  colorMode.value = state.value;
});

/**
 * Add transition during theme change using startViewTransition
 */
function handleChangeTheme() {
  if (!document.startViewTransition) next();
  document.startViewTransition(next);
}
</script>

<template>
    <header
        class="sticky top-0 z-20 h-[--header-height-mobile] md:h-[--header-height] w-full transition-colors"
    >
        <div class="flex items-center justify-between w-full h-full">
            <!-- Logo Name -->
            <h2 v-if="route.path === '/'" class="text-2xl font-bold px-2 cursor-default">Catur Bagaskara</h2>
            <NuxtLink v-else to="/">
                <Button
                    variant="ghost"
                    size="xs"
                    class="text-2xl font-bold transition-colors hover:text-current h-10 rounded-md hover:bg-accent/10"
                >
                Catur Bagaskara
                </Button>
            </NuxtLink>


            <div class="flex items-center space-x-10">
                <!-- Navigation Menu -->
                <Navbar class="font-mono" />
                <!-- Theme Toggle Button -->
                <TooltipProvider :delay-duration="0" disable-closing-trigger>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="outline" size="icon" class="hover:bg-accent/10 bg-transparent border-0 group" @click="handleChangeTheme()">
                                <Computer v-if="state === 'auto'" class="size-6 group-hover:animate-ring-bell" />
                                <Moon v-else-if="state === 'dark'" class="size-6 group-hover:animate-ring-bell" />
                                <Sun v-else-if="state === 'light'" class="size-6 group-hover:animate-ring-bell" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p class="font-mono">Switch to {{ state === 'auto' ? 'Light Mode' : state === 'dark' ? 'System Preference' : 'Dark Mode' }}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    </header>
</template>
