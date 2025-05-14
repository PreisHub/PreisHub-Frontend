"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { ChevronUp, ChevronDown } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

const OfferItem: React.FC = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [offers, setOffers] = useState<{ offerImage: string; alt?: string; link: string }[]>(
    []
  );

  // Fetch JSON data
  useEffect(() => {
    fetch("/json/offer.json")
      .then((res) => res.json())
      .then((data) => setOffers(data))
      .catch((err) => console.error("Error fetching offer data:", err));
  }, []);

  return (
    <div className="relative flex flex-col items-center mt-11">
      <div>
        <h1 className="absolute -top-10 left-0 flex items-center justify-center text-xl font-bold text-black">
          Offer Items
        </h1>
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
          waitForTransition: true,
        }}
        speed={800}
        slidesPerView={1}
        spaceBetween={20}
        modules={[Autoplay, Navigation]}
        className="h-[395px] w-full"
      >
        {offers.map((offer, index) => (
          <SwiperSlide
            key={index}
            className="bg-white border rounded-md h-20 flex items-center justify-center"
          >
            <Link href={offer.link}>
              <Image
                src={offer.offerImage}
                alt={offer.alt || "Offer Image"}
                width={300}
                height={100}
                className="h-full object-cover w-full rounded-md"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferItem;
