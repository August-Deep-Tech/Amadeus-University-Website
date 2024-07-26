import React from 'react'
import Image from 'next/image';
import ImageBanner from '@/components/ImageBanner';
import ToggleBar, { ToggleBarProps } from '@/components/ToggleBar';

const Overview = () => {
  return (
    <div>
      <div>
        {/* text writeup */}
        <div className="ContentContainer">
          <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
              Our Undergraduate Admissions Process
            </h1>
            <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
              Undergraduate Students looking to join Ashesi may apply for one of eight programmes:
            </p>
            <p className="italic border-b pb-[20px] text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
              a. Computer Engineering <br />
              b. Electrical and Electronic Engineering <br />
              c. Mechanical Engineering <br />
              d. Mechatronics Engineering <br />
            </p>

            <p className="italic border-b pb-[20px] text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
              d. Computer Science <br />
              e. Management Information Systems
            </p>

            <p className="italic border-b pb-[20px] text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
              f. Business Administration <br />
              g. Economics
            </p>

            <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
              Though we place an emphasis on academic merit, our admissions process also focuses on factors such as character,
              participation in extracurricular activities, and volunteer experience. We have three admissions deadlines each year. See below for a guide to creating a strong admissions application.
            </p>

          </div>
        </div>
        {/* image banner */}
        <ImageBanner src="/assets/admission/overview/overview-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />

        <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
          {toggleBarData.map((data, index) => (
            <ToggleBar key={index} title={data.title} content={data.content} />
          ))}
        </div>
        {/* image banner */}
        <ImageBanner src="/assets/admission/overview/overview-2.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
      </div>
    </div>
  )
}

export default Overview

