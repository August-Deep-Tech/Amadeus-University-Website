import ImageBanner from '@/components/ImageBanner'
import React from 'react'

const PostgraduatePlacement = () => {
  return (
    <div>
      {/* image banner */}
      <ImageBanner src="/assets/studentlife/studentservices/careerservices/postgraduateplacement/postgraduateplacement-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Graduate School Placements
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi graduates have gone on to study at some of the best postgraduate
            institutions across the world. Here are some of the places they have studied.
          </p>
          <div className='flex flex-col gap-[50px]'>
            <p className="text-xl md:text-2xl font-light">
              <strong>Africa</strong>
              <ul className='list-disc pl-5 text-xl md:text-2xl font-light'>
                <li>Ghana Institutes of Management and Public Administration</li>
                <li>University of Capetown</li>
                <li>International Academy of Health and Skin Care - South Africa</li>
                <li>University of Ghana Business School</li>
              </ul>
            </p>
            <p className="text-xl md:text-2xl font-light">
              <strong>Americas</strong>
              <ul className='list-disc pl-5 text-xl md:text-2xl font-light'>
                <li>Ghana Institutes of Management and Public Administration</li>
              </ul>
            </p>
            <p className="text-xl md:text-2xl font-light">
              <strong>Europe</strong>
              <ul className='list-disc pl-5 text-xl md:text-2xl font-light'>
                <li>Ghana Institutes of Management and Public Administration</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PostgraduatePlacement