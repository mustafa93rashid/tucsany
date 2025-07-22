import Image from 'next/image'
import React from 'react'

interface FeaturesCardProps {
  icon: string;
  pargraph: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({icon, pargraph}) => {
  return (
    <div className='bg-white/30 p-[30px] flex flex-col gap-[15px] rounded-3xl items-center'>
        <Image src={icon} width={60} height={60} alt="icon" />
        <p className='font-semibold text-[20px] text-center '>{pargraph}</p>
    </div>
  )
}

export default FeaturesCard