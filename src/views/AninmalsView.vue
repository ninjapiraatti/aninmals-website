<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Aninmals</h1>
    <div class="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <Card
      v-for="aninmal in filteredAninmals"
      :key="aninmal.name"
      :title="aninmal.name"
      class="aspect-square"
      :style="`
        background: url(/assets/${aninmal.image}) no-repeat center center;
        background-size: cover;
      `"
      >
        <template #title>
          <h3>{{ aninmal.name }}</h3>
        </template>
        <template #content>
          <p>{{ aninmal.realAnimal }}</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import { ANINMALS } from '../static.ts';
import { computed } from '@vue/reactivity';

const filteredAninmals = computed(() => {
  return ANINMALS.filter(aninmal => aninmal.image.length > 0);
});
</script>