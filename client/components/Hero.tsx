import Image from "next/image";
import React from "react";
import CustomInputSearch from "./myComponents/customInputSearch";
import CustomButton from "./myComponents/CustomButtons";

const Hero = () => {
  return (
    <section className="lg:px-16 px-8 pt-6 pb-16 bg-neutral-8">
      <div className="overflow-hidden rounded-xl shadow-lg">
        {/* Image shifted down */}
        <div className="relative w-full h-[60vh] md:h-[65vh] ">
          <Image
            src="/hero-img.png"
            alt="hero-image"
            fill
            className="object-cover object-top"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(27,88,255,0.4)] via-[rgba(250,250,250,0.02)] to-[rgba(250,250,250,0.1)]"></div>

          <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center h-full w-[480px]">
            <h1 className="text-neutral-8 text-6xl font-semibold leading-[72px] tracking-tighter">
              Discover the most engaging places
            </h1>

            <p className="text-neutral-8 text-lg mt-4 mb-8">
              Less planning, 45,000 trips are ready for you
            </p>

            <CustomButton text="Start Now" type="hero" />
          </div>
        </div>

        <div className="w-full px-6 py-4 bg-neutral-8">
          <div className="flex lg:flex-row flex-col w-full lg:items-center justify-between md:gap-8">
            <CustomInputSearch
              heading="Location"
              text="Where are you going?"
              image="/icons/location-arrow.png"
            />

            <CustomInputSearch
              heading="Activity"
              text="Add Activity"
              image="/icons/activity-car.png"
            />

            <CustomInputSearch
              heading="Dates"
              text="Add date"
              image="/icons/calender-icon.png"
            />

            <CustomInputSearch
              heading="Guest"
              text="Add Guest"
              image="/icons/guest-icon.png"
            />

            <div className="flex items-center gap-4 justify-center bg-primary-1 rounded-full lg:p-2 py-3 cursor-pointer">
              <Image
                src="/icons/search-icon.png"
                alt="search"
                width={24}
                height={24}
              />

              <div className="lg:hidden flex text-neutral-8 text-base">
                Search
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
