import yaml from 'js-yaml';
import axios from 'axios';
import { createTimefallEvent, type TimefallTimeline, type TimefallEvent } from './TimefallEvent';

export function bootstrapDefaultTimefall(): TimefallTimeline {
  const evt: TimefallEvent = {
    title: "Enter a URL in the box above",
    description: "Or click the link for a demo",
    body: "Then click the Fetch Data button. This item will disappear and the navigation will populate, letting you browse the list of years or dates as present in the data. Timefall has support for 'actions' within events, citations, links and references. See the documentation (link at top of page) for more details.",
    links: [
      { title: "Documentation", url: 'https://github.com/jahio/timefall' },
      { title: "Example YAML File", url: "https://raw.githubusercontent.com/jahio/timefall/refs/heads/main/public/demo.yaml" },
      { title: "Source Code", url: 'https://github.com/jahio/timefall' }
    ]
  }
  const tfEvent = createTimefallEvent(evt);
  const tfDefault: TimefallTimeline = {
    title: "Browse Historical Events with Ease",
    intro: "By isolating presentation from the data that comprises a timeline of historical events, Timefall allows anyone to create their own curated and in-depth series of events and share that data with others for viewing through this tool and enhancement through other well-known tools. Because Timefall works with well-known, plain-text-only formats, anyone can create a timeline by following the documented format. Sharing is fast and easy by just copying a URL and pasting it in your favorite chat application.",
    events: [tfEvent]
  }
  console.log(tfDefault);
  return tfDefault;
}

export async function getTimefallData(url: string): Promise<Record<string, unknown>> {
  try {
    const response = await axios.get(url, {
      headers: {}
    });
    // TODO: Try YAML -> JSON or examine filename/mime type
    // to figure out which to try first, fall back to the
    // other type, then present an error to the user if
    // it doesn't parse clean.
    const tfData = yaml.load(response.data);
    console.log(tfData);
    return tfData as Record<string, unknown>;
  }
  catch(error) {
    console.log(error);
    throw error;
    // TODO: Implement user-facing error handler
  }
  finally {}
}
