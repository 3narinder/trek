import React from "react";
import CustomButton from "./myComponents/CustomButtons";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    icon: "/icons/lamp-icon.png",
    alt: "lamp-icon",
    title: "Tell us what you want to do",
    description:
      "Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.",
    bgColor: "bg-primary-4",
    borderColor: "border-neutral-6",
  },
  {
    id: 2,
    icon: "/icons/lamp-icon.png",
    alt: "lamp-icon",
    title: "Tell us what you want to do",
    description:
      "Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.",
    bgColor: "bg-primary-2",
    borderColor: "border-neutral-6",
  },
  {
    id: 3,
    icon: "/icons/lamp-icon.png",
    alt: "lamp-icon",
    title: "Tell us what you want to do",
    description:
      "Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.",
    bgColor: "bg-primary-4",
    borderColor: "border-neutral-6",
  },
];

const FindTravel = () => {
  return (
    <section className="padding-x lg:py-24 lg:bg-neutral-8">
      <div className="flex lg:text-center flex-col lg:w-[750px] mx-auto px-4">
        <p className="text-sm font-semibold text-neutral-4 mb-2 capitalize">
          3 steps for the perfect trip
        </p>
        <h1 className="lg:text-4xl text-3xl font-semibold text-neutral-2 mb-4">
          Find Travel Perfection
        </h1>
        <p className="text-neutral-4">
          An enim nullam tempor gravida donec enim congue magna at pretium purus
          pretium ligula rutrum luctus risusd diam eget risus varius blandit sit
          amet non magna.
        </p>
      </div>

      <div className="text-center flex items-center justify-center mt-8">
        <CustomButton text="Book Now" type="fill" />
      </div>

      <div className="flex bg-neutral-8 lg:flex-row flex-col items-center justify-between gap-8 mt-12">
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`flex flex-col px-8 py-16 border ${card.borderColor} rounded-xl`}
          >
            <div
              className={`flex items-center justify-center w-24 h-24 ${card.bgColor} rounded-2xl`}
            >
              <Image src={card.icon} alt={card.alt} width={48} height={48} />
            </div>

            <h3 className="text-neutral-2 font-semibold mt-8">{card.title}</h3>
            <p className="text-sm text-neutral-4 mt-6">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FindTravel;
