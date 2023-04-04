import React from "react";
import { RxTriangleLeft } from "react-icons/rx";
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span
      className=" absolute top-[35%] left-0 z-50 !flex h-16 w-16 items-center justify-center rounded-full bg-green-500 bg-[rgba(0,0,0,.20)]"
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <RxTriangleLeft className="text-2xl text-white" />
    </span>
  );
};

export default SamplePrevArrow;
