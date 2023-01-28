import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import links from './data/links.json'

let highPriority = [];
[0,1].map(i=>{
  highPriority.push( links.filter((link)=>link.priority=i));

})

const handleLink = (link)
const App = ()=>{
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" targetf="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {
        highPriority.map(set=>{
          <div>
            set.map(link=>{
              return(
                <div>
                  
                  <a href={link.link} targetf="_blank">
                    <h3>{link.name}</h3>
                  </a>
                  <p>{link.org}</p>
                  <p>{link.about}</p>
                </div>
              )
            })
          </div>
      })
      }
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
      </p>
    </div>
  )
}

export default App
