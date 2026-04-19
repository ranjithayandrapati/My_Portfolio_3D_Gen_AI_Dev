import { useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [loadedBalls, setLoadedBalls] = useState(new Set());
  const maxSimultaneousBalls = 6;

  const handleBallVisible = (index) => {
    if (!loadedBalls.has(index) && loadedBalls.size < maxSimultaneousBalls) {
      setLoadedBalls(new Set([...loadedBalls, index]));
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 sm:mb-12"
      >
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

    <div className='flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-10'>
      {technologies.map((technology, index) => (
        <div
          key={technology.name}
          onMouseEnter={() => handleBallVisible(index)}
          className='flex flex-col items-center'
        >
          <div
            className='w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 green-pink-gradient p-[2px] rounded-[16px] sm:rounded-[20px]'
            style={{
              boxShadow: "0 0 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.2)"
            }}
          >
            <div className='bg-white w-full h-full flex items-center justify-center rounded-[14px] sm:rounded-[18px]'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain'
              />
            </div>
          </div>
          <div className='text-center text-slate-900 mt-2 w-20 sm:w-24 md:w-28 break-words text-[11px] sm:text-[13px]'>
            {technology.name}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
