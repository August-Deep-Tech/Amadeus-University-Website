import React from "react";

const AcademicRegistry = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            About the Academic Registry
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            The Academic Registry acts as the custodian for student records and
            academic information at the university. This includes interacting
            with both students and faculty to provide services in the following
            areas:
          </p>
          <ul className="text-xl sm:text-lg md:text-[24px] font-light list-disc pl-6">
            <li>Academic calendars</li>
            <li>Academic records and transcript requests</li>
            <li>Enrolment verification and support</li>
            <li>Class scheduling</li>
            <li>Academic policy implementation</li>
            <li>Course auditing</li>
            <li>Student data reports</li>
            <li>
              Regulatory compliance with National Accreditation Board (NAB) and
              National Council for Tertiary Education (NCTE)
            </li>
          </ul>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Whether you are a parent seeking advice on how to stay connected
            with your ward’s academic work, a current student with questions
            about the registration process or an alum looking to get academic
            documents, our goal is for your interaction with the Academic
            Registry to be both efficient and helpful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademicRegistry;
