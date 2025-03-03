import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  type: "fill" | "border" | "hero";
  icon?: IconType | string;
  iconPosition?: "left" | "right";
  bgColor?: string;
  borderColor?: string;
}

const CustomButton = ({
  text,
  type,
  icon,
  iconPosition = "left",
  bgColor,
  borderColor,
}: ButtonProps) => {
  let buttonClasses = "";

  switch (type) {
    case "fill":
      buttonClasses = `${bgColor || "bg-primary-1"} text-neutral-8 px-6 py-3`;
      break;
    case "border":
      buttonClasses = `border-2 ${
        borderColor || "border-neutral-6"
      } text-neutral-2 px-6 py-3`;
      break;
    case "hero":
      buttonClasses = `${
        bgColor || "bg-primary-1"
      } text-neutral-8 px-12 py-4 outline-none transition-all ease-in-out delay-100 hover:outline hover:outline-2 hover:outline-neutral-8`;
      break;
    default:
      buttonClasses = "bg-gray-200 text-black"; // Fallback style
  }

  const renderIcon = () => {
    if (typeof icon === "string") {
      return <Image src={icon} alt="icon" width={24} height={24} />;
    }
    if (icon) {
      const IconComponent = icon;
      return <IconComponent className="w-6 h-6" />;
    }
    return null;
  };

  return (
    <button
      className={`flex items-center justify-center rounded-full text-sm tracking-wide ${buttonClasses}`}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2">{renderIcon()}</span>
      )}
      {text}
      {icon && iconPosition === "right" && (
        <span className="ml-2">{renderIcon()}</span>
      )}
    </button>
  );
};

export default CustomButton;
