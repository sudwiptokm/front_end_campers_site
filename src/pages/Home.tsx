"use client";
import { ImagesSlider } from "@/components/ui/image-slider";
import { motion } from "framer-motion";
import BestSellingProducts from "../components/home/best-selling-product";
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
          <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Join now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>

      {/* Products */}
      <BestSellingProducts />
      <ProductCategories />
      <FeaturedProducts />
      <VideoBlogs />

      {/* FAQ */}
      <FrequentlyAskedQuestions />
    </>
  );
};

export default Home;
