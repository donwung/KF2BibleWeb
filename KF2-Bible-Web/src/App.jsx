import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiTestCall from './components/ApiTestCall'
import Weapons from './components/BreakpointsCalculator/Weapons'
import ZEDs from './components/BreakpointsCalculator/ZEDs'
import Menu from './components/Menu/Menu'


function App() {
  const [count, setCount] = useState(0)

  // TODO: 
  // apply a stylesheet and remove instances of style={}
  // move stuff around
  return (
    <>
      {/* <h1>kf2 bible but readable</h1> */}
      <Menu />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <div style={{display: "flex", justifyContent: "space-between"}}>
        <Weapons></Weapons>
        <ZEDs></ZEDs>
      </div>
      <div>
        <h2 style={{borderBottom: "2px solid white"}}>
          Breakpoints Calculator
        </h2>
        <p>
          zed hp / gun dmg = profit
        </p>
      </div> */}
      {/* <ApiTestCall></ApiTestCall> */}
    </>
  )
}

export default App
