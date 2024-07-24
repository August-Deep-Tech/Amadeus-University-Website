import React from "react";
import ImageBanner from "@/components/ImageBanner";
import ToggleBar from "@/components/ToggleBar";
import {ToggleBarProps} from "@/components/ToggleBar";

const toggleBarData: ToggleBarProps[] = [
  {
    title: "Outreach Service and Access",
    content: (
      <div className="flex flex-col gap-3">
        {/* responsible office */}
        <div>
          <p className="text-xl md:text-2xl font-light">
            <span className="font-bold">Responsible Offices:</span> Academic
            Affairs: Office of Student & Community Affairs
          </p>
        </div>
        {/* purpose */}
        <div>
          <p className="text-xl md:text-2xl font-light">
            <span className="font-bold">Purpose:</span> To openly share some of
            the benefits of Ashesi University with the general public
          </p>
        </div>
        {/* writeup */}
        <div>
          <p className="text-xl md:text-2xl font-light">
            Outreach service and access at Ashesi University supports our
            academic mission by bridging scholarly research of faculty and
            students, their entrepreneurship, and service of students with
            communities to create better informed and more effective decisions
            for both parties. This provides opportunities for the less fortunate
            to have access to the Ashesi experience through hosted events and
            programs. It increases students and faculty empathy, their ethical
            behavior, and desire to care for others. These activities are
            accessible to all, regardless of ethnicity, religion, disability or
            gender.
          </p>
          <p className="text-xl md:text-2xl font-light">
            As a University we carry out a number of community engagement
            activities throughout the academic year under the auspices of our
            different departments. In the context of community engagement, the
            term “service” is often used interchangeably with “outreach” to
            refer to the delivery of programs, expertise, resources and services
            beyond the Ashesi community.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Gender Integration Policy",
    content: (
      <div className="flex flex-col gap-3">
        {/* responsible office */}
        <div>
          <p className="text-xl md:text-2xl font-light">
            <span className="font-bold">Responsible Offices:</span> Admissions
            and Financial Aid; University Administration Office; Academic
            Affairs Office; Office of Student and Community Affairs
          </p>
        </div>
        {/* purpose */}
        <div>
          <p className="text-xl md:text-2xl font-light">
            <span className="font-bold">Purpose:</span> To ensure equity for
            eligible women (students, staff, and faculty) to participate and
            succeed in a university of high international standing.
          </p>
        </div>
        {/* writeup */}
        <div>
          <p className="text-xl md:text-2xl font-light">
            Students are recruited with gender parity as one of the foci,
            particularly for the STEM programs offered at Ashesi University.
            Mentoring, associations, and clubs are specifically provided to
            support success of the female students at Ashesi University. The
            percentage of women employed or being hired as Faculty by type of
            appointment, and by rank, is intentionally defined and reviewed
            annually. Ashesi ensures that when appointments are to be made at
            senior levels of the Faculty, every effort is made to find qualified
            women and to encourage them to apply. Ashesi is also committed to
            the United Nation&apos;s Sustainable Development Goals.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Equity Policy",
    content: (
      <div className="flex flex-col gap-3">
        {/* responsible office */}
        <div>
          <p className="text-xl md:text-2xl font-light">
            <span className="font-bold">Responsible Offices:</span> Academic
            Affairs Office; Office of Student and Community Affairs.
          </p>
        </div>
        {/* purpose */}
        <div>
          <p className="text-xl md:text-2xl font-light">
            <span className="font-bold">Purpose:</span> To achieve equity
            outcomes for members of the Ashesi community
          </p>
        </div>
        {/* writeup */}
        <div>
          <p className="text-xl md:text-2xl font-light">
            Ashesi University strives to provide a safe, inclusive and equitable
            study and work environment. Ashesi fosters fairness and respect for
            diverse groups of people. All members of Ashesi are to support
            equitable access, participation, engagement and success for all
            faculty, staff and students, of various backgrounds. Ashesi opposes
            discrimination and insists on equity, including discrimination on
            the basis of gender, marital status, religious belief, ethical
            belief, colour, race, ethnic or national origins, disability, age,
            political opinion, employment status, and family status.
          </p>
          <p className="text-xl md:text-2xl font-light">
            Ashesi provides faculty, staff and students annual training in
            diversity and inclusion. And the university provides resources as
            part of its plan to monitor fairness and report progress towards
            equity goals. As a place of work, the university has in place a
            system of identified key performance indicators which are equitable
            and robust with measurable outcomes, to ensure fairness in
            merit-based decisions. The University will comply with all Tertiary
            Education equity reporting requirements and will comply with all
            applicable legislation in its pursuit of equity outcomes. Ashesi is
            also committed to the United Nation&apos;s Sustainable Development
            Goals.
          </p>
        </div>
      </div>
    ),
  },
];

const UniversityPolicies = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            University Policies
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi University is a private, non-profit, non-sectarian
            institution. Ashesi admits students of any race, colour, gender,
            national and ethnic origin to all the rights, privileges, programs,
            and activities generally accorded or made available to students of
            the university. Neither Ashesi University nor the Ashesi University
            Foundation have any political affiliations in Ghana or abroad.
            Ashesi will work with all interested parties in achieving its
            educational mission.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Below are some key university-wide policies. If a policy on a given
            topic is not listed here, or you have any questions, please either
            check with the individual Offices or contact the Office of the
            Provost.
          </p>
        </div>
      </div>
      {/* image of school */}
      <ImageBanner src="/assets/about/university-policies/university-policies-1.jpg" />
      {/* dropdowns */}
      <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
        {toggleBarData.map((data, index) => (
          <ToggleBar key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
};

export default UniversityPolicies;
