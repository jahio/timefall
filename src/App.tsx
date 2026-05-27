import { useTheme } from './lib/utilityFunctions';
import { useRef } from 'react';
import { useMediaQuery } from './lib/utilityFunctions';
import { getTimefallData, bootstrapDefaultTimefall } from './lib/dataProcessor';
import NavSelect from './components/navSelect';
import NavFlat from './components/navFlat';
import EventCard from './components/eventCard';
import { type TimefallEvent } from './lib/TimefallEvent';
import './App.css'

function App() {
  // Change this prior to final release, of course...
  // const DEMO_LOCATION = `${window.location.href}/demo.yaml`;
  const REPO_HOME = 'https://github.com/jahio/timefall';
  const DEMO_YAML = 'https://raw.githubusercontent.com/jahio/timefall/refs/heads/main/public/demo.yaml';
  const { theme, setTheme } = useTheme();
  const isMobile = useMediaQuery(768); // 768 seems to be the main "is it mobile or not?" breakpoint
  const inputRef = useRef<HTMLInputElement>(null);
  const defaultTimefall = bootstrapDefaultTimefall();

  return (
    <>
      <header id="appTitle">
        <div className="appTitle">
          <h1>TIMEFALL</h1>
        </div>
        <div className="dataSourceInput">
          <input type="text" ref={inputRef} id="dataSourceURL" name="dataSourceURL" placeholder="Paste URL to YAML or JSON here"  />
          <p>
            ...or <a href="#" onClick={() => {
              if(inputRef.current) inputRef.current.value = DEMO_YAML;
            } }>click here</a> for a demo. <a href={REPO_HOME} target="_blank">Click here</a> for documentation.
          </p>
          <button type="button" onClick={() => {
            const loc = inputRef.current;
            if(loc != null && loc.value != null && loc.value != "") {
              getTimefallData(loc.value);
            }
          }} className="btnFetchData">Fetch Data</button>
          <button type="button" className="btnThemeToggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Toggle Light/Dark Mode
          </button>
        </div>
      </header>

      <hr className="topLine" />

      <main id="primaryContent">
        <nav id="leftNav">
          {isMobile ? <NavSelect items={[]} /> : <NavFlat items={[]} /> }
        </nav>

        <section>
          {defaultTimefall.events.map((evt: TimefallEvent) => (
            <EventCard evt={evt} key={`${Math.random()*Math.random()}${Math.random()}`} />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
