import ToggleBar from '@/components/ToggleBar'
import YoutubeVideoBanner from '@/components/YoutubeVideoBanner'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const Overview = () => {
    return (
        <div>
            <div className="ContentContainer">
                <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light text-center">
                        A Home For All
                    </h1>
                    <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
                        The kind of experience students have at Ashesi is theirs to choose. Students who thrive at Ashesi are self-driven,
                        and actively engage across different activities and with different people. And the best part of an imperfect, ever-evolving
                        campus, is that students can find lots of different opportunities to shape campus life, begin new projects, and make meaningful
                        contributions to their alma mater.
                    </p>
                </div>
            </div>
            <div>
                <YoutubeVideoBanner
                    backgroundImage="/assets/studentlife/overview/overview-1.jpg"
                    youtubeLink="https://www.youtube.com/embed/VIDEO_ID"
                />
            </div>
            <div className='ContentContainer'>
                <div className='py-10 sm:py-16 md:py-[77px]'>
                    <ToggleBar
                        title={"Ashesi Is What We Make It"}
                        content={<div>
                            <p className="text-xl font-light pt-[20px]">
                                {'"'}Ashesi has accomplished a lot within a relatively short period of time:
                                Instituting Africa{"'"}s first honour code, over 90% career placement 3 months
                                after national service, a diverse student body representing 20+ countries,
                                a beautiful campus with very strong academic programs, are among the few
                                that comes to mind. We profess many things but perfection isn{"'"}t one. We
                                therefore encourage students to help Ashesi continue to seek excellence.
                                Ashesi will be what you make it!{'"'}
                            </p>
                            <p className="text-xl font-light pt-[20px]">
                                - Abdul Mahdi, Dean of Student & Community Affairs
                            </p>
                        </div>} />
                </div>
            </div>

            {/* living here */}
            <div className="flex flex-col md:flex-row bg-au-white">
                {/* writeup */}
                <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey">
                    <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
                            Living Here
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                            Ashesi{"'"}s campus was designed as an inspiring base for students all over Africa to learn,
                            collaborate, and form friendships. Our campus culture is driven by student initiative, and
                            we are always looking for ways to improve our residential experience for all. Our campus
                            features a lot of spaces for living, dining, recreation and learning.
                        </p>
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
                            src="/assets/studentlife/overview/overview-2.jpg"
                            fill
                            alt="About Image preview"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/*  student resources */}
            <div className="flex flex-col md:flex-row-reverse bg-au-white">
                {/* writeup */}
                <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey">
                    <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
                            Student Resources
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                            We have made great effort to provide support services through your time on campus,
                            to help make the best of your student experiences here. Services include, career
                            support, social and academic guidance, among others.
                        </p>
                        {/* links list */}
                        <ul className="text-base md:text-lg lg:text-xl leading-relaxed font-light flex flex-col">
                            <Link href="/student-life/student-services/career-services" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                                Career Services
                            </Link>
                            <Link href="/student-life/student-services/coaching-counseling-advising" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                                Counselling & Coaching
                            </Link>
                            <Link href="/student-life/living-here/on-campus-housing" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                                Student Life & Engagement
                            </Link>
                            <Link href="/student-life/student-affairs/student-handbook" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                                Student Handbook
                            </Link>
                            <Link href="/student-life/student-services/health-and-wellbeing" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                                Student Health & Wellbeing
                            </Link>
                        </ul>
                    </div>
                </div>
                {/* image */}
                <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
                    <div className="relative h-full w-full">
                        <Image
                            src="/assets/studentlife/overview/overview-3.jpg"
                            fill
                            alt="About Image preview"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* diversity and culture */}
            <div className="flex flex-col md:flex-row bg-au-white">
                {/* writeup */}
                <div className="w-full md:w-1/2 order-2 md:order-1 bg-au-light-grey">
                    <div className="px-6 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-6 md:gap-8 md:max-w-[80%] lg:max-w-[80%] xl:max-w-[70%] md:ml-auto md:mr-[10%] lg:mr-[12%] xl:mr-[15%]">
                        <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-tight">
                            Diversity and Culture
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                            We welcome students and faculty come from across Africa and beyond, making
                            our campus one of the most diverse in West Africa. By creating a campus ethos
                            that promotes awareness of, respect for and an attitude of celebrating diversity,
                            Ashesi celebrates its Pan-African environment.
                        </p>
                        {/* links list */}
                        <div className="text-base md:text-lg lg:text-xl leading-relaxed flex flex-col font-light">
                            <Link href="/student-life/student-services/diversity-international-programs/international-programs" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                                International Programs
                            </Link>
                            <Link href="/student-life/student-services/diversity-international-programs/diversity-inclusion" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                                    Diversity and Inclusion
                                </Link>
                            <Link href="/student-life/student-services/diversity-international-programs/sexual-misconduct-prevention" className="text-au-dark-grey hover:text-au-burgundy cursor-pointer">
                                Sexual Misconduct Prevention & Response
                            </Link>
                        </div>
                    </div>
                </div>
                {/* image */}
                <div className="w-full md:w-1/2 h-[30rem] md:h-auto order-1 md:order-2">
                    <div className="relative h-full w-full">
                        <Image
                            src="/assets/studentlife/overview/overview-4.jpg"
                            fill
                            alt="About Image preview"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview