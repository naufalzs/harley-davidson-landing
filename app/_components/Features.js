import React from "react";
import Image from "next/image";

import Button from "./Button";

import data from "@/json/config";

export default function Features() {
  const { features: featuresData } = data;

  const avatarList = featuresData.avatars.map((img) => (
    <div
      key={img.src}
      className={`relative w-[54px] h-[54px] rounded-full border-[3px] border-white overflow-hidden -ml-3`}
    >
      <Image
        src={img.src}
        fill={true}
        alt="avatar"
        sizes="(max-width: 54px) 100vw"
      />
    </div>
  ));

  return (
    <div
      className={`w-6xl h-[660px] mx-auto mt-[124px] mb-[180px] border-2 border-gray-800`}
    >
      <div
        className={`h-full grid grid-cols-[470px_repeat(2,_minmax(0,_1fr))]`}
      >
        <div className={`relative row-span-2 p-10 overflow-hidden`}>
          <div className={`font-medium text-lg tracking-widest leading-loose`}>
            {featuresData.promotional_desc}
          </div>
          <div className={`mt-8`}>
            <Button color={"transparent"} size={"text"}>
              learn more
              <Image
                src={"/images/up-right.png"}
                width={20}
                height={20}
                alt="arrow up right icon"
                className={`ml-1`}
              />
            </Button>
          </div>
          <div
            className={`absolute w-[740px] h-[425px] bottom-4 -left-[280px]`}
          >
            <Image
              src={featuresData.motorcycle_src}
              fill={true}
              alt={`${featuresData.motorcycle_name} motorcycle`}
              sizes="(max-width: 740px) 100vw"
            />
          </div>
        </div>
        <div
          className={`relative border-l-2 border-b-2 border-gray-800 overflow-hidden`}
        >
          <div className={`absolute inset-0 px-9 py-[30px]`}>
            <div className={`h-full flex flex-col justify-between`}>
              <div className={`font-title text-8xl`}>
                {featuresData.top_speed}
                <span className={"text-3xl ml-3"}>mph</span>
              </div>
              <div className={`font-medium text-xl self-end text-right`}>
                <div>
                  Speed
                  <br />
                  Maximum
                </div>
              </div>
            </div>
          </div>
          <Image
            src={featuresData.top_speed_src}
            fill={true}
            alt="speedometer"
            className={`hover:transform hover:-translate-y-[353px] transition-card`}
            sizes="(max-width: 355px) 100vw"
          />
        </div>
        <div
          className={`relative border-l-2 border-b-2 border-gray-800 overflow-hidden`}
        >
          <Image
            src={featuresData.engine_power_src}
            fill={true}
            alt="speeding"
            sizes="(max-width: 355px) 100vw"
          />
          <div
            className={`absolute bg-white inset-0 px-9 py-[30px] flex flex-col items-end justify-between hover:transform hover:translate-x-[353px] transition-card`}
          >
            <div className={`font-title text-8xl`}>
              {featuresData.engine_power}
              <span className={"text-3xl ml-3"}>kw</span>
            </div>
            <div className={`font-medium text-lg text-right`}>
              <div>
                Engine
                <br />
                Horsepower
              </div>
            </div>
          </div>
        </div>
        <div className={`relative border-l-2 border-gray-800 overflow-hidden`}>
          <Image
            src={featuresData.torque_power_src}
            fill={true}
            alt="sportster motorcycle"
            sizes="(max-width: 355px) 100vw"
          />
          <div
            className={`absolute bg-white inset-0 px-9 py-[30px] flex flex-col justify-between hover:transform hover:translate-y-[353px] transition-card`}
          >
            <div
              className={`font-medium text-lg tracking-widest leading-relaxed`}
            >
              Experience our new approach to dynamic torque, fluid cooling
              engine
            </div>
            <div className={`flex justify-between items-end`}>
              <div className={`font-title text-8xl leading-none`}>
                {featuresData.torque_power}
                <span className={"text-3xl ml-3"}>nm</span>
              </div>
              <div className={`font-medium text-lg mb-3 text-right`}>
                <div>
                  Power
                  <br />
                  Torque
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`relative border-l-2 border-gray-800 bg-gradient-to-tr from-orange-400 from-10% to-primary to-60%`}
        >
          <div
            className={`absolute inset-0 px-9 py-[64px] flex flex-col justify-between`}
          >
            <div className={`mt-1 font-title text-5xl text-white leading-none`}>
              the <br /> riders
            </div>
            <div className={`flex pl-3`}>
              {avatarList}
              <div
                className={`relative w-[54px] h-[54px] rounded-full bg-white overflow-hidden -ml-3`}
              >
                <div
                  className={`h-full flex justify-center items-center text-lg leading-none ml-1.5 mb-1.5`}
                >
                  3K+
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
