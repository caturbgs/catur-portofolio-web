<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Computer, Moon, Sun } from "lucide-vue-next";

// get route
const route = useRoute();

const links = [
  { path: "/about", label: "About" },
  { path: "/project", label: "Project" },
  { path: "/experience", label: "Experience" },
];

// Get the color mode from the theme
const mode = useColorMode({
  disableTransition: false,
  emitAuto: true,
});

// Use the cycle list to cycle through the color modes
const { state, next } = useCycleList(["auto", "light", "dark"] as const, {
  initialValue: mode,
});

// Update color mode when the state changes
watchEffect(() => (mode.value = state.value));

// State to display next color mode
const buttonText = computed(() => {
  let text = "Switch to ";
  if (state.value === "auto") text += "Light Mode";
  else if (state.value === "light") text += "Dark Mode";
  else if (state.value === "dark") text += "System Preference";
  return text;
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
  <nav class="flex items-center space-x-2 md:space-x-8 font-mono">
    <!-- Navigation Menu -->
    <template v-for="link in links" :key="link.path">
      <p v-if="route.path === link.path" class="text-sm font-medium px-2 cursor-default text-foreground">
        {{ link.label }}
      </p>
      <NuxtLink v-else :to="link.path">
        <button
          type="button"
          class="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground px-2 py-1"
        >
          {{ link.label }}
        </button>
      </NuxtLink>
    </template>

    <!-- Theme Toggle Button -->
    <TooltipProvider :delay-duration="0" disable-closing-trigger>
      <Tooltip>
        <TooltipTrigger as-child>
          <button
            type="button"
            class="text-muted-foreground hover:text-foreground transition-colors p-1 group"
            @click="handleChangeTheme()"
          >
            <Computer v-if="mode === 'auto'" class="size-4 group-hover:animate-ring-bell" />
            <Moon v-else-if="mode === 'dark'" class="size-4 group-hover:animate-ring-bell" />
            <Sun v-else-if="mode === 'light'" class="size-4 group-hover:animate-ring-bell" />
            <span class="sr-only">Toggle theme</span>
          </button>
        </TooltipTrigger>
        <TooltipContent> <p class="font-mono text-xs">{{ buttonText }}</p> </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </nav>
</template>
