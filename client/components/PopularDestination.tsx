"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const destination = [
  {
    id: 1,
    image: "/destination-1.png",
    price: 540,
    place: "Europe",
    tourCount: "07",
  },
  {
    id: 2,
    image: "/destination-2.png",
    price: 620,
    place: "Asia",
    tourCount: "12",
  },
  {
    id: 3,
    image: "/destination-3.png",
    price: 700,
    place: "Australia",
    tourCount: "05",
  },
  {
    id: 4,
    image: "/destination-4.png",
    price: 800,
    place: "Africa",
    tourCount: "09",
  },
  {
    id: 5,
    image: "/destination-5.png",
    price: 900,
    place: "America",
    tourCount: "15",
  },
  {
    id: 6,
    image: "/destination-1.png",
    price: 1000,
    place: "Antarctica",
    tourCount: "03",
  },
];

const PopularDestination = () => {
  const [activeArrow, setActiveArrow] = useState(null);
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

  return (
    <section className="bg-neutral-8 pt-8 pb-24">
      <div className="flex items-end justify-between lg:px-32 px-8">
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-neutral-4 ml-1 mb-1">
            3 steps for the perfect trip
          </p>
          <h1 className="lg:text-4xl text-3xl font-semibold text-neutral-2 mb-2">
            Popular Destinations
          </h1>
          <p className="lg:w-[50%] w-full text-neutral-4">
            An enim nullam tempor gravida donec enim congue magna at pretium
            purus pretium ligula rutrum luctus risusd diam eget risus varius
            blandit sit amet non magna.
          </p>
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

      <div className="relative px-8 mt-16 lg:pl-32 overflow-hidden">
        <div className="w-full overflow-hidden">
          <Slider
            ref={sliderRef}
            {...settings}
            className="lg:w-[110%] lg:-mr-[20%] flex"
          >
            {destination.map((destination) => (
              <div
                key={destination.id}
                className="w-80 h-auto flex flex-col items-center px-2 max-[600px]:w-full overflow-hidden"
              >
                <div className="w-80 h-72 relative max-[600px]:w-full">
                  <Image
                    src={destination.image}
                    alt={`popular-${destination.place}-image`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent rounded-3xl" />
                  {/* Tour Count Tag */}
                  <div className="absolute top-3 left-3 bg-primary-1 text-neutral-8 text-xs font-semibold px-2 py-1 rounded-full capitalize">
                    {destination?.tourCount} Tours
                  </div>
                </div>

                <h2 className="text-neutral-2 font-semibold text-lg mt-4">
                  {destination?.place}
                </h2>

                <p className="text-sm text-neutral-4">
                  From{" "}
                  <span className="font-semibold">${destination?.price}</span>{" "}
                  per day
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

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
    </section>
  );
};

export default PopularDestination;
