// src/components/Navigation.tsx
"use client";

import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import menuHamburger from "@/public/icons/globe.svg";
import closeMenu from "@/public/icons/cross-menu.svg";
import CustomButton from "./myComponents/CustomButtons";
import { fetchAuthenticatedUser } from "@/features/users/UserSlice";

const Navigation = () => {
  const [isShow, setIsShow] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true); // Track initial load
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state: any) => state.user);

  useEffect(() => {
    const loadUser = async () => {
      try {
        await dispatch(fetchAuthenticatedUser()).unwrap(); // Fetch user with unwrap for error handling
      } catch (err) {
        console.error("Failed to fetch user:", err);
      } finally {
        setIsInitialLoading(false); // Resolve loading state
      }
    };

    loadUser();
  }, [dispatch]);

  const toggleMenu = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <nav className="bg-neutral-8 flex items-center justify-between py-8 lg:py-6 lg:px-32 md:px-16 px-8 sticky top-0 z-20">
      <Link href="/">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3 w-36 h-9 lg:border-r lg:border-neutral-6">
            <Image src="/logo.png" alt="Trek logo" width={34} height={34} />
            <h1 className="font-semibold text-2xl text-neutral-2 tracking-wide">
              Trek
            </h1>
          </div>
        </div>
      </Link>

      <div className="lg:flex hidden items-center gap-10">
        <ul className="hidden h-full gap-8 lg:flex">
          {NavLinks?.map((link) => (
            <Link
              href={link?.href}
              key={link?.key}
              className="text-neutral-4 font-semibold text-sm cursor-pointer transition-all hover:text-neutral-3"
            >
              <li className="tracking-wide">{link?.label}</li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Image
            src="/icons/globe.png"
            alt="language select icon"
            width={18}
            height={18}
          />
          <select className="text-neutral-4 font-semibold text-sm cursor-pointer transition-all hover:text-neutral-3 tracking-wide bg-transparent appearance-none outline-none">
            <option>English</option>
            <option>French</option>
          </select>
        </div>
      </div>

      <>
        {isInitialLoading ? (
          <div className="flex items-center gap-8 w-56">
            <div className="w-[110px] h-12 bg-gray-300 rounded-full animate-pulse" />{" "}
            {/* Skeleton for buttons */}
            <div className="relative">
              <Image
                src="/icons/notification-bell.png"
                alt="notification"
                width={18}
                height={19}
              />
              <div className="absolute -top-3 -right-2.5 bg-gray-300 rounded-full w-3 h-3"></div>
            </div>
            <div className="w-[45px] h-10 bg-gray-300 rounded-full animate-pulse" />{" "}
          </div>
        ) : user ? (
          <div className="flex items-center justify-center gap-8">
            <div className="lg:flex hidden">
              <CustomButton text="Wishlist" type="border" />
            </div>
            <div className="relative">
              <Image
                src="/icons/notification-bell.png"
                alt="notification"
                width={18}
                height={19}
              />
              <div className="absolute -top-3 -right-2.5 bg-[#5BCD51] rounded-full w-3 h-3"></div>
            </div>

            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={
                  user?.user?.profilePicture ||
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="profile image"
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="lg:hidden flex items-center z-10">
              <button
                onClick={toggleMenu}
                className="focus:outline-none transition-all duration-500 ease-in-out"
              >
                <Image
                  src={isShow ? closeMenu : menuHamburger}
                  alt="Menu"
                  width={36}
                  height={36}
                  className={`transition-all duration-500 ease-in-out ${
                    isShow ? "rotate-90 opacity-100" : "rotate-0 opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <CustomButton text="Login" type="border" />
            </Link>
            <Link href="/auth/signup">
              <CustomButton text="Sign Up" type="fill" />
            </Link>
          </div>
        )}
      </>

      <div
        className={`lg:hidden absolute top-full left-0 w-full h-screen bg-neutral-8/95 flex flex-col pl-16 gap-6 py-6 z-10 transition-all duration-500 ease-in-out ${
          isShow
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none delay-200"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {NavLinks?.map((link) => (
            <Link
              href={link?.href}
              key={link?.key}
              className="text-neutral-4 font-semibold text-sm cursor-pointer transition-all hover:text-neutral-3"
              onClick={() => setIsShow(false)}
            >
              <li className="tracking-wide">{link?.label}</li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <select className="text-neutral-4 font-semibold text-sm cursor-pointer transition-all hover:text-neutral-3 tracking-wide bg-transparent appearance-none outline-none">
            <option>English</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
