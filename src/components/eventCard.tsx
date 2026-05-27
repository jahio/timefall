import { currentDate, formatDate } from '../lib/utilityFunctions';
import { type TimefallEvent, type Link, type Citation } from '../lib/TimefallEvent';
import { constructFrom } from 'date-fns';
import './eventCard.css';

export function EventCard({ evt }: { evt: TimefallEvent }) {
  const today = currentDate();
  console.log("The event is:", evt);

  return (
    <>
      <div className="tfDateHeader">
        {
          (evt.date != undefined) ? formatDate(constructFrom(today, evt.date)) : formatDate(today)
        }
      </div>
      <h1 className="tfEventHeader">
        {evt.title}
      </h1>
      <p className="tfEventDescription">
        {evt.description}
      </p>
      <p className="tfEventDescription">
        {evt.body}
      </p>
      <ul className="tfLinks">
        {
          evt.links?.map((l: Link) => (
            <li key={Math.random() * Math.random()}><a href={l.url}>{l.title}</a></li>
          ))
        }
      </ul>
      <ul className="tfCitations">
        {
          evt.citations?.map((c: Citation) => (
            <li>
              {c.author}. <em>{c.source_title}.</em><br />
              {c.publisher}, {c.publication_date}. {c.source_location}.<br />
              {/* TODO: Differentiate type of source, utilize diff. component upon source type [book, journal article, website, news article, etc.] */}
            </li>
          ))
        }
      </ul>
      {
      /*
        Now: The "actions" corresponding to an event, if any exist.
        An "Action" is basically a sub-event pertaining to the overall event. Think of an
        "event" as a container that represents the main thing that goes down in history, and
        the "actions" as the specific individuated actions taken pertaining thereto.

        For example, consider a large series of battles in a war. Usually "battles" lasted
        for days, sometimes weeks or months, unlike today. Or, diplomatic missions could last
        perhaps even years (these should not be an "event" in Timefall, break that up); political
        and/or legal conventions as well could last months. Negotiations, etc. as well.

        And "action" is a notable instance that petained to that event during its happening.

        So during the "Battle of Bunker Hill", the individual pushes made by the English could
        be "actions". The discussions made by the rebels of, "should we take Breeds or Bunker?"
        could be an action. When the British finally took the hill, that was an action, and when
        they executed Joseph Warren, that could be a separate action.

        Four very notable instances of historical relevance, all pertaining to the same major
        event. Hence the difference between "actions" and "events". An "Event" can have multiple
        "actions".
      */
      }
    </>
  )
}
