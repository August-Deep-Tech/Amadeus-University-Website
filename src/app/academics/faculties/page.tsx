import React from "react";
import ImageBanner from "@/components/ImageBanner";

const Programmes = () => {
  return (
    <div>
      {/* image of school */}
      <ImageBanner
        src="/assets/academics/faculties/faculties-1.jpg"
        heightClass="xl:h-[40rem]"
      />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Areas of Study
          </h1>
          <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            At Ashesi, teaching and learning are team endeavours. Regardless of
            their major area of study, students take courses offered by multiple
            academic departments.
          </p>
          {/* table of courses */}
          <table className="w-full border-collapse   border-gray-300">
            <thead>
              <tr className="text-au-burgundy text-lg text-left *:p-3">
                <th className="border-t border-gray-300">Department</th>
                <th className="border-t border-gray-300">Faculty</th>
                <th className="border-t border-gray-300">Areas of Study</th>
              </tr>
            </thead>
            <tbody className="*:border-t *:border-gray-300">
              <tr className="*:p-3">
                <td>Humanities & Social Sciences</td>
                <td>Faculty of Business, Arts & Social Sciences</td>
                <td>
                  <ol className=" list-decimal pl-4 text-nowrap">
                    <li>Multidisciplinary core curriculum</li>
                  </ol>
                </td>
              </tr>
              <tr className="*:p-3">
                <td>Economics & Business Administration </td>
                <td>Faculty of Business, Arts & Social Sciences</td>
                <td>
                  <ol className=" list-decimal pl-4 text-nowrap">
                    <li>B.Sc. Business Administration</li>
                    <li>Economics</li>
                  </ol>
                </td>
              </tr>
              <tr className="*:p-3">
                <td>Computer Science & Information Systems</td>
                <td>Faculty of Engineering & Computer Science</td>
                <td>
                  <ol className=" list-decimal pl-4 text-nowrap">
                    <li>B.Sc. Computer Science</li>
                    <li>B.Sc. Management Information Systems</li>
                  </ol>
                </td>
              </tr>
              <tr className="*:p-3">
                <td>Engineering</td>
                <td> Faculty of Engineering & Computer Science</td>
                <td>
                  <ol className=" list-decimal pl-4 text-nowrap">
                    <li>B.Sc. Computer Engineering</li>
                    <li>B.Sc. Electrical & Electronic Engineering</li>
                    <li>B.Sc. Mechanical Engineering</li>
                    <li>B.Sc. Mechatronics Engineering</li>
                  </ol>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
