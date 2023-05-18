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
    <div className=' snap-mandatory'>
      
      <SideNavbar/>
      <section className=' snap-center'><Main/></section>
      <section className=' snap-center'><Work/></section>
      <section className=' snap-center'><Projects/></section>
      <section className=' snap-center'> <Contacts/></section>
      
      
      
     
    </div>
  )
}

export default App
