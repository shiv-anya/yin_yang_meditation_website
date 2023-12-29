import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`${className} bg-secondary hover:bg-primary text-white`}>
      {children}
    </button>
  );
};

export default Button;
