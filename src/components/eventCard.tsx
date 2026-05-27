import { currentDate, formatDate } from '../lib/utilityFunctions';
import { type TimefallEvent, type Link, type Citation } from '../lib/TimefallEvent';
import { constructFrom } from 'date-fns';
import './eventCard.css';

export function EventCard({ evt }: { evt: TimefallEvent }) {
  const today = currentDate();

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
    </>
  )
}
