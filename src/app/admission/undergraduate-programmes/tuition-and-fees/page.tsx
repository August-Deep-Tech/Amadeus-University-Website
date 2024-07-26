import ImageBanner from '@/components/ImageBanner'
import ToggleBar, { ToggleBarProps } from '@/components/ToggleBar'
import React from 'react'

const TuitionFees = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Undergraduate Fees
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi’s academic year consist of two semesters running respectively from late August to December, and January to May.
            The fees listed below are per each semester, and also cover textbooks, internet services, other learning material
            and activity, and support services such as career services, health services, and counselling. For first-year and
            senior-year entrepreneurship classes, fees also support limited funding for student business ideas.
          </p>
        </div>
      </div>
      {/* hero image */}
      <ImageBanner src="/assets/admission/tutionfees/tutionfees-1.jpg" />
      {/* dropdowns */}
      <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
        {toggleBarData.map((data, index) => (
          <ToggleBar key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  )
}

export default TuitionFees


const feesData = {
  tuition: {
    title: "Tuition fees per semester",
    ghanaCedis: "GH₵49,331",
    usDollars: "$4,249",
  },
  otherFees: [
    {
      title: "Health Insurance fees per year",
      note: "(not required with proof of other insurance)",
      ghanaCedis: "GH₵1,868",
      usDollars: "$160",
    },
    {
      title: "Student Council Dues",
      ghanaCedis: "GH₵232",
      usDollars: "$20",
    },
    {
      title: "On-campus housing fees per semester (optional)",
      ghanaCedis: "GH₵8,963",
      usDollars: "$772",
    },
  ],
  additionalFees: [
    {
      title: "Early Payment Discount",
      detail: "3.5%",
    },
    {
      title: "Surcharge for Paying in Two Instalments",
      detail: "3% fee",
    },
    {
      title: "Surcharge for Paying in four instalments",
      detail: "6% fee",
    },
  ],
};

const toggleBarData: ToggleBarProps[] = [
  {
    title: `Tution ${'&'} Other Fees`,
    content: (
      <div className="flex flex-col gap-6">
        <div className="">
          {/* table */}
          <table className="w-full border-collapse text-sm sm:text-xl ">
            <thead>
              <tr className='text-au-burgundy'>
                <th className="text-left border-b py-2">Fees</th>
                <th className="text-left border-b py-2">Amount in Ghana Cedis</th>
                <th className="text-left border-b py-2">Amount in US$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-2 font-bold">{feesData.tuition.title}</td>
                <td className="border-b py-2">{feesData.tuition.ghanaCedis}</td>
                <td className="border-b py-2">{feesData.tuition.usDollars}</td>
              </tr>
              <tr>
                <td colSpan={3} className="pt-4 pb-2 font-bold text-au-burgundy">Other Fees</td>
              </tr>
              {feesData.otherFees.map((fee, index) => (
                <tr key={index}>
                  <td className="border-b py-2">
                    {fee.title}
                    {fee.note && <div className="text-sm italic">{fee.note}</div>}
                  </td>
                  <td className="border-b py-2">{fee.ghanaCedis}</td>
                  <td className="border-b py-2">{fee.usDollars}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xl md:text-2xl font-light pt-[20px]">
            Families are advised to plan for additional expenses around meals
            and other personal items that students may need. Families can also
            opt to put their ward(s) on a university prepaid meal card.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Installment Payment Plans",
    content: (
      <div className="flex flex-col gap-0 text-sm sm:text-base">
        <div>
          <p className="text-xl md:text-2xl font-light">
            Ashesi has flexible payment plans for families who cannot pay fees in full at
            the start of the semester. Families have the option of making payments twice a
            semester or four times a semester, each option incurring different surcharges. Families who pay full tuition fees before the due date for each semester will receive an early payment discount.
          </p>
          <div className='py-[10px]'>
            {feesData.additionalFees.map((fee, index) => (
              <tr key={index}>
                <td className="border-t border-au-dark-grey pr-4">{fee.title}</td>
                <td className="border-t border-au-dark-grey py-2">{fee.detail}</td>
              </tr>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Paying Fees: Bank Deposits",
    content: (
      <div className="flex flex-col gap-6 text-sm sm:text-base">
        {/* Fees */}
        <div className="">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-au-burgundy">(1) Pay fees at the bank (Ghana & ECOWAS Region)</h2>
            <p>
              For payments within Ghana or the West Africa (ECOWAS) region, students can deposit fees directly to either our Ghana Cedi or US Dollar account with any ECOBANK branch.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-au-burgundy">(2) Fill deposit slip</h2>
            <p>Complete a deposit slip in triplicate as follows:</p>
            <ul className="list-disc pl-5">
              <li>Original for the bank</li>
              <li>Duplicate to be submitted to Ashesi (photo copy is acceptable). The duplicate can be handed in at the Finance Office on submission of application forms.</li>
              <li>Triplicate should be kept by student as evidence of payment.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-au-burgundy">(3) Confirm information required on the deposit slip</h2>
            <ul className="list-disc pl-5">
              <li>Full name and contact number(s).</li>
              <li>A valid bank stamp</li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-semibold text-au-burgundy">(4) Submit deposit slip to Ashesi, and get an official Ashesi Receipt</h2>
          </div>
        </div>
      </div>
    ),
  },
];
