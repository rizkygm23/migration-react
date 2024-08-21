import React from "react";
const Btnnodepage = ({text, mt}) => {

    return (
        <button 
        className={`w-full text-slate-50 mt-${mt} py-3 rounded-sm bg-[#171737] hover:bg-[#1f1f48]`}
        >
            <h4 className="text-sm">{text}</h4>
        </button>

    )
}

export default Btnnodepage;
