import Image from "next/image";
import React from "react";

const CustomerReview = () => {
  return (
    <div className="flex flex-col w-full border-dashed border-b-2 pb-5 mt-5">
      <div className="flex justify-between w-full">
        <div className="flex gap-4">
          <span className="text-[#242424] font-bold text-xl">Ahmad Smadi</span>
          <div className="flex gap-1">
            <div className="flex gap-[2px]">
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
              <Image
                src={"/images/star.svg"}
                alt="star"
                width={25}
                height={25}
              />
            </div>
            <span className="text-lg">4.0</span>
          </div>
        </div>
        <span>Feb 2, 2020</span>
      </div>
      <p className="w-full lg:w-1/2">
        Lorem ipsum dolor sit amet consectetuer adipiscing elitlorem ipsum dolor
        sit amet consectetuer adipiscing elitlorem ipsum dolor sit amet
        consectetuer adipiscing elitlorem ipsum dolor sit amet consectetuer
        adipiscing elit
      </p>
    </div>
  );
};

export default CustomerReview;
