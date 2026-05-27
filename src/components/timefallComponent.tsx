import { type TimefallEvent } from '../lib/TimefallEvent';
import { EventCard } from './eventCard';

export function TimefallComponent({ title, intro, events }: { title: string, intro: string, events: TimefallEvent[] }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{intro}</p>
      {events.map((evt: TimefallEvent) => (
        <EventCard evt={evt} key={Math.random()+Math.random()} />
      ))}
    </>
  )
  // {defaultTimefall.events.map((evt: TimefallEvent) => (
  //           <EventCard evt={evt} key={`${Math.random()*Math.random()}${Math.random()}`} />
  //         ))}
}
