import ImageBanner from '@/components/ImageBanner'
import ToggleBar, { ToggleBarProps } from '@/components/ToggleBar'
import React from 'react'

const DiversityInclusion = () => {
  return (
    <div>
      <div>
        {/* text writeup */}
        <div className="ContentContainer">
          <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
              Fostering an inclusive and diverse community
            </h1>
            <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
              Ashesi is committed to creating a campus ethos that celebrates our rich diversity.
              To foster a welcoming campus environment that enhances learning, the ODIP helps to drive the campus agenda of promoting the awareness of, and the respect for diversity. This is achieved through various intentional cross-cultural programs and initiatives to aid in navigating challenges and exploring opportunities related to diversity and inclusion.
            </p>
          </div>
        </div>
        {/* image banner */}
        <ImageBanner src="/assets/studentlife/studentservices/diversityinternationalprograms/diversityinclusion/diversityinclusion-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
        {/* dropdowns */}
        <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
          {toggleBarData.map((data, index) => (
            <ToggleBar key={index} title={data.title} content={data.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DiversityInclusion


const toggleBarData: ToggleBarProps[] = [
  {
    title: "Global Café Series",
    content: (
      <div className="text-xl md:text-2xl font-light">
        The Global Café Series serves as a unique platform to celebrate and portray the rich cultures of the
        different nationalities represented on the campus through events and activities.
        Students, staff, and faculty inform the community about their countries through displays
        of food, music, attires, and other presentations. Throughout the academic year, everyone
        has the opportunity to be a globetrotter, and learn something new about other countries.
      </div>
    ),
  },
  {
    title: "First-Year Buddy Up Program",
    content: (
      <div className="text-xl md:text-2xl font-light">
        Our Buddy Up Program pairs first-year students with continuing student coaches.
        Coaches guide freshers in transitioning from high school to the university culture,
        and in adjusting to the Ashesi University environment both socially and academically.
        Staff and faculty also support this program by serving as institutional resources to both freshers and coaches.
      </div>
    ),
  },
  {
    title: "The Campus Cohesion Fund",
    content: (
      <div className="text-xl md:text-2xl font-light">
        This funding opportunity challenges all members of the community to find new ways to promote more inclusive practices
        in the classroom and across the campus in the form of collaborative events, activities, cultural celebrations, speaking
        engagements, etc. Successful applicants are awarded funding support to execute their ideas to ensure a cohesive campus
        experience for all.
      </div>
    ),
  },
  {
    title: "Campus Climate Monitoring & Assessment",
    content: (
      <div className="text-xl md:text-2xl font-light">
        The ODIP administers a bi-annual Campus Climate Survey on Diversity and Inclusion to understand students'
        sense of belonging at Ashesi. Results from this survey help to identify how well Ashesi is meeting its diversity
        and inclusion goals and serve as a guide to determining which inclusive policies to adopt.
      </div>
    ),
  },
  {
    title: "Sensitivity Training & Workshops",
    content: (
      <div className="text-xl md:text-2xl font-light">
        These workshops and training modules are designed to help all members of the community to identify
        their potential biases, which might hinder their ability to engage with others appropriately,
        and to understand and appreciate the unique experiences each person brings to the campus environment.
      </div>
    ),
  },
];