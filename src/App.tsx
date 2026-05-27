import { useTheme } from './useTheme';
import { useMediaQuery } from './utilityFunctions';
import NavSelect from './components/navSelect';
import NavFlat from './components/navFlat';
import EventCard from './components/eventCard';
import './App.css'

function App() {

  const { theme, setTheme } = useTheme();
  const isMobile = useMediaQuery(768); // 768 seems to be the main "is it mobile or not?" breakpoint

  return (
    <>
      <header id="appTitle">
        <div className="appTitle">
          <h1>TIMEFALL</h1>
        </div>
        <div className="dataSourceInput">
          <input type="text" id="dataSourceURL" name="dataSourceURL" placeholder="Paste URL to YAML or JSON here"  />
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

      <main id="primaryContent">
        <nav id="leftNav">
          {isMobile ? <NavSelect items={[]} /> : <NavFlat items={[]} /> }
        </nav>

        <section>
          <EventCard evt={null} />
        </section>
      </main>
    </>
  )
}

export default App
