<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div>
        <h1>TIMEFALL</h1>
        <p>Timefall is a tool that allows you to instantly render an interactive
          timeline from any valid YAML resource publicly available on the internet.
          There's no build step or backend server process required; it all executes
          within the browser. Simply feed it a URL and click "Go" to start.
        </p>
      </div>
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
