<script setup lang="ts">
import { useColorMode, useCycleList } from "@vueuse/core";
import { Computer, Moon, Sun } from "lucide-vue-next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  <nav class="flex min-w-0 items-center gap-1 sm:gap-2 md:gap-8 font-mono justify-end">
    <NuxtLink
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="rounded-sm px-1.5 py-3 text-xs font-medium whitespace-nowrap transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:px-2 sm:text-sm"
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
            :aria-label="mounted ? buttonText : 'Toggle theme'"
            class="group grid size-11 shrink-0 place-items-center rounded text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:size-10"
            @click="handleChangeTheme()"
          >
            <ClientOnly>
              <Computer v-if="themeIcon === 'auto'" class="size-4 group-hover:animate-ring-bell" />
              <Moon v-else-if="themeIcon === 'dark'" class="size-4 group-hover:animate-ring-bell" />
              <Sun v-else class="size-4 group-hover:animate-ring-bell" />
              <template #fallback> <Computer class="size-4" /> </template>
            </ClientOnly>
          </button>
        </TooltipTrigger>
        <TooltipContent> <p class="font-mono text-xs">{{ mounted ? buttonText : "Toggle theme" }}</p> </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </nav>
</template>
