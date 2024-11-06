"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const links = [
    {
      name: "Lines",
      subs: ["page1", "page2"],
    },
    {
      name: "Internet",
      subs: ["page1", "page2"],
    },
    {
      name: "Devices",
      subs: ["page1", "page2"],
    },
    {
      name: "Accessories",
      subs: ["page1", "page2"],
    },
    {
      name: "Recharge Line",
      subs: [],
    },
  ];
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center w-full py-10 px-20">
        <Image
          src={"/images/Zain-logo.svg"}
          alt="logo"
          width={250}
          height={40}
        />
        <div className="flex gap-8 items-center">
          <button type="button" onClick={() => {}}>
            <Image src={"/images/bag.svg"} alt="bag" width={40} height={50} />
          </button>
          <button type="button" onClick={() => {}}>
            <Image
              src={"/images/user2.svg"}
              alt="profile"
              width={40}
              height={40}
            />
          </button>
          <button
            className="flex items-center gap-1"
            type="button"
            onClick={() => {}}
          >
            <Image
              src={"/images/world.svg"}
              alt="world"
              width={40}
              height={40}
            />
            <Image
              src={"/images/arrow-down.svg"}
              alt="arrow-down"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      {/* Links Nav  */}
      <div className="w-full flex justify-between items-center bg-[#F6F6F6] py-4 px-20">
        <div className="flex gap-20 bg text-xl font-bold">
          {links.map((item, index) =>
            item.subs.length > 0 ? (
              <div
                className="flex items-center gap-1 cursor-pointer"
                key={index}
              >
                <span>{item.name} </span>
                <Image
                  src="/images/arrow-down.svg"
                  alt="arrow-down"
                  width={20}
                  height={20}
                />
              </div>
            ) : (
              <Link href="/" key={index}>
                {item.name}
              </Link>
            )
          )}
        </div>
        <div className="flex border-2 border-solid rounded-2xl px-4 py-2">
          <input
            className="bg-transparent focus:outline-none"
            type="text"
            placeholder="Search for products"
          />
          <Image
            src={"/images/search.svg"}
            alt="arrow-down"
            width={20}
            height={20}
            className="bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
