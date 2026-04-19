import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaFileAlt, FaEnvelope } from "react-icons/fa";

import { styles } from "../styles";
import Typewriter from "./Typewriter";
import myPhoto from "../assets/Dhanaranjitha_Photo.png";
import resumePdf from "../assets/DHANARANJITHA.pdf";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/ranjithayandrapati",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/dhana-ranjitha-yandrapati-2645a018a",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/___miss___unkn0wn___/",
    label: "Instagram",
  },
];

const Hero = () => {
  return (
    <section className={`relative w-full min-h-screen mx-auto overflow-hidden`}>

      {/* Vertical social sidebar */}
      <div className="hidden sm:flex fixed left-3 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3">
        {/* Icons */}
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group"
          >
            <Icon className="text-slate-500 group-hover:text-[#915EFF] text-[20px] transition-colors duration-200" />
          </a>
        ))}
        {/* Follow Me text */}
        <span
          className="text-slate-400 font-medium tracking-widest uppercase"
          style={{ fontSize: "9px", writingMode: "vertical-rl", rotate: "180deg" }}
        >
          Follow Me
        </span>
      </div>

      {/* Main content */}
      <div
        className={`absolute inset-0 top-[80px] max-w-7xl mx-auto ${styles.paddingX} flex sm:flex-row flex-col items-center sm:justify-between justify-start gap-6 sm:gap-0 pl-10 sm:pl-16`}
      >
        {/* Left: text block */}
        <div className="flex flex-row items-start gap-5 sm:flex-1 z-10">
          {/* Purple accent line */}
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-28 violet-gradient' />
          </div>

          <div className="mt-5">
            {/* Welcome tag */}
            <p className="text-[11px] sm:text-[13px] uppercase tracking-[0.25em] text-[#915EFF] font-semibold mb-1">
              Welcome to my portfolio
            </p>

            <h1 className={styles.heroHeadText}>
              Hi, I'm{" "}
              <span className="text-[#915EFF]">
                <Typewriter text="Dhana Ranjitha" speed={120} loop={true} />
              </span>
            </h1>

            <p className={`${styles.heroSubText} mt-2 text-slate-600 max-w-[90vw] sm:max-w-none`}>
              Generative AI Engineer leveraging LLMs, RAG &amp; Agentic AI with MCP &amp; AI Agents to build end-to-end AI applications — Chatbots, Voicebots, intelligent automation &amp; enterprise AI solutions.
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5 mt-3">
              <FaMapMarkerAlt className="text-[#915EFF] text-[14px] sm:text-[16px] flex-shrink-0" />
              <span className="text-slate-500 text-[12px] sm:text-[14px] font-medium">
                Hyderabad, India
              </span>
            </div>

            {/* Resume + mobile social row */}
            <div className="flex items-center gap-4 mt-4 sm:mt-5 flex-wrap">
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#915EFF] hover:bg-[#7a4fd6] text-white text-[13px] sm:text-[14px] font-semibold rounded-lg shadow-md transition-colors duration-200"
              >
                <FaFileAlt className="text-[14px]" />
                View Resume
              </a>

              {/* Social icons — visible only on mobile (sidebar hidden on mobile) */}
              <div className="flex sm:hidden items-center gap-3">
                <span className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">Follow</span>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="text-slate-500 hover:text-[#915EFF] text-[20px] transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: photo */}
        <div className="flex flex-shrink-0 justify-center sm:justify-end sm:-mr-20 lg:-mr-32 xl:-mr-48">
          <img
            src={myPhoto}
            alt="Dhana Ranjitha"
            className='w-[300px] xs:w-[320px] sm:w-[520px] lg:w-[720px] xl:w-[820px] object-contain'
            style={{
              maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to left, black 80%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%), linear-gradient(to left, black 80%, transparent 100%), linear-gradient(to right, black 80%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
            }}
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;
