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
  <div class="grid grid-cols-6 gap-2 relative">
    <!-- Date Div -->
    <div class="col-span-2 relative inset-x-0 right-0">
      <time class="inset-x-0 right-0 absolute" datetime="{{ date }}">{{ date }}</time>
    </div>

    <!-- Title Div -->
    <article class="col-start-2 col-span-4">
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
article {
  border-left: 1px solid #ccc;
  padding-left: 1rem;
  margin-left: 1rem;
}
</style>
