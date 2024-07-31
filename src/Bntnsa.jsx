import React from "react";


const Bntnsa = () => {
    return (
    <button  id="cta" className=" animate-float  min-w-[24px] min-h-[24px]  bottom-40 w-fullitems-center z-50  left-[50%] transform translate-x-[-50%]
      fixed  popup-button border border-sky-500 px-4 py-4 rounded-xl  shadow-sky-400 shadow-sm hover:bg-slate-100 backdrop-blur-md hover:shadow-sky-500 hover:shadow-sm">
      <h3 id="text-cta" className="font-sans text-sm font-medium text-sky-500 hover:text-sky-800">
        Get In Touch
      </h3>
      <img id="scroll-up-icon" src="assets/images/scrollup.png" alt="Scroll Up" className="hidden cursor-pointer max-h-24"></img>
    </button>
    )
};


export default Bntnsa;