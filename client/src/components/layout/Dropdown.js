import React from "react";

const Dropdown = ({ children, className, dropref }) => {
  return (
    <div className={className} ref={dropref}>
      {children}
    </div>
  );
};

export default Dropdown;
