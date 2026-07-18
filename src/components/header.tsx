

// import { currentDate, formatDate } from '../lib/utilityFunctions';
// import { type TimefallEvent, type Link, type Citation } from '../lib/TimefallEvent';
// import { constructFrom } from 'date-fns';
// import './eventCard.css';

// export function EventCard({ evt }: { evt: TimefallEvent }) {
//   const today = currentDate();
//   console.log("The event is:", evt);

export function Header() {
  return (
    <>
      <button className="tf-menu-btn" data-action="menu-open" aria-label="Open navigation"><span></span></button>
        <div className="tf-brand">
          <div className="tf-mark"><div className="l"></div><div className="d1"></div><div className="d2"></div></div>
          <div>
            <div className="tf-word">Time<b>fall</b></div>
            <div className="tf-tag">Living Timeline</div>
          </div>
        </div>
        <div className="tf-spacer"></div>
        <div className="tf-controls">
          <div className="tf-toggles">
            <div className="tf-seg" id="tf-vibe">
              <button data-action="set-vibe" data-vibe-opt="editorial">Editorial</button>
              <button data-action="set-vibe" data-vibe-opt="technical">Technical</button>
              <button data-action="set-vibe" data-vibe-opt="modern" className="is-active">Modern</button>
            </div>
            <button className="tf-themebtn" data-action="toggle-theme" id="tf-theme"><span className="g">☾</span>Dark</button>
          </div>
          <div className="tf-load">
            <input id="tf-url" type="text" spellCheck="false" placeholder="https://example.com/timeline.yaml" />
            <div className="tf-load-row">
              <button className="tf-btn-primary" data-action="load-url">Load Timeline</button>
              <button className="tf-btn-secondary" data-action="load-example">Load Example</button>
            </div>
            <div className="tf-status" id="tf-status"></div>
          </div>
        </div>
    </>
  )
}
