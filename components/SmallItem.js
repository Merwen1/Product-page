import Image from "next/image";
import React from "react";

const SmallItem = ({ item }) => {
  return (
    <div className="flex rounded-md shadow-md">
      <Image
        src={item.img}
        alt={item.name}
        width={200}
        height={200}
        className="bg-[#F3F4FF] rounded-md p-10 object-contain"
      />
      <div className="flex flex-col items-start justify-center px-10 gap-6">
        <div className="flex flex-col gap-5 text-[#464855] text-lg font-semibold">
          <span>{item.name}</span>
          <span>{item.model}</span>
        </div>
        <button className="text-[#EC028A] text-lg font-semibold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SmallItem;
