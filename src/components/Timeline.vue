<script>
import YAML from 'yaml';
import TimelineEvent from './TimelineEvent.vue';
import TimelineService from '@/services/TimelineService';

export default {
  name: 'Timeline',
  components: {
    TimelineEvent
  },
  data() {
    return {
      timelineEvents: [],
      timelineTitle: '',
      timelineIntro: '',
      timelineURI: '',
      cachedTimelineURI: '' // So we can compare and see if something changed,
                            // helps prevent infinite loops
    }
  },
  async created() {
    this.render();
  },
  // async mounted() {
  //   this.render();
  // },
  async updated() {
    this.render();
  },
  methods: {
    async render() {
      if(this.timelineURI && this.timelineURI.length > 0 && this.timelineURI != this.cachedTimelineURI) {
        console.log(this.timelineURI);
        const timeline = await TimelineService.get(this.timelineURI)
          .then(response => {
            return YAML.parse(response.data); // The overall "timeline" root object
        })
          .catch(error => {
            console.error("Error getting data:", error);
            // Bust the cache so we can try again
            this.cachedTimelineURI = '';
        });
        console.log(timeline);
        this.timelineEvents = timeline.timeline.events;
        this.timelineTitle = timeline.timeline.title;
        this.timelineIntro = timeline.timeline.intro;

        // Sort this.timelineEvents by date:
        this.timelineEvents.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });

        // If we get this far, the cache should be updated
        this.cachedTimelineURI = this.timelineURI;
      }
    },
    onSubmit() {
      this.$emit('update:timelineURI', this.timelineURI);
      console.log(this.timelineURI);
    }
  }
}

</script>

<template>
  <div class="grid justify-items-left">
    <input type="text" v-model="timelineURI" placeholder="Paste URL here or copy/paste the sample below for a demo featuring the American Revolution"
      class="text-sm text-slate-500 subpixel-antialiased font-light w-full rounded-lg border border-sky-300 m-2 p-2" />
    <p class="text-sm subpixel-antialiased font-light text-slate-500 pl-4">Sample URL/Demo (copy/paste above):
      <pre class="text-slate-500 text-xs text-left pt-2 pl-4 pb-12 subpixel-antialiased">https://gist.githubusercontent.com/jahio/5fb101ceef40eb5e97406ba9f325173f/raw/american-revolution-timeline.yaml</pre>
    </p>
  </div>
  <section class="md:container md:mx-auto">
    <h1 class="text-5xl drop-shadow-lg subpixel-antialiased font-semibold">{{ timelineTitle }}</h1>
    <p class="text-justify subpixel-antialiased font-extralight pt-10">{{ timelineIntro }}</p>
    <hr class="drop-shadow-md border border-zinc-200 mt-10 mb-10 ml-16 mr-16" />
    <TimelineEvent ref="timelineEvents" v-for="event in timelineEvents" :key="event.title + event.date" v-bind="event" />
  </section>
</template>

<style scoped>
</style>
