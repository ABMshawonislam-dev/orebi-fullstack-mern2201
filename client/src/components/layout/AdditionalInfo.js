import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TbNumber2 } from "react-icons/tb";
import { FaCaravan } from "react-icons/fa";
import { RxReload } from "react-icons/rx";
const AdditionalInfo = ({ children, className }) => {
  return (
    <div className="mt-[-6px] border border-solid border-[#f0f0f0] py-2 sm:py-7">
      <Container>
        <Flex className="flex justify-between">
          <Flex className="flex items-center gap-x-1 sm:gap-x-4">
            <TbNumber2 className="text-[10px] sm:text-2xl" />
            <p className="font-regular font-dm text-[10px] text-[#6d6d6d] sm:text-base">
              Two years warranty
            </p>
          </Flex>
          <Flex className="flex items-center gap-x-1 sm:gap-x-4">
            <FaCaravan className="text-[10px] sm:text-2xl" />
            <p className="font-regular font-dm text-[10px] text-[#6d6d6d] sm:text-base">
              Free shipping
            </p>
          </Flex>
          <Flex className="flex items-center gap-x-1 sm:gap-x-4">
            <RxReload className="text-[10px] sm:text-2xl" />
            <p className="font-regular font-dm text-[10px] text-[#6d6d6d] sm:text-base">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
