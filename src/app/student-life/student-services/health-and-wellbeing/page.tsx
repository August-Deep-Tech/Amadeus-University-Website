import ImageBanner from '@/components/ImageBanner'
import React from 'react'

const HealthandWellbeing = () => {
  return (
    <div>    <div>
      {/* image banner */}
      <ImageBanner src="/assets/studentlife/studentservices/healthandwellbeing/healthandwellbeing-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
          Welcome to the Natembea Health Centre
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
          Our mission at the Natembea Health Centre is to ensure high quality health care service for the entire Ashesi Community through: health maintenance, management, prevention of disease and community empowerment through health education and counseling. The health centre primarily attends to first aid. The centre refers more serious medical problems to a nearby clinic. Emergencies are referred to the military hospital. The health centre also monitors the campus cafeterias to ensure food safety and quality.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
          The university strongly recommends that students purchase health insurance. International students are advised to purchase travel insurance prior to their visit to Ghana.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
          The Health centre provides information on procedures for registration with the university approved private health insurance providers.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HealthandWellbeing