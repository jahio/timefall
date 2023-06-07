<script setup>
import { ref } from 'vue';
import Timeline from '../components/Timeline.vue'
// This URL below is a starter URL with sample data. Feed it your own! Any valid YAML with the right
// structural shape will work. See the sample for an idea of what's expected.
const yamlUrl = ref('https://gist.githubusercontent.com/jahio/5fb101ceef40eb5e97406ba9f325173f/raw/american-revolution-timeline.yaml');
// const yamlUrl = ref('http://localhost:5173/usa.yaml');
</script>

<template>
  <main>
    <Timeline :yamlUrl="yamlUrl" />
  </main>
</template>
