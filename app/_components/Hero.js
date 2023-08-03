"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import data from "@/json/config";

const BikeInfo = ({ property, value, isLast }) => (
  <div key={property}>
    <div className={`font-medium text-2xl`}>{property}</div>
    <div className={`font-title text-4xl text-primary uppercase mt-0.5`}>
      {value}
    </div>
    {!isLast && (
      <div
        className={`h-0.5 bg-gradient-to-r from-brown-100 to-brown-100-transparent my-3`}
      ></div>
    )}
  </div>
);

export default function Hero() {
  const { carousel: bikeData } = data;

  const [activeIdx, setActiveIdx] = useState(0);
  const currentBike = bikeData[activeIdx];

  const bikeImages = bikeData.map((item) => (
    <Image
      key={item.name}
      src={item.src}
      width={718}
      height={340}
      alt={`${item.name} motorcycle`}
    />
  ));

  return (
    <div
      className={`pt-[177px] bg-gradient-radial from-neutral-400 to-orange-100 `}
    >
      <div className={`w-6xl mx-auto`}>
        <div className={`relative h-[98px]`}>
          <div className={`w-[725px] h-full bg-white mx-auto`}></div>
          <Image
            src={"/images/harley-davidson-logo.png"}
            width={0}
            height={0}
            sizes="100vw"
            alt="harley davidson logo"
            className={`absolute left-[18px] right-0 top-2 w-[775px] h-[108px] mx-auto`}
          />
        </div>
        <div className={`relative mt-9 flex justify-between items-end`}>
          <div className="min-w-[160px]">
            <BikeInfo
              property={"Engine Capacity"}
              value={currentBike.engine_capacity}
            />
            <BikeInfo property={"Torque"} value={currentBike.torque} />
            <BikeInfo
              property={"Horsepower"}
              value={currentBike.horsepower}
              isLast={true}
            />
          </div>
          <div className={`w-[740px] cursor-pointer`}>
            <Slider
              arrows={false}
              dots={true}
              dotsClass="slick-dots line-indicator"
              customPaging={(i) => (
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    top: "-9px",
                    opacity: "0",
                  }}
                >
                  {i}
                </div>
              )}
              afterChange={(activeIdx) => setActiveIdx(activeIdx)}
            >
              {bikeImages}
            </Slider>
          </div>
          <div className={`relative mb-[120px]`}>
            <div
              className={`relative w-[160px] h-[134px] bg-brown-100-transparent cut-box`}
            >
              <div className={`absolute bottom-5 inset-x-0`}>
                <button
                  className={`mx-auto bg-yellow-300 hover:bg-yellow-200 flex justify-center items-center px-4 pb-2 pt-3 font-title text-xl leading-none text-black uppercase`}
                >
                  helmet
                  <Image
                    src={"/images/up-right.png"}
                    width={20}
                    height={20}
                    alt="arrow up right icon"
                    className={`ml-1`}
                  />
                </button>
              </div>
            </div>
            <Image
              src={"/images/gdm-helmet.png"}
              width={130}
              height={130}
              alt="free helmet"
              className={`absolute -top-[68px] right-[10px]`}
            />
          </div>
        </div>
        <div className={`relative mr-8 pt-20 pb-[75px] flex justify-center gap-x-6`}>
          <button
            className={`bg-yellow-300 hover:bg-yellow-200 flex justify-center items-center px-[30px] pb-3 pt-4 font-title text-xl leading-none text-black uppercase shadow-md`}
          >
            <Image
              src={"/images/dealer-icon.png"}
              width={30}
              height={30}
              alt="dealer icon"
              className={`mr-3`}
            />
            find a dealer
          </button>
          <button
            className={`bg-neutral-100 hover:bg-neutral-200 flex justify-center items-center px-[30px] pb-3 pt-4 font-title text-xl leading-none text-black uppercase shadow-md border-2 border-[#4a4a4a]`}
          >
            <Image
              src={"/images/bike-icon.png"}
              width={40}
              height={40}
              alt="dealer icon"
              className={`mr-3`}
            />
            test ride
          </button>
        </div>
      </div>
    </div>
  );
}
