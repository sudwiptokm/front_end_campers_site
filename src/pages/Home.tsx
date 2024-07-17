"use client";
import { motion } from "framer-motion";

import { ImagesSlider } from "@/components/ui/image-slider";

import { Link } from "react-router-dom";
import BestSellingProducts from "../components/home/best-selling-products";
import FeaturedProducts from "../components/home/featured-products";
import FrequentlyAskedQuestions from "../components/home/frequently-asked-questions";
import ProductCategories from "../components/home/product-categories";
import VideoBlogs from "../components/home/video-blogs";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <ImagesSlider className="h-[40rem]">
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Equip Your Journey <br /> Top Gear for Camping, Traveling, and
            Adventure
          </motion.p>
          <Link
            className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
            to={"/products"}
          >
            <span>Explore →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </Link>
        </motion.div>
      </ImagesSlider>

      {/* Products */}
      <FeaturedProducts />
      <ProductCategories />
      <BestSellingProducts />
      <VideoBlogs />

      {/* FAQ */}
      <FrequentlyAskedQuestions />
    </>
  );
};

export default Home;
