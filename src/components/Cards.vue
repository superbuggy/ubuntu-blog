<script setup lang="ts">
import { ref } from "vue";
import { WPEmbeddedPostMeta, RenderedProp } from "../types/wordpress";
import Card from "./Card.vue";
const blogPosts = ref([]);
const blogUrl = `https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json`;

const response = await fetch(blogUrl);
const blogJson = await response.json();
console.log(blogJson);

blogPosts.value = blogJson.map(({ title, excerpt, date, link,
  _embedded: { "wp:term": wpPostTerms, author: authors } }: { title: RenderedProp; excerpt: RenderedProp; date: string; link: string; _embedded: WPEmbeddedPostMeta }) => ({
  title: title.rendered,
  excerpt: excerpt.rendered,
  date: new Date(date),
  link: link,
  author: authors[0]?.name,
  topic: wpPostTerms.find((term) => term.taxonomy === "topic")?.name,
}));
console.log(blogPosts.value);
console.log("blogPosts.value");
</script>

<template>
  <Card
    v-for="({ title, excerpt, date, link, topic }, index) in blogPosts"
    :key="index"
    :title="title"
    :author="'neep'"
    :excerpt="excerpt"
    :date="date"
    :topic="topic"
    :href="link"
  />
</template>

<style scoped></style>
