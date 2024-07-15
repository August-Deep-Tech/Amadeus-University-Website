import React from 'react'
import Image from 'next/image';

const Admission = () => {
  return (
    <div>
      <div className="relative h-80 w-[100%]">
        <Image
          src="https://www.ashesi.edu.gh/images/2018_Website/Admissions/Ashesi_Admissions_2024.jpg"
          fill
          alt={"About Image preview"}
          className='object-cover'
        />
      </div>
      About Amadeus
    </div>
  )
}

export default Admission