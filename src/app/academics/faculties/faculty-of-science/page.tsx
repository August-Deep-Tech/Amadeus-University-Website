import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Overview = () => {
    return (
        <div>
            <div className='ContentContainer'>
                <div className="text-au-100-black flex flex-col gap-5 py-10 sm:py-16 md:py-[77px]">
                    <h1 className="text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
                        Humanities and Social Sciences
                    </h1>
                    <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
                        Ashesi's core curriculum consists of interdisciplinary courses designed and taught by the Humanities and Social Sciences department.
                        It is always evolving, but typically includes courses in the areas of leadership and communication, technology, entrepreneurship and
                        problem solving, history and philosophy. At Ashesi, interdisciplinary learning extends beyond the classroom through service learning,
                        which gives students an opportunity to solve problem in communities across Ghana and Africa, and in so doing, build the empathy and
                        confidence that come from confronting and solving pressing problems in our society.
                    </p>
                </div>
            </div>
            {/* living here */}
            <div className="flex flex-col md:flex-row-reverse bg-au-white">
                {/* writeup */}
                <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey pb-[100px] sm:pb-[300px]">
                    <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
                        Jobs Openings
                        </h2>
                        {/* <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                            Ashesi{"'"}s campus was designed as an inspiring base for students all over Africa to learn,
                            collaborate, and form friendships. Our campus culture is driven by student initiative, and
                            we are always looking for ways to improve our residential experience for all. Our campus
                            features a lot of spaces for living, dining, recreation and learning.
                        </p> */}
                        {/* links list */}
                        <div className="text-base md:text-lg lg:text-xl leading-relaxed flex flex-col font-light">
                            <Link href="/student-life/living-here/on-campus-housing" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                                Campus Housing
                            </Link>
                            <Link href="/student-life/living-here/off-campus-housing" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                                Off-Campus Housing
                            </Link>
                        </div>
                    </div>
                </div>
                {/* image */}
                <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
                    <div className="relative h-full w-full">
                        <Image
                            src="/assets/academics/faculties/socialandmanagement/socialmanagement-1.jpg"
                            fill
                            alt="Image preview"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview