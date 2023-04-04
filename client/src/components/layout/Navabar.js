import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Container from "./Container";
import { RiBarChartHorizontalFill } from "react-icons/ri";

import { useEffect, useState } from "react";
const Navabar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth() {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }

    scrollWidth();

    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <nav className="py-8">
      <Container>
        <Flex className="lg:flex">
          <div className="lg:w-3/12">
            <Image imgsrc="assets/logo.png" />
          </div>
          <div className="w-full lg:w-9/12">
            <RiBarChartHorizontalFill
              onClick={() => setShow(!show)}
              className="absolute top-2.5 right-2.5 ml-auto block lg:hidden"
            />

            {show && (
              <List className="mt-5 lg:mt-0 lg:flex lg:justify-end lg:gap-x-10">
                <ListItem
                  className="my-2.5 font-dm text-sm font-bold hover:font-bold lg:my-0"
                  itemname="Home"
                />
                <ListItem
                  className="font-regular my-2.5 font-dm text-sm hover:font-bold lg:my-0"
                  itemname="About"
                />
                <ListItem
                  className="font-regular my-2.5 font-dm text-sm hover:font-bold lg:my-0"
                  itemname="Service"
                />
                <ListItem
                  className="font-regular my-2.5 font-dm text-sm hover:font-bold lg:my-0"
                  itemname="Contact"
                />
              </List>
            )}
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navabar;
