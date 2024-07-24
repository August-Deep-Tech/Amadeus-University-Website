import ImageBanner from '@/components/ImageBanner'
import React from 'react'

const GraduateOutcomes = () => {
    return (
        <div>
            <div className="ContentContainer">
                <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
                    <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
                        Contribute to Something Transformative. Or Create Your Own Path. Ashesi Prepares You for Both.
                    </h1>
                    <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
                        Our graduates have the knowledge and skills they need to solve problems today and the foresight to lead.
                        Which is why Ashesi alumni are found in some of the world{"'"}s strongest organisations and graduate schools.
                        Since inception, 90% of our graduates - from 30+ countries across Africa - have received placement offers
                        within six months of graduation (or national service) and are recognised among the world{"'"}s best.
                        Over a 100 businesses across Africa have been founded by Ashesi alumni.
                    </p>
                </div>
            </div>
            <ImageBanner src="/assets/admission/graduateoutcomes/graduateoutcomes-1.jpg" />
            <div className="ContentContainer">
                <div className='py-10 sm:py-16 md:py-[77px]'>
                    <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
                        Over 300 organisations have recruited from Ashesi since our inception, and each year some 60 organisations
                        attend our career fairs to identify and recruit talent. Across Africa and beyond, Ashesi alumni are considered
                        as some of the continent{"'"}s strongest ambassadors. Our alumni also attend some of the world{"'"}s best graduate schools,
                        and experience success buoyed by their learning experience at Ashesi. No matter where you find them - from Microsoft
                        to Amazon, Accra to Hong Kong - Ashesi alumni stand out.

                    </p>
                </div>
            </div>
            <ImageBanner src="/assets/admission/graduateoutcomes/graduateoutcomes-2.jpg" heightClass="h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]" />
            <div className="ContentContainer">
                <div className='py-10 sm:py-16 md:py-[77px]'>
                    <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
                        Career preparation is core to the teaching and learning experience at Ashesi.
                        Our dedicated career services team - one of few in universities across Africa -
                        work with and guide students during and beyond their time on campus. Over 80% of
                        students, on average, complete at least one internship before graduation.
                        An International Finance Corporation career preparation evaluation scored
                        Ashesi a high 90%, and rated the university among the best in Africa for intentional
                        career support. Don{"'"}t just take our word for it, hear some of our recruitment partners
                        speak about working with Ashesi graduates.
                    </p>
                    <div className='py-10 sm:py-16 md:py-[77px]'>
                        <iframe className='w-[100%] h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[25.25rem]' src="https://www.youtube.com/embed/7bc9plpqxwk?si=upebetbMJkvWcsXo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
                        Entrepreneurial training is integrated throughout the Ashesi curriculum. From their earliest days on campus, students are
                        immersed in activities designed to nurture a problem-solving spirit and the skill of taking an idea from concept to implementation.
                        To date, alumni have started over a 100 businesses serving millions of customers.
                        The Ashesi Entrepreneurship Centre supports wave after wave of student entrepreneurs with mentorship, advisory services, strategic guidance, and seed funding provided by the University and other ecosystem partners.
                    </p>
                </div>
            </div>
            <ImageBanner src="/assets/admission/graduateoutcomes/graduateoutcomes-3.jpg" />
            <div className="ContentContainer">
                <div className='py-10 sm:py-16 md:py-[77px]'>
                    <p className="text-base sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
                        Each month we <span className='text-au-burgundy'>chronicle the stories and experiences of Ashesi students and alumni on our Ashesi Outcomes Blog. </span>
                        Click below to sign up and receive updates whenever we publish new stories.
                    </p>
                    <div className='flex justify-center gap-[5px] pt-[20px]'>
                        <button className='bg-au-burgundy text-base sm:text-lg text-white px-7 py-3 rounded-lg'>Get Updates</button>
                        <button className='bg-au-burgundy text-base sm:text-lg text-white px-7 py-3 rounded-lg'>Apply to Amadeus</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GraduateOutcomes