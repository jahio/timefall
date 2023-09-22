<script setup>
  const props = defineProps({
    date: String,
    title: String,
    description: String,
    body: String,
    references: Array,
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
        <h3 class="text-2xl" v-html="title"></h3>
        <p class="" v-html="description"></p>
      </hgroup>
      <p class="subpixel-antialiased font-extralight pt-10" v-html="body"></p>
      <div v-for="reference in references">
        <section class="event-reference">
          <p>{{ reference.title }}</p>
          <p>{{ reference.citation }}</p>
        </section>
      </div>
      <div v-for="action in actions">
        <section class="event-action">
          <time class="col-span-2 absolute inset-x-0 right-0" datetime="{{ action.date }}">{{ action.date }}</time>
          <h4 v-html="action.description"></h4>
          <p class="subpixel-antialiased font-extralight pt-10" v-html="action.body"></p>
          <div v-for="areference in action.references">
            <section class="action-reference">
              <p>{{ areference.title }}</p>
              <p>{{ areference.citation }}</p>
            </section>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<style scoped>
</style>
