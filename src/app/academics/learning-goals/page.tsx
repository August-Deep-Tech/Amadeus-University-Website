import React from "react";
import ImageBanner from "@/components/ImageBanner";

import ToggleBar from "@/components/ToggleBar";

const toggleBarData = [
  {
    title: "1. Ethics & Civic Engagement",
    content: (
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-light">
          An Ashesi student is an ethical, responsible and engaged member of
          his/her community.
        </p>
        <ul className="text-xl md:text-2xl font-light list-disc pl-6">
          <li>Demonstrates concern for others</li>
          <li>
            Has the courage to be ethical and demand ethical behaviour from
            his/her peers
          </li>
          <li>Does the right thing when nobody is looking.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "2. Critical Thinking",
    content: (
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-light">
          An Ashesi student is able to apply critical thinking and quantitative
          reasoning to approach complex problems.
        </p>
        <ul className="text-xl md:text-2xl font-light list-disc pl-6">
          <li>Demonstrates skills in data analysis and modeling</li>
          <li>Sees things from multiple perspectives</li>
          <li>
            Has awareness of a broad range of concepts and ideas that have
            personal, local and global significance
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "3. Communication",
    content: (
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-light">
          An Ashesi student is an excellent communicator in a variety of forms.
        </p>
      </div>
    ),
  },
  {
    title: "4. Leadership & Teamwork",
    content: (
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-light">
          An Ashesi student is adept at leading and functioning in teams.
        </p>
        <ul className="text-xl md:text-2xl font-light list-disc pl-6">
          <li>Demonstrates confidence and humility</li>
          <li>
            Has good interpersonal skills and engages fully with members of a
            team
          </li>
          <li>
            Is organized and able to plan and follow through on complex projects
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "5. Innovation and Action",
    content: (
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-light">
          An Ashesi student takes intellectual risks and demonstrates an
          entrepreneurial spirit.
        </p>
      </div>
    ),
  },
  {
    title: "6. Curiosity & Skill",
    content: (
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-light">
          An Ashesi student is inquisitive and confident, has breadth of
          knowledge, and has attained a high level of mastery in his/her chosen
          field.
        </p>
        <ul className="text-xl md:text-2xl font-light list-disc pl-6">
          <li>Probes deeply and continuously in a chosen field</li>
          <li>Keeps an open mind</li>
          <li>Shows confidence but never feels he/she knows it all</li>
          <li>Demonstrates awareness of global and multicultural issues</li>
        </ul>
      </div>
    ),
  },
  {
    title: "7. Technological Competence",
    content: (
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-light">
          An Ashesi student is an effective and flexible user of technology.
        </p>
      </div>
    ),
  },
  {
    title: "8. Professionalism",
    content: (
      <div className="space-y-3">
        <p className="text-xl md:text-2xl font-light">An Ashesi student:</p>
        <ul className="text-xl md:text-2xl font-light list-disc pl-6">
          <li>
            Honors contracts and commitments, and adheres to professional
            standards
          </li>
          <li>Is respectful of people, time, and resources</li>
          <li>Executes responsibilities with excellence</li>
          <li>Takes ownership of his/her own development and decisions</li>
        </ul>
      </div>
    ),
  },
];

const LearningGoals = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Our 8 Learning Goals
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            In 2010, our community - faculty, staff, students and alumni - came
            together to identify seven key learning outcomes that every Ashesi
            graduate must achieve after completing their education at Ashesi. An
            additional goal was included in 2017, after broad stakeholder
            engagement. These learning goals guide our curriculum and
            co-curricular programmes, and spread across all majors at Ashesi.
          </p>
        </div>
      </div>
      {/* image banner */}
      <ImageBanner src="/assets/academics/learninggoals1.jpg" />
      {/* dropdowns */}
      <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
        {toggleBarData.map((data, index) => (
          <ToggleBar key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
};

export default LearningGoals;
