"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-screen h-screen">
      <Slider {...settings}>
        <div className="relative w-full h-screen">
          <Image
            src="/assets/about/mission-and-history/mission-and-history-1.jpg"
            alt="Image 1"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            src="/assets/about/mission-and-history/mission-and-history-1.jpg"
            alt="Image 2"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            src="/assets/about/mission-and-history/mission-and-history-1.jpg"
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            src="/assets/about/mission-and-history/mission-and-history-1.jpg"
            alt="Image 4"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

const NextArrow = (props: any) => {
  const {onClick} = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#ffffff"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const {onClick} = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#ffffff"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

export default ImageCarousel;
