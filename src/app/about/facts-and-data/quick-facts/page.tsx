import React from "react";
import ImageBanner from "@/components/ImageBanner";
import ToggleBar from "@/components/ToggleBar";
import {ToggleBarProps} from "@/components/ToggleBar";

const toggleBarData: ToggleBarProps[] = [
  {
    title: "Students & Enrolment",
    content: (
      <table className="w-full border-collapse text-lg  border-gray-300">
        <thead>
          <tr className="text-au-burgundy text-left *:p-3">
            <th className="border-t border-gray-300">January 2024</th>
            <th className="border-t border-gray-300">January 2023</th>
          </tr>
        </thead>
        <tbody className="*:border-t *:border-gray-300">
          <tr className="*:p-3">
            <td>
              <span className="font-bold">1505 students</span> (75 postgraduate
              students)
            </td>
            <td>
              <span className="font-bold">1418 students</span> (40 postgraduate
              students)
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">17%</span> undergraduate applicant
              enrolment rate
            </td>
            <td>
              <span className="font-bold">19%</span> undergraduate applicant
              enrolment rate
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">14%</span> graduate applicant
              enrolment rate
            </td>
            <td>
              <span className="font-bold">10%</span> graduate applicant
              enrolment rate
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">85%</span> total graduation rate in
              last 3 years
            </td>
            <td>
              <span className="font-bold">83%</span> total graduation rate in
              last 3 years
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">48%</span> of students are women
            </td>
            <td>
              <span className="font-bold">47%</span>of students are women
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">54%</span> of students are on
              scholarships
            </td>
            <td>
              <span className="font-bold">46%</span> of students are on
              scholarships
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">54%</span> of students on scholarships
              are women
            </td>
            <td>
              <span className="font-bold">51%</span> of students on scholarships
              are women
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">26%</span> are international students
            </td>
            <td>
              <span className="font-bold">18%</span> are international students
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">4</span> exchange students
            </td>
            <td>
              <span className="font-bold">3</span> exchange students
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "People & Teams",
    content: (
      <table className="w-full border-collapse text-lg  border-gray-300">
        <thead>
          <tr className="text-au-burgundy text-left *:p-3">
            <th className="border-t border-gray-300">January 2024</th>
            <th className="border-t border-gray-300">January 2023</th>
          </tr>
        </thead>
        <tbody className="*:border-t *:border-gray-300">
          <tr className="*:p-3">
            <td>
              <span className="font-bold">385 employees</span>
            </td>
            <td>
              <span className="font-bold">331 employees</span>
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">47 full-time faculty</span>
            </td>
            <td>
              <span className="font-bold">37 full-time faculty</span>
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">33</span> adjunct faculty
            </td>
            <td>
              <span className="font-bold">33</span> adjunct faculty
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">3</span> visiting faculty
            </td>
            <td>
              <span className="font-bold">15</span> visiting faculty
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">13</span> academic support staff
              (full-time)
            </td>
            <td>
              <span className="font-bold">14</span> academic support staff
              (full-time)
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">40</span> academic support staff
              (contract)
            </td>
            <td>
              <span className="font-bold">52</span> academic support staff
              (contract)
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">84</span> faculty interns (teaching
              assistants)
            </td>
            <td>
              <span className="font-bold">84</span> faculty interns (teaching
              assistants)
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">77</span> administrative staff
              (full-time)
            </td>
            <td>
              <span className="font-bold">56</span> administrative staff
              (full-time)
            </td>
          </tr>
          <tr className="*:p-3">
            <td>
              <span className="font-bold">53</span> administrative staff
              (contract)
            </td>
            <td>
              <span className="font-bold">15</span> administrative staff
              (contract)
            </td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    title: "Degrees Offered",
    content: (
      <div className="flex flex-col gap-6">
        {/* business and economics */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Business & Economics</h2>
          <ul className="text-2xl font-light list-disc pl-6">
            <li>B.Sc. Business Administration</li>
            <li>B.Sc. Economics</li>
          </ul>
        </div>
        {/* computer science and information systems */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Computer Science & Information Systems
          </h2>
          <ul className="text-2xl font-light list-disc pl-6">
            <li>B.Sc. Management Information Systems</li>
            <li>B.Sc. Computer Science</li>
          </ul>
        </div>
        {/* engineering */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Engineering</h2>
          <ul className="text-2xl font-light list-disc pl-6">
            <li>B.Sc. Electrical and Electronic Engineering</li>
            <li>B.Sc. Computer Engineering</li>
            <li>B.Sc. Mechanical Engineering</li>
            <li>B.Sc. Mechatronic Engineering</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Our Campus",
    content: (
      <div>
        <ul className="text-2xl font-light list-disc pl-6">
          <li>100 acres</li>
          <li>13% solar-powered</li>
          <li>Rain water storage: 1.057 million liters (279,230 gallons)</li>
          <li>465 MBps internet bandwidth </li>
          <li>
            Wi-Fi: Available in all academic buildings and residence halls
          </li>
          <li>On-campus housing for 50% of students</li>
          <li>On-campus Sports Centre (November 2018 Completion Date)</li>
          <li>On-campus health centre</li>
          <li>On-campus waste treatment centre</li>
        </ul>
      </div>
    ),
  },
];

const QuickFacts = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            People, Programmes, and Spaces
          </h1>
          <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi is recognised as one of the finest universities in Africa,
            with an educational experience proven to successfully prepare
            students for rewarding lives and careers. Nearly 100% of
            Ashesi&apos;s graduates receive job offers, start businesses or
            enter graduate school within six months of graduation. With an
            academic program designed in collaboration with some of the
            world&apos;s best universities and organisations, Ashesi has created
            an educational model unlike any other in Africa.
          </p>
        </div>
      </div>
      {/* image of school */}
      <ImageBanner src="/assets/about/overview/overview-2.jpg" />
      {/* dropdowns */}
      <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
        {toggleBarData.map((data, index) => (
          <ToggleBar key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
};

export default QuickFacts;
