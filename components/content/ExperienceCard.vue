<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

defineProps<{
  company: string
  title: string
  period: string
  description: string
}>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
      <p class="text-sm text-muted-foreground">{{ company }} | {{ period }}</p>
    </CardHeader>
    <CardContent>
      <slot />
      <p class="text-sm">{{ description }}</p>
    </CardContent>
  </Card>
</template>
