import { useEffect} from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import UIUXSection from './component/UIUX_Section/UIUXSection'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './component/navbar/Navbar'
import MainSection from './component/heading/mainSection'
import AboutMeSection from './component/aboutme/Aboutme'
import ToolsSection from './component/Tools_section/Tools'
import Bntnsa from './button/Bntnsa'
import NodesSection from './component/Node_Section/Nodes'
import FAQ from './component/Faq_Section/Faq'
import Footer from './component/Footer/Footer'
import { MouseTrail } from 'react-webgl-trails'
import ParticlesComponent from './component/background/particless';
import NodePage from './component/Node_Section/Nodepage';
import Pageui from './component/UIUX_Section/Pageui';
import Searchpubkey from './data/Searchpubkey';


// import Uiuxaps from './Uiux'







function App() {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('#nav-head');
      const btn = document.querySelector('#cta');
      const btns = document.getElementById('cta');
      const textCta = document.getElementById('text-cta');
      const scrollUpicon = document.getElementById('scroll-up-icon');
      const burger = document.querySelector('#burger');
      const navMenu = document.querySelector('#nav-menu');
      const parsePath = window.location.pathname;

      
      if (header && btn && btns && textCta && scrollUpicon) {
        const fixednav = header.offsetTop;
        if (window.scrollY > fixednav) {
          header.classList.add('navbar-fixed');
          btn.classList.add('btn-fixed');
          btns.classList.remove('hidden');
          textCta.classList.add('hidden');
          btns.classList.remove('rounded-xl');
          btns.classList.add('rounded-full');
          // btns.onclick(window.scrollTo({ top: 0, behavior: 'smooth' }))
          
        } else {
          header.classList.remove('navbar-fixed');
          btn.classList.remove('btn-fixed');
          btn.classList.remove('bg-slate-600');
          btns.classList.add('hidden');
          textCta.classList.remove('hidden');
        }
        
      }
      
      
    };

    
    const scrollToTop = () => {
      if (window.scrollY > fixednav) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.href = 'mailto:youremail@example.com';
      }
    };
    

    const totop = () => {
      
    }

    const handleBurgerClick = () => {
      burger.classList.toggle('burger-active');
      navMenu.classList.toggle('hidden');
      
    };

    window.addEventListener('scroll', handleScroll);
    burger.addEventListener('click', handleBurgerClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      burger.removeEventListener('click', handleBurgerClick);
      
    };
    
  }, []);


  return (
    <Router>
      <div 
      // className='max-w-screen-lg mx-auto'
      >
        <Navbar  />
        <Routes>
          <Route path="/" element={
            <>
              
              <Bntnsa />
              <MainSection />
              <AboutMeSection />
              <ToolsSection />
              <NodesSection />
              <UIUXSection />
              <FAQ />
              <Footer />
              <MouseTrail rgb={[2,132,200]} />
              <Analytics />
              <SpeedInsights />
            </>
          }/>
          <Route path="/node" element={
            <>
              
              <ParticlesComponent id='particles' />
              <NodePage />
           
              

            </>
          }/>

          <Route path="/uiux" element={
            <>
              
              <ParticlesComponent id='particles' />
              <Pageui />
              
           
              

            </>
          }/>
          <Route path="/dillsearch" element={
            <>
              <Searchpubkey/>

              
           
              

          </>
          }/>
          
          
        </Routes>
      </div>
    </Router>
  )
}

export default App
