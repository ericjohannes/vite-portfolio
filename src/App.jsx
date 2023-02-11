import './App.css'
import links from './data/links.json'

let highPriority = links.filter((link)=>link.priority==0)

const handleLink = (link)=>{
  return (
  <div key={`"link-${link.name}"`} className="project-link">            
    <a href={link.link} targetf="_blank">

    <div className='photo-wrapper'>
      <div className='link-photo' style={{backgroundImage: `url('./${link.photo}')`}} title={link.alt}> </div>
    </div>
      <h3>{link.name}</h3>
    <p className="link-org">{link.org}</p>
    <p className='link-text'>{link.about}</p>
    </a>

  </div>)

}
const App = ()=>{
  return (
    <div className="App">
      <h1 className='page-title'>Eric Blom</h1>
      <div className="social-links">
        <a href="https://github.com/ericjohannes/" target="_blank" className="social-logo-link">
          <img src="./github-mark.png" className="social-logo"></img>
        </a>
        <a href="https://twitter.com/ejblom" target="_blank" className="social-logo-link">
          <img src="./2021Twitterlogo-blue.png" className="social-logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/eric-blom-8241b167" target="_blank" className="social-logo-link" >
          <img src="./LI-In-Bug.png" className="social-logo"></img>
        </a>

      </div>
      <p className='intro'>I'm a senior newsroom developer at National Geographic. Before that I  was a developer for <a href="https://protocol.com" target="_blank">Protocol</a> (RIP) and <a href="https://www.sfchronicle.com/" target="_blank">Heasrt Newspapers</a>. I started my career reporting for a <a href="https://rivertonranger.com/" target="_blank">small newspaper in Wyoming</a> but fell in love with coding from <a href="https://pll.harvard.edu/course/cs50-introduction-computer-science" target="_blank">CS50</a>, online intro to computer science course.</p>
      <h2 className='subhead'>Projects I'm proud of</h2>
      {/* <p className='disclaimer'>I sought to have the link to work around paywalls but some workarounds might stop working. Also, most of the code is proprietary so I'm showing what I can.</p> */}
      <section className="top-projects">
              {highPriority.map(handleLink)}
      </section>
      
      
    </div>
  )
}

export default App
