import React from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import Image from "../components/layout/Image";

const About = () => {
  return (
    <Container>
      <Breadcrumb />
      <Flex className="flex gap-x-10">
        <div className="w-2/4">
          <Image imgsrc="assets/aboutimg.png" className="w-full" />
        </div>
        <div className="w-2/4">
          <Image imgsrc="assets/aboutimg.png" className="w-full" />
        </div>
      </Flex>
      <div className="mt-32 mb-28">
        <h4 className="font-regular font-dm text-[39px]">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </h4>
      </div>
      <Flex className="flex justify-between">
        <div className="w-[32%]">
          <h4 className="tex-2xl mb-3 font-dm font-bold">Our Vision</h4>
          <p className="tex-base font-regular font-dm text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-[32%]">
          <h4 className="tex-2xl mb-3 font-dm font-bold">Our Story</h4>
          <p className="tex-base font-regular font-dm text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic.
          </p>
        </div>
        <div className="w-[32%]">
          <h4 className="tex-2xl mb-3 font-dm font-bold">Our Brands</h4>
          <p className="tex-base font-regular font-dm text-[#767676]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley.
          </p>
        </div>
      </Flex>
    </Container>
  );
};

export default About;
