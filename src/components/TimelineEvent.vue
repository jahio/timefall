<script setup>
  const props = defineProps({
    date: String,
    title: String,
    description: String,
    body: String,
    links: Array
  })
</script>

<template>
  <article>
    <header>
      <h3>{{ title }}</h3>
      <time datetime="{{ date }}">{{ date }}</time>
      <p>{{ description }}</p>
    </header>
    <p>{{ body }}</p>
    <footer>
      <ul>
        <li v-for="link in links">
          <a :href="link.url">{{ link.title }}</a>
        </li>
      </ul>
    </footer>
  </article>
</template>

<style scoped>
</style>
