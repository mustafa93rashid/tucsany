import Counter from '@/components/Counter';
import Image from 'next/image';
import React from 'react'

interface WelcomeProps {
    data: {
        image: string;
        title: string;
        pargraph: string;
    };
    className?: string;
}


const WelcomeToSite = ({ data, className }: WelcomeProps) => {
    return (
        <div className='max-w-[1800px] mx-auto'>
            <div  className="px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] flex-col lg:flex-row flex items-center justify-between gap-8 pt-[120px] ">
                <Image src={data.image} alt={data.title} width={450} height={650} className={`${className}`}
                />
                <div  className='flex flex-col items-center lg:items-start gap-8 w-full lg:w-[550px]  2xl:max-w-[700px]'>
                    <div className='flex flex-col  gap-1.5'>
                        <span className='text-black01/50 font-semibold text-center lg:text-start'>WELCOME TO OUR SITE!</span>
                        <h2 className='font-extrabold text-[32px] text-black01 text-center lg:text-start'>{data.title}</h2>
                    </div>
                    <p className='text-lg leading-8 text-center lg:text-start '>{data.pargraph}</p>
                    <Counter />
                </div>
            </div>
        </div>
    )
}

export default WelcomeToSite

