import Tabs from '@/components/Tabs';
import React from 'react'
import { podcast } from "@/app/fonts/Podcast";
import Image from 'next/image';

interface HeroProps {
  images: string;
  showContent?: boolean;
}

const Hero: React.FC<HeroProps> = ({ images, showContent }) => {
  return (
<div className="relative w-full h-screen ">
      <Image
        src={images}
        alt="Hero Image"
        fill
        priority
        className="object-cover"
      />

      {showContent ? (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4 mt-6 sm:mt-0' >
          <h1 data-aos="fade-up"  className={`text-center text-3xl md:text-5xl lg:text-7xl ${podcast.variable}`} style={{ fontFamily: 'var(--font-podcast)' }}
          >Enjoy in the best way!</h1>
          <span data-aos="fade-down" className='text-lg font-bold'>Enjoy our services for your trip anytime</span>
          <Tabs />

        </div>
      ) : (
        <div data-aos="fade-up" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-4 mt-6 sm:mt-0'>
          <h2  className={`text-center text-4xl md:text-5xl lg:text-7xl ${podcast.variable}`} style={{ fontFamily: 'var(--font-podcast)' }}>Our team cares about your full relax</h2>
          <p  className='text-center text-lg  md:text-xl  lg:text-2xl  max-w-[847px] sm:font-bold '>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
          <button className='py-3.5 px-6  border-2 rounded-[50px] text-sm  md:text-xl '>View our Tour Packages</button>
        </div>
      )}
    </div>
  )
}

export default Hero