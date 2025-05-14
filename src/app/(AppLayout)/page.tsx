import Brands from "@/components/home/Brands";
import Category from "@/components/home/Category";
import Computer from "@/components/home/Computer";
import Electonics from "@/components/home/Electonics";
import Garden from "@/components/home/Garden";
import Hero from "@/components/home/Hero";
import House from "@/components/home/House";
import Indoor from "@/components/home/Indoor";
import Kids from "@/components/home/Kids";
import Mens from "@/components/home/Mens";
import Mobile from "@/components/home/Mobile";
import OfferItem from "@/components/home/OfferItem";
import Outdoor from "@/components/home/Outdoor";
import Summer from "@/components/home/Summer";
import Winter from "@/components/home/Winter";
import Womens from "@/components/home/Womens";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1200px] grid grid-cols-10 gap-8 mt-10">
        <div className="col-span-7">
          <Hero />
        </div>
        <div className="col-span-3">
          <OfferItem />
        </div>
        <div className="col-span-10">
          <Category />
        </div>
        <div className="col-span-10">
          <Brands />
        </div>
      </div>
      <div className="container mx-auto max-w-[1200px] grid grid-cols-12 gap-8 mt-10">
        <div className="col-span-6">
          <Mens />
        </div>
        <div className="col-span-6">
          <Womens />
        </div>
        <div className="col-span-6">
          <Kids />
        </div>
        <div className="col-span-6">
          <Summer />
        </div>
        <div className="col-span-6">
          <Winter />
        </div>
        <div className="col-span-6">
          <Indoor />
        </div>
        <div className="col-span-6">
          <Outdoor />
        </div>
        <div className="col-span-6">
          <Mobile />
        </div>
        <div className="col-span-6">
          <Computer />
        </div>
        <div className="col-span-6">
          <Electonics />
        </div>
        <div className="col-span-6">
          <House />
        </div>
        <div className="col-span-6">
          <Garden />
        </div>
      </div>
    </>
  );
};

export default page;
