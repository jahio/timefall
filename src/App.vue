<script setup>
import { RouterLink, RouterView } from 'vue-router'

const historicalEvents = [
  // This is dummy historical data for now, just to bootstrap the DSL
  // and bat around some ideas while I get this thing going...
  {
    date: '1775-04-18',
    title: "The Regulars are Coming Out (The British Are Coming)",
    description: "British Soldiers Begin Overnight Search for Munitions",
    body: "British soldiers from the 5th Regiment of Foot begin an overnight search for munitions and Whig sympathizers in the cities of Lexington and Concord, Massachusetts, west of Boston. Looking for John Hancock and Samuel Adams, who had already fled, acting on intelligence received in advance of the British search, Paul Revere and William Dawes take to the countryside on horseback to quietly warn local militia of the incoming British advance.",
    links: [
      {
        title: "Wikipedia: Battles of Lexington and Concord",
        url: "https://en.wikipedia.org/wiki/Battles_of_Lexington_and_Concord"
      },
      {
        title: "Library of Congress: Lexington and Concord",
        url: "https://www.loc.gov/rr/program/bib/ourdocs/lexi.html"
      }
    ]
  },
  {
    date: '1770-03-05',
    title: 'The Boston Massacre (Incident on King Street)',
    description: 'British Soldiers Fire on an unarmed crowd in Boston',
    body: "An accidental weapons discharge in a moment of furious political intensity leads to the unintended deaths of five civilians at the hands of British soldiers. The event is later used as propaganda by the Sons of Liberty to incite anti-British sentiment in the colonies.",
    links: [
      {
        title: "Wikipedia: Boston Massacre",
        url: "https://en.wikipedia.org/wiki/Boston_Massacre"
      },
      {
        title: "Library of Congress: Boston Massacre",
        url: "https://www.loc.gov/rr/program/bib/ourdocs/massacre.html"
      }
    ]
  },
  {
    date: '1776-07-04',
    title: 'Declaration of Independence',
    description: 'The United States issues its Declaration of Independence',
    body: 'TODO: Body text here',
    links: [
      {
        title: 'Wikipedia',
        url: 'https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence'
      },
      {
        title: 'National Archives',
        url: 'https://www.archives.gov/founding-docs/declaration-transcript'
      },
      {
        title: 'Library of Congress',
        url: 'https://www.loc.gov/rr/program/bib/ourdocs/DeclarInd.html'
      }
    ]
  },
  {
    date: '1775-04-19',
    title: 'Battle of Lexington and Concord',
    description: 'The first military engagements of the American Revolution',
    body: 'After an overnight search for munitions and Whig sympathizers in Concord, Massachusetts, British soldiers from the 5th Regiment of Foot engage with colonial militia at Lexington and Concord. The British retreat to Boston, suffering staggering casualties along the way.',
    links: [
      {
        title: 'Wikipedia: Battles of Lexington and Concord',
        url: 'https://en.wikipedia.org/wiki/Battles_of_Lexington_and_Concord'
      },
      {
        title: 'Library of Congress: Lexington and Concord',
        url: 'https://www.loc.gov/rr/program/bib/ourdocs/lexi.html'
      }
    ]
  }
];
console.log(historicalEvents);
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
