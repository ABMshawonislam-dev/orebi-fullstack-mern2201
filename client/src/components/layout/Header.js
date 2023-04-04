import Container from "./Container";
import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import Image from "./Image";
import { FaBars, FaSearch, FaUserAlt } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { HiShoppingCart } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import { Link } from "react-router-dom";

const Header = () => {
  let [categoryDropDownShow, setCategoryDropDownShow] = useState(false);
  let [userDropSownShow, setUserDropSownShow] = useState(false);
  let [cartDropSownShow, setCartDropSownShow] = useState(false);
  let categooryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categooryRef.current.contains(e.target)) {
        setCategoryDropDownShow(true);
      } else {
        setCategoryDropDownShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDropSownShow(true);
      } else {
        setUserDropSownShow(false);
      }

      if (cartRef.current.contains(e.target)) {
        setCartDropSownShow(true);
      } else {
        setCartDropSownShow(false);
      }
    });
  }, []);
  return (
    <div className=" bg-[#F5F5F3] py-6">
      <Container>
        <Flex className="flex justify-between">
          <div className="flex items-center">
            <Dropdown className="relative z-50" dropref={categooryRef}>
              <p className="font-regular flex items-center gap-x-2.5 font-dm text-sm">
                <FaBars />{" "}
                <span className="hidden lg:inline-block">Shop by Category</span>
              </p>
              {categoryDropDownShow && (
                <List className="font-regular absolute top-8 w-[263px] bg-primary font-dm text-sm text-[#767676]">
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Accesories"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Furniture "
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Electronics"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Clothes"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Bags"
                  />
                  <ListItem
                    className="border-b border-solid border-[#2D2D2D] py-4 px-5 duration-100 ease-in hover:px-7 hover:font-bold hover:text-white"
                    itemname="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-auto lg:w-[600px]">
            <Search
              className="font-regular w-full py-4 px-5 font-dm text-sm placeholder:text-[#c4c4c4] "
              placeholder="Search Products"
            />
            <FaSearch className="absolute top-4 right-4" />
          </div>
          <div className="flex items-center">
            <Flex className="flex gap-x-10">
              <Dropdown className="relative z-50" dropref={userRef}>
                <div className="flex items-center ">
                  <FaUserAlt />
                  <RxTriangleDown />
                </div>

                {userDropSownShow && (
                  <List className="font-regular absolute top-8 right-0 w-[200px] border border-solid border-[#F0F0F0] bg-white text-center font-dm text-sm text-primary">
                    <ListItem
                      className="border-b border-solid border-[#F0F0F0] py-4 px-5 duration-100 ease-in hover:bg-primary hover:bg-primary hover:font-bold hover:text-white"
                      itemname="My Account"
                    />
                    <ListItem
                      className="border-b border-solid border-[#F0F0F0] py-4 px-5 duration-100 ease-in hover:bg-primary hover:font-bold hover:text-white"
                      itemname="Log Out "
                    />
                  </List>
                )}
              </Dropdown>

              <div>
                <Dropdown className="relative z-50" dropref={cartRef}>
                  <HiShoppingCart className="text-2xl" />

                  {cartDropSownShow && (
                    <div className="absolute top-8 right-0 w-[360px] border border-solid border-[#F0F0F0]">
                      <div className=" bg-[#F5F5F3] p-5">
                        <Flex className="flex justify-between">
                          <div>
                            <Image imgsrc="assets/cartimage.png" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="font-dm text-sm font-bold text-primary">
                              Black Smart Watch
                            </h3>
                            <p className="mt-3 font-dm text-sm font-bold text-primary">
                              $44
                            </p>
                          </div>
                          <div className="flex items-center justify-end">
                            <ImCross className="text-sm" />
                          </div>
                        </Flex>
                      </div>
                      <div className="bg-white p-5">
                        <h4 className="font-regular font-dm text-base text-[#767676]">
                          Subtotal:{" "}
                          <span className="font-bold text-primary">$44.00</span>
                        </h4>
                        <Link
                          to="#"
                          className="mt-3 inline-block border border-solid border-primary  py-4 px-10 font-dm text-sm font-bold"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="#"
                          className="mt-3 ml-5 inline-block border border-solid border-primary bg-primary py-4 px-10 font-dm text-sm font-bold text-white"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
