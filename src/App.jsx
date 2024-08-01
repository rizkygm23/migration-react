import { useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UIUXSection from './UIUXSection'

import Navbar from './Navbar'
import MainSection from './mainSection'
import AboutMeSection from './Aboutme'
import ToolsSection from './Tools'
import Bntnsa from './Bntnsa'
import NodesSection from './Nodes'
import FAQ from './Faq'
import Footer from './Footer'
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
    <div>
      <Navbar/>
      <MainSection/>
      <Bntnsa/>
      <AboutMeSection/>
      <ToolsSection/>
      <UIUXSection/>
      <NodesSection/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
