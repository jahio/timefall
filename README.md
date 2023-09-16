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

## Status: Incomplete and Ugly, But it Works

Let's just get this right out in the open: this thing ain't pretty yet, not by a long shot. But it does work.
In dev mode, anyway. I haven't even tried compiling and minifying assets for production yet, much less a deploy
pretty much...anywhere. But short of that, "it works on my machine" as goes the old addage.

Provided a remote host that allows for public resource retrieval of a properly-formatted YAML file (see above
for an example; no documentation available yet, I'm still iterating on the DSL and feature set as I go, honestly),
you can pop the URL in a plain-text box and the JS will go fetch it in real time, parse the data into the DOM and
render your timeline. It'll just be kinda plain and fugly to look at. I'm not much of a designer, you see. (In fact,
at some point I'd love to provide a facility for specifying design specifics - colors, maybe even layout - inside
the YAML itself, but I haven't even got remotely that far in thinking. The data is the main thing. Walk before run.
Someday, maybe. Contributions welcome. Particularly if you've an eye for UX, unlike myself.)

## Project Setup

### Clone it, then:

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

### Additional Tooling

In dev mode it may be useful to have an example yaml file to play around with, so I've added one to this repo along
with a `.yamlfmt` file. What's that, you may ask? Well, it's a configuration file for an open source CLI tool from
Google by the same name: [yamlfmt](https://github.com/google/yamlfmt). See [my comments in the example](public/example.yaml)
for more details, but basically it'll help you lint your YAML for formatting bugs and fix weirdness (non-printing chars)
from copy/pasta, unify formatting mistakes, etc. Decent tool all around. The dotfile is a very basic configuration that
tool will read automatically when you're working in that directory on files in that same directory.
