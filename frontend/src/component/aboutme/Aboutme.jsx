// src/components/AboutMeSection.jsx
import React from 'react';
import { fadeIn } from '../../animation/fade';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
const AboutMeSection = () => {

  const [text1] = useTypewriter({
    words: ["Hello! I'm an Information Technology student with a passion for innovative technology and design. Over the past year, I have dedicated myself to mastering the principles of UI/UX design, creating intuitive and engaging digital experiences. My journey into the world of Web3 began four years ago, where I have delved deep into decentralized technologies and their applications. Additionally, I have gained a solid year of hands-on experience in managing blockchain nodes, ensuring the integrity and security of blockchain networks."],
    // loop:{},
    typeSpeed:10,
    deleteSpeed:25,
    delaySpeed:400

  });
  return (
    <motion.section
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        delaySpeed={2}
        whileInView={"show"}
        viewport={{once:false, amount:0.1}}

      id="aboutme"
      className="scroll-smooth rounded-xl pt-36 pb-36 px-10 mt-20 justify-between container grid grid-cols-1 max-w-screen-xl mx-auto bg-gradient-to-b from-slate-300 to-slate-200 dark:from-gray-900 dark:to-[#0B0B1D]"
    >

      <h1 className="text-2xl font-sans font-bold dark:text-slate-200">
        About <span className="text-sky-500 dark:text-[#58A6AB]">Me.</span>
      </h1>
      <div className="bg-sky-500 dark:bg-[#58A6AB] mt-2 h-2 rounded-full"></div>
      <div className="bg-opacity-10 bg-sky-300 p-10 rounded-3xl mt-10 backdrop-blur-3xl border border-sky-300 dark:border-[#58A6AB]">
        <motion.h2
         whileInView={text1}
        className="text-sm tracking-widest font-sans font-light text-slate-800 dark:text-slate-200 text-center sm:text-xl italic md:text-2xl lg:text-3xl">
         {text1}
        </motion.h2>
      </div>
    </motion.section>
  );
};

export default AboutMeSection;
