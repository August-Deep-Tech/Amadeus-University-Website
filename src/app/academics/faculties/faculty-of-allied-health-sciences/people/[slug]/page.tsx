
"use client"

import React from 'react'
import { useParams } from 'next/navigation';
import LecturerProfile, { lecturers } from '@/components/Lecturer'

const Page = () => {
    const router = useParams();
    console.log(router.slug)
    const findProduct = lecturers.filter((e: any) => e.slug === router.slug)
    console.log(findProduct)
    return (
        <div>
            <div className='ContentContainer'>
                <div className='py-10 sm:py-16 md:py-[77px]'>
                    {findProduct.map((lecturer, index) => (
                        <LecturerProfile key={index} {...lecturer} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page