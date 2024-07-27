import React from "react";

const UsefulLinks = () => {
  return (
    <div>
      {" "}
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            University-Wide Resources
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            The following links provide access to resources and tools for the
            Ashesi Community.
          </p>
          {/* campus wide resources */}
          <div>
            <p className="text-xl md:text-2xl mb-4">Campus-Wide Resources</p>
            <ul className="text-xl md:text-2xl text-au-burgundy font-light list-disc pl-6">
              <li className="underline hover:no-underline cursor-pointer">
                Academic Calendar
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Ashesi Event Calendar
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Ashesi Payment Portal
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Ashesi Institutional Repository
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Ashesi Virtual Meeting Platform
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Ashesi URL Shortener
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Campus Map (PDF)
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                CAMU (For Students)
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                CAMU (For Faculty & Staff)
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Canvas (For Students, Faculty & Staff)
              </li>
            </ul>
          </div>
          {/* Useful Links For New Visitors */}
          <div>
            <p className="text-xl md:text-2xl mb-4">
              Useful Links For New Visitors
            </p>
            <ul className="text-xl md:text-2xl text-au-burgundy font-light list-disc pl-6">
              <li className="underline hover:no-underline cursor-pointer">
                Ashesi&apos;s Campus
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Maps and Contact Information
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Job Openings
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Recruit students from Ashesi
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Becoming a Student at Ashesi
              </li>
            </ul>
          </div>
          {/* Students */}
          <div>
            <p className="text-xl md:text-2xl mb-4">Students</p>
            <ul className="text-xl md:text-2xl text-au-burgundy font-light list-disc pl-6">
              <li className="underline hover:no-underline cursor-pointer">
                Student Handbook 2022/2023 (PDF)
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Curriculum Planning Forms (PDF)
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Academic Services Request Form (PDF)
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Composite Petition Form (PDF)
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Club Registration Form (PDF)
              </li>
            </ul>
          </div>
          {/* Faculty and Staff */}
          <div>
            <p className="text-xl md:text-2xl mb-4">Faculty and Staff</p>
            <ul className="text-xl md:text-2xl text-au-burgundy font-light list-disc pl-6">
              <li className="underline hover:no-underline cursor-pointer">
                Employee Handbook (PDF)
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Staff Payment Request Portal
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Staff Payslips Portal
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Human Resources Portal
              </li>
              <li className="underline hover:no-underline cursor-pointer">
                Faculty & Academic Guidelines Handbook (PDF)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsefulLinks;
