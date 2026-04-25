import { useState } from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const TechCard = ({ technology }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={() => setFlipped(!flipped)}>
      <div className="flip-card w-[88px] h-[88px] sm:w-28 sm:h-28 md:w-32 md:h-32">
        <div className={`flip-card-inner w-full h-full ${flipped ? "flipped" : ""}`}>
          {/* Front */}
          <div
            className="flip-card-front green-pink-gradient p-[2px] rounded-[20px]"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,0.25)" }}
          >
            <div className="bg-white w-full h-full flex items-center justify-center rounded-[18px]">
              <img src={technology.icon} alt={technology.name}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 object-contain" />
            </div>
          </div>
          {/* Back */}
          <div
            className="flip-card-back green-pink-gradient p-[2px] rounded-[20px]"
            style={{ boxShadow: "0 0 20px rgba(0,0,0,0.25)" }}
          >
            <div className="bg-[#1a1a2e] w-full h-full flex flex-col items-center justify-center rounded-[18px] p-2 gap-1">
              <p className="text-white font-bold text-center leading-tight" style={{ fontSize: "9px" }}>
                {technology.name}
              </p>
              <p className="text-[#c084fc] text-center leading-snug" style={{ fontSize: "8px" }}>
                {technology.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Name below */}
      <div className="text-center text-slate-900 mt-2 w-[88px] sm:w-28 md:w-32 break-words text-[10px] sm:text-[13px]">
        {technology.name}
      </div>
    </div>
  );
};

const Tech = () => {
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

      <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-6 md:gap-10">
        {technologies.map((technology) => (
          <TechCard key={technology.name} technology={technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
