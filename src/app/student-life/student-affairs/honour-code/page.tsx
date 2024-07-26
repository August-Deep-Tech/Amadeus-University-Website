import ImageBanner from '@/components/ImageBanner'
import YoutubeVideoBanner from '@/components/YoutubeVideoBanner'
import React from 'react'

const HonourCode = () => {
  return (
    <div>
      {/* image banner */}
      <ImageBanner src="/assets/studentlife/studentaffairs/honourcode/honourcode-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light text-center">
            Honour Code
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            The office of student affairs oversees the implementation of the exam honor code. Suspected violations of the
            Exam Honour Code may be reported by intentionally omitting to sign the pledge, or by speaking directly with the
            Faculty member or the Dean of Students.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            If a pledge is unsigned and unchecked, the student will be contacted in order to determine whether the student
            intentionally left the pledge unsigned. If the absence of signature was intentional, the faculty member or Dean
            of Student Affairs will investigate the matter further. Violations of the Exam Honour Code are adjudicated by the
            Ashesi Judicial Committee (AJC) as described in the Student Handbook.
          </p>
          <p className="italic text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Information about the AJC can be found in the student handbook (See student handbook page 141 section 4)
          </p>
        </div>
      </div>
    </div>
  )
}

export default HonourCode