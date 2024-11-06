import CustomerReview from "@/components/CustomerReview";
import ItemContainer from "@/components/ItemContainer";
import SmallItem from "@/components/SmallItem";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-20 flex flex-col items-center gap-20">
      <ItemContainer />
      <div className="flex flex-col gap-8 w-full">
        <span className="text-4xl font-bold text-[#242424]">
          Customer Reviews
        </span>
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
            <Image src={"/images/star.svg"} alt="star" width={25} height={25} />
          </div>
          <span className="text-lg">4.0 (324 Reviews)</span>
        </div>
        <div>
          <CustomerReview />
          <CustomerReview />
          <CustomerReview />
        </div>
      </div>
      <div className="flex flex-col gap-8 w-full">
        <span className="text-4xl font-bold text-[#242424]">
          You may also want
        </span>
        <div className="flex gap-5 justify-between">
          <SmallItem
            item={{
              name: "AirPods (2nd generation)",
              model: "IQD 9500",
              img: "/images/airpods.png",
            }}
          />
          <SmallItem
            item={{
              name: "Solo 2 Headphones",
              model: "IQD 9500",
              img: "/images/headphones.png",
            }}
          />
          <SmallItem
            item={{
              name: "HUAWEI Band 4",
              model: "IQD 10000",
              img: "/images/huawei-band-4.png",
            }}
          />
        </div>
      </div>
    </div>
  );
}
