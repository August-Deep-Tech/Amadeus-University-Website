import React from 'react';

interface Course {
    code: string;
    title: string;
    requiredFor: string;
    prerequisites: string;
    offered: string;
    type: string;
    creditHours: string;
    ashesiCreditUnits: string;
    classroomHours: string;
    discussionHours: string;
    details: string;
}

export interface CourseCategoryProps {
    category: string;
    description: string;
    courses: Course[];
}

interface CourseInfoProps {
    index: number;
    course: Course;
}

const CourseInfo: React.FC<CourseInfoProps> = ({ course, index }) => {
    return (
        <div className={`${index === 0 && "border-t"} border-b py-[20px] text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light`}>
            <h2 className="text-2xl font-semibold">{course.code} {course.title}</h2>
            <div className="mb-2 italic">
                <p>Required for {course.requiredFor} </p>
                <p>Prerequisite(s): {course.prerequisites}</p>
                <p>Offered:  {course.offered} </p>
                <p>Course Type: {course.type} </p>
                <p>Credit Hours: {course.creditHours} </p>
                <p>Ashesi Credit Units: {course.ashesiCreditUnits} </p>
                <p>Hours per week classroom: {course.classroomHours} </p>
                <p>Hours per week discussion: {course.discussionHours} </p>
            </div>
            <p className="mt-10">{course.details}</p>
        </div>
    );
};

export const CourseCategory: React.FC<CourseCategoryProps> = ({ category, description, courses }) => {
    return (
        <div className="mb-12 text-xl sm:text-lg md:text-[24px] leading-relaxed sm:leading-loose md:leading-[38px] font-light">
            <h1 className="text-2xl sm:text-3xl xl:text-5xl text-au-burgundy font-bold mb-2">{category}</h1>
           {description && <p className="text-gray-700 mb-6">{description}</p> }
            {courses.map((course, index) => (
                <CourseInfo key={index} index={index} course={course} />
            ))}
        </div>
    );
};


