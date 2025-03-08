"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Mousewheel, Keyboard } from "swiper/modules";

const Hero = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="relative border rounded-md">
      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#D7000F] text-white shadow-lg hover:bg-[#D7000F] hover:text-white border border-[#D7000F] opacity-20 hover:opacity-100 transition h-[100px] rounded-ee-md rounded-tr-md z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#D7000F] text-white shadow-lg hover:bg-[#D7000F] hover:text-white border border-[#D7000F] opacity-20 hover:opacity-100 transition h-[100px] rounded-ss-md rounded-bl-md z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <Swiper
        cssMode={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true,
        }}
        speed={1800}
        modules={[Autoplay, Mousewheel, Keyboard]}
        className="h-[441px]"
      >
        {[1, 2, 3].map((index) => (
          <SwiperSlide key={index}>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full w-full"
              src="https://static.vecteezy.com/system/resources/previews/011/320/988/non_2x/big-sale-banner-design-with-podium-gradient-background-social-media-post-product-advertisement-design-special-discount-design-vector.jpg"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
