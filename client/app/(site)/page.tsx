import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import PopularDestination from "@/components/PopularDestination";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Hero />
      <PopularDestination />
      <Discover />
    </>
  );
};

export default page;
