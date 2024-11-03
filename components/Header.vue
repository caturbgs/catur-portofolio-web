<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Computer, Moon, Sun } from "lucide-vue-next";

// Get the color mode from the theme
const colorMode = useColorMode();
const colorModeWithSystem = computed(() =>
  colorMode.store.value === "auto" ? colorMode.system.value : colorMode.store.value,
);
// Use the cycle list to cycle through the color modes
const { state, next } = useCycleList(["auto", "light", "dark"] as const, { initialValue: colorModeWithSystem });

// Update color mode when the state changes
watchEffect(() => {
  // console.info("state", state.value, colorMode.value, colorModeWithSystem.value);
  colorMode.value = state.value;
});
</script>

<template>
<!-- TODO: responsive navbar -->
    <header
        class="sticky top-0 z-20 h-[--navbar-height-mobile] md:h-[--navbar-height] w-full transition-colors"
    >
        <div class="flex items-center justify-between w-full h-full">
            <!-- Logo Name -->
            <h2 class="text-2xl font-semibold cursor-default">Catur Bagaskara</h2>
            <div class="flex items-center space-x-10">
                <!-- Navigation Menu -->
                <Navbar class="font-mono" />
                <!-- Theme Toggle Button -->
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <Button variant="outline" size="icon" class="hover:bg-accent/10 bg-transparent border-0 group" @click="next()">
                                <Computer v-if="state === 'auto'" class="size-6 group-hover:animate-ring-bell" />
                                <Moon v-else-if="state === 'dark'" class="size-6 group-hover:animate-ring-bell" />
                                <Sun v-else-if="state === 'light'" class="size-6 group-hover:animate-ring-bell" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p v-if="state === 'auto'" class="font-mono">Switch to Light Mode</p>
                            <p v-else-if="state === 'dark'" class="font-mono">Switch to System Preference</p>
                            <p v-else-if="state === 'light'" class="font-mono">Switch to Dark Mode</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    </header>
</template>
