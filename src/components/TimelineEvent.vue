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
  <!-- The overall structure (bad ascii art) should look like this:

    [Date Goes here]    O    Title of Event (Click Link to Expand Details)
                        |    Subtitle Description
                        |    Full description appears here after clicking linked title
                        |    Click title again to collapse to just title and subtitle
                        |    (First two lines only visible)
                        |
    [Date Goes here]    O    Title of Event (Click Link to Expand Details)
                        |    Subtitle Description
                        |    Full description appears here after clicking linked title
                        |    Click title again to collapse to just title and subtitle
                        |    (First two lines only visible)
                        |
  -->
  <!-- Outer Container for the overall item row -->
  <div class="flex justify-around space-x-12 md:space-x-8">
    <!-- Date Div -->
    <div class="flex-grow">
      <time class="flex-grow" datetime="{{ date }}">{{ date }}</time>
    </div>

    <!-- The Dot -->
    <div class="dot">
      O
    </div>

    <!-- Title Div -->
    <article>
      <h3>{{ title }}</h3>
      <h4>{{ description }}</h4>
      <p>{{ body }}</p>
      <footer>
        <ul>
          <li v-for="link in links">
            <a :href="link.url">{{ link.title }}</a>
          </li>
        </ul>
      </footer>
    </article>
  </div>
</template>

<style scoped>
</style>
