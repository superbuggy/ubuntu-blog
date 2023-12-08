<script setup lang="ts">
import { toRefs } from "vue";
const props = defineProps({
  topic: String,
  title: String,
  author: String,
  authorLink: String,
  excerpt: String,
  date: Date,
  href: String,
  imgUrl: String,
  altText: String,
});

const { topic, title, author, excerpt, date, href, imgUrl, altText } = toRefs(props);

const dateString = date?.value?.toLocaleString("default", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
</script>

<template>
  <div class="p-card col-4">
    <header>
      {{ topic }}
    </header>
    <a :href="href">
      <h3 v-html="title"></h3>
    </a>
    <img :src="imgUrl" :alt="altText" />
    <p class="date">
      By <a :href="authorLink">{{ author }}</a> on {{ dateString }}
    </p>
    <p v-html="excerpt"></p>
  </div>
</template>

<style scoped>
div.p-card {
  border-top: 4px solid #a87ba0;
  border-radius: 0.25rem;
  box-shadow: 0 0 2rem 0 rgba(0,0,0,0.2);
}
header,
p.date {
  padding-bottom: 1rem;
  border-bottom: 1px dotted;
}
header {
  text-transform: uppercase;
}
</style>
