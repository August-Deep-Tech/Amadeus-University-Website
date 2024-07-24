import React from 'react'

const Clubs = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Clubs and Societies
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Students at Ashesi are encouraged to drive the creation of a vibrant on-campus culture. Campus life at Ashesi is what
            you make of it. An important aspect of the campus culture is the presence of clubs and societies and activities emanating
            from these institutions. As Ashesi's first generation of students, they have the unique opportunity to form new student organizations,
            initiate new activities, and establish traditions. Ashesi's goal is to create an environment that enables students to build a strong community.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Clubs and societies provide avenues for students to develop stronger relationships, test out their ideas, sharpen organizational
            and communication skills, gain managing and leadership experience and broaden their horizons outside academic life.
          </p>
        </div>

        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] border-t border-au-dark-grey">
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Developers Club <br />
            This club seeks to provide development skills for students, towards employability. In addition to workshops, they provide opportunities
            for students to apply their newly gained skills to develop solutions for local organizations, and then provide visibility via showcases.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi Pro Solve <br />
            The aim of this club is to develop students' algorithmic thinking and also bring out the hidden mathematical talents in students.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi Model United Nations <br />
            The aim of this club is to develop the public speaking skills of individuals and enlighten them about globalissues and their stake in it
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Project Management <br />
            To teach members on how to manage projects
          </p>
        </div>
      </div>
    </div>
  )
}

export default Clubs