<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import YAML from 'yaml';
import TimelineEvent from './TimelineEvent.vue';
const props = defineProps({
  yamlUrl: String
});
const historicalEvents = ref(null);
const iteratedEvents = ref(null);
// const historicalEvents = reactive({timeline: {events: [ {date: '', title: '', description: '', body: '', links: [{title:'', url:''}]}]}}); // Empty object to start

onMounted(() => {
  iteratedEvents.value = axios.get(props.yamlUrl)
    .then(response => {
      historicalEvents.value = YAML.parse(response.data); // The overall "timeline" root object
      return historicalEvents.value.timeline.events;
    })
    .catch(error => {
      console.error("Error getting data:", error);
    });
});

// onBeforeUpdate(() => {
//   if (historicalEvents.length > 0) {
//     iteratedEvents = historicalEvents.timeline.events.sort((a, b) => {
//       return new Date(a.date) - new Date(b.date);
//     });
//   }
// });

</script>

<template>
  <div class="timeline">
    <h2>Timeline</h2>
    <section>
      <TimelineEvent ref="iteratedEvents" v-for="event in iteratedEvents" :key="event.title" :date="event.date" :title="event.title" :description="event.description" :body="event.body" :links="event.links" />
    </section>
  </div>
</template>

<style scoped>
</style>
