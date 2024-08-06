"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from "next/image";

const ImageCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const carouselImagesSrc = [
    "/assets/about/our-campus/campus-carousel9.jpg",
    "/assets/about/our-campus/campus-carousel10.jpg",
    "/assets/about/our-campus/campus-carousel1.jpg",
    "/assets/about/our-campus/campus-carousel2.jpg",
    "/assets/about/our-campus/campus-carousel3.jpg",
    "/assets/about/our-campus/campus-carousel4.jpg",
    "/assets/about/our-campus/campus-carousel5.jpg",
    "/assets/about/our-campus/campus-carousel6.jpg",
    "/assets/about/our-campus/campus-carousel7.jpg",
    "/assets/about/our-campus/campus-carousel8.jpg",
    "/assets/about/our-campus/campus-carousel11.jpg",
  ];

  return (
    <div className="relative w-screen h-screen">
      <Slider {...settings}>
        {carouselImagesSrc.map((src, index) => {
          return (
            <div key={index} className="relative w-full h-screen">
              <Image
                src={src}
                alt={`Image {index + 1}`}
                fill
                style={{objectFit: "cover"}}
                quality={100}
              />
            </div>
          );
        })}

        {/* <div className="relative w-full h-screen">
          <Image
            src="/assets/about/our-campus/campus-carousel2.jpg"
            alt="Image 2"
            fill
            style={{objectFit: "cover"}}
            quality={100}
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            src="/assets/about/our-campus/campus-carousel3.jpg"
            alt="Image 3"
            fill
            style={{objectFit: "cover"}}
            quality={100}
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            src="/assets/about/our-campus/campus-carousel4.jpg"
            alt="Image 4"
            fill
            style={{objectFit: "cover"}}
            quality={100}
          />
        </div> */}
        {/* Add more images as needed */}
      </Slider>
    </div>
  );
};

const NextArrow = (props: any) => {
  const {onClick} = props;
  return (
    <div
      className="absolute right-8 top-1/2 transform -translate-y-1/2 rounded-full cursor-pointer z-10"
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
