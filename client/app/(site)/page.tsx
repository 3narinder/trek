import Hero from "@/components/Hero";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Hero />
    </>
  );
};

export default page;
