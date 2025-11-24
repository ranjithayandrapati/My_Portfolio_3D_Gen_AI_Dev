// src/components/Typewriter.jsx
import React, { useEffect, useState } from "react";

const Typewriter = ({ text = "", speed = 120, loop = false }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    let timeoutId;

    const type = () => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
        timeoutId = setTimeout(type, speed);
      } else if (loop) {
        // small pause and restart
        timeoutId = setTimeout(() => {
          i = 0;
          setDisplayText("");
          type();
        }, 1000);
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [text, speed, loop]);

  return <span>{displayText}</span>;
};

export default Typewriter;
