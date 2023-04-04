import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { category } from "../../data/data";
import Flex from "./Flex";
import LeftSidebarItem from "./LeftSidebarItem";

const SidebarContent = ({ dropDown, droptitle, data }) => {
  let [drop, setDrop] = useState(dropDown);
  let [show, setShow] = useState(dropDown);
  console.log("cat", data);
  return (
    <div className="mb-14">
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="mb-9 flex cursor-pointer items-center justify-between"
        >
          <h3 className="cursor-pointer font-dm text-xl font-bold">
            {droptitle}{" "}
          </h3>
          <GoTriangleDown />
        </div>
      ) : (
        <h3 className="mb-9 cursor-pointer font-dm text-xl font-bold">
          {droptitle}
          {"adas "}
        </h3>
      )}

      {show && (
        <>
          {data.map((item, index) =>
            item.subcategory ? (
              <>
                <LeftSidebarItem
                  subdropdown={item.subcategory ? true : false}
                  title={item.name}
                >
                  {item.subcategory &&
                    item.subcategory.map((sitem) => (
                      <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                        {sitem.name}
                      </h1>
                    ))}
                </LeftSidebarItem>
              </>
            ) : (
              <LeftSidebarItem
                subdropdown={item.subcategory ? true : false}
                title={item.name}
                color={item.code}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                      {sitem.name}
                    </h1>
                  ))}
              </LeftSidebarItem>
            )
          )}
        </>
      )}

      {!drop && (
        <>
          {data.map((item, index) =>
            item.subcategory ? (
              <>
                <LeftSidebarItem
                  subdropdown={item.subcategory ? true : false}
                  title={item.name}
                >
                  {item.subcategory &&
                    item.subcategory.map((sitem) => (
                      <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                        {sitem.name}
                      </h1>
                    ))}
                </LeftSidebarItem>
              </>
            ) : (
              <LeftSidebarItem
                subdropdown={item.subcategory ? true : false}
                title={item.name}
                color={item.code}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                      {sitem.name}
                    </h1>
                  ))}
              </LeftSidebarItem>
            )
          )}
        </>
      )}
    </div>
  );
};

export default SidebarContent;
