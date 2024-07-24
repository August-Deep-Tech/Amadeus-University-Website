import React from "react";

const Reports = () => {
  return (
    <div>
      {" "}
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Reports and Financial Audits
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Archives of annual reports from Ashesi.
          </p>
          <div>
            <ul className="text-xl md:text-2xl font-light list-disc pl-6 *:text-au-burgundy *:underline *:hover:no-underline *:cursor-pointer">
              <li>2024 Audited Financial Report</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
