"use client";
import Image from "next/image";
import { useState } from "react";

const ItemDetails = ({ product }) => {
  const [activeCapacity, setActiveCapacity] = useState(0);
  const [activeColor, setActiveColor] = useState(0);

  return (
    <div className="flex flex-col gap-7 w-full border-2 border-[#E5E5E5] rounded-md p-10">
      <div className="flex gap-1">
        <div className="flex gap-1">
          <Image
            src={"/images/star-gold.svg"}
            alt="star"
            width={25}
            height={25}
          />
          <Image
            src={"/images/star-gold.svg"}
            alt="star"
            width={25}
            height={25}
          />
          <Image
            src={"/images/star-gold.svg"}
            alt="star"
            width={25}
            height={25}
          />
          <Image
            src={"/images/star-gold.svg"}
            alt="star"
            width={25}
            height={25}
          />
          <Image src={"/images/star.svg"} alt="star" width={25} height={25} />
        </div>
        <span className="text-lg">4.0</span>
      </div>
      <span className="text-[#242424] text-4xl font-bold">{product.name}</span>
      <span className="text-[#3657A1] text-xl font-semibold">
        {product.model}
      </span>
      <div className="flex flex-col gap-5 items-start">
        <span className="text-[#242424] text-lg">Choose your color</span>
        <div className="flex gap-5 justify-start">
          {product.colors.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveColor(index)}
              className={`w-8 h-8 ${
                index === activeColor ? "border border-[#BEBFC6]" : ""
              }`}
              style={{ backgroundColor: item }}
            ></button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start">
        <span className="text-[#242424] text-lg">Choose your capacity</span>
        <div className="flex gap-5 justify-start">
          {product.capacity.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveCapacity(index)}
              className={`p-2 flex-1 font-semibold ${
                index === activeCapacity
                  ? "border border-[#BEBFC6] text-[#EC0089]"
                  : "text-[#545662]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start">
        <span className="text-[#242424] text-lg">Share with</span>
        <div className="flex gap-5 justify-start">
          <Image
            src={"/images/facebook-share.svg"}
            alt="facebook"
            width={25}
            height={25}
          />
          <Image
            src={"/images/instagram-share.svg"}
            alt="instagram"
            width={25}
            height={25}
          />
          <Image
            src={"/images/pintrest-share.svg"}
            alt="pintrest"
            width={25}
            height={25}
          />
          <Image
            src={"/images/twitter-share.svg"}
            alt="twitter"
            width={25}
            height={25}
          />
        </div>
      </div>
      <div className="flex gap-6">
        <button className="rounded-full px-12 py-5 text-white bg-[#EC0089]">
          Add to Cart
        </button>
        <Image
          src={"/images/like-heart.svg"}
          alt="like"
          width={30}
          height={30}
        />
      </div>
      <div className="flex flex-col gap-10 items-start text-start">
        <div className="flex items-center gap-10">
          <button className="text-[#242424] text-lg underline font-bold">
            Description
          </button>
          <button className="text-[#242424] text-lg">Details</button>
        </div>
        <p>
          As soon as Computerized Tomography or CT scans became accessible in
          the 1970s, they reformed the practice of neurology. They did the scans
          by trans- mitting x-ray streams all the way through the head.
        </p>
      </div>
    </div>
  );
};

export default ItemDetails;
