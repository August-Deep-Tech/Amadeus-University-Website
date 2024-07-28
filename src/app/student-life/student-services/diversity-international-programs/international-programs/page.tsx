import ImageBanner from '@/components/ImageBanner'
import ToggleBar, { ToggleBarProps } from '@/components/ToggleBar'
import React from 'react'

const InternationalPrograms = () => {
  return (
    <div>
      <div>
        {/* text writeup */}
        <div className="ContentContainer">
          <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
              Study at Ashesi; Explore the world
            </h1>
            <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
              The Office of Diversity and International Programs (ODIP) coordinates and promotes
              all external collaborations and partnerships of the University as well as driving
              initiatives and programs aimed at advancing cross-cultural learning, awareness and acceptance of diversity and inclusion as a core tenant of the University.
            </p>
          </div>
        </div>
        {/* image banner */}
        <ImageBanner src="/assets/studentlife/studentservices/diversityinternationalprograms/internationalprograms/internationalprograms-1.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
        {/* dropdowns */}
        <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
          {toggleBarData.map((data, index) => (
            <ToggleBar key={index} title={data.title} content={data.content} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InternationalPrograms


const toggleBarData: ToggleBarProps[] = [
  {
    title: "Study Abroad & International Programs",
    content: (
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-xl md:text-2xl font-light">
            Ashesi continues to form partnerships with like-minded institutions to allow students to experience learning in different cultures around the world. Our partnerships also extend to organizations that host global learning events or provide opportunities for young people around the world to connect for peer learning.
          </p>
        </div>
        <div className="block text-xl md:text-2xl font-light">
          <p>Ashesi continues to form partnerships with like-minded institutions to allow students to experience learning in different cultures around the world. Our partnerships also extend to organizations that host global learning events or provide opportunities for young people around the world to connect for peer learning.&nbsp;</p>
          <p className='pt-[10px]'><strong>STUDY ABROAD PARTNERS </strong></p>
          <ol className='list-decimal pl-5'>
            <li><a href="http://www.coe.edu/">Coe College, Iowa</a> (USA) – Student Exchange</li>
            <li><a href="http://wooster.edu/">College of Wooster, Ohio</a> (USA) – Student Exchange and Internship Abroad</li>
            <li><a href="http://www.conncoll.edu/">Connecticut College, Connecticut</a> (USA) – Student Exchange</li>
            <li><a href="http://macalester.edu/">Macalester College, Minnesota</a>(USA) – Student Exchange</li>
            <li><a href="http://www.univ-angers.fr/en/university.html">Mälardalen</a> University, Sweden – Student Exchange and Visiting Faculty Opportunities</li>
            <li><a href="http://www.sciencespo.fr/en/">Sciences Po, Paris (France</a>) - Student Exchange</li>
            <li><a href="http://www.swarthmore.edu/">Swarthmore College, Pennsylvania</a> (USA) – Student Exchange</li>
            <li>Arizona State University, Arizona (USA) – Accelerated Master’s Program</li>
            <li>University of Dayton, Ohio (USA) – Student Exchange</li>
            <li><a href="http://twin-cities.umn.edu/">University of Minnesota, Minnesota</a> (USA) – Student Exchange</li>
            <li><a href="http://wheatoncollege.edu/">Wheaton College, Massachusetts</a> (USA)- Student Exchange&nbsp;</li>
          </ol>
          <p className='pb-[15px]'>Click here to view our Study Abroad requirements</p>
          <hr />
          <p className='py-[15px]'><strong>GUIDELINES FOR ASHESI STUDENTS</strong> <strong>&nbsp;</strong></p>
          <p>All Ashesi students who wish to enroll in <strong>an International Exchange Program </strong>and transfer academic credit back to Ashesi <strong>MUST</strong> complete a Study Abroad Application (click here to access the form) and submit it to the Office of Diversity and International Programs by the program deadline at <a href="mailto:odip@ashesi.edu.gh">odip@ashesi.edu.gh</a>.&nbsp; Students should apply as early as possible, or they risk not obtaining a visa in time. Ashesi students are eligible to participate in an international study abroad exchange program if they meet the following criteria:&nbsp;</p>
          <ul className='list-disc pl-5'>
            <li>Must have completed at least two years at Ashesi</li>
            <li>Cumulative grade point average of at least 3.0 at the time of application</li>
            <li>No track record of social or academic misconduct</li>
            <li>Letter of recommendation from a member of full-time faculty and non-academic staff</li>
            <li>Must submit all required documentation before the application deadline.</li>
          </ul>
          <p>Students will be notified by the Office of Diversity and International Programs of the decision a maximum of two weeks after application&nbsp;</p>
          <p>Next steps after approval have been granted.&nbsp;</p>
          <ul className='list-disc pl-5'>
            <li>You must pre-register with the Academic Registry at Ashesi to record the courses you will take while studying abroad. The selected courses will then be sent to the partner institution so that you can be officially enrolled.</li>
            <li>To ensure that all students meet the financial obligations associated with studying abroad, a deposit equivalent to 75% of the estimated cost (living expenses and airfare) is required of you within two weeks of receiving your approval letter. This amount will be made available before your departure.</li>
            <li>Complete all required information to apply for your visa. The Office of Diversity and International Programs will assist in making sure your application is complete.</li>
            <li>Orientation for study abroad exchange students is a month to the departure date. Attending this event is a requirement for all students studying abroad.</li>
          </ul>
          <p>&nbsp;</p>
          <hr />
          <p className='py-[15px]'><strong>GUIDELINES FOR INCOMING EXCHANGE STUDENTS</strong> <strong>&nbsp;</strong></p>
          <p>To begin your application process, please visit your study abroad office at your home institution to discuss Ashesi’s partnership with your home institution and proceed to submit your Application for Admission (click here to access the form) and all other required documents.</p>
          <p><strong>Please Note</strong>: Your application for admission to Ashesi can only be fully processed once the checklist below is complete and <strong><u>the Office of Diversity and International Programs (ODIP) has received <em>all</em> of your</u> <u>documents by the date indicated on the application form.</u>&nbsp; </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <ul className='list-disc pl-5'>
            <li>Completed <em>and</em> signed Application Form &nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li>Official transcript from current University &nbsp;</li>
            <li>1 Passport photograph &nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li>2 Recommendation Assessment Forms and Letters &nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li>Dean of Students Reference Form &nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li>Proof of Medical Insurance Coverage &nbsp;</li>
            <li>Application Essays &nbsp;</li>
            <li>Course Request Form &nbsp;</li>
            <li>Interview Scheduling Form &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          </ul>
          <p><strong>&nbsp;</strong></p></div>
      </div>
    ),
  },
  {
    title: "International Engagement Partners",
    content: (
      <div className="flex flex-col gap-6">
        <ul className='list-decimal pl-5 text-xl md:text-2xl font-light'>
          <li>Melton Foundation Fellowship - Global Citizenship Engagement</li>
          <li>Dalai Lama Fellowship - Global Citizenship Engagement</li>
          <li>College of Wooster Applied Math Research Experience (AMRE) - Summer Internship</li>
        </ul>
      </div>
    ),
  },
  {
    title: "International Engagement Support",
    content: (
      <div className="flex flex-col gap-6">
        <p className="text-xl md:text-2xl font-light">
          <strong>  International Engagement Scholarships:  </strong> The ODIP provides funding to help students in making their international engagement dreams a reality. The funds support processes such as visa applications and SEVIS fee payments (for study abroad programs).
        </p>
        <p className="text-xl md:text-2xl font-light">
          <strong>  International Engagement Planning & Advising:  </strong> The ODIP runs various sessions to expose members of the Ashesi community to the various international engagement opportunities available to them and how they can plan to take advantage of such programs. Students can also schedule a one-on-one session with the International Programs Office to discuss their unique interests, or to speak with an International Engagement Pal to hear about their international engagement experiences, which can inspire planning of the student’s own experience! Book a one-on-one session here: https://ashesiodip.simplybook.me#book/provider/2
        </p>
        <p className="text-xl md:text-2xl font-light">
          <strong> Host Family Program:  </strong> The Host Family Program fulfills a twofold objective:
          <ul className='list-decimal pl-5 text-xl md:text-2xl font-light'>
            <li>give international students at Ashesi the opportunity to expand their Ghanaian network throughout their stay in Ghana by offering them a home away from home, and</li>
            <li>grant Ghanaian families who sign up for the program the opportunity to learn about different countries and cultures through the international students they host. Host families are often families of Ashesi Ghanaian students, faculty and staff, the Ashesi alumni community, and friends of Ashesi.</li>
          </ul>
        </p>

        <p className="text-xl md:text-2xl font-light">
          <strong> Study Abroad Returning Students Campus Impact Projects:  </strong> Students who return from study abroad programs are required to run an activity or project on campus based on an impactful learning or experience from their study abroad. The aim of this is for returning study abroad students to share their learnings with the Ashesi community and to keep their experiences alive.  Some past study abroad impact projects include: “Go Get Yours”, a campaign aimed at advising everyone on campus to secure a passport championed by a student who almost missed a study abroad opportunity because his passport was not ready; a free store called “Adefofro”, which helps students to secure items such as furniture, etc. to help them settle into their hostel rooms more easily.
        </p>
        <p className="text-xl md:text-2xl font-light">
          <strong> Re-entry workshop: </strong> A program designed to prepare all study abroad returnees, including those from our             partner institutions, to help them to reintegrate into their home campuses and countries upon completion of their study abroad experience.
        </p>
        <p className="text-xl md:text-2xl font-light">
          <strong> Customized cultural immersion trips:  </strong> The International Programs Office organizes co-funded cultural emersion trips for study abroad students to explore the regions, people and cultures of Ghana. Ashesi provides a bus, a tour guide and covers the cost of the tolls to visit the world heritage and cultural sites on these trips. Study abroad students have the opportunity to choose among a list of options, where they would like to visit!
        </p>
      </div>
    ),
  },
  {
    title: "International Student Support and Advising",
    content: (
      <div className="flex flex-col gap-6">
        <div className="block text-xl md:text-2xl font-light">
          <p>The ODIP prepares the international student community at Ashesi to make the most out of studying at Ashesi and living in Ghana through a series of regular programming including:</p>
          <ol className='list-decimal pl-5 pb-[15px]'>
            <li><strong>Pre-arrival, onsite, and pre-departure orientation and documentation: </strong>The international student orientation will cover the basics of living and adjusting in Ghana as an international student.</li>
            <li><strong>Airport pick-up during orientation: </strong>The International Programs Office provides a shuttle service to convey International students from the airport to Ashesi upon their arrival in Ghana. Students interested in this shuttle service need to send in their flight itinerary for the set day of the airport port pick up by the deadline communicated to them by the office</li>
          </ol>
          <hr />
          <p className='pt-[15px]'><strong>Immigration regularization:</strong> The office guides students to regularize their residence permit and Ghana non-citizenship I.D. to remain in good immigration status to be able to study legally in Ghana. To help International Students to do this through a smooth process, the office brings to campus a team of Ghana Immigration Officers as well as Ghana Non-Citizenship team members to regularize students’ immigration status. The office communicates the dates for this process to the students. The immigration requirements include<strong>:</strong></p>
          <p>Ghana Non-Citizenship Card Processing for All Internationals (Students and Non-Students - You will need your original passport for registration as well as the Ghana Non-Citizenship filled form, find more details here: <a href="https://fims.org.gh/how-to/register/">https://fims.org.gh/how-to/register/</a>)</p>
          <ul className='list-disc pl-5 pb-[15px]'>
            <li>First Issuance: $ 120 / cedi equivalent</li>
            <li>Card Renewal: $ 60 / cedi equivalent</li>
            <li>Card Replacement: $ 60 / cedi equivalent</li>
          </ul>
          <hr />
          <p className='pt-[15px]'><strong>Residence Permit Regularization Requirements</strong></p>
          <ol className='list-decimal pl-5'>
            <li>2 passport size photographs (Write your name and sign the back of pictures)</li>
            <li>Your original passport</li>
            <li>Photocopy of the Bio-data page of your passport</li>
            <li>Photocopy of your admission letter</li>
            <li>Photocopy of your school fees receipt (if applicable)</li>
            <li>Photocopy of your Non-Citizen ID (You will receive this upon Ghana Card registration)</li>
            <li>Cost:
              <ol className='list-disc pl-5'>
                <li>GHC 200 for Non-West African and other Nationals</li>
                <li>GHC 150 for West African Nationals</li>
              </ol>
            </li>
          </ol></div>
      </div>
    ),
  },
];