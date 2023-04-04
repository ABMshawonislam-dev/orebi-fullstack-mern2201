import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import { AiFillHeart, AiOutlineReload } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import Flex from "./Flex";
const Product = ({ src, badge }) => {
  return (
    <div>
      <div className="group relative overflow-y-hidden">
        <Image className="w-full" imgsrc={src} />
        {badge && <Badge title="New" />}
        <div className="absolute bottom-[-44%] left-0 h-40 w-full bg-white py-6 px-7 duration-300 ease-in group-hover:bottom-0 lg:max-xl:bottom-[-75%]">
          <Flex className="flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-regular font-dm text-base text-[#6d6d6d] sm:text-base lg:max-xl:text-sm">
              Add to Wish List
            </p>
            <AiFillHeart className="text-base" />
          </Flex>
          <Flex className="my-5 flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-regular font-dm text-base text-[#6d6d6d] sm:text-base lg:max-xl:text-sm">
              Compare
            </p>
            <AiOutlineReload className="text-base" />
          </Flex>
          <Flex className="flex items-center justify-end gap-x-1 sm:gap-x-4">
            <p className="font-regular font-dm text-base text-[#6d6d6d] sm:text-base lg:max-xl:text-sm">
              Add to Cart
            </p>
            <BsFillCartFill className="text-base" />
          </Flex>
        </div>
      </div>
      <div className="mb-12 md:mb-0">
        <Flex className="mt-0 flex items-center justify-between  md:mt-6">
          <h3 className="font-dm text-xl font-bold lg:max-xl:text-sm">
            Basic Crew Neck Tee
          </h3>
          <p className="font-regular font-dm text-base text-[#767676] lg:max-xl:text-sm">
            $44.00
          </p>
        </Flex>
        <p className="font-regular mt-1 font-dm text-base text-[#767676] md:mt-4 lg:max-xl:text-sm">
          Black
        </p>
      </div>
    </div>
  );
};

export default Product;
