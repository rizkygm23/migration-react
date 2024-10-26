import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade'; 

const Tools_item = ({ imgsrc, alt, delayy=0.1 }) => {
  return (
    <motion.div
      variants={fadeIn("up", delayy, 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="tools dark:bg-[#12122b] px-3 py-3 overflow-hidden rounded-xl max-w-[100px] max-h-[100px] mx-auto transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-200 dark:hover:shadow-[#1A1A50]  "
    >
      <img className="object-fill p-4  " src={imgsrc} alt={alt} />
    </motion.div>
  );
}

export default Tools_item;
