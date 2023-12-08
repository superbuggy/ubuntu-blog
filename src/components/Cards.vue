<script setup lang="ts">
import { ref } from "vue";
import { WPEmbeddedPostMeta, RenderedProp } from "../types/wordpress";
import Card from "./Card.vue";
const blogPosts = ref([]);
const blogUrl = `https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json`;

const response = await fetch(blogUrl);
const blogJson = await response.json();
console.log(blogJson);

blogPosts.value = blogJson.map(
  ({
    title,
    excerpt,
    date,
    link,
    featured_media,
    _embedded: { "wp:term": wpPostTerms, author: authors, "wp:featuredmedia": images },
  }: {
    title: RenderedProp;
    excerpt: RenderedProp;
    date: string;
    link: string;
    featured_media: string;
    _embedded: WPEmbeddedPostMeta;
  }) => ({
    title: title.rendered,
    excerpt: excerpt.rendered,
    date: new Date(date),
    link: link,
    author: authors?.[0]?.name,
    authorLink: authors?.[0]?.link,
    imgUrl: featured_media,
    altText: images?.[0]?.alt_text,
    wpPostTerms,
    topic: wpPostTerms
      ?.flat()
      .find((term) => ["group", "post_tag"].includes(term.taxonomy))?.name,
  })
);
console.log(blogPosts.value);
console.log("blogPosts.value");
</script>

<template>
  <div class="row">
    <Card
      v-for="(
        { title, excerpt, date, link, author, authorLink, imgUrl, topic, altText }, index
      ) in blogPosts"
      :key="index"
      :title="title"
      :author="author"
      :authorLink="authorLink"
      :excerpt="excerpt"
      :date="date"
      :topic="topic"
      :href="link"
      :imgUrl="imgUrl"
      :altText="altText"
    />
  </div>
</template>
