import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/fade";
import Btnnodepage from "../../button/Btnnodepage";

const CardnodeMin = ({ imgsrc, alt, title, detail }) => {
    return (
        <motion.div 
        variants={fadeIn("right", 0.2, 0.1)}d
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:false, amount:0.01}}
        className={`relative card  p-2 bg-[#12122B] min-w-fit   md:p-3 lg:p-4 rounded-[13px] md:rounded-[17px] lg:rounded-[21px] delay-100 max-w-full duration-300 overflow-hidden  md:max-w-screen-sm transition-transform ease-in-out hover:-translate-y-1 hover:shadow-sm hover:shadow-sky-200`}>
        {/* Name and logo */}
        <div 
            id='nameLogo'
            className="w-full grid grid-cols-2 gap-1"
            >
            <div
            className="h-12 w-12 rounded-full bg-none"
            >
            <img src={imgsrc} className="w-full h-full  text-left rounded-[5px] mx-auto" alt={alt} />
            </div>
            <h3 className=" text-[14px] w-full  md:text-[16px] lg:text-[16px] font-semibold text-slate-400 text-wrap text-left my-auto">{title}</h3>
        </div>
        {/* Name and logo end */}
        {/* buttton */}
        <div id='buttonDetailNode grid grid-cols-1 '>
            <a href={detail}>
                <Btnnodepage 
                text={"Detail"}
                mt={5}
                />
            </a>
            <a href={'https://rizznode.gitbook.io/'+title}>
                <Btnnodepage 
                text={"Run"}
                mt={2}
                />
            </a>
        </div>
{/* button end */}
    </motion.div>

    )
}


export default CardnodeMin;
