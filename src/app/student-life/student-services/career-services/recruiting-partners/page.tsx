import ImageBanner from '@/components/ImageBanner'
import React from 'react'

const RecruitingPartners = () => {
  return (
    <div>
      {/* image banner */}
      <ImageBanner src="/assets/studentlife/studentservices/careerservices/recruitingpartners/recruitingpartners-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Graduate School Placements
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Since our inception, 100% of our graduates have found jobs, started business,
            or gone on to graduate school within 6 months of graduation. Here are some of the companies that have recruited students and alumni from Ashesi, or that our alumni have started.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            *Companies started by Ashesi alumni</p>

          <p className="text-xl md:text-2xl font-light">
            <strong className='font-semibold'>Africa</strong> <br/>
            233apps Limited <br/>
            Accents and Art Limited <br/>
            Access Bank <br/>
            Accra Brewery Limited <br/>
            Acumen Fund <br/>
            AFB Ghana Ltd <br/>
            African Bagg Recruitment <br/>
            African Center for Economic Transformation (ACET) <br/>
            African Century Consulting <br/>
            African Financial Business <br/>
            African Leadership University <br/>
            African Leadership Academy <br/>
            African Regent Hotel <br/> 
            African Towers Ltd <br/>
            African Wrist Company Limited <br/>
            Afrikids Ghana <br/>
            Afrochiconline
          </p>
        </div>
      </div>
    </div>
  )
}

export default RecruitingPartners