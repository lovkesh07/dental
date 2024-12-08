"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";

// Star Ratings Component
const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="text-yellow-500 text-2xl mb-2">
      {Array.from({ length: totalStars }, (_, index) => (
        <span key={index}>
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default function Rev() {
  return (
    <>
      <div className="px-4">
        <h1 className="text-3xl border-b-[10px] box-border mx-auto max-w-2xl border-red-600 text-center tracking-tight pt-12 pb-2 text-black sm:text-4xl lg:text-6xl font-extrabold">
          TESTIMONIALS
        </h1>
      </div>

      <Swiper
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay configuration
        loop={true} // Infinite scroll configuration
        modules={[Navigation, Autoplay]}
        className="text-center p-8 lg:p-16 h-[50vh]"
      >
        <SwiperSlide className="pt-12 lg:pt-24">
          <p>3 months ago</p>
          <StarRating rating={5} />
          <p className="text-sm w-[80%] mx-auto lg:text-3xl py-4 font-semibold">
            &ldquo; Great work with great results👌 &rdquo;
          </p>
          <p>~ Neha C</p>
        </SwiperSlide>

        <SwiperSlide className="pt-6 lg:pt-24">
          <p>10 months ago</p>
          <StarRating rating={4} />
          <p className="text-sm w-[80%] mx-auto lg:text-3xl py-4 font-semibold">
            &ldquo; IT IS WHAT NATURE MATTERS LALITH BHAIYA IS A GOOD HUMAN BEING TOO APART BEING A TECHNICIAN DR VIPUL GUPTA DWARKA &rdquo;
          </p>
          <p>~ Vipul G</p>
        </SwiperSlide>

        <SwiperSlide className="pt-6 lg:pt-24">
          <p>3 years ago</p>
          <StarRating rating={5} />
          <p className="text-sm w-[80%] mx-auto lg:text-3xl py-4 font-semibold">
            &ldquo; Excellent work. Best work of porcelain, cast partial, and metal free work at reasonable price. &rdquo;
          </p>
          <p>~ Murari C</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
