import React from "react";
import ImageBanner from "@/components/ImageBanner";
import Image from "next/image";
import ImageWithParallelText from "@/components/ImageWithParallelText";

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
      <ImageWithParallelText
        imageSrc="/assets/about/overview/overview-3.jpg"
        content={
          <div>
            {" "}
            <h2 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px]">
              Programmes
            </h2>
            <ul className="text-au-burgundy text-xl md:text-2xl font-light *:underline *:cursor-pointer">
              <li className="hover:no-underline">Business Administration</li>
              <li className="hover:no-underline">Economics </li>
              <li className="hover:no-underline">Computer Science</li>
              <li className="hover:no-underline">
                {" "}
                Management Information Systems
              </li>
              <li className="hover:no-underline"> Mechatronics Engineering</li>
              <li className="hover:no-underline"> Mechanical Engineering</li>
              <li className="hover:no-underline"> Computer Engineering</li>
              <li className="hover:no-underline">
                {" "}
                Electrical and Electronic Engineering
              </li>
            </ul>
          </div>
        }
        imageOnLeft={false}
      />

      {/* academic resorces */}
      <ImageWithParallelText
        imageSrc="/assets/about/overview/overview-3.jpg"
        content={
          <div>
            <h2 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px]">
              Academic Resources
            </h2>
            <p className="text-xl md:text-2xl font-light mb-2">
              Our academic affairs team supports teaching and learning
              excellence, service and innovation, and curriculum design.
            </p>
            <ul className="text-au-burgundy text-xl md:text-2xl font-light *:underline *:cursor-pointer">
              <li className="hover:no-underline">
                Course Catalogue & Curriculum
              </li>
              <li className="hover:no-underline">Academic Registry</li>
              <li className="hover:no-underline">Academic Calendars</li>
              <li className="hover:no-underline">University Policies</li>
              <li className="hover:no-underline">Library</li>
            </ul>
          </div>
        }
      />

      {/* quality assurance */}
      <ImageWithParallelText
        imageSrc="/assets/about/overview/overview-3.jpg"
        content={
          <div>
            <h2 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px]">
              Quality Assurance
            </h2>
            <p className="text-xl md:text-2xl font-light mb-2">
              Our Quality Assurance Committee ensures that the university
              maintains strong teaching and learning standards. It also approves
              curriculum, leads accreditation processes, and among others, has
              advisory responsibility for academic facilities on campus.
            </p>
            <ul className="text-au-burgundy text-xl md:text-2xl font-light *:underline *:cursor-pointer">
              <li className="hover:no-underline">Read our Manual</li>
            </ul>
          </div>
        }
        imageOnLeft={false}
      />
    </div>
  );
};

export default Academics;
