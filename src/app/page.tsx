import Card from "@/components/Card";
import NewsCard from "@/components/NewsCard";
import YoutubeVideoBanner from "@/components/YoutubeVideoBanner";
import { ChevronDown, CircleArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      {/* hero section */}
      <div className="hero flex justify-center items-end text-au-white">
        <div>
          <h1 className="text-[20px] leading-[36px] sm:leading-[48px] sm:text-[30px] w-[90%] sm:w-[65%] text-center mx-auto">
            Defy gravity: Patrick Awuah&apos;s address at University of
            Toronto&apos;s convocation on award of Honourary Doctorate
          </h1>
          <div className="flex justify-center pt-[25px] pb-[50px]">
            <div className="flex gap-[50px]">
              <h1 className="flex gap-[5px]">
                <CircleArrowRight /> Read Story
              </h1>
              <h1 className="flex gap-[5px]">
                <CircleArrowRight /> More stories
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <ChevronDown className="w-7 h-7 text-au-white pulse" />
          </div>
        </div>
      </div>
      {/* second */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
          <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Driven by a Singular Purpose
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Our vision is a flourishing Africa whose leaders make ethical decisions in the best interests of their communities,
            and where innovation drives economic, cultural and social growth. We educate leaders who will make this vision a reality,
            and we collaborate with other institutions to multiply this work.

          </p>

          <Card cards={[
            {
              imageUrl: "/assets/home/home-2.jpg",
              text: "BECOME A STUDENT"
            },
            {
              imageUrl: "/assets/home/home-3.jpg",
              text: "SEE STUDENT & ALUMNI OUTCOMES"
            }
          ]} />
        </div>
      </div>
      {/* second */}
      <div className="bg-au-dark-grey py-[58px]">
        <div className="container mx-auto flex flex-col lg:flex-row justify-center">
          {[{ value: '1:1', description: 'GENDER BALANCE' },
          { value: '54%', description: 'ON SCHOLARSHIPS' },
          { value: '96%', description: 'CAREER PLACEMENT' },].map((stat, index) => (
            <div key={index} className={`text-center text-au-light-grey py-[20px] lg:px-[50px] ${index > 0 && "border-t lg:border-l lg:border-t-0 border-au-light-grey "}`}>
              <div className="text-[80px] font-light">{stat.value}</div>
              <div className="mt-2 text-[18px]">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
      {/* youtube video banner */}
      <div>
        <YoutubeVideoBanner
          backgroundImage="/assets/home/home-4.jpg"
          youtubeLink="https://www.youtube.com/embed/VIDEO_ID"
        />
      </div>
      <div className="py-10 sm:py-16 md:py-[77px]">
        <NewsCard cards={[
          {
            imageUrl: "/assets/home/home-5.jpg",
            text: "Experience Ashesi",
            desc: "For high schoolers and prospective parents, and everyone interested in our model or partnerships, here's how you can experience Ashesi."
          },
          {
            imageUrl: "/assets/home/home-6.jpg",
            text: "Global Reach",
            desc: "Ashesi is recognised around the world for its impact, and considered a thought leader in educating ethical, entrepreneurial leaders in Africa."
          },
          {
            imageUrl: "/assets/home/home-7.jpg",
            text: "Support Our Work",
            desc: "Since Ashesi's launch, generous donors have helped make our progress possible. Here's how to join our cause and help prepare young leaders in Africa."
          }
        ]} />
      </div>

    </main>
  );
}
