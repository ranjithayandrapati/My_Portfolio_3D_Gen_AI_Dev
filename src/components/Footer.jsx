import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white border-t border-slate-200 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">

        {/* Left: name + tagline */}
        <div className="text-center sm:text-left">
          <p className="text-slate-900 font-bold text-[16px]">Dhana Ranjitha</p>
          <p className="text-[#915EFF] text-[12px] font-medium">Generative AI Engineer</p>
        </div>

        {/* Center: email + address */}
        <div className="flex flex-col items-center gap-2">
          <strong className="text-slate-700 text-[12px] sm:text-[13px] tracking-wide uppercase">Email Me</strong>
          <a
            href="mailto:dhanaranjithayandrapati@gmail.com"
            className="flex items-center gap-2 text-slate-500 hover:text-[#915EFF] transition-colors duration-200"
          >
            <FaEnvelope className="text-[#915EFF] text-[14px] flex-shrink-0" />
            <span className="text-[12px] sm:text-[13px]">dhanaranjithayandrapati@gmail.com</span>
          </a>
          <div className="flex items-center gap-2 text-slate-500">
            <FaMapMarkerAlt className="text-[#915EFF] text-[14px] flex-shrink-0" />
            <span className="text-[12px] sm:text-[13px]">Hyderabad, India</span>
          </div>
        </div>

        {/* Right: social icons */}
        <div className="flex flex-col items-center gap-2">
          <strong className="text-slate-700 text-[12px] sm:text-[13px] tracking-wide uppercase">Follow Me</strong>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ranjithayandrapati" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-slate-500 hover:text-[#915EFF] text-[20px] transition-colors duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/dhana-ranjitha-yandrapati-2645a018a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-slate-500 hover:text-[#915EFF] text-[20px] transition-colors duration-200" />
            </a>
            <a href="https://www.instagram.com/___miss___unkn0wn___/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-slate-500 hover:text-[#915EFF] text-[20px] transition-colors duration-200" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-6 border-t border-slate-100 pt-4 text-center">
        <p className="text-slate-400 text-[11px]">
          © {new Date().getFullYear()} <strong className="text-slate-500">Dhana Ranjitha</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
