import React from 'react'
import Image from 'next/image';
import ContentContainer from '@/components/ContentContainer';

const About = () => {
  return (
    <div>
      <div className="relative h-80 w-[100%]">
        <Image
          src="https://www.ashesi.edu.gh/images/2018_Website/About/About_landing.jpg"
          fill
          alt={"About Image preview"}
          className='object-cover'
        />
      </div>
      <ContentContainer>
        <div className='text-au-100-black flex flex-col gap-[30px] py-[100px]'>
          <h1 className='text-[40px] leading-[52px] font-light'>Educating Ethical, Entrepreneurial Leaders with the Compassion and Courage to Transform Africa</h1>
          <p className='text-[24px] leading-[38px] font-light'>Ashesi University's mission is to propel an African renaissance by educating ethical, entrepreneurial leaders. Located in Ghana, this private, non-profit university combines a rigorous multidisciplinary core with degree programs in Computer Science, Business Administration, Management Information Systems, and Engineering. A student-led honour code, integrated community service, diverse internships, and real-world projects prepare students to develop innovative solutions for the challenges facing their individual communities, countries and the continent at large.</p>
        </div>
      </ContentContainer>
    </div>
  )
}

export default About