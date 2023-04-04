import React from "react";
import { RxTriangleRight } from "react-icons/rx";
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span
      className=" absolute top-[35%] right-[25px] !flex h-16 w-16 items-center justify-center rounded-full bg-green-500 bg-[rgba(0,0,0,.20)]"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <RxTriangleRight className="text-2xl text-white" />
    </span>
  );
};

export default SampleNextArrow;
