import { FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="padding-x bg-neutral-8">
      <div className="md:flex md:flex-row flex-col items-start md:justify-between lg:pt-14 pt-16 ">
        <div className="lg:w-64 md:w-44 w-full">
          <div className="flex items-center gap-3 w-36 h-9">
            <Image src="/logo.png" alt="Trek logo" width={34} height={34} />

            <h1 className="font-semibold text-2xl text-neutral-2 tracking-wide">
              Trek
            </h1>
          </div>

          <p className="text-neutral-4 mt-2 text-xs leading-6 hidden md:flex">
            There are many variations of passages of available but it is the
            majority of suffered that a alteration in that some dummy text.
          </p>
        </div>

        <div className="flex items-start justify-between lg:gap-32 md:gap-16 gap-12 md:mt-0 mt-12">
          {FOOTER_LINKS?.map((link) => (
            <div key={link?.title} className="lg:w-40">
              <h4 className="text-neutral-2 caption-top font-semibold text-base">
                {link?.title}
              </h4>
              {link?.links?.map((item, i) => (
                <ul key={i} className="mt-8 flex flex-col gap-4">
                  <li className="text-neutral-4 caption-top text-xs font-bold tracking-wide cursor-pointer">
                    {item}
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>

        <div className="lg:w-64 flex flex-col gap-4 md:mt-0 mt-10">
          <h4 className="text-neutral-2 caption-top font-semibold text-base">
            Join our community 🔥
          </h4>

          <div className="relative border border-neutral-6 px-4 py-2 rounded-full">
            <Image
              src="/icons/smallCircleButton.png"
              alt="button icon"
              width={32}
              height={32}
              className="absolute top-1 right-2 cursor-pointer"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none placeholder:text-xs placeholder:text-neutral-4"
            />
          </div>
        </div>
      </div>

      <div className="lg:mt-12 border-t border-neutral-6 py-6 text-center text-xs font-semibold text-neutral-3 md:mt-0 mt-12">
        Copyright © Trek. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
