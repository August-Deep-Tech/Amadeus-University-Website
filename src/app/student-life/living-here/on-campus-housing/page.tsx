import ImageBanner from '@/components/ImageBanner'
import React from 'react'

const OnCampusHousing = () => {
  return (
    <div>
      {/* image banner */}
      <ImageBanner src="/assets/studentlife/studentaffairs/livinghere/oncampushousing/oncampushousing-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light ">
            Welcome to Your New Home
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi provides housing options as part of efforts to enhance the educational experience of its students. By increasing opportunities for teamwork,
            enabling closer friendships and creating room for community, residential life serves as an important venue for student learning.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            <span className='font-bold'>Dining</span> <br />
            There are two canteens on campus currently, each running from 7.00 am to 8.00 pm daily, with a small convenience store that provides snacks among other things. There are also two late-night cafeterias that stay opened till 1am. Students can choose to adopt one of three meal plan options, or pay out of pocket for their food at the canteen.
            Students who have special dietary requirements need to report to the Students Affairs Office for arrangements to be made on their behalf.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            <span className='font-bold'>Laundry</span> <br />
            The laundry space within the student dorms has coin-operated wash-and-dry machines, and ten sinks for hand washing.
            (Information on the Housing policies at Ashesi are described in Section 15 of the Student Handbook)
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            <span className='font-bold'>Off-Campus Accomodation</span> <br />
            Ashesi continues to expand on-campus housing, however there are several third-party housing options near campus for students. Check with the Student Affairs Office if you decide to choose off-campus housing and need guidance on available options.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OnCampusHousing