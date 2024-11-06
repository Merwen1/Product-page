"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductGallery = () => {
  const [active, setActive] = useState(0);
  const imgs = [
    "/images/iPhone16-Pro-natural-pos1.webp",
    "/images/Phone16-Pro-natural-pos2.webp",
    "/images/Phone16-Pro-natural-pos3.webp",
    "/images/Phone16-Pro-natural-pos5.webp",
  ];

  const handleChange = (value) => {
    const newIndex = active + value;

    if (newIndex >= imgs.length) {
      setActive(0);
    } else if (newIndex < 0) {
      setActive(imgs.length - 1);
    } else {
      setActive(newIndex);
    }
  };
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div className="flex flex-col gap-8 w-full h-full">
      <div className="flex items-center justify-between w-full border-2 border-[#E5E5E5] rounded-md px-10">
        <button onClick={() => handleChange(-1)}>
          <Image
            src={"/images/arrow-left.svg"}
            alt="back"
            width={25}
            height={25}
          />
        </button>
        <Image
          src={imgs[active]}
          alt="Iphone 11 pro max"
          width={555}
          height={555}
        />
        <button onClick={() => handleChange(1)}>
          <Image
            src={"/images/arrow-right.svg"}
            alt="next"
            width={25}
            height={25}
          />
        </button>
      </div>
      <div className="flex w-full justify-between gap-4">
        {imgs.map((item, index) => (
          <Image
            src={item}
            key={index}
            alt="Iphone 11 pro max"
            width={200}
            height={200}
            className={`${
              index === active ? "border border-[#F140A6]" : "bg-[#F4F5FF]"
            }`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
