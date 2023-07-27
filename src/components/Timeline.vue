<script>
import YAML from 'yaml';
import TimelineEvent from './TimelineEvent.vue';
import TimelineService from '@/services/TimelineService';

export default {
  name: 'Timeline',
  components: {
    TimelineEvent
  },
  props: {
    yamlUrl: String
  },
  data() {
    return {
      timelineEvents: [],
      timelineTitle: ''
    }
  },
  async created() {
    console.log(this.yamlUrl);
    const timeline = await TimelineService.get(this.yamlUrl)
      .then(response => {
        return YAML.parse(response.data); // The overall "timeline" root object
    })
      .catch(error => {
        console.error("Error getting data:", error);
    });
    console.log(timeline);
    this.timelineEvents = timeline.timeline.events;
    this.timelineTitle = timeline.timeline.title;

    // Sort this.timelineEvents by date:
    this.timelineEvents.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });

  }
}

</script>

<template>
  <div class="timeline">
    <h1>{{ timelineTitle }}</h1>
    <section class="md:container md:mx-auto">
      <TimelineEvent ref="timelineEvents" v-for="event in timelineEvents" :key="event.title" :date="event.date" :title="event.title" :description="event.description" :body="event.body" :links="event.links" :actions="event.actions" />
    </section>
  </div>
</template>

<style scoped>
</style>
