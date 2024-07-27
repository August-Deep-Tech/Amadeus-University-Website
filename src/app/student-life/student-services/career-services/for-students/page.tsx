import ImageBanner from '@/components/ImageBanner'
import React from 'react'

const ForStudent = () => {
  return (
    <div>      {/* image banner */}
      <ImageBanner src="/assets/studentlife/studentservices/careerservices/forstudents/forstudents-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Partnering for Career Success
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            We take your career seriously, and aim to work as closely as possible with you to help you do great work. By providing life-long career coaching,
            essential skills, and business connections around Africa, we work to help you achieve your professional goals, regardless of what you study at Ashesi.
          </p>
          <div className="flex flex-col gap-[5px] text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light" itemProp="articleBody">
            <p>
              <strong><span className=''>One-on-one coaching</span><br /></strong>
              Throughout your Ashesi experience, the career services team is available to help you make the most
              of your education and prepare for your career. From figuring out which degree would best fit your
              career aspirations, to helping you write a winning resume, we work one-on-one with you to help you
              put your best foot forward.</p>
            <p>
              <span><strong className=''>Find your path and walk it</strong></span><br />
              Regardless of how certain you are of what you want to do when you graduate, we help you chart your
              career path and develop your employability. Through learning sessions with coaches, alumni and recruiters,
              our programmes help you make informed decisions about potential careers.
            </p>
            <p>In addition, we work with students to help find great internships and experience-building programmes. Internships are encouraged all year round but most actively during the June-August break. Internships offer students a great opportunity to gain experience and network before their first real jobs. With the aid of career workshops, student forums and the interview prep sessions, the Career Services Office prepares students to make the most of internship opportunities.</p>
            <p>Make the time to explore the resources available to you at the Career Services Office – reading material, skills training seminars and coaching among others – and come visit us whenever you need help.&nbsp;</p>
            <p>
              <span className=''><strong>A life-long commitment</strong></span><br />
              Your relationship with Ashesi does not end when you graduate. Together with the Alumni Relations Office, we continue to keep an eye out for you, connecting you with opportunities for career growth and leadership. Collaboration with older alumni allows us to help you receive coaching from colleagues who have lived and know the Ashesi experience.&nbsp;</p>
            <p>
              <span className=''><strong>Need support?&nbsp;Come visit us at:</strong></span><br />
              Radichel Hall, Room 203 OR<br /><a href="http://www.collegecentral.com/ashesi/Student.cfm">Click here to join our career portal</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForStudent