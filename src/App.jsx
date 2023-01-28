import './App.css'
import links from './data/links.json'

let highPriority = links.filter((link)=>link.priority==0)

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
  console.log('links',links)
  return (
    <div className="App">
      <h1 className='page-title'>Eric Blom</h1>
      <p className='intro'>I'm a senior newsroom developer at National Geographic. Before that I  was a developer straddling editorial and product for <a href="https://protocol.com" target="_blank">Protocol</a> (RIP) and <a href="https://www.sfchronicle.com/" target="_blank">Heasrt Newspapers</a>. I started my career reporting for a <a href="https://rivertonranger.com/" target="_blank">small newspaper in Wyoming</a> but fell in love with coding from taking <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank">CS50</a> online.</p>
      <h2 className='subhead'>Some projects I'm proud of</h2>
      <p className='disclaimer'>I sought to have the link to work around paywalls but some workarounds might stop working. Also, most of the code is proprietary so I'm showing what I can.</p>
      <section key="top-projects">
              {highPriority.map(handleLink)}
      </section>
      
      
    </div>
  )
}

export default App
