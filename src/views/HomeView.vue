<script setup>
import Timeline from '../components/Timeline.vue'
</script>

<template>
  <main>
    <div class="container">
      <div class="flex flex-row items-center pt-8 pb-6">
        <h1 class="text-4xl drop-shadow-md">TIMEFALL</h1>
        <p class="text-lg subpixel-antialiased font-light text-slate-500 pl-12 pt-1">
          Paste a URL to properly-formatted YAML. Get a timeline in your browser.
          <a class="pl-2 text-sm" href="https://github.com/jahio/timefall">Project Homepage</a>
        </p>
      </div>
    </div>

    <Timeline />
  </main>
</template>

<style scoped>
</style>
