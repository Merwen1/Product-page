import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#F6F6F6] w-full px-10">
      <div className="flex w-full items-start py-20 border-b border-[#EFEFF4] text-xl font-bold px-10">
        <Link
          href={"https://www.google.com/maps/"}
          target={"_blank"}
          className="flex flex-1  items-center gap-2"
        >
          <Image
            src={"/images/location.svg"}
            alt="location"
            width={25}
            height={25}
          />
          <span>Find Location</span>
        </Link>
        <Link
          href={"tel:+1234567890"}
          target={"_blank"}
          className="flex flex-1  items-center gap-2"
        >
          <Image src={"/images/phone.svg"} alt="phone" width={25} height={25} />
          <span>Contact</span>
        </Link>
        <div className="flex flex-1 gap-2 flex-col items-start">
          <span>Follow us</span>
          <div className="flex gap-4">
            <Link href={"https://www.facebook.com/zainjordan"} target="_blank">
              <Image
                src={"/images/facebook.svg"}
                alt="facebook"
                width={40}
                height={40}
              />
            </Link>
            <Link href={"https://twitter.com/ZainJo"} target="_blank">
              <Image
                src={"/images/twitter.svg"}
                alt="twitter"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/zainjordan/"}
              target="_blank"
            >
              <Image
                src={"/images/linkedin.svg"}
                alt="linkedin"
                width={40}
                height={40}
              />
            </Link>
            <Link href={"https://www.instagram.com/zainjo/"} target="_blank">
              <Image
                src={"/images/instagram.svg"}
                alt="instagram"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-1 gap-4 flex-wrap">
          <Link href={"/"}>
            <Image
              src={"/images/google-play.svg"}
              alt="google-play"
              width={150}
              height={40}
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/images/app-store.svg"}
              alt="app-store"
              width={150}
              height={40}
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/images/huawei-appgallery.svg"}
              alt="huawei-appgallery"
              width={150}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-between w-full text-[#898EA2] py-10 px-10">
        <span>© 2019 Zain. All Rights Reserved.</span>
        <div className="flex gap-10">
          <Link href={"/privacy-policy"}>Pravacy Policy</Link>
          <Link href={"/terms-of-use"}>Terms of Use</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
