<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Computer, Moon, Sun } from "lucide-vue-next";

const route = useRoute();

const links = [
  { path: "/about/", label: "About" },
  { path: "/project/", label: "Project" },
  { path: "/experience/", label: "Experience" },
];

function normalizePath(path: string) {
  if (!path || path === "/") return "/";
  return path.replace(/\/+$/, "") || "/";
}

function isActive(path: string) {
  return normalizePath(route.path) === normalizePath(path);
}

const mode = useColorMode({
  disableTransition: false,
  emitAuto: true,
});

const { state, next } = useCycleList(["auto", "light", "dark"] as const, {
  initialValue: mode,
});

watchEffect(() => (mode.value = state.value));

const buttonText = computed(() => {
  let text = "Switch to ";
  if (state.value === "auto") text += "Light Mode";
  else if (state.value === "light") text += "Dark Mode";
  else if (state.value === "dark") text += "System Preference";
  return text;
});

const themeIcon = computed(() => {
  if (state.value === "auto") return "auto";
  if (state.value === "dark") return "dark";
  return "light";
});

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

function handleChangeTheme() {
  if (!document.startViewTransition) {
    next();
    return;
  }
  document.startViewTransition(next);
}
</script>

<template>
  <nav class="flex items-center space-x-2 md:space-x-8 font-mono">
    <NuxtLink
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="text-sm font-medium px-2 py-1 transition-colors"
      :class="
        isActive(link.path)
          ? 'text-foreground cursor-default'
          : 'text-muted-foreground hover:text-foreground'
      "
      :aria-current="isActive(link.path) ? 'page' : undefined"
    >
      {{ link.label }}
    </NuxtLink>

    <TooltipProvider :delay-duration="0" disable-closing-trigger>
      <Tooltip>
        <TooltipTrigger as-child>
          <button
            type="button"
            class="text-muted-foreground hover:text-foreground transition-colors p-1 group"
            @click="handleChangeTheme()"
          >
            <ClientOnly>
              <Computer v-if="themeIcon === 'auto'" class="size-4 group-hover:animate-ring-bell" />
              <Moon v-else-if="themeIcon === 'dark'" class="size-4 group-hover:animate-ring-bell" />
              <Sun v-else class="size-4 group-hover:animate-ring-bell" />
              <template #fallback>
                <Computer class="size-4" />
              </template>
            </ClientOnly>
            <span class="sr-only">Toggle theme</span>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p class="font-mono text-xs">{{ mounted ? buttonText : "Toggle theme" }}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </nav>
</template>
