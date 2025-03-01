"use client";

import CustomButton from "@/components/myComponents/CustomButtons";
import CustomSingleInput from "@/components/myComponents/CustomSingleInput";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { register } from "@/features/auth/authslice";

const SignUP = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.contact ||
      !formData.password
    ) {
      toast.error("All fields are required!");
      return;
    }

    if (!/^[a-zA-Z ]+$/.test(formData.fullName)) {
      toast.error("Full name should contain only letters and spaces.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid email address.");
      return;
    }

    if (!/^[0-9]{10}$/.test(formData.contact)) {
      toast.error("Contact number should be 10 digits.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    }

    try {
      const result = await dispatch(register(formData)).unwrap();
      toast.success(result.message || "Form submitted successfully!");
      router.push("/");
    } catch (err: any) {
      toast.error(err || "Something went wrong!");
    }
  };

  return (
    <main className="lg:flex items-center justify-center">
      {/* Image */}
      <div className="lg:w-1/3 lg:h-screen hidden lg:block relative">
        <div className="flex items-center gap-3 w-36 h-9 absolute z-10 top-8 left-8">
          <Image src="/logo.png" alt="Trek logo" width={34} height={34} />
          <h1 className="font-semibold text-2xl text-neutral-8 tracking-wide">
            Trek
          </h1>
        </div>

        <Image
          src="/signup-img.png"
          alt="signup image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* form */}
      <div className="lg:w-2/3 flex flex-col items-center justify-center h-screen">
        <div className="lg:w-[352px] md:w:2/3 w-full md:px-0 px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-4 mb-2">
            <Image src="/logo.png" alt="Trek logo" width={80} height={80} />

            <h1 className="text-neutral-2 font-semibold text-3xl tracking-wide">
              Sign up
            </h1>

            <div className="flex items-center justify-center gap-4">
              <CustomButton
                text="Google"
                type="border"
                icon="/icons/google.png"
              />
              <CustomButton
                text="Apple ID"
                type="border"
                icon="/icons/apple.png"
              />
            </div>

            <p className="text-neutral-4 text-xs border-t w-full py-4">
              Or continue with email
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-4"
          >
            <CustomSingleInput
              type="text"
              name="fullName"
              value={formData?.fullName}
              placeholder="full name"
              onChange={handleChange}
            />

            <CustomSingleInput
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleChange}
            />

            <CustomSingleInput
              type="number"
              name="contact"
              placeholder="contact"
              value={formData.contact}
              onChange={handleChange}
            />

            <CustomSingleInput
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={handleChange}
            />

            <div className="flex items-center justify-center w-full mt-6">
              <CustomButton
                text={loading ? "Signing up..." : "Sign up"}
                type="fill"
              />
            </div>
          </form>
        </div>

        <div className="text-sm text-neutral-3 mt-6">
          Already have an account?{" "}
          <Link href="/auth/login">
            <span className="text-primary-1">Login</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUP;
