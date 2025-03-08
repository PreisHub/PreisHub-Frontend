"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { ChevronUp, ChevronDown } from "lucide-react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

const OfferItem: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <div className="relative flex flex-col items-center mt-11">
      <div>
        <h1 className="absolute -top-10 left-0 flex items-center justify-center text-xl font-bold text-black">Offer Items</h1>
        <button
          onClick={() => swiperRef?.slidePrev()} 
          className="absolute -top-10 right-14 flex items-center justify-center w-12 h-7 bg-[#D7000F] text-white rounded-tl-md rounded-tr-md hover:text-[#D7000F] hover:bg-white border border-[#D7000F] transition"
        >
          <ChevronUp size={20} />
        </button>
        <button
          onClick={() => swiperRef?.slideNext()}
          className="absolute -top-10 right-0 flex items-center justify-center w-12 h-7 bg-[#D7000F] text-white rounded-tl-md rounded-tr-md hover:text-[#D7000F] hover:bg-white border border-[#D7000F] transition"
        >
          <ChevronDown size={20} />
        </button>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        direction="vertical"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          waitForTransition: true
        }}
        speed={800}
        slidesPerView={1}
        spaceBetween={20}
        modules={[Autoplay, Navigation]}
        className="h-[395px] w-full"
      >
        {[...Array(6)].map((_, i) => (
          <SwiperSlide
            key={i}
            className="bg-white border h-20 flex items-center justify-center rounded"
          >
            
              <img className="h-full" src="https://static.vecteezy.com/system/resources/previews/012/141/840/non_2x/discount-up-to-85-percent-sign-tag-good-for-retail-business-banner-design-perfect-to-put-on-your-product-content-free-vector.jpg" alt="" />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferItem;
