import React from "react";
import ImageBanner from "@/components/ImageBanner";
const awards = [
  "WISE Prize for Education 2017 presented to Ashesi Founder, Patrick Awuah",
  "Senior, Derick Omari '18, named recipient of Queen’s Young Leader Award",
  "Ashesi juniors win two awards at International Genetically Engineered Machine competition",
  "Ashesi alumna, Yawa Hansen-Quao '07, awarded Eisenhower Fellowship",
];

const Recognition = () => {
  return (
    <div>
      <ImageBanner src="/assets/about/recognition/recognitionImg.jpg" />
      <div className="ContentContainer">
        <div className="text-au-100-black grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
          {" "}
          {awards.map((award, index) => (
            <div key={index} className="flex items-center gap-10">
              {/* number */}
              <div>
                <p className="text-4xl md:text-5xl font-light text-au-burgundy">
                  {index + 1}
                </p>
              </div>

              {/* award */}
              <div>
                <p className="text-lg md:text-xl font-light text-left">
                  {award}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recognition;
