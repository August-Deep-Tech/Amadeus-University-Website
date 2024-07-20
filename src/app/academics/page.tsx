import React from "react";
import ImageBanner from "@/components/ImageBanner";
import Image from "next/image";

const Academics = () => {
  return (
    <div>
      {/* image of school */}
      <ImageBanner src="/assets/academics/overview/overview-1.jpg" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Teaching Skills That Last a Lifetime
          </h1>
          <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            At the heart of the Ashesi Education is a multidisciplinary core
            curriculum that develops critical thinking, creative problem
            solving, ethical reasoning, and effective communication skills. The
            combination of the core curriculum and a rigorous preparation in a
            major field of study prepares students to thrive and to lead in a
            rapidly changing world.
          </p>
        </div>
      </div>
      {/* programmes */}
      <div className="flex flex-col md:flex-row bg-au-white">
        {/* writeup */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Programmes
            </h2>

            {/*programme links list */}
            <ul className="text-base md:text-lg lg:text-xl leading-relaxed font-light">
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Business Administration
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Economics
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Computer Science
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Management Information Systems
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer">
                Mechatronics Engineering
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Mechanical Engineering
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Computer Engineering
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Electrical and Electronic Engineerings
              </li>
            </ul>
          </div>
        </div>
        {/* image */}
        <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
          <div className="relative h-full w-full">
            <Image
              src="/assets/about/overview/overview-3.jpg"
              fill
              alt="About Image preview"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* academic resorces */}
      <div className="flex flex-col md:flex-row bg-au-white">
        {/* writeup */}
        <div className="w-full md:w-1/2 order-2 ">
          <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Academic Resources
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              Our academic affairs team supports teaching and learning
              excellence, service and innovation, and curriculum design.
            </p>
            {/* links list */}
            <ul className="text-base md:text-lg lg:text-xl leading-relaxed font-light">
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Course Catalogue & Curriculum
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Academic Registry
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Academic Calendars
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                University Policies
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer">
                Todd & Ruth Warren Library
              </li>
            </ul>
          </div>
        </div>
        {/* image */}
        <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 ">
          <div className="relative h-full w-full">
            <Image
              src="/assets/about/overview/overview-3.jpg"
              fill
              alt="About Image preview"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* quality assurance */}
      <div className="flex flex-col md:flex-row bg-au-white">
        {/* writeup */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Quality Assurance
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              Our Quality Assurance Committee ensures that the university
              maintains strong teaching and learning standards. It also approves
              curriculum, leads accreditation processes, and among others, has
              advisory responsibility for academic facilities on campus.
            </p>
            {/* links list */}
            <ul className="text-base md:text-lg lg:text-xl leading-relaxed font-light">
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Read our Manual
              </li>
            </ul>
          </div>
        </div>
        {/* image */}
        <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
          <div className="relative h-full w-full">
            <Image
              src="/assets/about/overview/overview-3.jpg"
              fill
              alt="About Image preview"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
