<script setup>
  const props = defineProps({
    date: String,
    title: String,
    description: String,
    body: String,
    links: Array,
    actions: Array
  })

  const genColor = () => {
    const colors = [
      '#990000',
      '#000099',
      '#009900',
      '#999900',
      '#990099',
      '#009999',
      '#999999'
    ]
    console.log(colors);
    return colors[Math.floor(Math.random() * colors.length)]
  }


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
    <div class="col-span-2 absolute inset-x-0 right-0">
      <time datetime="{{ date }}">{{ date }}</time>
    </div>

    <!-- Title Div -->
    <article class="col-start-2 col-span-4">
      <hgroup>
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </hgroup>
      <p>{{ body }}</p>
      <div v-for="action in actions">
        <section class="event-action" style="border-left: 8px solid {{ genColor() }}">
          <time class="col-span-2 absolute inset-x-0 right-0" datetime="{{ action.date }}">{{ action.date }}</time>
          <h4>{{ action.description }}</h4>
          <p>{{ action.body }}</p>
          <aside>
            <ul>
              <li v-for="link in action.links">
                <a :href="link.url" target="_blank">{{ link.title }}</a>
              </li>
            </ul>
          </aside>
        </section>
      </div>
      <aside>
        <ul>
          <li v-for="link in links">
            <a :href="link.url" target="_blank">{{ link.title }}</a>
          </li>
        </ul>
      </aside>
    </article>
  </div>
</template>

<style scoped>
.event-action {
  /* border-left: 8px solid #990000; */
  padding-left: 4rem;
  margin-left: -1.5rem;
  padding-bottom: 1rem;
}

.event-action h4 {
  padding-top: 1rem;
  color: #000;
  font-weight: semi-bold;
  font-size: 115;
}

article {
  border-left: 1px solid #ccc;
  padding-left: 1rem;
  margin-left: 1rem;
  padding-bottom: 2rem;
}

article hgroup h3 {
  font-weight: semi-bold;
  font-size: 150%;
  color: #000;
}

article hgroup p {
  font-weight: semi-bold;
  font-size: 115%;
  color: #000;
}

article {
  color: #666;
}

article a {
  --tw-text-opacity: 1;
  color: rgba(37, 99, 235, var(--tw-text-opacity));
}

article a:hover {
  --tw-text-opacity: 1;
  color: rgba(96, 165, 250, var(--tw-text-opacity));
}

article aside ul {
  list-style: upper-roman;
  padding-left: 2rem;
}
</style>
