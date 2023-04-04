import React from "react";

const Heading = ({ title }) => {
  return (
    <h2 className="mb-6 font-dm text-2xl font-bold md:mb-12 md:text-[39px]">
      {title}
    </h2>
  );
};

export default Heading;
