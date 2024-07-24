import React from "react";
import ProfileCard from "@/components/ProfileCard";

const universityProfileCardProps = [
  {
    name: "Patrick Awuah",
    position: "Founder & President",
    imageUrl: "/assets/about/university-management/university-management1.jpg",
    description:
      "Before founding Ashesi University, Patrick worked as a Program Manager for Microsoft where, among other things, he spearheaded the development of dial-up internet working technologies and gained a reputation for bringing difficult projects to completion. He holds bachelor degrees in Engineering and Economics from Swarthmore College; an MBA from UC Berkeley’s Haas School of Business; and honorary Doctorates from Swarthmore College, Babson College and the University of Waterloo. He has won many prestigious international awards including the Membership of the Order of the Volta -- one of Ghana’s highest awards, given to individuals who exemplify the ideal of service to the country, and the World Innovation Summit for Education Prize. ",
  },
  {
    name: "Professor Angela Owusu-Ansah",
    position: "Provost",
    imageUrl: "/assets/about/university-management/university-management2.jpg",
    description:
      "Angela brings more than thirty years of experience in education in Africa and the United States; and is a member of the Phi Kappa Phi education honor society. She's an activist for higher education quality serving on national university accreditation agency Boards such as the Ghana Tertiary Education Council (GTEC) and served 18 years on the United States Council for Accreditation of Educator Preparation (CAEP, formerly NCATE). As an education leader, Angela served as Elon University's Associate Dean of the School of Education and Associate Dean of Access and Success, Samford University's Assistant Dean of Education Assessment, and currently, Ashesi University's Provost. She curates innovative approaches, such as the scholarship of teaching and learning to improve student learning, faculty optimization, and research capacity building to improve higher education experiences and outcomes. She strongly advocates incorporating eLearning because of its benefit to the academically marginalized. Locally and across Africa, she contributes to Ashesi's collaboration to mentor and share best practices among 70+ African universities to bring about systems change and elevate higher education's impact in Africa. She participates in the thought leadership of framing Ashesi's entrepreneurship ecosystem and Ashesi's Center for African Popular Culture to foster entrepreneurial thinking and appreciation of Africa's value. Her research interest is in impact evaluation and change in Africa's higher education, specifically digitised higher education instruction, higher education teaching and learning as a science, intercultural understanding among African students, and African women in Higher Education leadership.",
  },
  {
    name: "Araba Botchway",
    position: "Executive Director of Admissions & Financial Aid",
    imageUrl: "/assets/about/university-management/university-management3.jpg",
    description:
      "Prior to her role at Ashesi, Araba worked as the Program Officer for the Ford Foundation International Fellowships Program (IFP) in West Africa for a period of 12 years. She holds a Bachelor’s degree in French with Spanish from the University of Ghana, a post graduate diploma in Marketing of Services from the Maastricht School of Management (Netherlands), an Executive MBA from the Ghana Institute of Management and Public Administration, a certificate in Management of Higher Education Institutions from the Galilee College (Israel), and a certificate in Project Management from Syncom Business Intelligence (South Africa).",
  },
];

const UniversityManagement = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            University Management Team
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

export default UniversityManagement;
