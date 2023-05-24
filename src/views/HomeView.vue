<script setup>
import { ref } from 'vue';
import Timeline from '../components/Timeline.vue'
// This URL below is a starter URL with sample data. Feed it your own! Any valid YAML with the right
// structural shape will work. See the sample for an idea of what's expected.
const yamlUrl = ref('https://gist.githubusercontent.com/jahio/5fb101ceef40eb5e97406ba9f325173f/raw/a26cc28c21cf8c6054fe23d3128a52ff4db91be1/american-revolution-timeline.yaml');
</script>

<template>
  <main>
    <Timeline :yamlUrl="yamlUrl" />
  </main>
</template>
