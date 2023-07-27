# Timefall

This is a browser-based tool to render an interactive timeline of events from a YAML file
somewhere on the public internet. The use case I had for this is needing a way to reference
research I was compiling for a historical fiction novel I'm working on, and I wasn't quite
satisfied with whatever tools I was finding at the time (I'm sure there are probably some good
ones out there, but I sadly just haven't run into them yet) so I rolled my own.

The idea: you give this thing some properly-formatted YAML, and it builds a timeline of events
on the fly in your browser. All you gotta do is give it the URL and boom, job done.

Ideal for students, professors, researchers, historians, journalists, and so on.

For my use case, I'm working on (and occasionally adding to - as time allows) my research using
this GitHub gist URL, which is so far the default in the source code, though in some future
state I'll probably change this to be something a little more...example-ish and less ethnocentric.
That said, this should give you some rough idea of how I'm considering the logical structure of
the data itself, at least for the time being:

https://gist.githubusercontent.com/jahio/5fb101ceef40eb5e97406ba9f325173f/raw/american-revolution-timeline.yaml

## Status: Pre-Alpha/Incomplete But Useable

Right now it's very bare bones and it doesn't have all the bells and whistles I'd like it to have yet,
not by a long shot. It's not the prettiest thing to look at (it's quite Spartan), but if you give it
the right data and run `npm run build` with a valid environment on your local machine, having of course
swapped my URL in the code for your own with valid YAML and it allows your machine to fetch it (no issues
of CORS or anything like that), it should work.

In the future I want to give the user a text box where they can copy/paste any URL they want, hit a button,
and there you have it fetch it for you without having to go and re-run the build or tweak any code.

More importantly though I'd like to make this more "interactive" by having the timeline itself be clickable,
such that "actions" within an event, should they be present, aren't shown by default, but if you click the event,
then it "collapses" the view and shows the sub-events - those "actions" by the way I'm calling them in the data -
beneath the main event in the timeline. This way you can click to "snap up" the events you're not interested in
referencing at the moment and click to expand the ones you are actively looking at.

But that's all on the TODO list for future-me. That guy is so screwed, he's got like soooooo much stuff he's
gotta do. Oh man, so much stuff...

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
