import React from "react";
import ProfileCard from "@/components/ProfileCard";

const universityProfileCardProps = [
  {
    name: "Kezia Asare '24",
    position: "President, Student Council Executive President",
    imageUrl: "/assets/about/student-leadership/student-leadership1.jpg",
    description:
      "Kezia Asare is a third-year Mechanical Engineering student passionately pursuing her aspirations of industrial manufacturing with interest in design and biomedical technologies. Her willingness and dedication to service have led her to contribute impactfully to the Ashesi community through engagements with various departments on campus, such as the Ashesi Career Services and Engineering department, amongst others. She hopes to draw from her wealth of experience and knowledge as an Academic Committee co-chairperson and an organiser for TEDxAshesiUniversity in effectively fulfilling her role as president. Throughout her tenure, Kezia aims to deepen the Ashesi ecosystem through collaborations that will resound throughout the next decade.",
  },
  {
    name: "Yamoah Frimpong Attafuah '24 ",
    position: "Vice President, Student Council Executive",
    imageUrl: "/assets/about/student-leadership/student-leadership2.jpg",
    description:
      "Yamoah Frimpong Attafuah or “Wofa”, as he's known by everyone, is a third-year Computer Engineering student with an avid intrigue in Cloud Computing Systems in Africa. Impelled by his drive to serve, Wofa has held a variety of student government positions at all steps of the academic journey, including as Deputy Headboy and S.R.C. Vice President at Mfanstipim School. In Ashesi's service, he has worked as an Academic Committee member, Multivariable Calculus Tutor, and as the Technical Coach for the best football team on campus, Elite FC. Wofa heartfully believes that a lasting legacy is only created when you impact people so deeply that they are compelled to do same for others. Over the next year, he hopes to leverage on the depth of his experience and abilities to amplify the experience of Ashesi students for many years to come through internal and external",
  },
  {
    name: "Salia Abdul-Mumin '25",
    position: "Speaker of Parliament",
    imageUrl: "/assets/about/student-leadership/student-leadership3.jpg",
    description:
      "Salia Abdul-Mumin is a second-year student pursuing a degree in Computer Engineering. His ultimate goal is to leverage his engineering expertise, particularly in the field of software engineering, to make a positive impact on his country's burgeoning tech industry. As part of his contribution to the Ashesi community, Salia worked as a Management intern at the Ashesi D:Lab, as the Member of Parliament for the class of 2025, and as a Peer Counsellor at the Coaching and Counselling department. During his free time, Salia likes to read and watch political discussions. He hopes to enter into his country's political space to help drive it towards achieving its aims. As per his believes, leadership is about having the heart to serve and give back to society. Furthermore, as the co-founder of myScholarsHub, a non-profit organisation focused on connecting underprivileged students with scholarship opportunities at the best schools worldwide, Salia has demonstrated his commitment to creating opportunities for those who are less fortunate.",
  },
];

const StudentLeadership = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Student Government Leadership Team (2024/25)
          </h1>

          {universityProfileCardProps.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              position={profile.position}
              imageUrl={profile.imageUrl}
              description={profile.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentLeadership;
