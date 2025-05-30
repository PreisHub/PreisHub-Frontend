"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Category: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [category, setCategory] = useState<
    { name: string; image: string; link: string }[]
  >([]);

  useEffect(() => {
    fetch("/json/category.json")
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error("Error loading categories:", error));
  }, []);

  return (
    <div className="relative mt-10">
      <h1 className="absolute -top-10 left-0 flex items-center justify-center text-xl font-bold text-black font-sans">
        Category
      </h1>

      {/* Left Arrow Button */}
      <button
        onClick={() => swiperRef?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#D7000F] text-white hover:bg-[#D7000F] hover:text-white border border-[#D7000F] opacity-20 hover:opacity-100 transition h-[100px] rounded-ee-md rounded-tr-md z-10"
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

      {/* Right Arrow Button */}
      <button
        onClick={() => swiperRef?.slideNext()}
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
        onSwiper={setSwiperRef}
        slidesPerView={6}
        grid={{ rows: 2, fill: "row" }}
        spaceBetween={15}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        modules={[Grid, Autoplay]}
        className="mySwiper"
      >
        {category.map((category, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide bg-white rounded-lg border"
          >
            <Link href={category.link}>
              <div className="flex flex-col items-center p-2">
                <Image
                  src={category.image}
                  alt={category.name || "Offer Image"}
                  width={300}
                  height={100}
                  className="h-full object-cover w-full rounded-md"
                />
                <span className="mt-2 text-gray-800 text-center font-semibold">
                  {category.name}
                </span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
