import React from "react";

export default function Logo() {
  return (
    <div
      className={
        "shrink-0 w-[200px] h-[48px] bg-black p-[3px] ring-[6px] ring-inset ring-primary flex justify-center items-center font-logo text-[34px] tracking-wide text-white uppercase cursor-pointer"
      }
    >
      <div className={`ml-[1px] mt-0.5`}>harley-davidson</div>
    </div>
  );
}
