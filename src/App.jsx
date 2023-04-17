import { useState } from 'react'
import './App.css'
import SideNavbar from './components/SideNavbar'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contacts from './components/Contacts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SideNavbar/>
      <Main/>
      <Work/>
      <Projects/>
      <Contacts/>
    </div>
  )
}

export default App
