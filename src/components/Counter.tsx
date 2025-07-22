"use client";

import { CounterData } from '@/data/CounterData';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
  const [ref, inView] = useInView({ triggerOnce: true }); 

  return (
    <div ref={ref} className="flex flex-wrap xl:flex-nowrap justify-center items-center gap-10 sm:gap-[50px] py-10">
      {CounterData.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-[83px] sm:w-auto">
          <span className="text-[32px] sm:text-[40px] text-orange font-bold">
            {inView && (
              <CountUp start={0} end={Number(item.number)} duration={3} />
            )}
            +
          </span>
          <span className="text-center sm:text-start text-sm sm:text-base text-gray-600">
            {item.desc}
          </span>
        </div> 
      ))}
    </div>
  );
};

export default Counter;
