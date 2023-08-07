import React from "react";
import Image from "next/image";

export default function Gears() {
  return (
    <div className={`w-6xl mx-auto mt-[250px] mb-[270px]`}>
      <div className={"text-center"}>
        <div className={`font-title text-xl text-primary tracking-widest`}>
          kits
        </div>
        <div className={`mt-2 mb-[96px] font-title text-7xl leading-none`}>
          level up your
          <br />
          protection gear
        </div>
      </div>
      <div className={`grid grid-cols-4 gap-x-7`}>
        <div className={`grid grid-rows-[380px_60px]`}>
          <div className={`relative pr-7 pb-6 border-r-2 border-gray-950`}>
            <div
              className={`relative h-full bg-slate-400 flex justify-center items-center`}
            >
              <Image
                src={"/images/racing-suit-dainese.png"}
                width={0}
                height={0}
                sizes="100vw"
                alt="racing suit dainese"
                className={`absolute -top-14 transform -scale-x-100 w-[214px] h-[378px]`}
              />
            </div>
          </div>
          <div className={`relative`}>
            <div
              className={`h-[36px] border-t-2 border-r-2 border-gray-950`}
            ></div>
            <div className={`absolute bottom-0 left-0 font-title text-3xl`}>
              racing suit
            </div>
          </div>
        </div>
        <div className={`grid grid-rows-[90px_350px]`}>
          <div className={`relative`}>
            <div className={`h-[53px]`}></div>
            <div
              className={`h-[37px] border-b-2 border-r-2 border-gray-950`}
            ></div>
            <div
              className={`absolute top-0 left-0 font-title text-3xl leading-tight`}
            >
              gdm motorcycle <br /> gloves
            </div>
          </div>
          <div
            className={`relative h-[330px] pt-7 pr-[30px] border-r-2 border-gray-950`}
          >
            <div
              className={`relative h-[238px] bg-slate-400 flex justify-center items-center`}
            >
              <Image
                src={"/images/gdm-gloves.png"}
                width={180}
                height={162}
                alt="gdm gloves"
              />
            </div>
          </div>
        </div>
        <div className={`grid grid-rows-[380px_60px]`}>
          <div className={`relative pr-7 pb-6 border-r-2 border-gray-950`}>
            <div
              className={`relative h-full bg-slate-400 flex justify-center items-center`}
            >
              <Image
                src={"/images/gdm-helmet-race.png"}
                width={190}
                height={190}
                alt="gdm helmet-race"
              />
            </div>
          </div>
          <div className={`relative`}>
            <div
              className={`h-[36px] border-t-2 border-r-2 border-gray-950`}
            ></div>
            <div className={`absolute bottom-0 left-0 font-title text-3xl`}>
              fullface helmet
            </div>
          </div>
        </div>
        <div className={`grid grid-rows-[90px_350px]`}>
          <div className={`relative`}>
            <div className={`h-[53px]`}></div>
            <div
              className={`h-[37px] border-b-2 border-r-2 border-gray-950`}
            ></div>
            <div
              className={`absolute top-0 left-0 font-title text-3xl leading-tight`}
            >
              special dunlop <br /> tires
            </div>
          </div>
          <div
            className={`relative h-[330px] pt-7 pr-[30px] border-r-2 border-gray-950`}
          >
            <div
              className={`relative h-[238px] bg-slate-400 flex justify-center items-center`}
            >
              <Image
                src={"/images/tires-dunlop.png"}
                width={0}
                height={0}
                sizes="100vw"
                alt="tires dunlop"
                className="w-[145px] h-[170px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
