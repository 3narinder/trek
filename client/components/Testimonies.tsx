"use client";

import React, { useState, useEffect } from "react";
import CustomButton from "./myComponents/CustomButtons";
import UserImage from "./myComponents/UserImage";

const userData = [
  {
    id: 1,
    name: "Isabelle O'Conner",
    image: "/avatar.png",
    testimony:
      "An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna. at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.",
    email: "isabel@gmail.com",
  },
  {
    id: 2,
    name: "James Rodriguez",
    image: "/avatar.png",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    email: "james.rod@gmail.com",
  },
  {
    id: 3,
    name: "Emily Chen",
    image: "/avatar.png",
    testimony:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    email: "emily.chen@yahoo.com",
  },
  {
    id: 4,
    name: "Michael Thompson",
    image: "/avatar.png",
    testimony:
      "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    email: "m.thompson@outlook.com",
  },
  {
    id: 5,
    name: "Sarah Williams",
    image: "/avatar.png",
    testimony:
      "Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac.",
    email: "sarah.williams@gmail.com",
  },
  {
    id: 6,
    name: "David Kim",
    image: "/avatar.png",
    testimony:
      "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    email: "david.kim92@gmail.com",
  },
];

const Testimonies = () => {
  const [selectedTestimony, setSelectedTestimony] = useState(userData[0]);
  const [startIndex, setStartIndex] = useState(0);

  // Show only 4 items at a time
  const visibleUsers = userData.slice(startIndex, startIndex + 4);

  // Handle slider movement when second index is selected
  const handleUserClick = (user, index) => {
    setSelectedTestimony(user);
    if (index === 1 && startIndex + 4 < userData.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="padding-x py-28 bg-neutral-7">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-12 items-center justify-between">
        <div className="lg:w-1/3 w-full flex flex-col items-start justify-center">
          <div className="text-xs font-semibold text-neutral-4 capitalize mb-4">
            testimonials
          </div>
          <h2 className="capitalize lg:mb-12 mb-6 md:text-4xl text-3xl md:leading-[48px] font-semibold md:w-full w-[80%]">
            What our happy client say
          </h2>
          <CustomButton text="Contact Us" type="border" />
        </div>

        {/* Testimony Display */}
        <div className="lg:w-1/2 w-full lg:px-16 md:py-16 px-4 py-10 bg-white shadow-lg rounded-xl">
          <div className="flex items-center gap-4">
            <UserImage size={40} src={selectedTestimony.image} />
            <div className="flex flex-col gap-1">
              <div className="text-neutral-1 text-base">
                {selectedTestimony.name}
              </div>
              <div className="text-xs text-neutral-4">
                {selectedTestimony.email}
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-4 leading-6 mt-8">
            {selectedTestimony.testimony}
          </p>
        </div>
      </div>

      {/* Testimony Slider */}
      <div className="flex justify-between items-center gap-6 mt-16">
        {visibleUsers.map((user, index) => (
          <div key={user.id} className="flex relative">
            <div
              onClick={() => handleUserClick(user, index)}
              className={`flex items-center gap-4 cursor-pointer p-2 rounded-lg`}
            >
              <UserImage size={40} src={user.image} />
              <div className="flex flex-col gap-1">
                <div className="text-neutral-1 text-base">{user.name}</div>
                <div className="text-xs text-neutral-4">{user.email}</div>
              </div>
            </div>

            {/* Animated Underline */}
            <div
              className={`absolute bottom-0 left-0 h-[2px] bg-neutral-2 transition-all duration-300 ease-in-out ${
                selectedTestimony?.id === user?.id
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 group-hover:w-full group-hover:opacity-50"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
