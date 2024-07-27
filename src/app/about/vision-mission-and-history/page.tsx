import React from "react";
import YoutubeVideoBanner from "@/components/YoutubeVideoBanner";
import ToggleBar from "@/components/ToggleBar";

const toggleBarData = [
  {
    title: "Our Mission & Vision",
    content: (
      <div className="flex flex-col gap-6">
        {/* mission */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Mission</h2>
          <p className="text-xl md:text-2xl font-light">
            The mission of Ashesi University is to educate a new generation of
            ethical, entrepreneurial leaders in Africa; to cultivate within our
            students the critical thinking skills, the concern for others and
            the courage it will take to transform a continent.
          </p>
        </div>
        {/* vision */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">Vision</h2>
          <p className="text-xl md:text-2xl font-light">
            Our vision is an African renaissance driven by a new generation of
            ethical, entrepreneurial leaders. We aim to educate such leaders,
            and to drive a movement in African higher education to scale up the
            education of such leaders.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "History of Amadeus",
    content: (
      <div className="flex flex-col gap-6">
        {/* history */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">History</h2>
          <p className="text-xl md:text-2xl font-light">
            Ashesi was founded by Patrick Awuah, a Ghanaian who has spent over
            15 years living and working in the United States. Awuah left Ghana
            in 1985 to attend Swarthmore College on a full scholarship, after
            which he worked for Microsoft Corporation as an engineer and a
            program manager for eight years. Experiencing firsthand the dramatic
            impact that education can have on one&apos;s life, Awuah embarked on
            a mission in 1997 to provide greater educational opportunities in
            Ghana. He enrolled in business school at the University of
            California at Berkeley&apos;s Haas School of Business, both to
            evaluate the feasibility of his goal and to gain a broader range of
            managerial skills with which to found and manage a university.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Meaning of Amadeus",
    content: (
      <div className="flex flex-col gap-6">
        {/* meaning of amadeus */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            If there is anything you can do, or dream you can, begin it.
            Boldness has genius, power and magic in it. Begin it now.
          </h2>
          <p className="text-xl md:text-2xl font-light">
            These words inspired by Johann Wolfgang von Goethe, are the
            inspiration behind the university&apos;s name, Ashesi, which means
            &quot;beginning&quot; in Fante (a native Ghanaian language).
            Ashesi&apos;s founder, Patrick Awuah, first read Goethe&apos;s words
            at a time when he was still questioning the wisdom of undertaking
            such an ambitious project. Encouraged by Goethe&apos;s words, he
            began by undertaking a feasibility study of his idea. Clarifying the
            risks and issues at hand helped Awuah shed his reservations until
            one day he realized that he had lost his hesitation and had become
            very committed to this project. He told himself, &quot;This really
            is the beginning!&quot; But the name Ashesi is not only about its
            founder&apos;s inspiration. It is also about providing a new
            beginning for every student who comes here. And about building an
            institution that reinvents itself to fit the changing needs of
            society; one that grows by replicating its philosophy throughout
            Ghana and Africa.
          </p>
        </div>
      </div>
    ),
  },
];

const MissionAndHistory = () => {
  return (
    <div>
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Our Mission, Vision and History
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Ashesi was established as an independent, public benefit education
            institution operating on a not-for-profit basis. The university
            obtained accreditation from the National Accreditation Board (NAB)
            in September 2001 to operate under the mentorship of the University
            of Cape Coast (UCC), with degrees conferred by UCC. Ashesi began
            instruction on 4th March 2002. Ashesi University received a
            Presidential Charter from the President of Ghana, effective January
            2018, making it an independent university that confers its own
            degrees.
          </p>
        </div>
      </div>
      {/* youtube video banner */}
      <div>
        <YoutubeVideoBanner
          backgroundImage="/assets/about/mission-and-history/mission-and-history-1.jpg"
          youtubeLink="https://www.youtube.com/embed/VIDEO_ID"
          height={{xl: "xl:h-[40.25rem]"}}
        />
      </div>
      {/* dropdowns */}
      <div className="ContentContainer py-10 sm:py-16 md:py-[100px]">
        {toggleBarData.map((data, index) => (
          <ToggleBar key={index} title={data.title} content={data.content} />
        ))}
      </div>
    </div>
  );
};

export default MissionAndHistory;
