
import { motion } from 'framer-motion';

import Tools_item from './Tools_item';
import DataTools from './dataTools';



const ToolsSection = () => (
  <motion.section
  id="tools" className="scroll-smooth pt-36 px-10 mt-20 justify-between container grid grid-cols-1 max-w-screen-xl mx-auto">
    <h1 className="text-2xl font-sans font-bold dark:text-slate-200 ">
      Tool<span className="text-sky-500">s</span> & Skills.
    </h1>
    <motion.div className="bg-sky-500 mt-2 h-2 rounded-full"></motion.div>
    <div className="bg-transparent grid grid-cols-3 gap-2 gap-y-12 mt-16 lg:grid-cols-6">
    {DataTools.map((item, index) => (
        <Tools_item 
          key={index} 
          imgsrc={item.src}
          delayy={index * 0.1} 
          
        />
      ))}
    </div>
  </motion.section>
);

export default ToolsSection;
