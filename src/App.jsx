import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import links from './data/links.json'

let highPriority = [];
[0,1].map(i=>{
  highPriority.push( links.filter((link)=>link.priority=i));

})

const handleLink = (link)=>{
  return (
  <div key={`"link-${link.name}"`}>            
    <a href={link.link} targetf="_blank">
      <h3>{link.name}</h3>
    </a>
    <p>{link.org}</p>
    <div className='photo-wrapper'>
      <div className='link-photo' style={{backgroundImage: `url('./public/${link.photo}')`}}>
        

      </div>
      <p className='about-text'>{link.about}</p>
    </div>
  </div>)
}
const App = ()=>{
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <h1 className='page-title'>Eric Blom</h1>
      <p className='intro'>I'm a senior newsroom developer at National Geographic. Before that I  was a developer straddling editorial and product for <a href="https://protocol.com" target="_blank">Protocol</a> (RIP) and <a href="https://www.sfchronicle.com/" target="_blank">Heasrt Newspapers</a>. I started my career reporting for a <a href="https://rivertonranger.com/" target="_blank">small newspaper in Wyoming</a> but fell in love with coding from taking <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank">CS50</a> online.</p>
      <h2 className='subhead'>Some projects I'm proud of</h2>

      {
        highPriority.map((linkSet, i)=>{
          return(
            <section key={`"section-${i}"`}>
              {linkSet.map(handleLink)}
            </section>
          )
      })
      }
      
    </div>
  )
}

export default App
