import ImageBanner from '@/components/ImageBanner'
import React from 'react'

const StudentServices = () => {
  return (
    <div>
      {/* image banner */}
      <ImageBanner src="/assets/studentlife/studentservices/studentservices-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
          We want you to succeed
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            A student{"'"}s time in college will be full of ups and downs, successes and lessons. For students at Ashesi, we have
            made great effort to provide support services through this learning period, to help make the best of experiences here.
            Services include one-on-one coaching and counselling, career support, academic guidance, among others.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StudentServices