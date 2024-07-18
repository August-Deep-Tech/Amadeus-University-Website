import React from 'react'

const ContentContainer = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div className='w-[100%] px-[40px] sm:w-[700px] mx-auto'>{children}</div>
    )
}

export default ContentContainer