import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='flip-card w-full xs:w-[220px] sm:w-[250px] min-h-[220px] sm:min-h-[280px] cursor-pointer'
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card-inner min-h-[220px] sm:min-h-[280px] ${flipped ? "flipped" : ""}`}>

        {/* Front */}
        <div className='flip-card-front green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div className='bg-tertiary rounded-[20px] h-full min-h-[220px] sm:min-h-[280px] py-5 px-6 sm:px-10 flex flex-col justify-evenly items-center'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-slate-900 text-[18px] sm:text-[20px] font-bold text-center'>
              {title}
            </h3>
            <span className='text-[11px] text-secondary mt-1'>Click to know more</span>
          </div>
        </div>

        {/* Back */}
        <div className='flip-card-back green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div className='bg-[#1a1a2e] rounded-[20px] h-full min-h-[220px] sm:min-h-[280px] py-5 px-5 flex flex-col justify-center items-center gap-4'>
            <h3 className='text-white text-[16px] sm:text-[18px] font-bold text-center'>
              {title}
            </h3>
            <p className='text-slate-300 text-[12px] sm:text-[13px] text-center leading-[1.7]'>
              {description}
            </p>
            <span className='text-[11px] text-[#915EFF] mt-1'>Click to flip back</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I work as a Generative AI Engineer / Software Engineer, specializing in Python, Machine Learning, Deep Learning, Large Language Models (LLMs), RAG, LangChain, Hugging Face, vector databases, C#, Unity 3D, SQL, ReactJS, and JavaScript. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-10 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center sm:justify-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
