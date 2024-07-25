import React from "react";
import ProfileCard from "@/components/ProfileCard";

const alumniProfileCardProps = [
  {
    name: "Abdul Latif '05",
    position: "Chairperson",
    imageUrl: "/assets/about/alumni/alumnicouncil1.jpg",
    description:
      "Abdul-Latif Issahaku is a passionate marketing executive leading brands to drive products and services innovation. He is fascinated about innovations in the technology space and has consistently launched and applied mobile technology solutions that address everyday problems. Since 2006, Abdul-Latif has worked for two multinational telecommunication companies; the Chinese giant Huawei Technologies as well as MTN, Africa’s leading telecommunications operator. In 2013, he launched the MTN Apps Challenge which provides opportunity for Ghanaian youth to use technology to solve the litany of problems in Ghana. Some 100 young software developers have taken part in the annual competition. Abdul-Latif studied at two prestigious universities in Africa and Europe – Ashesi University in Ghana and Nyenrode Business University in The Netherlands where he graduated with a Bachelor’s degree in Computer Science and Master’s in Business Administration respectively. He took courses at Kellogg School of Management in the USA, Indian Institute of Management, Bangalore in India as well as the European Commission in Brussels. He has interacted with corporate leaders in Europe and the United States from companies such as Microsoft, CISCO, IBM, Bavaria Breweries, Sogeti, and TNT.",
  },
  {
    name: "Rose Aba Dodd '09 ",
    position: "General Secretary",
    imageUrl: "/assets/about/alumni/alumnicouncil2.jpg",
    description:
      "Rose Dodd is an Assistant Lecturer at Ashesi University, teaching a foundation course in Design and Entrepreneurship; and a capstone Leadership course for Engineers. She holds an MBA from the University of Illinois Business School and has eight years’ experience in consulting and managing organizations and projects in both the US and Ghana. An honors graduate of Ashesi University, Rose has completed consulting projects with foreign and local clients to review operations, enter new markets, and/or evaluate competition in an existing market. Rose has a record of inspiring loyalty in teams and gathering the needed support to complete projects successfully and within schedule, evident in her on-going role as the program manager for the Education Collaborative at Ashesi, and as founder of Kaya ChildCare, an early childhood development center for the children of Kayayei in Accra. Rose’s career is now focused on impacting education policy in Ghana through exploring, designing and sharing models for college education, and for early childhood education for an often-overlooked urban poor population. ",
  },
  {
    name: "Jessica Sugru Ali '15",
    position: "International Relations Chair",
    imageUrl: "/assets/about/alumni/alumnicouncil3.jpg",
    description:
      "Jessica studied Management Information Systems graduating in 2015. While in Ashesi, she served as Vice President of the Culinary and Confectionary club, a Resident Assistant and worked closely with the Office of Students and Community Affairs to solve student housing-related issues and improve student life by creating avenues for interactions during her time as Welfare Chairperson. She currently works as a Diversity Recruiter & Programme Manager for Bank of America Merrill Lynch’s Enterprise Control Functions, and the Africa Recruitment Initiative. She also volunteers for a number of female empowerment, social mobility and diversity initiatives and workshops to satisfy her passion for helping the next generation take advantage of the world of opportunities we have available.  Prior to this role, she worked as a Career Services Officer in Ashesi.",
  },
];

const AlumniCouncil = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light  text-center">
            Ashesi Alumni Council
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            The Alumni Council is be the leadership and representative body that
            will create structure, direction and avenues for engagement within
            the alumni community. The Council&apos;s work will focus on
            increasing and deepening alumni engagement through an array of
            programs that will support the alumni community.
          </p>

          {alumniProfileCardProps.map((profile, index) => (
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

export default AlumniCouncil;
