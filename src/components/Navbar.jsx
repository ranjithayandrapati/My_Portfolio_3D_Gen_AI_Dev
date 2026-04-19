import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 ${
        scrolled ? "bg-white shadow-md" : "bg-white/70 backdrop-blur"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo + name */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-8 h-8 object-contain' />
          <div className='flex flex-col leading-tight'>
            <p className='text-slate-900 text-[15px] sm:text-[18px] font-bold cursor-pointer'>
              Dhanaranjitha
            </p>
            <span className='text-[#915EFF] text-[10px] sm:text-[12px] font-medium'>
              Gen AI Engineer
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-slate-900" : "text-secondary"
              } hover:text-slate-900 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className='sm:hidden flex items-center'>
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
            className="p-1"
          >
            {toggle
              ? <HiX className="text-slate-900 text-[26px]" />
              : <HiMenu className="text-slate-900 text-[26px]" />
            }
          </button>

          {/* Mobile dropdown */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white shadow-xl border border-slate-100 absolute top-16 right-4 min-w-[160px] z-30 rounded-xl`}
          >
            <ul className='list-none flex flex-col gap-4 w-full'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#915EFF]" : "text-slate-700"
                  } hover:text-[#915EFF] transition-colors`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
