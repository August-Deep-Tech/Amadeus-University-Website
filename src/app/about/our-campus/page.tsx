"use client";
import React from "react";
import ImageCarousel from "@/components/ImageCarousel";
import Image from "next/image";
import YoutubeVideoBanner from "@/components/YoutubeVideoBanner";
import ToggleBar from "@/components/ToggleBar";
import {ToggleBarProps} from "@/components/ToggleBar";
// import img1 from "../public/assets/au-web-logo-f-no-bg.png";

const toggleBarData: ToggleBarProps[] = [
  {
    title: "An 80-minute drive from Accra's airport",
    content: (
      <div className="flex flex-col gap-6">
        {/* writeup*/}
        <div>
          <p className="text-xl md:text-2xl font-light">
            The mission of Ashesi University is to educate a new generation of
            ethical, entrepreneurial leaders in Africa; to cultivate within our
            students the critical thinking skills, the concern for others and
            the courage it will take to transform a continent.
          </p>
        </div>
        {/* image with caption */}
        <div>
          {/* image */}
          <Image
            src="/assets/about/our-campus/campus-dropdown-1.jpg"
            alt="AU Web Logo"
            width={900}
            height={300}
          />

          {/* caption */}
          <span className="text-sm">
            Ashesi&apos;s campus is about a 40 minute drive away from
            Accra&apos;s airport central district. Photo by Kwasiog [CC BY-SA
            4.0 (https://creativecommons.org/licenses/by-sa/4.0)], from
            Wikimedia Commons
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Student Housing & Recreation",
    content: (
      <div className="flex flex-col gap-6">
        {/* writeup*/}
        <div>
          <p className="text-xl md:text-2xl font-light">
            Ashesi provides housing options as part of efforts to enhance the
            educational experience of its students. By increasing opportunities
            for teamwork, enabling closer friendships and creating room for
            community, residential life serves as an important venue for student
            learning. There are eight lounge areas within the different student
            dorms, where students can engage in recreational activities, host
            events or other group activities. There are also two multi-purpose
            court for sports like basketball and volleyball, and our new sports
            centre, featuring a football field, running track, and gym, will be
            completed in September
          </p>
        </div>
        {/* image with caption */}
        <div>
          {/* image */}
          <Image
            src="/assets/about/our-campus/campus-dropdown-2.jpg"
            alt="AU Web Logo"
            width={900}
            height={300}
          />

          {/* caption */}
          <span className="text-sm">The Bliss Student Lounge at Ashesi</span>
        </div>
      </div>
    ),
  },
  {
    title: "Natembea Health Centre",
    content: (
      <div className="flex flex-col gap-6">
        {/* writeup*/}
        <div>
          <p className="text-xl md:text-2xl font-light">
            The Natembea Health Centre is an on-campus facility that caters to
            the community&apos;s health needs. The centre ensures high quality
            health care service for the entire Ashesi Community through health
            guidance, medical treatment and prevention of disease through health
            education and counseling. Students who experience severe medical
            challenges are transported to an off-campus hospital, about 15
            minutes away from campus, for treatment.
          </p>
        </div>
        {/* image with caption */}
        <div>
          {/* image */}
          <Image
            src="/assets/about/our-campus/campus-dropdown-3.jpg"
            alt="AU Web Logo"
            width={900}
            height={300}
          />

          {/* caption */}
          <span className="text-sm">
            The male ward in the Natembea Health Centre
          </span>
        </div>
      </div>
    ),
  },
];

const OurCampus = () => {
  return (
    <div>
      {/* image carousel */}
      <div>
        <ImageCarousel />
      </div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Designed and Assembled in Ghana
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Set on 100 acres in Berekuso overlooking Ghana&apos;s capital city
            of Accra, Ashesi&apos;s campus combines traditional design, modern
            technology and environmental best practices - creating an inspiring
            base for young Africans from diverse backgrounds to live,
            collaborate and study together for generations to come.
          </p>
        </div>
      </div>
      {/* youtube video banner */}
      <div>
        <YoutubeVideoBanner
          backgroundImage="/assets/home/home-4.jpg"
          youtubeLink="https://www.youtube.com/embed/VIDEO_ID"
          height={{
            xl: "xl:h-[40.25rem]",
          }}
        />
      </div>
      {/* dropdowns */}
      <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
        {toggleBarData.map((data, index) => (
          <ToggleBar key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
};

export default OurCampus;
