"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "Domestic", label: "Domestic" },
  { id: "Foreign", label: "Foreign" },
];

const DiscoverWeekly = () => {
  const [activeArrow, setActiveArrow] = useState(null);

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const sliderRef = useRef(null);

  const handleClick = (direction) => {
    setActiveArrow(direction);
    if (direction === "left") {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="padding-x lg:bg-neutral-8 bg-white py-12 lg:pb-12 lg:py-0">
      {/* heading and text */}
      <div className="flex text-center flex-col w-full lg:w-[500px] mx-auto px-4">
        <h1 className="lg:text-4xl text-3xl font-semibold text-neutral-2 mb-4">
          Discover Weekly
        </h1>
        <p className="text-neutral-4">
          An enim nullam tempor sapien gravida donec enim ipsum
        </p>
      </div>

      {/* slider button and tab */}
      <div className="flex items-center lg:justify-between justify-center py-12">
        {/* Tab */}
        <div className="flex gap-4">
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

      {/* Slider */}

      <div className=""></div>
    </div>
  );
};

export default DiscoverWeekly;
