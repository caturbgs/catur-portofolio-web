<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

defineProps<{
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  url?: string
}>()
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>{{ title }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-sm text-muted-foreground">{{ description }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tech in technologies" :key="tech" class="bg-secondary text-secondary-foreground rounded-md px-2 py-1 text-xs">
          {{ tech }}
        </span>
      </div>
      <a v-if="url && url !== '#'" :href="url" target="_blank" rel="noopener noreferrer" class="mt-4 block">
        <Button variant="outline" size="sm">View Project</Button>
      </a>
    </CardContent>
  </Card>
</template>
