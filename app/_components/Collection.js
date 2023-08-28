import React from "react";
import Image from "next/image";

import Button from "./Button";

export default function Collection() {
  return (
    <div
      className={`pt-20 pb-[70px] bg-gradient-to-tr from-orange-400 from-10% to-primary to-60%`}
    >
      <div className={`h-full w-6xl mx-auto grid grid-rows-[230px_1fr]`}>
        <div
          className={`font-title text-white leading-none flex justify-between border-b-2 border-brown-900 border-opacity-60`}
        >
          <div>
            <div className={`mt-6 text-2xl`}>cruiser</div>
            <div className={`mt-4 text-4xl`}>lowrider</div>
          </div>
          <div className={`relative`}>
            <div
              className={`absolute w-[626px] h-[360px] -top-[13rem] -rotate-6 transform -translate-x-1/2`}
            >
              <Image
                src={"/images/lowrider-black.png"}
                fill={true}
                alt="lowrider motorcycle"
                sizes="(max-width: 626px) 100vw"
              />
            </div>
          </div>
          <div>
            <div className={`mb-6 text-2xl`}>new</div>
            <Button
              color={"transparent-white"}
              size={"text"}
              multipleLine={true}
            >
              <div className={`text-4xl mb-2`}>harley davidson</div>
              <div className={`flex text-4xl`}>
                collection
                <Image
                  src={"/images/up-right-white.png"}
                  width={28}
                  height={32}
                  alt="arrow up right icon"
                  className={`ml-3`}
                />
              </div>
            </Button>
          </div>
        </div>
        <div className={`mt-12 flex justify-between text-white`}>
          <div className={"flex"}>
            <Image
              src={"/images/helmet-harley-white.png"}
              width={125}
              height={125}
              alt="helmet harley"
            />

            <div className={`ml-8 font-title text-4xl leading-tight`}>
              men&#39;s <br />
              motorcycle <br />
              helmet
            </div>
          </div>
          <div className={`w-[710px] flex justify-between`}>
            <div className={`w-[300px] text-semibold text-lg`}>
              Instant power and acceleration with a twist of the throttle. No
              clutch, no gas, pure performance
            </div>
            <div>
              <Button color={"secondary"} size={"lg"} outline={true}>
                <Image
                  src={"/images/bike-icon.png"}
                  width={40}
                  height={40}
                  alt="dealer icon"
                  className={`mr-3`}
                />
                see all bikes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
