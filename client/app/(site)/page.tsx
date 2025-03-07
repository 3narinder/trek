import DiscoverTour from "@/components/DiscoverTour";
import DiscoverWeekly from "@/components/DiscoverWeekly";
import FindTravel from "@/components/FindTravel";
import Hero from "@/components/Hero";
import PopularDestination from "@/components/PopularDestination";
import Testimonies from "@/components/Testimonies";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <Hero />
      <PopularDestination />
      <DiscoverTour />
      <DiscoverWeekly />
      <FindTravel />
      <Testimonies />
    </>
  );
};

export default page;
