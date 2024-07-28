import { CourseCategory, CourseCategoryProps } from '@/components/CourseInfo';
import React from 'react'

const Description = () => {
    return (
        <div>
            <div className="ContentContainer">
                <div className="text-au-100-black flex flex-col gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px]">
                    <h1 className="text-2xl sm:text-3xl md:text-[40px] leading-tight sm:leading-snug md:leading-[52px] font-light">
                        Core Course Descriptions
                    </h1>
                    <p className="text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
                        Ashesi's core curriculum consists of an interdisciplinary liberal arts program that includes courses in the
                        humanities and social sciences, as well as mathematics and preparatory business and computer science courses.
                        The core curriculum is supplemented by a set of courses in African Studies, which help develop students' understanding of Africa's past, present and possible future trajectory.
                    </p>
                </div>
            </div>
            <div className='ContentContainer'>
                <div className='flex flex-col gap-[20px]'>
                    {coursesData.map((categoryData, index) => (
                        <CourseCategory
                            key={index}
                            category={categoryData.category}
                            description={categoryData.description}
                            courses={categoryData.courses}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Description

const coursesData: CourseCategoryProps[] = [
    {
        category: "English Courses",
        description: "Courses to enhance your English reading, writing, and comprehension skills.",
        courses: [
            {
                code: "FYE 002",
                title: "English Bridge (Optional)",
                requiredFor: "all BA, MIS & CS, ENG Majors",
                prerequisites: "None",
                offered: "Semester 1",
                type: "Lecture",
                creditHours: "4",
                ashesiCreditUnits: "1",
                classroomHours: "3",
                discussionHours: "1",
                details: "Students will hone their reading writing skills through intensive workshops focused on developing their reading comprehension and writing clarity and concision. This optional module is for students who qualified for this module based on the first week diagnostic assessment and for any other students who would like to join the course."
            },
            // You can add more courses here
        ]
    },
    {
        category: "Communication Courses",
        description: "Courses designed to improve your communication skills in writing, public speaking, and multimedia.",
        courses: [
            {
                code: "ENGL 001",
                title: "Writing, Public Speaking, and Multimedia",
                requiredFor: "all majors",
                prerequisites: "None",
                offered: "Semester 1",
                type: "Lecture",
                creditHours: "4",
                ashesiCreditUnits: "1",
                classroomHours: "3",
                discussionHours: "1",
                details: "This course is designed to enhance students' ability to communicate effectively in various forms of media, including written, oral, and multimedia presentations."
            },
            // You can add more courses here
        ]
    },
    // Add more categories and courses as needed
];