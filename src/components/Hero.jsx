import { motion } from "framer-motion";

import { styles } from "../styles";
import Typewriter from "./Typewriter";
import myPhoto from "../assets/Dhanaranjitha_Photo.png";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex sm:flex-row flex-col items-center justify-between`}
      >
        {/* Left: decoration + text */}
        <div className="flex flex-row items-start gap-5 flex-1">
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div className="mt-5">
            <h1 className={styles.heroHeadText}>
              Hi, I'm{" "}
              <span className="text-[#915EFF]">
                <Typewriter text="Dhana Ranjitha" speed={120} loop={true} />
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-slate-600`}>
              Generative AI Engineer leveraging LLMs, RAG<br className="sm:block hidden" />
              & Agentic AI with MCP & AI Agents to build<br className="sm:block hidden" />
              end-to-end AI applications — Chatbots,<br className="sm:block hidden" />
              Voicebots, intelligent automation<br className="sm:block hidden" />
              & enterprise AI solutions.
            </p>
          </div>
        </div>

        {/* Right: photo */}
        <div className="flex flex-shrink-0 justify-center sm:justify-end sm:-mr-20 lg:-mr-32 xl:-mr-48">
          <img
            src={myPhoto}
            alt="Dhana Ranjitha"
            className='w-[360px] sm:w-[520px] lg:w-[720px] xl:w-[820px] object-contain'
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to left, black 80%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to left, black 80%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
            }}
          />
        </div>
      </div>

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
