import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum asperiores, eum quos molestias in odit obcaecati nesciunt voluptatem dolore ab sit delectus corporis porro autem assumenda, nisi tenetur reiciendis illum excepturi, aut omnis facere animi consequuntur? Alias eaque non sed ex repudiandae aspernatur ipsum quidem, similique repellat magni blanditiis eveniet quas fuga esse fugit accusantium dicta iusto delectus at harum laudantium voluptatum a? Rem atque debitis commodi aspernatur quos quas ducimus! Accusamus cum quasi, neque ipsam quo ut architecto? Enim provident quisquam maiores cumque voluptate eveniet ea optio error quod eius numquam laudantium dolorem necessitatibus, voluptatibus quidem suscipit sunt dolores.</p>
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
