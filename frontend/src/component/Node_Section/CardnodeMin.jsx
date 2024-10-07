import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/fade";
import Btnnodepage from "../../button/Btnnodepage";

const CardnodeMin = ({ imgsrc, alt, title, detail, role }) => {
    return (
        <motion.div 
        variants={fadeIn("right", 0.2, 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{once:false, amount:0.01}}
        className={`relative card  p-2 bg-[#12122B] min-w-fit   md:p-3 lg:p-4 rounded-[13px] md:rounded-[17px] lg:rounded-[21px] delay-100 max-w-full duration-300 overflow-hidden  md:max-w-screen-sm transition-transform ease-in-out hover:-translate-y-1 hover:shadow-sm hover:shadow-sky-200`}>
        {/* Name and logo */}
        <div 
            id='nameLogo'
            className="w-full grid grid-cols-2 gap-1 items-start"
            >
            <div className="grid grid-cols-2">
            <div
            className="h-12 w-12 rounded-full bg-none"
            >
            <img src={imgsrc} className="w-full h-full  text-left rounded-[5px] mx-auto" alt={alt} />
            </div>
            <h3 className=" text-[14px] w-full  md:text-[16px] lg:text-[24px] font-semibold text-slate-400 text-wrap text-left my-auto">{title}</h3>

            </div>
            <div className="px-2 py-2 items-center">
            <div id="role" className="items-center center bg-[#171737] rounded-full py-2 px-1">
                <h3 className=" text-center  text-[10px] md:text-[12px] lg:text-[14px] font-normal text-sky-500 dark:text-[#58A6AB] my-auto ">{role}</h3>
            </div>
            </div>

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
