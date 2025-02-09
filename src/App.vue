<template>
  <h1>Henlo</h1>
  <Slider v-model="value" class="w-56" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Slider from 'primevue/slider';

const value = ref(50);
</script>