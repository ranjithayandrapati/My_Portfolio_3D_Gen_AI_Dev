import { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [loadedBalls, setLoadedBalls] = useState(new Set());
  const maxSimultaneousBalls = 6;

  const handleBallVisible = (index) => {
    if (!loadedBalls.has(index) && loadedBalls.size < maxSimultaneousBalls) {
      setLoadedBalls(new Set([...loadedBalls, index]));
    }
  };

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div
          key={technology.name}
          onMouseEnter={() => handleBallVisible(index)}
        >
          <div className='w-28 h-28 green-pink-gradient p-[2px] rounded-[20px]'
            style={{
              boxShadow: "0 0 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 0, 0, 0.2)"
            }}
          >
            <div className='bg-white w-full h-full flex items-center justify-center rounded-[18px]'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-16 h-16 object-contain'
              />
            </div>
            {/* {loadedBalls.has(index) || index < maxSimultaneousBalls ? (
              <BallCanvas icon={technology.icon} />
            ) : (
              <div className='w-full h-full flex items-center justify-center'>
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className='w-16 h-16 object-contain'
                />
              </div>
            )} */}
          </div>
          <div className='text-center text-slate-900 mt-2 w-28 break-words'>{technology.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
