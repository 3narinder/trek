"use client";

import CustomButton from "@/components/myComponents/CustomButtons";
import CustomSingleInput from "@/components/myComponents/CustomSingleInput";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/features/auth/authslice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
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

    if (!formData.email || !formData.password) {
      toast.error("All fields are required!");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid email address.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password should be at least 6 characters long.");
      return;
    }

    try {
      const result = await dispatch(login(formData)).unwrap();
      toast.success(result.message || "Logged in successfully!");
      router.push("/");
    } catch (err: any) {
      if (err === "Invalid email or password") {
        toast.error("Email and password do not match!");
      } else {
        toast.error(err || "Something went wrong!");
      }
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
              Login
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
              type="email"
              name="email"
              placeholder="email"
              value={formData.email}
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
                text={loading ? "Logging up..." : "Login"}
                type="fill"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
