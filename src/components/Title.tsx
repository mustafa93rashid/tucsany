import React from 'react'

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className='text-xl lg:text-[32px] font-extrabold text-black01 pb-[60px]'>{title}</div>
  )
}

export default Title