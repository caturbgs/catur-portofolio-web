<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Computer, Moon, Sun } from "lucide-vue-next";

// get route
const route = useRoute();

const links = [
  { path: "/about", label: "About" },
  { path: "/project", label: "Project" },
];

// Get the color mode from the theme
const mode = useColorMode({
  disableTransition: false,
  emitAuto: true,
});

// Use the cycle list to cycle through the color modes
const { state, next } = useCycleList(["auto", "light", "dark"] as const, { initialValue: mode });
console.log({ state: state.value, mode: mode.value });

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

<!-- <script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";
import { Computer, Moon, Sun } from "lucide-vue-next";

// get route
const route = useRoute();

const links = [
  { path: "/about", label: "About" },
  { path: "/project", label: "Project" },
];

// Get the color mode from the theme. This is our source of truth.
const mode = useColorMode({
  disableTransition: false,
  emitAuto: true,
});

// Use the cycle list to cycle through the color modes.
// We initialize it with the mode, which might be 'auto' on SSR, but that's okay.
const { state, next } = useCycleList(["auto", "light", "dark"] as const, {
  initialValue: mode,
});

// ✅ FIX: Watch the mode for changes (like on client-side hydration)
// and update the cycle list's state to match. This keeps them in sync.
watch(mode, (newMode) => {
  state.value = newMode;
});

// State to display the next color mode in the tooltip
const buttonText = computed(() => {
  let text = "Switch to ";
  // We check the *current* state to determine the *next* one.
  if (state.value === "auto") text += "Light Mode";
  else if (state.value === "light") text += "Dark Mode";
  else if (state.value === "dark") text += "System Preference";
  return text;
});

/**
 * Add transition during theme change using startViewTransition
 */
function handleChangeTheme() {
  // The function to run inside the transition
  const transition = () => {
    // 1. Move to the next state in the cycle list
    next();
    // 2. Update the main color mode with the new state
    mode.value = state.value;
  };

  // Check if the browser supports View Transitions
  if (!document.startViewTransition) {
    transition();
    return;
  }
  document.startViewTransition(transition);
}
</script> -->

<template>
  <nav class="flex items-center space-x-1 md:space-x-6 font-mono">
    <!-- Navigation Menu -->
    <template v-for="link in links" :key="link.path">
      <p v-if="route.path === link.path" class="text-sm sm:text-base text-gray-400 font-medium px-2 cursor-default">
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
          <Button
            variant="outline"
            size="icon"
            class="hover:bg-accent/10 bg-transparent border-0 group"
            @click="handleChangeTheme()"
          >
            <Computer v-if="mode === 'auto'" class="size-4 sm:size-5 group-hover:animate-ring-bell" />
            <Moon v-else-if="mode === 'dark'" class="size-4 sm:size-5 group-hover:animate-ring-bell" />
            <Sun v-else-if="mode === 'light'" class="size-4 sm:size-5 group-hover:animate-ring-bell" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p class="font-mono text-sm sm:text-base">
            {{ buttonText }}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </nav>
</template>
