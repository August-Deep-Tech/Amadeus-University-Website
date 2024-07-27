import React from "react";
import Image from "next/image";

const LogoAndIdentity = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Logo and Identity
          </h1>
          {/* text and image  */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* text writeup  */}
            <div>
              <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
                The Ashesi mark is a visual representation of university&apos;s
                mission. The lower part of the logo depicts three pillars that
                correspond to Ashesi&apos;s core values of scholarship,
                leadership, and citizenship.
              </p>
              <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
                The upper part of the Ashesi mark is an eye, which symbolises
                exploration and discovery. At a distance, the mark resembles a
                person standing under a roof, reflecting the importance of
                community and citizenship to Ashesi&apos;s mission.
              </p>
            </div>
            {/* image */}
            <div className="w-full h-[30rem] md:h-auto order-1 md:order-2">
              <div className="relative h-full w-full">
                <Image
                  src="/assets/au-web-logo-f-no-bg.png"
                  fill
                  alt="About Image preview"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Before using the Ashesi logo, please read our{" "}
            <span className="text-au-burgundy underline cursor-pointer">
              Branding and Identity Guide.
            </span>
          </p>

          {/* Resources */}
          <div>
            <h2 className="text-xl sm:text-lg md:text-[24px] font-bold mb-2">
              Resources
            </h2>
            <ul className="text-xl sm:text-lg md:text-[24px] font-light list-disc pl-6">
              <li className="text-au-burgundy underline cursor-pointer">
                Small JPG image of the Ashesi logo{" "}
              </li>
              <li className="text-au-burgundy underline cursor-pointer">
                Medium sized JPG image of the Ashesi logo{" "}
              </li>
              <li className="text-au-burgundy underline cursor-pointer">
                Large JPG image of the Ashesi logo{" "}
              </li>
            </ul>
          </div>

          {/* business and economics */}
          <div>
            <h2 className="text-xl sm:text-lg md:text-[24px] font-bold mb-2">
              Website Archives
            </h2>
            <ul className="text-xl sm:text-lg md:text-[24px] font-light list-disc pl-6">
              <li className="text-au-burgundy underline cursor-pointer">
                Archive of Ashesi&apos;s web sites
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoAndIdentity;
