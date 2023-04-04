import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-primary py-4 px-24 font-dm text-sm font-bold text-white">
      {title}
    </button>
  );
};

export default Button;
