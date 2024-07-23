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
        </div>
    )
}

export default GraduateOutcomes