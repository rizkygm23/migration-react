import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { fadeIn } from '../../animation/fade';
const MainSection = () => {
  
  const [textss] = useTypewriter({
    words: ['As a  UI/UX Designer, I craft intuitive and engaging applications.',' While as a Blockchain Validator, I ensure the integrity and security of blockchain networks.'],
    loop:{},
    typeSpeed:50,
    deleteSpeed:25,
    delaySpeed:400

  });
  return (
    <section className="justify-between container pt-24 grid grid-cols-1 lg:grid-cols-2 max-w-screen-xl mx-auto px-10" id="utama">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        delaySpeed={2}
        whileInView={"show"}
        viewport={{once:false, amount:0.7}}
       className="container w-full ">
        <div className="max-w-screen-sm mx-auto grid grid-cols-1 py-11">
          <h3 className="font-sans block font-semibold text-sky-500 dark:text-[#58A6AB] text-xl sm:text-2xl md:text-3xl">Hi, my name is</h3>
          <h1 className="font-sans font-bold text-gray-900 text-2xl dark:text-[#C6C6C6] sm:text-3xl mt-1 md:text-4xl">MUHAMMAD RIZKY.</h1>
          <h2 className="font-sans font-medium text-[#6C6C6C] dark:text-[#6C6C6C] text-xl sm:text-2xl mt-4 md:text-3xl lg:mt-10 h-14">
            {textss}
            <span Cursor='>' > <Cursor cursorStyle='/>'/>  </span>
          </h2>
          
        </div>
      </motion.div>
      <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              
              delaySpeed={2}
              whileInView={"show"}
              viewport={{once:false, amount:0.1}}
              whileHover="hover"
       className="container card-wrapped w-96 h-96 max-w-xs overflow-hidden mx-auto bg-transparent mt-10 grid grid-cols-1 rounded-lg shadow-md shadow-sky-400 dark:shadow-[#58A6AB] hover:shadow-lg hover:shadow-sky-500">
        <div className="card-content p-10 rounded-lg mx-auto ">
          <h2 className="text-center text-lg font-semibold mt-10 font-sans text-sky-500 dark:text-[#58A6AB]">MY WORKS</h2>
          <a href="#uiux" className="">
            <button className="border border-sky-500 dark:border-[#58A6AB] p-2 rounded-3xl mt-10 hover:bg-slate-700 w-full my-auto ">
              <h3 className="text-lg font-sans font-normal text-sky-500 dark:text-[#58A6AB]">UI/UX Designer</h3>
            </button>
          </a>
          <a href="#uiux" className="">
            <button className="border border-sky-500 dark:border-[#58A6AB] p-2 rounded-3xl mt-5 hover:bg-slate-700 w-full my-auto">
              <h3 className="text-lg font-sans font-normal text-sky-500 dark:text-[#58A6AB]">Blockchain Validator</h3>
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default MainSection;
