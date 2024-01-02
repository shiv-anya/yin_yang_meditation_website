import React from "react";

const ParallaxHeading = ({ title, src }) => {
  return (
    <div className="relative h-[80vh] rounded-t-md">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 bg-fixed rounded-md"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full bg-overlay rounded-t-md">
        <h1 className={`text-white text-center text-[3rem] font-bold`}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ParallaxHeading;
