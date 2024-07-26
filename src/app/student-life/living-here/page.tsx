import ImageBanner from '@/components/ImageBanner'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const LivingHere = () => {
  return (
    <div>
      {/* image banner */}
      <ImageBanner src="/assets/studentlife/studentaffairs/livinghere/livinghere-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light ">
            Welcome to your new home
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi{"'"}s campus was designed as an inspiring base for students all over Africa to learn, collaborate, and form friendships.
            Our campus culture is driven by student initiative, and we are always looking for ways to improve our residential experience for all. Our campus features a lot of spaces for living, dining, recreation and learning.
          </p>
        </div>
      </div>

      {/* housing options */}
      <div className="flex flex-col md:flex-row bg-au-white">
        {/* writeup */}
        <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey">
          <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Housing Options
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              Ashesi provides housing options as part of efforts to enhance the educational experience of its students.
              By increasing opportunities for teamwork, enabling closer friendships and creating room for community,
              residential life serves as an important venue for student learning.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
              Whether you choose to stay on campus, or in any of the private off campus housing, we work with students
              to ensure their experiences contribute to their growth and learning.
            </p>
            {/* links list */}
            <div className="text-base md:text-lg lg:text-xl leading-relaxed flex flex-col font-light">
              <Link href="/student-life/living-here/on-campus-housing" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Campus Housing
              </Link>
              <Link href="/student-life/living-here/off-campus-housing" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                Off-Campus Housing
              </Link>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
          <div className="relative h-full w-full">
            <Image
              src="/assets/studentlife/studentaffairs/livinghere/livinghere-2.jpg"
              fill
              alt="About Image preview"
              className="object-cover"
            />
          </div>
        </div>
      </div></div>
  )
}

export default LivingHere