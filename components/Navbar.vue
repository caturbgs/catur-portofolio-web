<script setup lang="ts">
import { cn } from "@/lib/utils";
import { useColorMode } from "@vueuse/core";
import { Computer, Moon, Sun } from "lucide-vue-next";

// get route
const route = useRoute();

const links = [
  { path: "/about", label: "About" },
  { path: "/project", label: "Project" },
];

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
  <nav
    class="flex items-center space-x-1 md:space-x-6 font-mono"
  >
    <!-- Navigation Menu -->
    <template v-for="link in links" :key="link.path">
        <p
        v-if="route.path === link.path"
        class="text-sm sm:text-base text-gray-400 font-medium px-2 cursor-default"
        >
        {{ link.label }}
        </p>
        <NuxtLink v-else :to="link.path">
        <Button
            variant="ghost"
            size="xs"
            class="text-sm sm:text-base font-medium transition-colors hover:text-current h-10 rounded-md hover:bg-accent/10"
        >
            {{ link.label }}
        </Button>
        </NuxtLink>
    </template>

    <!-- Theme Toggle Button -->
    <TooltipProvider :delay-duration="0" disable-closing-trigger>
        <Tooltip>
            <TooltipTrigger as-child>
                <Button variant="outline" size="icon" class="hover:bg-accent/10 bg-transparent border-0 group" @click="handleChangeTheme()">
                    <Computer v-if="state === 'auto'" class="size-4 sm:size-5 group-hover:animate-ring-bell" />
                    <Moon v-else-if="state === 'dark'" class="size-4 sm:size-5 group-hover:animate-ring-bell" />
                    <Sun v-else-if="state === 'light'" class="size-4 sm:size-5 group-hover:animate-ring-bell" />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p class="font-mono text-sm sm:text-base">Switch to {{ state === 'auto' ? 'Light Mode' : state === 'dark' ? 'System Preference' : 'Dark Mode' }}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  </nav>
</template>
