import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="absolute left-5 top-5 inline-block bg-primary py-2 px-8 text-white">
      {title}
    </span>
  );
};

export default Badge;
