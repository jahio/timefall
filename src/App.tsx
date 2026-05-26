import { format } from 'date-fns';
import { useTheme } from './useTheme';
import { useMediaQuery } from './utilityFunctions';
import NavSelect from './components/navSelect';
import NavFlat from './components/navFlat';
import './App.css'

function App() {
  const today = CurrentDate();
  const { theme, setTheme } = useTheme();
  const isMobile = useMediaQuery(768); // 768 seems to be the main "is it mobile or not?" breakpoint

  return (
    <>
      <header id="appTitle">
        <div className="appTitle">
          <h1>TIMEFALL</h1>
        </div>
        <div className="dataSourceInput">
          <input type="text" id="dataSourceURL" name="dataSourceURL" placeholder="Paste URL to YAML or JSON here" />
          <p>
            ...or <a href="#" id="sampleDataLink">click here</a> for a demo. <a href="#" id="docsLink" target="_blank">Click here</a> for documentation.
          </p>
          <button type="button" className="btnFetchData">Fetch Data</button>
          <button type="button" className="btnThemeToggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Toggle Light/Dark Mode
          </button>
        </div>
      </header>

      <hr className="topLine" />

      <nav id="leftNav">
        <div id="NavCore">
          {isMobile ? <NavSelect items={[]} /> : <NavFlat items={[]} /> }
        </div>
      </nav>

      <main id="primaryContent">
        <section>
          <div className="tfUnit tfDateHeader">
            {FormatDate(today)}
          </div>
          <h1 className="tfUnit tfEventHeader">
            Enter a URL in the box above
          </h1>
          <p className="tfUnit tfEventDescription">
            Enter a URL in the box above, (or click the link
            below it for a demo to be loaded) then click the
            &quot;Fetch Data&quot; button. If your data is
            properly formatted, a navigable, chronological
            list across time will appear on your left and
            a list of events with descriptions from that
            data will appear here instead.
          </p>
          <p className="tfUnit tfEventDescription">
            See the below links for additional information.
          </p>
          <ul className="tfUnit tfLinks">
            <li>Documentation</li>
            <li>Data Examples</li>
            <li>Load Example Timeline</li>
            <li>Source Code</li>
          </ul>
          <ul className="tfUnit tfCitations">
            <li className="tfUnit tfCitationItem">
              TODO: Citations
            </li>
            <li className="tfUnit tfCitationItem">
              Citations could be difficult due to multiple
              formatting options (APA, MLA, etc.). Should
              this be a feature for a v1, or save that for
              future iterations?
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

function CurrentDate() {
  return new Date();
}

function FormatDate(date: Date) {
  return format(date, 'dd MMMM yyyy');
}

export default App
