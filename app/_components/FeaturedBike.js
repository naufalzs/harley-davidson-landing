import React from "react";
import Image from "next/image";

import Button from "./Button";

import data from "@/json/config.json";

export default function FeaturedBike() {
  const { featured_bike: featured } = data;

  return (
    <div className={`relative w-6xl mx-auto grid grid-cols-[450px_1fr]`}>
      <div>
        <div className={`font-title text-primary text-2xl tracking-wider`}>
          {featured.name}
        </div>
        <div className={`my-4 font-title text-7xl leading-none`}>
          {featured.tagline}
        </div>
        <div className={`font-medium text-lg tracking-widest leading-loose`}>
          {featured.desc}
        </div>
        <div className={`mt-[54px] flex gap-x-6`}>
          <Button color={"primary"} size={"lg"}>
            <Image
              src={"/images/dealer-icon.png"}
              width={30}
              height={30}
              alt="dealer icon"
              className={`mr-3`}
            />
            find a dealer
          </Button>
          <Button color={"secondary"} size={"lg"} outline={true}>
            <Image
              src={"/images/bike-icon.png"}
              width={40}
              height={40}
              alt="dealer icon"
              className={`mr-3`}
            />
            test ride
          </Button>
        </div>
      </div>
      <div className={`relative`}>
        <div className={`absolute bottom-[42px] right-[80px]`}>
          <Image
            src={"/images/polaroid-road.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt="polaroid road"
            className="w-[320px] h-[365px]"
          />
        </div>
        <div
          className={`absolute w-[626px] h-[360px] -bottom-[80px] -right-[45px]`}
        >
          <Image
            src={featured.src}
            fill={true}
            alt={`${featured.name} motorcycle`}
            sizes="(max-width: 626px) 100vw"
            className="transform -scale-x-100"
          />
        </div>
      </div>
    </div>
  );
}
