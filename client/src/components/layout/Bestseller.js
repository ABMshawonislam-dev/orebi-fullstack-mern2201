import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Flex from "./Flex";
import Product from "./Product";
const Bestseller = () => {
  return (
    <div className="mt-5 md:mt-32">
      <Container>
        <Heading title="Our Bestsellers" />
        <Flex className="sm:flex sm:max-lg:flex-wrap sm:max-md:justify-between md:gap-x-10">
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px] ">
            <Product src="assets/p1.png" badge={false} />
          </div>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px] ">
            <Product src="assets/p1.png" badge={true} />
          </div>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px] ">
            <Product src="assets/p1.png" badge={false} />
          </div>
          <div className="sm:max-w-[300px] md:max-lg:max-w-[345px] lg:max-w-[370px] ">
            <Product src="assets/p1.png" badge={true} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Bestseller;
