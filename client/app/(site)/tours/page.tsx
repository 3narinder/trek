"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { getAllTours } from "@/features/tours/TourSlice.ts";
import Loader from "@/components/myComponents/Loader";
import Tour from "@/components/myComponents/Tour";
import TourHero from "@/components/TourHero.tsx";

const tabs = [
  { id: "Cheapest", label: "Cheapest" },
  { id: "Best", label: "Best" },
  { id: "Quickest", label: "Quickest" },
];

const PriceRangeSlider = ({ minPrice = 1000, maxPrice = 5000 }) => {
  const [price, setPrice] = useState(minPrice);
  const [bubblePosition, setBubblePosition] = useState(0);

  const handlePriceChange = (event) => {
    const value = Number(event.target.value);
    setPrice(value);

    // Calculate bubble position
    const min = event.target.min;
    const max = event.target.max;
    const percentage = (value - min) / (max - min);
    const newPosition = percentage * 100;
    setBubblePosition(newPosition);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-semibold uppercase text-neutral-2">
        Price Range
      </div>
      <div className="relative pt-5 pb-8">
        {/* Bubble */}
        <div
          className="absolute -top-1 transform -translate-x-1/2 z-10 bg-black text-white text-xs rounded-lg px-2 py-1"
          style={{ left: `${bubblePosition}%` }}
        >
          ${price}
        </div>

        {/* Range Input */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={handlePriceChange}
          className="w-full h-2 appearance-none focus:outline-none cursor-pointer z-20 relative rounded-lg"
          style={{
            background: `linear-gradient(to right, 
      #000000 0%, 
      #000000 ${bubblePosition}%, 
      #d1d5db ${bubblePosition}%, 
      #d1d5db 100%)`,
          }}
        />

        {/* Min and Max Values */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const dispatch = useDispatch();
  const { tours, loading, error, pagination } = useSelector(
    (state) => state.tour
  );

  useEffect(() => {
    dispatch(getAllTours({ page: "1", limit: "10" }));
  }, [dispatch]);

  const handleWishlist = (tourId: number) => {
    setWishlist((prev) =>
      prev.includes(tourId)
        ? prev.filter((id) => id !== tourId)
        : [...prev, tourId]
    );
  };

  return (
    <div>
      <TourHero />
      <div className="padding-x lg:py-20 flex items-start h-full justify-between gap-4">
        <div className="lg:w-1/4 flex flex-col px-4">
          <PriceRangeSlider minPrice={100} maxPrice={5000} />

          <div className="border-y border-neutral-6 py-12">
            <h3>Times</h3>
            <div className="relative">
              <select className="lg:w-full px-4 py-2 rounded-xl border border-neutral-6 outline-none appearance-none bg-white cursor-pointer text-neutral-2 text-sm">
                <option value="" disabled selected>
                  Number of days
                </option>
                <option>Less than 2</option>
                <option>More than 2</option>
                <option>More than 4</option>
                <option>Week</option>
                <option>Over a Week</option>
              </select>
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full border border-neutral-6 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-3/4 overflow-y-scroll">
          <>
            <div className="flex items-center lg:justify-between justify-center mb-16">
              {/* tabs */}
              <div className="flex gap-8">
                {tabs?.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition outline-sky-400 focus-visible:outline-2 ${
                      activeTab === tab.id ? "text-white" : "text-neutral-4"
                    }`}
                    style={{
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-black mix-blend-difference"
                        style={{ borderRadius: 9999 }}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-20 mix-blend-difference">
                      {tab?.label}
                    </span>
                  </button>
                ))}
              </div>

              <div className="relative">
                <select className="lg:w-64 px-4 py-2 rounded-xl border border-neutral-6 outline-none appearance-none bg-white cursor-pointer text-neutral-2 text-sm">
                  <option value="" disabled selected>
                    Number of days
                  </option>
                  <option>Less than 2</option>
                  <option>More than 2</option>
                  <option>More than 4</option>
                  <option>Week</option>
                  <option>Over a Week</option>
                </select>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full border border-neutral-6 pointer-events-none">
                  <svg
                    className="w-3 h-3 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {loading ? (
              <Loader />
            ) : error ? (
              <p>Error: {error}</p>
            ) : tours.length === 0 ? (
              <p>No tours available.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                {tours.map((tour) => (
                  <Tour
                    key={tour?._id}
                    tour={tour}
                    wished={wishlist.includes(tour?._id)}
                    setWished={handleWishlist}
                  />
                ))}
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Page;
