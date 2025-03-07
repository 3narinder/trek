"use client";

import Loader from "@/components/myComponents/Loader";
import Tour from "@/components/myComponents/Tour";
import TourHero from "@/components/TourHero.tsx";
import { getAllTours } from "@/features/tours/TourSlice.ts";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const { tours, loading, error, pagination } = useSelector(
    (state) => state.tour
  );
  const [wishlist, setWishlist] = useState<number[]>([]); // Track wished tour IDs

  // Fetch tours when the component mounts
  useEffect(() => {
    dispatch(getAllTours({ page: "1", limit: "10" }));
  }, [dispatch]);

  // Toggle wishlist state
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
        <div className="lg:w-1/4">filters</div>
        <div className="lg:w-3/4 overflow-y-scroll">
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
        </div>
      </div>
    </div>
  );
};

export default Page;
