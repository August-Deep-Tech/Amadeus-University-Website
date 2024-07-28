import ImageBanner from '@/components/ImageBanner'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CareerServices = () => {
  return (
    <div>
      {/* image banner */}
      <ImageBanner src="/assets/studentlife/studentservices/careerservices/careerservices-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30.25rem]" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            The Ashesi Advantage
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Since our inception, Ashesi has focused on training students to move Africa forward. Driven by the opportunities that exist
            within the continent{"'"}s challenges, Ashesi students continue to make a difference in the world through the impact they make
            in different organisations. <br />
            Recruiting students from Ashesi puts your organisation at the forefront of Africa{"'"}s development.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-au-white">
        {/* writeup */}
        <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey">
          <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
              For Students
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              We take your career seriously, and aim to work as closely as possible with you to help you do great work.
              By providing life-long career coaching, essential skills, and business connections around Africa,
              we work to help you achieve your professional goals, regardless of what you study at Ashesi.
            </p>
            {/* links list */}
            <div className="text-base md:text-lg lg:text-xl leading-relaxed flex flex-col font-light">
              <Link href="" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Student Career Portal
              </Link>
              <Link href="" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Career Outcomes
              </Link>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
          <div className="relative h-full w-full">
            <Image
              src="/assets/studentlife/studentservices/careerservices/careerservices-2.jpg"
              fill
              alt="About Image preview"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/*  student resources */}
      <div className="flex flex-col md:flex-row-reverse bg-au-white">
        {/* writeup */}
        <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey">
          <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
              For Recruiters
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              We partner with organisations across Africa each year to host workshops that help recruiters
              engage with students, prepare them to create value at work and develop leadership-level skill.
            </p>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed flex flex-col font-light">
              <Link href="" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
              Recruiters Portal
              </Link>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
          <div className="relative h-full w-full">
            <Image
              src="/assets/studentlife/studentservices/careerservices/careerservices-3.jpg"
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

export default CareerServices