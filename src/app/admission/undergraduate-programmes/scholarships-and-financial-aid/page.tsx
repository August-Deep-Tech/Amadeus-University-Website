import ImageBanner from '@/components/ImageBanner'
import ToggleBar, { ToggleBarProps } from '@/components/ToggleBar'
import React from 'react'

const ScholarshipsandFinancialAid = () => {
  return (
    <div>    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Partnerships Make an Ashesi Education Affordable
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            The students we educate must, and will, come from a wide variety of backgrounds, with different perspectives
            and lessons to share. That is why together with generous partners, we have taken on a heavy commitment of
            providing scholarships to admitted students who need it, to ensure that an Ashesi education is affordable
            to all who qualify. Here{"'"}s a quick guide to our scholarships.
          </p>
        </div>
      </div>
      {/* hero image */}
      <ImageBanner src="/assets/admission/scholarships/scholarships-1.jpg" />
      {/* dropdowns */}
      <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
        {toggleBarData.map((data, index) => (
          <ToggleBar key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div></div>
  )
}

export default ScholarshipsandFinancialAid

const toggleBarData: ToggleBarProps[] = [
  {
    title: `Scholarship Selection`,
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-xl font-light">
          The selection process begins by determining whether a student qualifies
          to be admitted into Ashesi, based on each applicant’s overall profile.
          The initial selection process is need-blind.
        </p>
        <p className="text-xl font-light">
          Applicants who qualify to enter Ashesi, and applied for scholarships, are then evaluated on
          the basis of their financial need; at this stage, a thorough assessment is made of all applicant
          information gathered by the Scholarship Committee, which is made up of the entire admissions team.
          Where information provided is unclear, students may be asked additional questions on their financial
          need during their Admissions interview.
        </p>
        <p className="text-xl font-light">
          Based on the proven financial need, applicants are placed into one of four categories: Extreme Need,
          High Need, Medium Need or Low Need. For each category of aid, there is a set amount of funding Ashesi
          can award, or a set amount of named scholarships assigned. Students in each category are then ranked
          based on the strength of their admissions application; funding is awarded to students in each category
          based on this ranking, until the allocated funds run out for the admissions period.
        </p>
        <p className="text-xl font-light">
          Students within each category who do not immediately receive funds, are then placed on a waitlist,
          and informed of their status. Should an accepted student decline a scholarship offer, the offer is
          then passed on to the next student on the waitlist. Students who receive scholarships at Ashesi typically
          demonstrate that they would be;
        </p>
        <ul className="list-disc pl-5 font-light text-xl">
          <li>Able to successfully complete academic work at Ashesi.</li>
          <li>Otherwise unable to afford to attend Ashesi.</li>
          <li>Active contributors to campus life and culture.</li>
          <li>Committed to giving back to their communities, and show strong leadership potential.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "What a Scholarship Covers",
    content: (
      <div className="flex flex-col gap-0">
        <div>
          <p className="text-xl font-light">
            Scholarship cover varies, based on demonstrated need. Ashesi{"'"}s scholarships can cover a part of tuition fees,
            or at the entire cost of studying at Ashesi. Some categories of scholarships cover not only the full tuition,
            but also cover housing, meals on campus, learning materials, and support for basic living expenses. Applicants
            who are awarded scholarships will be informed of the conditions of their scholarship, in their admissions package.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Scholarships vs. Admissions",
    content: (
      <div className="flex flex-col gap-6">
        {/* Fees */}
        <p className="text-xl font-light">
          The decision to make an offer of admission is done independently of scholarship decisions,
          and students may sometimes be informed that they have been admitted but do not qualify for
          scholarship support. Do note however, that both the admissions and scholarships awards are highly competitive.
        </p>
        <p className="text-xl font-light">
          In addition, applicants are encouraged to be honest in their applications to Ashesi. Applicants who
          are deemed to have presented false information during the application process, may be automatically
          disqualified from applying to Ashesi; where admitted, an admissions offer may still be withdrawn.
        </p>
      </div>
    ),
  },
];