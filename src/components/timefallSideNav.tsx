import { type TimefallEvent } from '../lib/TimefallEvent';

export function TimefallSideNav( { events }: { events: TimefallEvent[] }) {
  return (
    <>
      <aside className="tf-sidebar" id="tf-sidebar">
        <div className="tf-sidebar__top">
            <button className="tf-sidebar__close" data-action="menu-close" aria-label="Close navigation">&times;</button>
            <input className="tf-search" type="text" spellCheck="false" placeholder="Search Events..." />
            { events && events.length > 0 ? (
            <button className="tf-sortbtn" data-action="toggle-sort" id="tf-sort">
                  <span>Oldest first</span>
                  <span className="a">↑</span>
            </button>
            ) : (
              <div style={{ display: 'none' }}></div>
            )}

          </div>
          <nav className="tf-tree tf-scroll" id="tf-tree"></nav>
      </aside>
    </>
  )
}
