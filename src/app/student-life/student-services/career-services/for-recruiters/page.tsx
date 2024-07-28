import ImageBanner from '@/components/ImageBanner'
import React from 'react'

const ForRecruiters = () => {
  return (
    <div>
      <div>
        {/* image banner */}
        <ImageBanner src="/assets/studentlife/studentservices/careerservices/forrecruiters/forrecruiters-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
        {/* text writeup */}
        <div className="ContentContainer">
          <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
              Helping You Find the Right Talent
            </h1>
            <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
              We understand that every organisation requires different skills from its teams, and are committed to helping recruiters
              connect with students that best match their needs. We partner with organisations across Africa each year to host workshops that help recruiters engage with students, prepare them to create value at work and develop leadership-level skill.
            </p>

            <div className="flex flex-col gap-[5px] text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light" itemProp="articleBody">
              <p>We understand that every organisation&nbsp;requires different skills from its teams, and are committed to&nbsp;helping recruiters connect with students that best match their needs. We partner with organisations across Africa each year to host workshops that help recruiters engage with students, prepare them to create value at work and develop leadership-level skill.</p>
              <p><strong>You are involved from the start&nbsp;<br /></strong>No one understands the world of work better than the people in it; that{"'"}s why we encourage recruiters to come join us in our classrooms and career fairs to help prepare students. Recruiters that have had the most success at Ashesi are actively engaged in training students and helping us build our curriculum to meet the needs of the world of work. Your feedback makes a lot of difference in the graduates who leave Ashesi.&nbsp;</p>
              <p><strong>Reach&nbsp;Africa in one place<br /></strong>Ashesi is committed to becoming an inspiring base for young people from all over Africa. Approximately 20% of student community is made up of international student representing some 20 countries across Africa - and we have only just started. Our campus{"'"} growing diversity allows you to recruit students from all over Africa&nbsp;who can thrive anywhere in the world; from Ghana&nbsp;to Kenya, Dubai to the United Kingdom.&nbsp;</p>
              <p><strong>Highly&nbsp;recommended<br /></strong>Since Ashesi{"'"}s inception, a 100% of graduates have received job offers, started their own businesses or continued their education at some of the world{"'"}s best. Approximately 90% take job offers within three months of graduation, and employers are coming back impressed.&nbsp;<br /><br /></p>
              <h1 className='text-2xl sm:text-4xl font-semibold'><em>What next?</em></h1>
              <hr />
              <p>There are numerous ways to get involved in recruiting; here&nbsp;are a few to get you started.&nbsp;</p>
              <p className="division"><strong>Post a Job / Internship</strong><br />Advertise your company{"'"}s job opportunities via our recruiting platform,&nbsp;<a href="http://www.collegecentral.com/ashesi/Employer.cfm">College Central</a>, and reach over 1,000&nbsp;students and alumni.&nbsp;</p>
              <p className="division"><strong>Participate in our Career Fair</strong><br />Participating in&nbsp;Career Fairs&nbsp;are a great way to build brand awareness and connect with students and alumni on campus.&nbsp;Career Fairs are usually held in March of every year, ahead of our senior className graduation in June.&nbsp;</p>
              <p><strong>Conduct Campus Hiring&nbsp;Sessions</strong><span ><strong><br /></strong></span>We help organisations setup job selection processes on campus when requested.&nbsp;For more information,&nbsp;contact our office.</p>
              <p>However you decide to engage Ashesi, we would love to hear from you. Schedule a visit with us on campus, or<a href="http://www.collegecentral.com/ashesi/Employer.cfm"> join our Recruiters Portal</a>, to learn more.</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForRecruiters