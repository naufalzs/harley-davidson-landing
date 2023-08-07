import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "./Logo";

import data from "@/json/config.json";
import Button from "./Button";

// const Menu = () => {
//   const { footer: footerData } = data;

//   return (
//     <div key={item.title}>
//       <div className={`mb-7 font-semibold text-xl uppercase`}>home</div>
//       <div className={"grid gap-y-4"}>
//         <div className={`font-semibold text-lg`}>About us</div>
//       </div>
//     </div>
//   );
// };

export default function Footer() {
  const { social_media: socialMediaData, footer: footerData } = data;

  const socialMediaList = socialMediaData.map((item) => (
    <Link key={item.name} href={item.href}>
      <div
        className={`w-[45px] h-[45px] border border-white rounded-sm flex justify-center items-center`}
      >
        <Image src={item.img} width={22} height={22} alt={item.name} />
      </div>
    </Link>
  ));

  const menuSection = footerData.menu.map((menu) => (
    <div key={menu.title}>
      <div className={`mb-7 font-semibold text-xl uppercase`}>{menu.title}</div>
      <div className={"grid gap-y-4"}>
        {menu.list.map((childMenu) => (
          <Link
            key={childMenu.name}
            href={childMenu.href}
            className={`font-semibold text-lg`}
          >
            {childMenu.name}
          </Link>
        ))}
      </div>
    </div>
  ));

  const infoList = footerData.info.map((info, index) => (
    <Link key={info.name} href={info.href}>
      <div
        className={`w-[116px] font-semibold text-base leading-snug 
        ${index > 0 && "pl-4"}
        ${index + 1 < footerData.info.length && "border-r border-white"}`}
      >
        {info.name}
      </div>
    </Link>
  ));

  return (
    <div className={`bg-black text-white`}>
      <div className={`w-6xl mx-auto pt-[88px] pb-[42px]`}>
        <div className={`grid grid-rows-[1fr_70px]`}>
          <div className={"flex justify-between items-start mb-20"}>
            <div>
              <Logo />
              <div
                className={`mt-10 mb-[18px] font-title text-xl tracking-wide`}
              >
                stay connected with us
              </div>
              <div className={`flex gap-x-4`}>{socialMediaList}</div>
            </div>
            <div>
              <div className={"flex gap-x-[154px]"}>{menuSection}</div>
            </div>
          </div>
          <div
            className={`border-t border-gray-800 h-full flex justify-between items-end`}
          >
            <div className={"flex"}>{infoList}</div>
            <div>
              <Button color={"transparent-white"} size={"text"}>
                <Image
                  src={"/images/dealer-yellow-icon.png"}
                  width={30}
                  height={30}
                  alt="dealer icon"
                  className={`mr-3`}
                />
                find a dealer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
