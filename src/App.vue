<script setup lang="ts">
import Cards from './components/Cards.vue'
</script>
<template>
  <Suspense>
    <Cards
    />
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style scoped></style>
