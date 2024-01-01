"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const PageTurnAnimation = ({ name, src }) => {
  console.log(src);
  const [text, setText] = useState("");
  const textRef = useRef();
  const handleHoverStart = () => {
    // Add logic to handle the start of the hover animation if needed
    setText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim dolorem repellat, necessitatibus at explicabo impedit obcaecati laudantium unde nulla!"
    );
    textRef.current.style.background = "white";
  };

  const handleHoverEnd = () => {
    // Add logic to handle the end of the hover animation if needed
    setText("");
    textRef.current.style.background = "rgb(255,255,255,0)";
  };

  return (
    <motion.div
      whileHover={{ rotateY: 180 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      style={{
        width: "100%",
        height: "100%",
        background: `url(${src})`,
        backgroundSize: "cover",
        cursor: "pointer",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
      }}
      className="rounded-md"
    >
      {/* Content on the back of the "page" */}
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          transform: "rotateY(180deg)",
        }}
        className="rounded-md"
        ref={textRef}
      >
        <div className="flex flex-col justify-between p-5">
          <h2 className={`${playfair.classname} text-[3rem]`}>
            {text.length === 0 ? "" : name}
          </h2>
          <p>{text}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PageTurnAnimation;
