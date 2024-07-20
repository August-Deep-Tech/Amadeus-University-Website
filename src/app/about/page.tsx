import React from "react";
import Image from "next/image";
import YoutubeVideoBanner from "@/components/YoutubeVideoBanner";
import ImageBanner from "@/components/ImageBanner";

const About = () => {
  return (
    <div>
      {/* hero image */}
      <ImageBanner src="/assets/about/overview/overview-1.jpg" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Educating Ethical, Entrepreneurial Leaders with the Compassion and
            Courage to Transform Africa
          </h1>
          <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi University&apos;s mission is to propel an African renaissance
            by educating ethical, entrepreneurial leaders. Located in Ghana,
            this private, non-profit university combines a rigorous
            multidisciplinary core with degree programs in Computer Science,
            Business Administration, Management Information Systems, and
            Engineering. A student-led honour code, integrated community
            service, diverse internships, and real-world projects prepare
            students to develop innovative solutions for the challenges facing
            their individual communities, countries and the continent at large.
          </p>
          <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi is now recognized as one of the finest universities in
            Africa, with a proven track record in fostering ethical leadership,
            critical thinking, an entrepreneurial mindset, and the ability to
            solve complex problems. And in 2018, the President of Ghana granted
            Ashesi a Charter to operate as a fully autonomous institution; no
            longer to be supervised by a public university under Ghana&apos;s
            accreditation system. Ashesi is the youngest university to have
            achieved such recognition, and one of five private universities in
            Ghana to have a Charter.
          </p>
          <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi is a private, not-for-profit, non-sectarian institution. It
            is a Company Limited by Guarantee, pursuant to Section 18 of the
            Companies Act, 2019 (Act 992) of the Republic of Ghana and governed
            by a Board of Directors. The University is supported by Ashesi
            University Foundation, a non-profit, publicly supported US
            corporation as described in Section 501(c)(3) of the United States
            Internal Revenue Code. The Foundation is governed by a Board of
            Trustees.
          </p>
        </div>
      </div>
      {/* youtube video banner */}
      <div>
        <YoutubeVideoBanner
          backgroundImage="/assets/about/overview/overview-2.jpg"
          youtubeLink="https://www.youtube.com/embed/VIDEO_ID"
        />
      </div>
      {/* learn more */}
      <div className="flex flex-col md:flex-row bg-au-white">
        {/* writeup */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Learn More
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              From starting Africa&apos;s first student-run honor code system to
              running far-reaching social ventures to founding companies that
              build software for millions of users, Ashesi&apos;s students and
              alumni are making an impact that is recognized around the world.
            </p>
            {/* links list */}
            <ul className="text-base md:text-lg lg:text-xl leading-relaxed font-light">
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                At a glance &gt;
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                President & Leadership &gt;
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Awards & Recognition &gt;
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer mb-2">
                Education Model &gt;
              </li>
              <li className="text-au-dark-grey hover:text-au-light-purple cursor-pointer">
                Commitment to the Environment &gt;
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
      {/* image of school */}
      <ImageBanner src="/assets/about/overview/overview-4.jpg" />
    </div>
  );
};

export default About;
