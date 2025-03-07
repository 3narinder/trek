import Image from "next/image";
import React from "react";
import CustomInputSearch from "./customInputSearch";

const CustomSearchSection = () => {
  return (
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

          <div className="lg:hidden flex text-neutral-8 text-base">Search</div>
        </div>
      </div>
    </div>
  );
};

export default CustomSearchSection;
