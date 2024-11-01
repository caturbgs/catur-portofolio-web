<script setup lang="ts">
import { cn } from "@/lib/utils";

const route = useRoute();
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-4 lg:space-x-10', $attrs.class ?? '')"
  >
    <a
      href="/"
      class="text-base font-medium transition-colors hover:text-primary"
      :class="{ 'text-primary': route.path === '/' }"
    >
      Home
    </a>
    <a
      href="/about"
      class="text-base font-medium text-black transition-colors hover:text-primary"
      :class="{ 'text-primary': route.path === '/about' }"
    >
      About
    </a>
    <a
      href="/faq"
      class="text-base font-medium text-black transition-colors hover:text-primary"
      :class="{ 'text-primary': route.path === '/faq' }"
    >
      FAQs
    </a>
    <a
      href="/contact-us"
      class="text-base font-medium text-black transition-colors hover:text-primary"
      :class="{ 'text-primary': route.path === '/contact-us' }"
    >
      Contact Us
    </a>
  </nav>
</template>
