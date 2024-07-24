import ImageBanner from '@/components/ImageBanner'
import ToggleBar, { ToggleBarProps } from '@/components/ToggleBar'
import React from 'react'

const HowToApply = () => {
  return (
    <div>    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
        <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            How to Apply in 3 Steps
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            We have simplified our process to make it easier for you to apply to become a student at Ashesi. If you have questions about the process, email us at:
            <a href="mailto:admissions@ashesi.edu.gh" className='text-au-burgundy'> admissions@ashesi.edu.gh</a>
          </p>
        </div>
      </div>
      {/* hero image */}
      <ImageBanner src="/assets/admission/howtoapply/howtoapply-1.jpg" />
      {/* dropdowns */}
      <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
        {toggleBarData.map((data, index) => (
          <ToggleBar key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div></div>
  )
}

export default HowToApply

const toggleBarData: ToggleBarProps[] = [
  {
    title: `1. Start Application`,
    content: (
      <div className="flex flex-col gap-4">
        <p className="text-xl font-light">
          You can start you application online, or download a PDF, complete it and email it back to us.
          However, we recommend you complete your application online as much as you can.
        </p>
        <div>
          <p className="text-xl font-semibold">
            Online Application:
          </p>
          <a href="/images/myw3schoolsimage.jpg" className="text-xl font-light text-au-burgundy" download>
            Click here to open Online Application Form
          </a>
        </div>
        <div>
          <p className="text-xl font-semibold">
            Paper Application:
          </p>
          <p className="text-xl font-light">
            If you prefer to or can only fill a paper application, download and complete the forms below:
          </p>
          <div className='flex flex-col text-au-burgundy'>
            <a href="/images/myw3schoolsimage.jpg" className="text-xl font-light" download>
              Download Admissions Application Form
            </a>
            <a href="/images/myw3schoolsimage.jpg" className="text-xl font-light" download>
              Download Scholarship Application Form
            </a>
          </div>
        </div>
        <p className="text-xl font-light italic">
          (Paper applications would have to be scanned and emailed to the admissions office.
          Scanned applications may delay processing, and possibly result in more requests for information.)
        </p>
      </div>
    ),
  },
  {
    title: "2. Pay Application Fees",
    content: (
      <div className="flex flex-col gap-5">
        <p className="text-xl font-light">
          Application fees are now GHs150 for Ghanaian nationals and $25 for international applicants.
          Application Payments can be made as follows:
        </p>

        <div className='border-t border-au-dark-grey pt-[20px]'>
          <p className='text-2xl font-semibold italic pb-[10px]'>a. MTNMobile Money</p>
          <ul className="list-disc pl-5 font-light text-xl">
            <li>Transfer application fee to merchant mobile number: 024 526 4831</li>
            <li>Name of recipient should be Ashesi University College.</li>
            <li>Applicants should quote the following information on their application form or in the task box in the online application portal: <br />
              a. Mobile number used for transaction by applicant <br />
              b. Transaction ID</li>
            <li>Reference Number (Applicant’s Name should be used as the reference)</li>
          </ul>
        </div>

        <div className='border-t border-au-dark-grey pt-[20px]'>
          <p className='text-2xl font-semibold italic pb-[10px]'>b. Pay Online</p>
          <ul className="list-disc pl-5 font-light text-xl">
            <li>For Applicants who would like to pay via Visa, Mastercard, Amex or Discover, please click here: <span className='text-au-burgundy'> https://expresspaygh.com/ashesi.</span> <br />
              <span className='italic'>Applicants should quote the expressPay generated transaction reference number on their application form (paper applications) or in the task box on the online application portal.</span>
            </li>
          </ul>
        </div>

        <div className='border-t border-au-dark-grey pt-[20px]'>
          <p className='text-2xl font-semibold italic pb-[10px]'>c. Direct Deposit/Rapid Transfer at any Ecobank Branch in Ghana and West Africa</p>
          <p className="font-light text-xl">
            Account Name: Ashesi Admission fees <br />
            Account Number: 02000 144 116 009 05 <br />
            Bank: Ecobank <br />
            Branch: Osu <br />
            Currency: Ghanaian Cedi
          </p>
        </div>

        <div className='border-t border-au-dark-grey pt-[20px]'>
          <p className='text-2xl font-semibold italic pb-[10px]'>d. Wire Transfer from within West Africa</p>
          <p className="font-light text-xl">
            SWIFT code: ECOCGHAC <br />
            Account Name: Ashesi University College <br />
            Account Number: 02010 144 116 009 01 <br />
            Bank: ECOBANK, PMB CT443, ACCRA-GHANA <br />
            Branch: Osu <br />
            Currency: US Dollar
          </p>
        </div>

        <div className='border-t border-au-dark-grey pt-[20px]'>
          <p className='text-2xl font-semibold italic pb-[10px]'>e. International Payments (All other countries)</p>
          <p className="font-light text-xl">
            SWIFT code: ECOCGHAC <br />
            Account Name: Ashesi University College <br />
            Account Number: 02010 144 116 009 01 <br />
            Bank: ECOBANK, PMB CT443, ACCRA-GHANA <br />
            Branch: Osu <br />
          </p>
        </div>

        <p className="text-xl font-light italic">
          * Attach a copy of your payment receipt to your complete application.
          Failure to follow instructions stated above will result in the delay of processing your application
        </p>
      </div>
    ),
  },
  {
    title: "3. Submit Completed Application(s)",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-semibold">
          Via Online Portal (Preferred)
        </p>
        <div>
          <p className="text-2xl font-semibold">
            By E-mail (Preferred)
          </p>
          <p className="text-xl font-light">
            Scan completed application and email to: <br />
            <a href="mailto:admissions@ashesi.edu.gh" className='font-semibold text-xl'>admissions@ashesi.edu.gh</a>
          </p>
        </div>

        <p className="text-xl font-light">
          <span className='font-semibold'>In Person:</span> <br />
          Ashesi University College, < br />
          1 University Avenue, <br />
          Ashesi University College <br />
          Berekuso, Ghana <br />
          <a href='/about/contact-us' className='font-semibold hover:text-au-burgundy'>Click here for directions...</a>
        </p>

        <p className="text-xl font-light">
          <span className='font-semibold'>By Post:</span> <br />
          Admissions Office <br />
          Ashesi University College <br />
          PMB CT3, Cantonments, <br />
          Accra, Ghana
        </p>

        <div className='border-t border-au-dark-grey pt-[20px]'>
          <p className="text-2xl font-semibold">
            Please Note:
          </p>
          <p className="text-xl font-light italic">
            The admissions office can only complete processing for your application upon receipt of the proof of payment.
            The university is not liable for payments transferred into the wrong account or those which may, due to a bank
            error, not reflect in Ashesi{"'"}s bank account.
          </p>
        </div>
      </div>
    ),
  },
];