import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoHeart, GoHeartFill } from "react-icons/go";
import CustomButton from "./CustomButtons";
import { motion } from "framer-motion";

interface TourProps {
  tour: {
    _id: number;
    images: string[];
    name: string;
    places: { name: string }[];
    actualPrice: number;
    discountPrice: number;
    startDate: string;
    endDate: string;
    rating: number;
  };
  wished?: boolean;
  setWished?: (id: number) => void;
}

const Tour = ({ tour, wished, setWished }: TourProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Use the first image from the images array, or fallback to placeholder
  const tourImage = tour?.images?.[0] || "https://via.placeholder.com/150";

  return (
    <div
      className="w-[360px] lg:w-[280px] bg-white rounded-t-2xl overflow-hidden flex flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-56 relative">
        <Image
          src={tourImage} // Use the resolved tourImage
          alt={`tour-${tour?.name}-image`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      {setWished && (
        <div
          onClick={() => setWished(tour?._id)}
          className="p-2 bg-white rounded-full absolute top-4 right-4 z-10 flex items-center justify-center cursor-pointer"
        >
          {wished ? (
            <GoHeartFill className="text-primary-3 text-xl" /> // Filled heart when wished
          ) : (
            <GoHeart className="text-primary-3 text-xl" />
          )}
        </div>
      )}

      {/* Explore button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 0.4, delay: isHovered ? 0.1 : 0.1 }}
        className="absolute top-[30%] left-[30%] transform -translate-x-1/2"
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
          {tour?.name}
        </h2>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-neutral-3 tracking-wide">
            {tour?.places?.[0]?.name || "Unknown Place"}{" "}
            {/* Updated for populated places */}
          </p>
          <div className="flex items-center gap-2">
            <span className="line-through text-xs font-semibold text-neutral-5">
              ${tour?.actualPrice}
            </span>
            <span className="text-sm font-semibold text-primary-1">
              ${tour?.discountPrice}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t mt-4 pt-2">
          <div className="text-xs text-neutral-4 mt-2">
            {new Date(tour?.startDate).toLocaleDateString()} -{" "}
            {new Date(tour?.endDate).toLocaleDateString()} {/* Format dates */}
          </div>

          <div className="flex items-center gap-1 mt-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm mt-0.5">{tour?.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
