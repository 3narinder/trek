import Image from "next/image";
import React from "react";
import CustomSearchSection from "./myComponents/CustomSearchSection";

const TourHero = () => {
  return (
    <section className="pt-6 pb-24 bg-neutral-8 relative">
      {/* Image shifted down */}
      <div className="relative w-full h-[60vh] md:h-[65vh] ">
        <Image
          src="/tourHero.png"
          alt="hero-image"
          fill
          className="object-cover object-top"
          priority
        />

        {/* <div className="absolute inset-0 bg-gradient-to-b from-[rgba(133,160,235,0.4)] via-[rgba(247, 241, 241, 0)] to-[rgba(250,250,250,0.1)]"></div> */}

        <div className="absolute flex flex-col justify-center items-center md:top-1/2 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center h-full md:w-[480px] w-[350px] px-4">
          <h1
            className="text-neutral-8 lg:text-6xl  md:text-5xl
             text-4xl font-semibold leading-[44px] md:tracking-tighter"
          >
            Tour List
          </h1>
        </div>
      </div>

      <div className="w-[85%] absolute bottom-4 left-1/2 -translate-x-1/2 shadow-xl rounded-xl overflow-hidden">
        <CustomSearchSection />
      </div>
    </section>
  );
};

export default TourHero;
