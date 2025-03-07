import Image from "next/image";
import React from "react";
import CustomButton from "./myComponents/CustomButtons";
import CustomSearchSection from "./myComponents/CustomSearchSection";

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

          <div className="absolute flex flex-col justify-center items-center md:top-1/2 top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center h-full md:w-[480px] w-[350px] px-4">
            <h1
              className="text-neutral-8 lg:text-6xl  md:text-5xl
             text-4xl font-semibold leading-[44px] md:tracking-tighter"
            >
              Discover the most engaging places
            </h1>

            <p className="text-neutral-8 md:text-lg text-sm mt-4 mb-8">
              Less planning, 45,000 trips are ready for you
            </p>

            <CustomButton text="Start Now" type="hero" />
          </div>
        </div>

        <CustomSearchSection />
      </div>
    </section>
  );
};

export default Hero;
