import React from "react";
import Image from "next/image";
import ImageBanner from "@/components/ImageBanner";
import ToggleBar from "@/components/ToggleBar";
import {ToggleBarProps} from "@/components/ToggleBar";

const toggleBarData: ToggleBarProps[] = [
  {
    title: "Yaw Asare-Aboagye (Board Chair)",
    content: (
      <div>
        {/* image and text wrap around */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full order-2 lg:order-1 ">
            <p className="text-base sm:text-lg lg:text-2xl xl:text-[24px] leading-relaxed sm:leading-loose lg:leading-[38px] font-light">
              Yaw Asare-Aboagye is the Head of Global Clinical Operations at
              Drugs for Neglected Diseases initiative (DNDi), based in Geneva,
              Switzerland. In this position, Yaw is responsible for ensuring
              implementation of Clinical Operations processes across all DNDi
              projects and regions. DNDi develops lifesaving drugs for people
              with neglected diseases around the world, mostly in poor countries
              and has Offices in Kenya, Democratic Republic of Congo, Brazil,
              India, Malaysia, Switzerland, and USA.
            </p>
          </div>
          {/* image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 p-4">
            <div className="relative w-full aspect-square">
              <Image
                src="/assets/trustees/trustees-2.jpg"
                fill
                alt="About Image preview"
                className="object-contain float-right"
              />
            </div>
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
          Yaw has over 30 years of experience in the biotechnology industry and
          has worked for some of the major biotechnology companies in the US
          including Amgen, where he was Director for Planning and Technical
          services and at BioMarin, a biotechnology company specializing in rare
          diseases, where he was an Executive Director of Biometrics.
        </p>
      </div>
    ),
  },
  {
    title: "Mabel Wilson",
    content: (
      <div>
        {/* image and text wrap around */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full order-2 lg:order-1 ">
            <p className="text-base sm:text-lg lg:text-2xl xl:text-[24px] leading-relaxed sm:leading-loose lg:leading-[38px] font-light">
              Yaw Asare-Aboagye is the Head of Global Clinical Operations at
              Drugs for Neglected Diseases initiative (DNDi), based in Geneva,
              Switzerland. In this position, Yaw is responsible for ensuring
              implementation of Clinical Operations processes across all DNDi
              projects and regions. DNDi develops lifesaving drugs for people
              with neglected diseases around the world, mostly in poor countries
              and has Offices in Kenya, Democratic Republic of Congo, Brazil,
              India, Malaysia, Switzerland, and USA.
            </p>
          </div>
          {/* image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 p-4">
            <div className="relative w-full aspect-square">
              <Image
                src="/assets/trustees/trustees-3.jpg"
                fill
                alt="About Image preview"
                className="object-contain float-right"
              />
            </div>
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
          Yaw has over 30 years of experience in the biotechnology industry and
          has worked for some of the major biotechnology companies in the US
          including Amgen, where he was Director for Planning and Technical
          services and at BioMarin, a biotechnology company specializing in rare
          diseases, where he was an Executive Director of Biometrics.
        </p>
      </div>
    ),
  },
];

const Trustees = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Board of Trustees
          </h1>
          <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi University is led by Founder and President, Patrick G. Awuah,
            Jr, who serves as the Chief Executive Officer and is accountable to
            the Board of Directors. The University's Board of Directors are
            listed below.
          </p>
          <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            The Ashesi University Foundation which supports the
            University&apos;s mission, is also led by an experienced autonomous
            Board of Trustees and Advisory Board composed of global academic and
            industry representatives who share a vision of educating leaders in
            Africa.
          </p>
        </div>
      </div>
      {/* image of school */}
      <ImageBanner src="/assets/trustees/trustees-1.jpg" />
      {/* dropdowns */}
      <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
        {toggleBarData.map((data, index) => (
          <ToggleBar key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
};

export default Trustees;
