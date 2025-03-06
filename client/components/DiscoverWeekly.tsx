"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Tour from "./myComponents/Tour";

const tabs = [
  { id: "Domestic", label: "Domestic" },
  { id: "Foreign", label: "Foreign" },
];

const tours = [
  {
    id: 1,
    image: "/destination-1.png",
    originalPrice: 699,
    discountedPrice: 540,
    tour: "Venice, Rome & Milan",
    place: "London",
    startDate: "Tue, Jul 20",
    endDate: "Fri, Jul 23",
    rating: 4.9,
  },
  {
    id: 2,
    image: "/destination-2.png",
    originalPrice: 750,
    discountedPrice: 620,
    tour: "Bangkok, Tokyo & Seoul",
    place: "Asia",
    startDate: "Mon, Aug 15",
    endDate: "Thu, Aug 18",
    rating: 4.8,
  },
  {
    id: 3,
    image: "/destination-3.png",
    originalPrice: 850,
    discountedPrice: 700,
    tour: "Sydney, Melbourne & Perth",
    place: "Australia",
    startDate: "Wed, Sep 5",
    endDate: "Sat, Sep 8",
    rating: 4.7,
  },
  {
    id: 4,
    image: "/destination-2.png",
    originalPrice: 950,
    discountedPrice: 800,
    tour: "Cape Town, Cairo & Nairobi",
    place: "Africa",
    startDate: "Fri, Oct 10",
    endDate: "Mon, Oct 13",
    rating: 4.6,
  },
  {
    id: 5,
    image: "/destination-5.png",
    originalPrice: 1100,
    discountedPrice: 900,
    tour: "New York, LA & Miami",
    place: "America",
    startDate: "Sun, Nov 12",
    endDate: "Wed, Nov 15",
    rating: 4.9,
  },
  {
    id: 6,
    image: "/destination-1.png",
    originalPrice: 1200,
    discountedPrice: 1000,
    tour: "South Pole Adventure",
    place: "Antarctica",
    startDate: "Tue, Dec 5",
    endDate: "Fri, Dec 8",
    rating: 4.5,
  },
];

const DiscoverWeekly = () => {
  const [activeArrow, setActiveArrow] = useState(null);

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const [wishedTour, setWishedTour] = useState([]);

  const sliderRef = useRef(null);

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
