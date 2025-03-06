import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import CustomButton from "./CustomButtons";
import { motion } from "framer-motion";

interface TourProps {
  tour: {
    id: number;
    image: string;
    tour: string;
    place: string;
    originalPrice: number;
    discountedPrice: number;
    startDate: string;
    endDate: string;
    rating: number;
  };

  wished: object;
  setWished: (id: number) => void;
}

const Tour = ({ tour, wished, setWished }: TourProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={tour?.id}
      className="w-full lg:w-[280px] bg-white rounded-t-2xl overflow-hidden flex flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-56 relative">
        <Image
          src={tour?.image}
          alt={`tour-${tour}-image`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      <div
        onClick={() => setWished(tour?.id)}
        className="p-2 bg-white rounded-full absolute top-4 right-4 z-10 flex items-center justify-center cursor-pointer"
      >
        {wished ? (
          <GoHeart className="text-primary-3 text-xl" />
        ) : (
          <GoHeartFill className="text-primary-3 text-xl" />
        )}
      </div>

      {/* explore button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.4, delay: isHovered ? 0.1 : 0.1 }}
        className="absolute top-[30%] right-[30%] transform -translate-x-1/2 "
      >
        <CustomButton
          text="Explore"
          type="fill"
          bgColor="bg-neutral-8"
          textColor="text-neutral-2"
        />
      </motion.div>

      <div className="flex flex-col flex-grow mt-4 px-2">
        <h2 className="text-neutral-1 text-base font-[500] tracking-wide">
          {tour?.tour}
        </h2>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-neutral-3 tracking-wide">{tour?.place}</p>
          <div className="flex items-center gap-2">
            <span className="line-through text-xs font-semibold text-neutral-5">
              ${tour?.originalPrice}
            </span>
            <span className="text-sm font-semibold text-primary-1">
              ${tour?.discountedPrice}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t mt-4 pt-2">
          <div className="text-xs text-neutral-4 mt-2">
            {tour?.startDate} - {tour?.endDate}
          </div>

          <div className="flex items-center gap-1 mt-1">
            <FaStar className="" />
            <span className="text-sm mt-0.5">{tour?.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
