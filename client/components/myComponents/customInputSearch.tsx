import Image from "next/image";
import React from "react";

type CustomInputSearchProps = {
  heading: string;
  text: string;
  image: string;
};

const CustomInputSearch = ({
  heading,
  text,
  image,
}: CustomInputSearchProps) => {
  return (
    <div className="flex items-start gap-3 p-5">
      <Image src={image} alt={heading} width={24} height={24} />
      <div className="flex flex-col gap-1">
        <h2 className="text-neutral-2 text-base font-semibold">{heading}</h2>
        <p className="text-sm text-neutral-4">{text}</p>
      </div>
    </div>
  );
};

export default CustomInputSearch;
