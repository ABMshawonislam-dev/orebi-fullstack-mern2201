import React from "react";

const InputBox = (props) => {
  return (
    <div className="mb-6">
      <h4 className="placeholder:font-regular mb-2.5 font-dm text-base font-bold placeholder:font-dm placeholder:text-sm placeholder:text-[#767676]">
        {props.title}
      </h4>
      <props.as
        placeholder={props.placeholder}
        className="w-full resize-none border-b border-solid border-[#F0F0F0] pb-2.5 outline-0"
      />
    </div>
  );
};

export default InputBox;
