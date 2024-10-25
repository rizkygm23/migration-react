
import { motion } from 'framer-motion';

import Tools_item from './Tools_item';
import DataTools from './dataTools';



const ToolsSection = () => (
  <motion.section
  id="tools" className="scroll-smooth pt-36 px-10 mt-20 justify-between container grid grid-cols-1 max-w-screen-xl mx-auto">
    <h1 className="text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#0acffe] to-[#495aff] dark:from-[#007adf] dark:to-[#00ecbc] font-bold w-fit">Tools & Skills</h1>
    <div className="bg-gradient-to-r from-[#0acffe] to-[#495aff] dark:from-[#007adf] dark:to-[#00ecbc] h-2 mt-2 rounded-full"></div>
    <div className="bg-transparent grid grid-cols-3 gap-2 gap-y-12 pt-6 mt-16 lg:grid-cols-6">
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
