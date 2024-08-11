import React, {useEffect, useRef} from "react";
import App from "../App";



const Bntnsa = () => {
  const Top = ()=> {

    if(window.scrollY = 0) {
      window.location.href = 'mailto:youremail@example.com';
      
    }else {
      console.log(window.scrollY)
      window.scrollTo(0, 0);
      

    }

    
  }
  // const btnRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.querySelector('#nav-head');
  //     const btn = btnRef.current;
  //     const fixednav = header.offsetTop;
  //     const textCta = document.getElementById('text-cta');
  //     const scrollUpicon = document.getElementById('scroll-up-icon');

  //     if (window.scrollY > fixednav) {
  //       header.classList.add('navbar-fixed');
  //       btn.classList.add('btn-fixed');
  //       scrollUpicon.classList.remove('hidden');

  //       textCta.classList.add('hidden');
  //       btn.classList.remove('rounded-xl');
  //       btn.classList.add('rounded-full');
  //     } else {
  //       header.classList.remove('navbar-fixed');
  //       btn.classList.remove('btn-fixed');
  //       scrollUpicon.classList.add('hidden');
  //       textCta.classList.remove('hidden');
  //     }
  //   };

  //   const scrollToTop = () => {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   };

  //   const btn = btnRef.current;
  //   window.addEventListener('scroll', handleScroll);
  //   btn.addEventListener('click', scrollToTop);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     btn.removeEventListener('click', scrollToTop);
  //   };
  // }, []);

    return (
      <a href="#nav-head">
        <button  id="cta" onClick={()=>{
          window.scrollTo(0, 0);
        }} className=" overflow-hidden animate-float  min-w-[24px] min-h-[24px]  bottom-40 w-fullitems-center z-50  left-[50%] transform translate-x-[-50%]
        fixed  popup-button border border-sky-500 px-4 py-4 rounded-xl  shadow-sky-400 shadow-sm hover:bg-slate-100 backdrop-blur-md hover:shadow-sky-500 hover:shadow-sm">
          <h3 id="text-cta" className="font-sans text-sm font-medium text-sky-500 hover:text-sky-800">

          </h3>
        <img id="scroll-up-icon" src="assets/images/scrollup.png" alt="Scroll Up" className=" cursor-pointer max-h-24"></img>
        </button>
      </a>

    )
};


export default Bntnsa;