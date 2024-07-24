import YoutubeVideoBanner from '@/components/YoutubeVideoBanner'
import React from 'react'

const StudentAffairs = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light text-center">
            Welcome to Ashesi
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            As students, you are the heart of our campus community, and the motivation of the staff
            and faculty. Always remember that you are part of a realized vision with a mission to
            develop new generation of ethical and entrepreneurial leaders in Africa; to cultivate
            the critical thinking skills, concern for others and the courage to transform the
            continent. We encourage you to learn from each other and the variety of viewpoints
            represented in our diverse campus community.
          </p>
          <p className="italic text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            - Abdul Mahdi, <br />
            Dean, Students and Community Affairs
          </p>
        </div>
      </div>
      {/* youtube video banner */}
      <div>
        <YoutubeVideoBanner
          backgroundImage="/assets/studentlife/studentaffairs/studentaffairs-1.jpg"
          youtubeLink="https://www.youtube.com/embed/VIDEO_ID"
        />
      </div>
    </div>
  )
}

export default StudentAffairs