import React from "react";
import Image from "next/image";
import ImageWithParallelText from "@/components/ImageWithParallelText";
import ImageBanner from "@/components/ImageBanner";

const Alumni = () => {
  return (
    <div>
      <ImageBanner src="/assets/about/alumni/alumniHero.jpg" />
      {/* text writeup */}
      <div className="ContentContainer">
        <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
          <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
            Students yesterday, alumni for a lifetime
          </h1>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Your Ashesi journey hardly ends when you graduate from here;
            it&apos;s actually just begun. Our alumni are our biggest champions
            and the work they continue to do after Ashesi helps extend our
            impact. Across the world, and particularly on the African continent,
            our 1440 alumni work in a variety of ways to make impact.
          </p>
          <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            Alumni also continue to receive assistance from Ashesi in terms of
            career coaching, grad school prep and a lifetime of building
            memories with friends and family.
          </p>
        </div>
      </div>
      <ImageWithParallelText
        imageSrc="/assets/about/alumni/alumni1.jpg"
        content={
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Life after Ashesi
            </h2>
            <p className="text-xl md:text-2xl font-light">
              Ashesi is always right in your backyard. Find groups and clubs,
              events, and alumni wherever you are—and wherever you go. Stay
              intellectually and emotionally connected to Ashesi and alumni
              across the world. Alumni also continue to receive assistance from
              Ashesi in terms of career coaching, grad school prep and a
              lifetime of building memories with friends and family.
            </p>
          </div>
        }
        imageOnLeft={false}
      />
      <ImageWithParallelText
        imageSrc="/assets/about/alumni/alumni2.jpg"
        content={
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Alumni Resources
            </h2>
            <p className="text-xl md:text-2xl font-light mb-6">
              Make the most of your alumni experience by taking advantage of
              these special alumni resources for your career, campus engagement
              and beyond.
            </p>
            <ul className="text-au-burgundy text-xl md:text-2xl font-light *:underline *:cursor-pointer">
              <li className="hover:no-underline">Alumni Relations Office </li>
              <li className="hover:no-underline">Academic Request Form </li>
              <li className="hover:no-underline">Career Services </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default Alumni;

<div className="flex flex-col md:flex-row bg-gray-100">
  {/* Text Content */}
  <div className="md:w-1/2 p-28">
    <h2 className="text-3xl font-bold mb-4">Life after Graduation</h2>
    <p className="mb-4">
      {/* Add your own content here about alumni connections */}
    </p>
    <ul className="list-disc pl-5">
      {/* Add list items about alumni benefits */}
    </ul>
  </div>

  {/* Image */}
  <div className="md:w-1/2">
    <Image
      src="/assets/about/alumni/alumni1.jpg"
      alt="Alumni gathering"
      width={500}
      height={300}
      layout="responsive"
    />
  </div>
</div>;
