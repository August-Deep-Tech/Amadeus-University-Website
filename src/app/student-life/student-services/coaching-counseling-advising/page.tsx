import ImageBanner from '@/components/ImageBanner'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const CoachingCounselingAdvising = () => {
  return (
    <div>
      {/* image banner */}
      <ImageBanner src="/assets/studentlife/studentservices/coachingcounselingadvising/coachingcounselingadvising-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Promoting Holistic Health and Wellness
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            In a bid to encourage the holistic health and well-being of our students,
            the Office of Student & Community Affairs provides counselling, coaching
            and academic advising services (CCA) for the student body. Students have
            someone to talk to about academics as well as social life. Should you
            need to book an appointment for any member of the CCA team kindly click
            on this link. Time management, Conflict resolution, Anxiety, Addictions,
            Depression and Relationship challenges
          </p>
        </div>
      </div>

      {/* wellness */}
      <div className="flex flex-col md:flex-row bg-au-white">
        {/* writeup */}
        <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey">
          <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Wellness
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              The Career CCA addresses issues in a students{"'"} life centered around
            </p>
            {/* links list */}
            <div className="text-base md:text-lg lg:text-xl leading-relaxed flex flex-col font-light">
              <p className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Time management
              </p>
              <p className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Conflict resolution
              </p>
              <p className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Anxiety
              </p>
              <p className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Addictions
              </p>
              <p className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Depression
              </p>
              <p className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Relationship challenges
              </p>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
          <div className="relative h-full w-full">
            <Image
              src="/assets/studentlife/studentservices/coachingcounselingadvising/coachingcounselingadvising-2.jpg"
              fill
              alt="About Image preview"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/*  coaching & counseling */}
      <div className="flex flex-col md:flex-row-reverse bg-au-white">
        {/* writeup */}
        <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey">
          <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Coaching & Counseling
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              Our mission is to promote students{"'"} well-being within a safe and confidential environment through a range of psychological support and consultation services.
            </p>
            {/* links list */}
            <ul className="text-base md:text-lg lg:text-xl leading-relaxed font-light flex flex-col">
              <p className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Coaching & Counseling
              </p>
              <p className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Academic Advising
              </p>
            </ul>
          </div>
        </div>
        {/* image */}
        <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
          <div className="relative h-full w-full">
            <Image
              src="/assets/studentlife/studentservices/coachingcounselingadvising/coachingcounselingadvising-3.jpg"
              fill
              alt="About Image preview"
              className="object-cover"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CoachingCounselingAdvising