import { currentDate, formatDate } from '../utilityFunctions';
import './eventCard.css';

function EventCard({ evt }: { evt: unknown }) {
  const today = currentDate();
  if(evt != null) { console.log(evt); }

  return (
    <>
      <div className="tfDateHeader">
        {formatDate(today)}
      </div>
      <h1 className="tfEventHeader">
        Enter a URL in the box above
      </h1>
      <p className="tfEventDescription">
        Enter a URL in the box above, (or click the link
        below it for a demo to be loaded) then click the
        &quot;Fetch Data&quot; button. If your data is
        properly formatted, a navigable, chronological
        list across time will appear on your left and
        a list of events with descriptions from that
        data will appear here instead.
      </p>
      <p className="tfEventDescription">
        See the below links for additional information.
      </p>
      <ul className="tfLinks">
        <li>Documentation</li>
        <li>Data Examples</li>
        <li>Load Example Timeline</li>
        <li>Source Code</li>
      </ul>
      <ul className="tfCitations">
        <li className="tfCitationItem">
          TODO: Citations
        </li>
        <li className="tfCitationItem">
          Citations could be difficult due to multiple
          formatting options (APA, MLA, etc.). Should
          this be a feature for a v1, or save that for
          future iterations?
        </li>
      </ul>
    </>
  )
}

export default EventCard;
