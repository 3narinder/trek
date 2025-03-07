"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Tour from "./myComponents/Tour";
import { getAllTours } from "@/features/tours/TourSlice";
import { useDispatch, useSelector } from "react-redux";

const tabs = [
  { id: "Domestic", label: "Domestic" },
  { id: "Foreign", label: "Foreign" },
];

const DiscoverWeekly = () => {
  const [activeArrow, setActiveArrow] = useState(null);

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const [wishedTour, setWishedTour] = useState([]);

  const sliderRef = useRef(null);

  const dispatch = useDispatch();
  const { tours, loading, error, pagination } = useSelector(
    (state) => state.tour
  );

  // Fetch tours when the component mounts
  useEffect(() => {
    dispatch(getAllTours()); // Initial fetch with default params
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const handleClick = (direction) => {
    setActiveArrow(direction);
    if (direction === "left") {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickNext();
    }
  };

  const setWished = (id: number) => {
    setWishedTour((prev) =>
      prev?.includes(id)
        ? prev.filter((tourId) => tourId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="padding-x lg:bg-neutral-8 bg-white py-12 lg:pb-12 lg:py-0">
      <div className="flex text-center flex-col w-full lg:w-[500px] mx-auto px-4">
        <h1 className="lg:text-4xl text-3xl font-semibold text-neutral-2 mb-4">
          Discover Weekly
        </h1>
        <p className="text-neutral-4">
          An enim nullam tempor sapien gravida donec enim ipsum
        </p>
      </div>

      <div className="flex items-center lg:justify-between justify-center py-12">
        <div className="flex gap-8">
          {tabs?.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab?.id ? "" : "text-neutral-4"
              } relative rounded-full px-3 py-1.5 text-sm font-medium  outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab?.label}
            </button>
          ))}
        </div>

        <div className="lg:flex hidden items-center gap-4">
          <div
            className={`w-10 h-10 flex items-center justify-center cursor-pointer ${
              activeArrow === "left"
                ? "rounded-full border border-neutral-6"
                : ""
            }`}
            onClick={() => handleClick("left")}
          >
            <Image
              src="/icons/arrow-left.png"
              alt="arrow-left"
              width={14}
              height={9}
            />
          </div>
          <div
            className={`w-10 h-10 flex items-center justify-center cursor-pointer ${
              activeArrow === "right"
                ? "rounded-full border border-neutral-6"
                : ""
            }`}
            onClick={() => handleClick("right")}
          >
            <Image
              src="/icons/arrow-right.png"
              alt="arrow-right"
              width={14}
              height={9}
            />
          </div>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {tours?.map((tour) => (
          <Tour
            key={tour?.id}
            tour={tour}
            wished={wishedTour}
            setWished={setWished}
          />
        ))}
      </Slider>

      <div className="flex lg:hidden justify-center items-center mt-8 gap-4">
        <div
          className={`w-10 h-10 flex items-center justify-center cursor-pointer ${
            activeArrow === "left" ? "rounded-full border border-neutral-6" : ""
          }`}
          onClick={() => handleClick("left")}
        >
          <Image
            src="/icons/arrow-left.png"
            alt="arrow-left"
            width={14}
            height={9}
          />
        </div>
        <div
          className={`w-10 h-10 flex items-center justify-center cursor-pointer ${
            activeArrow === "right"
              ? "rounded-full border border-neutral-6"
              : ""
          }`}
          onClick={() => handleClick("right")}
        >
          <Image
            src="/icons/arrow-right.png"
            alt="arrow-right"
            width={14}
            height={9}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverWeekly;
