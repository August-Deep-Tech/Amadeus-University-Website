import ImageBanner from '@/components/ImageBanner'
import ToggleBar, { ToggleBarProps } from '@/components/ToggleBar'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const DiversityInternationalPrograms = () => {
  return (
    <div>
      <div>
        {/* text writeup */}
        <div className="ContentContainer">
          <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
              A Pan-African Campus
            </h1>
            <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
              The Office of Diversity and International Programs (ODIP) coordinates and promotes all external collaborations and partnerships of the University as well as driving initiatives and programs aimed at advancing cross-cultural learning, awareness and acceptance of diversity and inclusion as a core tenant of the University.
            </p>
          </div>
        </div>
        {/* image banner */}
        <ImageBanner src="/assets/studentlife/studentservices/diversityinternationalprograms/diversityinternationalprograms-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30.25rem]" />
        {/* dropdowns */}
        <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
          {toggleBarData.map((data, index) => (
            <ToggleBar key={index} title={data.title} content={data.content} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row bg-au-white">
          {/* writeup */}
          <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey">
            <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
                Inclusion & Connection
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                We welcome students and faculty come from across Africa and beyond, making our
                campus one of the most diverse in West Africa. By creating a campus ethos that
                promotes awareness of, respect for and an attitude of celebrating diversity, Ashesi celebrates its Pan-African environment.
              </p>
              {/* links list */}
              <div className="text-base md:text-lg lg:text-xl leading-relaxed flex flex-col font-light">
                <Link href="/student-life/student-services/diversity-international-programs/international-programs" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                  International Programs
                </Link>
                <Link href="/student-life/student-services/diversity-international-programs/diversity-inclusion" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                  Diversity and Inclusion
                </Link>
                <Link href="/student-life/student-services/diversity-international-programs/sexual-misconduct-prevention" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                  Sexual Misconduct Prevention
                </Link>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
            <div className="relative h-full w-full">
              <Image
                src="/assets/studentlife/studentservices/diversityinternationalprograms/diversityinternationalprograms-5.jpg"
                fill
                alt="About Image preview"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/*  student resources */}
        <div className="flex flex-col md:flex-row-reverse bg-au-white">
          {/* writeup */}
          <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey">
            <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
              <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
                Uniqueness and diversity
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                Our dedicated Office of Diversity and International Programs (ODIP) drives i
                nitiatives and programs aimed at promoting cross-cultural learning, awareness, and acceptance of diversity and inclusion as core tenets of the University.
              </p>
            </div>
          </div>
          {/* image */}
          <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
            <div className="relative h-full w-full">
              <Image
                src="/assets/studentlife/studentservices/diversityinternationalprograms/diversityinternationalprograms-6.jpg"
                fill
                alt="About Image preview"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiversityInternationalPrograms


const staffData = {
  "staff": [
    {
      name: "Dr. Millicent Adjei",
      title: "Director, Diversity & International Programs",
      office: "Radichel Hall 210",
      image: "/assets/studentlife/studentservices/diversityinternationalprograms/diversityinternationalprograms-2.jpg"
    },
    {
      name: "Rosemary Kotei Buckman",
      title: "Assistant Director, International Programs",
      office: "Radichel Hall 207",
      image: "/assets/studentlife/studentservices/diversityinternationalprograms/diversityinternationalprograms-3.jpg"
    },
    {
      name: "Vanessa Amoako",
      title: "Diversity & Inclusion Coordinator",
      office: "Radichel Hall 207",
      image: "/assets/studentlife/studentservices/diversityinternationalprograms/diversityinternationalprograms-4.jpg"
    }
  ]
};

const toggleBarData: ToggleBarProps[] = [
  {
    title: "ODIP Staff",
    content: (
      <div className="flex flex-col gap-6">
        <div>
          {staffData.staff.map((member, index) => (
            <div key={index} className="flex border-t border-gray-300 py-4">
              <img src={member.image} alt={member.name} className="w-24 h-24 sm:w-40 sm:h-40  mr-4" />
              <div className="text-xl md:text-2xl font-light">
                <h3 className="font-bold">{member.name}</h3>
                <p className="">{member.title}</p>
                <p className="pt-[20px]">{member.office}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='flex gap-[10px] sm:gap-[50px] text-xl md:text-2xl font-light border-t pt-4'>
          <p className='font-bold'>Contact Us</p>
          <div>
            <p>Tel: +233 50 126 0277</p>
            <p>Email: odip@ashesi.edu.gh</p>
          </div>
        </div>
      </div>
    ),
  },
];

