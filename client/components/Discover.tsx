import Image from "next/image";
import React from "react";
import CustomButton from "./myComponents/CustomButtons";

const Discover = () => {
  return (
    <div className="bg-white lg:py-16 px-8 flex flex-col lg:pl-32 lg:flex-row  lg:justify-between">
      <div className="flex flex-col lg:w-1/3 py-10">
        {/* section heading and text */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-neutral-4 ml-1 mb-4 capitalize">
            Take A Tour
          </p>
          <h1 className="lg:text-4xl text-3xl font-semibold text-neutral-2 mb-6">
            Discover Our Travel Guideline
          </h1>
          <p className="text-neutral-4">
            An enim nullam tempor gravida donec enim congue magna at pretium
            purus pretium ligula rutrum luctus risusd diam eget risus varius
            blandit sit amet non magna.
          </p>
        </div>

        {/* section list */}
        <div className="mt-8 flex flex-col gap-6">
          <div className="flex gap-4">
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-1">
              <Image
                src="/icons/check.png"
                alt="list-check"
                width={9}
                height={6}
              />
            </div>
            <p className="text-neutral-4 text-sm"> Luctus risusd diam eget</p>
          </div>

          <div className="flex gap-4">
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-1">
              <Image
                src="/icons/check.png"
                alt="list-check"
                width={9}
                height={6}
              />
            </div>

            <p className="text-neutral-4 text-sm">Donec enim congue magna</p>
          </div>

          <div className="flex gap-4">
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-1">
              <Image
                src="/icons/check.png"
                alt="list-check"
                width={9}
                height={6}
              />
            </div>
            <p className="text-neutral-4 text-sm">Blandit sit amet non magna</p>
          </div>
        </div>

        {/* Section button */}
        <div className="mt-8">
          <CustomButton text="Learn more" type="fill" />
        </div>
      </div>

      <div className="hidden lg:w-2/3 h-auto lg:h-full lg:flex lg:justify-end">
        <Image
          src="/discover.png"
          alt="discover-image"
          width={800}
          height={800}
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="flex lg:w-2/3 h-auto lg:h-full lg:hidden lg:justify-end">
        <Image
          src="/discover-mobile.png"
          alt="discover-image"
          width={800}
          height={800}
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Discover;
