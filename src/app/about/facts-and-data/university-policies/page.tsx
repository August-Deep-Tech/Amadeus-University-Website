import React from "react";
import ImageBanner from "@/components/ImageBanner";

const UniversityPolicies = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            University Policies
          </h1>
          <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi University is a private, non-profit, non-sectarian
            institution. Ashesi admits students of any race, colour, gender,
            national and ethnic origin to all the rights, privileges, programs,
            and activities generally accorded or made available to students of
            the university. Neither Ashesi University nor the Ashesi University
            Foundation have any political affiliations in Ghana or abroad.
            Ashesi will work with all interested parties in achieving its
            educational mission.
          </p>
          <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Below are some key university-wide policies. If a policy on a given
            topic is not listed here, or you have any questions, please either
            check with the individual Offices or contact the Office of the
            Provost.
          </p>
        </div>
      </div>
      {/* image of school */}
      <ImageBanner src="/assets/about/university-policies/university-policies-1.jpg" />
    </div>
  );
};

export default UniversityPolicies;
