import React from 'react'
import Image from 'next/image';

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
      About Amadeus
    </div>
  )
}

export default About