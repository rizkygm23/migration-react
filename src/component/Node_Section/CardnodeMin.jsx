import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/fade";

const CardnodeMin = ({ imgsrc, alt, title, detail }) => {
    return (
        <motion.div 
        variants={fadeIn("right", 0.2, 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:false, amount:0.01}}
        className={`relative card mt-10 py-3 bg-[#12122B] min-w-fit  px-3 rounded-md delay-100 duration-300 overflow-hidden  max-w-screen-sm transition-transform ease-in-out hover:-translate-y-1 hover:shadow-sm hover:shadow-sky-200`}>
        <div 
            id='nameLogo'
            className=" w-full flex gap-5"
            
            >
            <div
            className="h-12 w-12 rounded-full bg-[#ffffff]"
            >
            <img src={imgsrc} className="w-full h-full grayscale " alt={alt} />

            </div>
            
            <h3 className="text-[24px] font-semibold text-slate-400 text-center my-auto">{title}</h3>

        </div>
        <div id='buttonDetailNode grid grid-cols-1 min-w-fit '>
            <a href={detail}>
                <button className=" w-full text-slate-50 mt-10 py-3 rounded-sm bg-[#171737] hover:bg-[#1f1f48]">
                    <h4 className="">Detail</h4>
                </button>
            </a>

        </div>
    </motion.div>

    )
}


export default CardnodeMin;
