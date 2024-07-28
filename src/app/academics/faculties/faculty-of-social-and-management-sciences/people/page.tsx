"use client"

import { lecturers } from '@/components/Lecturer'
import Link from 'next/link'
import React, { useState } from 'react'

const People = () => {
    const [id, setId] = useState(0)
    return (
        <div>
            <div className='ContentContainer'>
                <div className="text-au-100-black grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-[30px] py-10 sm:py-16 md:py-[77px] text-center">
                    {" "}
                    {lecturers.map((lecturer, index) => (
                        <Link href={`/academics/faculties/faculty-of-social-and-management-sciences/people/${lecturer.slug}`} key={index} className="flex items-center gap-10">
                            {/* number */}
                            <div>
                                <p className="text-4xl md:text-5xl font-light text-au-burgundy">
                                    {index + 1}
                                </p>
                            </div>

                            {/* award */}
                            <div>
                                <p className="text-lg md:text-xl font-light text-left">
                                    {lecturer.name}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default People