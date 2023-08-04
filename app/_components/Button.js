"use client";
import React from "react";

export default function Button({
  color,
  size,
  shadow,
  outline,
  multipleLine,
  className,
  onClick,
  children,
}) {
  const defaultClass =
    "shrink-0 font-title text-xl leading-none uppercase transition-all duration-100 ease-in-out";
  const multipleLineClass = multipleLine
    ? "block"
    : "flex justify-center items-center";
  const shadowClass = "shadow-md";
  const outlineClass = "border-2 border-[#4a4a4a]";

  const colorClass = () => {
    switch (color) {
      case "primary":
        return "bg-yellow-300 hover:bg-yellow-200 text-black";

      case "secondary":
        return "bg-neutral-100 hover:bg-neutral-200 text-black";

      case "transparent":
        return "bg-transparent text-black";

      case "transparent-white":
        return "bg-transparent text-white";

      default:
        return "bg-black hover:bg-gray-800 text-white";
    }
  };

  const sizeClass = () => {
    switch (size) {
      case "text":
        return "p-0";

      case "sm":
        return "px-4 pb-2 pt-3";

      case "lg":
        return "px-[30px] pb-3 pt-4";

      default:
        return "px-7 pb-[14px] pt-[16px]";
    }
  };

  const btnClass = [
    defaultClass,
    colorClass(),
    sizeClass(),
    multipleLineClass,
    shadow && shadowClass,
    outline && outlineClass,
    className,
  ].join(" ");

  return (
    <>
      <button
        className={btnClass}
        onClick={onClick ? () => onClick() : undefined}
      >
        {children}
      </button>
    </>
  );
}
