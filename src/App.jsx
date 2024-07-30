import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './Navbar'
import MainSection from './mainSection'
import AboutMeSection from './Aboutme'
import ToolsSection from './Tools'
// import Uiuxaps from './Uiux'







function App() {

  return (
    <div>
        <Navbar/>
        <MainSection/>
        <AboutMeSection/>
        <ToolsSection/>
        {/* <Uiuxaps/> */}
        
        
        
    </div>







  )
}

export default App
