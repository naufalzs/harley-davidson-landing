import Image from "next/image";
import React from "react";

import Button from "./Button";

import data from "@/json/config.json";

const FeatureList = ({ isButton, children }) => (
  <div className={`py-4 font-title text-3xl border-b-[3px] border-gray-950`}>
    {isButton ? (
      <Button color={"transparent"} size={"text"}>
        <div className="text-3xl">{children}</div>
        <Image
          src={"/images/up-right.png"}
          width={20}
          height={20}
          alt="arrow up right icon"
          className={`ml-4`}
        />
      </Button>
    ) : (
      <div className={`leading-none`}>{children}</div>
    )}
  </div>
);

export default function Community() {
  const { community } = data;

  const harleyFeatures = community.map((item) => (
    <FeatureList key={item.name} isButton={item.href}>{item.name}</FeatureList>
  ));

  return (
    <div className={`w-6xl mx-auto mt-[145px] mb-[127px]`}>
      <div className={`grid grid-cols-[503px_1fr]`}>
        <div className={`grid grid-rows-[155px_405px]`}>
          <div className={`relative h-full border-b-2 border-gray-950`}>
            <div
              className={`absolute top-0 left-0 font-title text-5xl leading-tight`}
            >
              harley owners <br />
              community
            </div>
          </div>
          <div className={`relative w-[290px] pt-[45px]`}>
            <div className={`flex items-center`}>
              <Image
                src={"/images/helmet-harley-white.png"}
                width={100}
                height={100}
                alt="helmet harley"
              />
              <div className={`ml-9 font-title text-6xl`}>$35.23</div>
            </div>
            <div className={`mt-[30px] text-semibold tracking-wider`}>
              Fans of the classic Harley Davidson paired with a revolution
              captain America superior version of helmet
            </div>
            <div className={`absolute bottom-0 left-0`}>
              <Button color={"primary"} size={"sm"}>
                <Image
                  src={"/images/tires-dunlop.png"}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="tires dunlop"
                  className={`mr-3 my-1 w-[25px] h-[29px]`}
                />
                join the gang
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`h-full pl-[100px] pr-[20px] border-l-2 border-gray-950`}
        >
          <div className="relative h-full">
            <div className={`w-[300px] mb-[90px] flex items-center`}>
              <Image
                src={"/images/tires-dunlop.png"}
                width={0}
                height={0}
                sizes="100vw"
                alt="tires dunlop"
                className={`mr-3 my-1 w-[80px] h-[93px]`}
              />
              <div
                className={`text-semibold text-base tracking-wide uppercase`}
              >
                be proud owner and happy for harley davidson.
              </div>
            </div>
            <div className={`flex justify-between`}>
              <div className={`w-[240px]`}>{harleyFeatures}</div>
              <div>
                <Image
                  src={"/images/jacket-harley.png"}
                  width={250}
                  height={250}
                  alt="jacket harley davidson"
                />
              </div>
            </div>
            <div className={`absolute bottom-0 left-0`}>
              <Button color={"secondary"} size={"md"} outline={true}>
                explore merch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
