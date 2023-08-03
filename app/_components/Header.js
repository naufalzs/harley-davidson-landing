import React from "react";
import Image from "next/image";

import Logo from "./Logo";

import data from "@/json/config.json";

export default function Header() {
  const { navigation: navigationData } = data;

  const navList = navigationData.map((item) => {
    return item.dropdown ? (
      <li
        key={item.name}
        className={`flex items-center font-title text-xl tracking-wider uppercase cursor-pointer`}
      >
        {item.name}
        <span>
          <Image
            src={"/images/chevron-down.png"}
            width={18}
            height={18}
            className="ml-1"
            alt="chevron-down"
          />
        </span>
      </li>
    ) : (
      <li
        key={item.name}
        className={`font-title text-xl tracking-wider uppercase cursor-pointer`}
      >
        {item.name}
      </li>
    );
  });

  return (
    <div
      className={`absolute top-0 left-0 right-0 max-w-6xl mx-auto flex justify-between items-center py-7 border-b border-neutral-400`}
    >
      <Logo />
      <nav>
        <ul className={`flex justify-center gap-x-11`}>{navList}</ul>
      </nav>
      <button
        className={`shrink-0 bg-black hover:bg-gray-800 flex justify-center items-center px-7 pb-[14px] pt-[16px] font-title text-xl leading-none tracking-wide text-white uppercase`}
      >
        contact us
      </button>
    </div>
  );
}
