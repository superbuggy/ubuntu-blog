<script setup lang="ts">
import { toRefs } from "vue";
const props = defineProps({
  category: String,
  title: String,
  author: String,
  excerpt: String,
  date: Date,
  href: String,
});

const { category, title, author, excerpt, date, href } = toRefs(props);
</script>

<template>
  <div class="p-card">
    {{category}}
     <h3 v-html="title"></h3>
     {{author}}
     <p v-html="excerpt"></p>
     {{date}}
     {{href}}
  </div>
</template>

<style lang="scss" scoped>
@use "../../node_modules/vanilla-framework";
</style>