const toggleBarData: ToggleBarProps[] = [
  {
    title: `What Do We Look For?`,
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-xl md:text-2xl font-light pt-[20px]">
          Ashesi is a community that thrives on the contributions of its people - especially students and alumni.
          Our admissions process, therefore, looks for students who will
          not only make the best of Ashesi{"'"}s educational experience, but will also be committed to strengthening it.
        </p>
        <p className="text-xl md:text-2xl font-light pt-[20px]">
          <span className='font-semibold'>The Importance of Academic Ability</span> <br />
          As a university, students we admit must be able to handle the rigour of Ashesi{"'"}s academic work. Our admissions
          committee therefore places high importance on proof of academic ability - your high school transcripts, examination results, among others. Under Ghana{"'"}s accreditation requirements, students who apply to any university in the country must have a minimum grade of C6 or its equivalent, to be considered eligible. You can learn more about our academic requirements below.
        </p>
        <p className="text-xl md:text-2xl font-light pt-[20px]">
          <span className='font-semibold'>We Care About Your Character - A Lot!</span> <br />
          A lot of students who apply to Ashesi qualify to be admitted; this means that the application process is very competitive. In order for an application to stand out, prospective students must place an emphasis on sharing information with us that highlights their character and personality. Did you actively play any sport in high school? Were you a member of the debate club? Did you do some work when you were not in school? Applicants must share as much of these experiences with us as possible. Unlike other universities, applicants will find that academic ability is not the only factor considered in admitting a student. You must therefore make it a point to let us know who you are, outside of the classroom.
        </p>
        <p className="text-xl md:text-2xl font-light pt-[20px]">
          <span className='font-semibold'>Other Key Characteristics We Consider</span><br />
          <ul className="list-disc pl-5">
            <li>Student ambition, and an openness to engage the unfamiliar.</li>
            <li>A demonstrated interest in engaging outside the classroom.</li>
            <li>Desire to help others and contribute to solving problems.</li>
            <li>Willingness to engage opportunities and help create them.</li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    title: "Deadlines",
    content: (
      <div className="flex flex-col gap-0 text-sm sm:text-base pb-[20px]">
        <div>
          <ul className="list-disc pl-5 text-xl md:text-2xl font-light">
            <li><span className='font-semibold mr-2'>Early:</span>April 27th, 2024</li>
            <li><span className='font-semibold mr-2'>Regular:</span>July 27th, 2024</li>
            <li><span className='font-semibold mr-2'>Final:</span>August 27th, 2024</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Basic Requirements",
    content: (
      <div className="flex flex-col gap-6 text-sm sm:text-base">
        <div className="text-xl md:text-2xl font-light">
          <p>1. Completed application form, including personal essays.<br />2. High School transcripts or report cards for at least six terms.<br />3. One of the following examination results is required:</p>
          <ul className="list-disc pl-5 text-xl font-light">
            <li>
              <p>West African Senior Secondary Certificate Examination (WASSCE);&nbsp;Six subjects are used to calculate your standard WASSCE score: Integrated Science, Core Math, Core English and three electives.&nbsp;A minimum grade of C6 in each subject is required to apply.</p>
            </li>
            <li>
              <p>Six IGCSE (G.C.E. O-Level) passes including Mathematics, English, and Science are required together with at least three ‘A’ Level passes (with grade A-D)</p>
            </li>
            <li>
              <p>International Baccalaureate (IB) Diploma</p>
            </li>
            <li>
              <p>American / Canadian High School Diploma</p>
            </li>
            <li>
              <p>French Baccalaureate (a certified copy of the original score and a certified translated copy in English)</p>
            </li>
            <li>
              <p>Other equivalent exam results approved by the Ghana Tertiary Education Commission.&nbsp;</p>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "International Students",
    content: (
      <div className="flex flex-col gap-6 text-sm sm:text-base">
        {/* Fees */}
        <div className='text-xl md:text-2xl font-light'>
          <p>          In addition to meeting the standard admissions requirements, applications from international students must meet the following requirements:</p>
          <ul className="list-disc pl-5 pt-[10px]">
            <li>Certified Translation: Transcripts or other supporting documents submitted by international applicants in a language other than English must be translated and certified as copies of the original document(s).</li>
            <li>
              Evidence of English Language proficiency: International students for who English was not a language of instruction during high school, must submit evidence of English language proficiency, including but not limited to the Test of English as a Foreign Language (TOEFL), International English Language Testing System (IELTS).</li>
          </ul>

        </div>
      </div>
    ),
  },
  {
    title: "Engineering Students",
    content: (
      <div className="flex flex-col gap-6 text-sm sm:text-base">
        {/* Fees */}
        <div className="">
          <div className="mb-6">
            <ul className="list-disc text-xl md:text-2xl font-light pt-[20px] pl-5">
              <li>
                West African Senior Secondary Certificate Examination (WASSCE): Three core subjects
                including Mathematics, English and Science, and three elective subjects including
                Elective Mathematics and Physics, with a C6 or better in each of them.
              </li>
              <li>
                A-Level: Three A-Level passes (A-D) including Mathematics and Physics, and six IGCSE
                (G.C.E. O-Level) passes including Mathematics, English, and Science are required for
                admission to Ashesi.  A grade of D or better in Further Mathematics instead of Mathematics
                is also acceptable for entry as a prospective engineering major.
              </li>
              <li>
                International Baccalaureate (IB) Diploma: For prospective engineering students,
                Mathematics SL with a 5 or better, or Mathematics HL with a 3 or better is
                acceptable to fulfil the entry mathematics requirement; similarly, Physics
                SL with a 5 or better, or Physics HL with a 3 or better is acceptable to fulfil
                the entry physics requirement. However, Mathematics HL and Physics HL are expected
                to be a competitive engineering applicant.
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Transfer Students",
    content: (
      <div className="flex flex-col gap-6 text-sm sm:text-base">
        {/* Fees */}
        <div className="">
          <div className="mb-6">
            <p className="text-xl md:text-2xl font-light">
              Starting in 2018, we accept applications from students who are interested in transferring to Ashesi from other universities. Transfer student applications will be processed on a case by case basis by our admissions office and academic departments, and students who are admitted may be eligible to have one year of study waived at Ashesi. In order to secure admission, candidates looking to transfer must provide official transcripts from each college or university attended. It is your responsibility to ensure that Ashesi has received an official transcript from each institution attended in order to complete your application.
            </p>
          </div>
        </div>
      </div>
    ),
  },
];