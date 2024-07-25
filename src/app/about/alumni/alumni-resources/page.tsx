import React from "react";

const AlumniResources = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light  text-center">
            Alumni Resources
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Make the most of your alumni experience by taking advantage of these
            special alumni resources for your career, campus engagement and
            beyond.
          </p>
          <ul className="text-au-burgundy text-xl md:text-2xl font-light *:underline *:cursor-pointer">
            <li className="hover:no-underline">Alumni Relations Office </li>
            <li className="hover:no-underline">Academic Request Form </li>
            <li className="hover:no-underline">Career Services </li>
            <li className="hover:no-underline">Career Services </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AlumniResources;
