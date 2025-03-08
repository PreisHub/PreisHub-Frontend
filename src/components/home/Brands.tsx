"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import { Grid, Autoplay } from "swiper/modules";

const Brands = () => {
  const swiperRef = useRef<SwiperType>();
  const brands = [
    { name: "Sonny", image: "https://1000logos.net/wp-content/uploads/2017/06/Sony-Logo-1961.png" },
    { name: "Sonny", image: "https://1000logos.net/wp-content/uploads/2017/06/Sony-Logo-1961.png" },
    { name: "Sonny", image: "https://1000logos.net/wp-content/uploads/2017/06/Sony-Logo-1961.png" },
    { name: "Sonny", image: "https://1000logos.net/wp-content/uploads/2017/06/Sony-Logo-1961.png" },
    { name: "Sonny", image: "https://1000logos.net/wp-content/uploads/2017/06/Sony-Logo-1961.png" },
    { name: "Sonny", image: "https://1000logos.net/wp-content/uploads/2017/06/Sony-Logo-1961.png" },
    { name: "Sonny", image: "https://1000logos.net/wp-content/uploads/2017/06/Sony-Logo-1961.png" },
    { name: "Sonny", image: "https://1000logos.net/wp-content/uploads/2017/06/Sony-Logo-1961.png" },
  ];

  return (
    <div className="relative mt-10">
      <h1 className="absolute -top-10 left-0 flex items-center justify-center text-xl font-bold text-black font-sans">
        Popular Brands
      </h1>

      {/* Left Arrow Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#D7000F] text-white shadow-lg  hover:bg-[#D7000F] hover:text-white border border-[#D7000F] opacity-20 hover:opacity-100 transition h-[100px] rounded-ee-md rounded-tr-md z-10"
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
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#D7000F] text-white shadow-lg  hover:bg-[#D7000F] hover:text-white border border-[#D7000F] opacity-20 hover:opacity-100 transition h-[100px] rounded-tl-md rounded-bl-md z-10"
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
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={5}
        grid={{
          rows: 1,
          fill: "row",
        }}
        spaceBetween={15}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        modules={[Grid, Autoplay]}
        className="mySwiper"
        style={{ width: "100%", margin: "auto" }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide border bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            id="brand-swiper-slide"
          >
            <div className="flex flex-col items-center p-2">
              <img
                src={brand.image}
                alt={brand.name}
                className="h-[100px]  object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;