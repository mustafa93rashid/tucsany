// components/CustomerCard.tsx
import Image from 'next/image';

interface CustomerCardProps {
  image: string;
  name: string;
  desc: string;
  aos?: string; 
}

const CustomerCard: React.FC<CustomerCardProps> = ({ image, name, desc, aos }) => {
  return (
    <div data-aos={aos} data-aos-once="true" className='p-[50px] border border-[#EFEFEF] rounded-3xl flex flex-col gap-[38px]'>
      <div className='flex flex-col items-center gap-4 text-black01'>
        <Image src={image} alt="Customer" width={80} height={80} className="rounded-full" />
        <span className='text-lg'>{name}</span>
      </div>
      <div className='relative'>
        <article className='text-black01'>{desc}</article>
        <Image src="/images/customer/twoqutations.svg" alt="Quotes" width={40} height={28} className="absolute top-[-35px]" />
        <Image src="/images/customer/twoqutations.svg" alt="Quotes" width={40} height={28} className="absolute bottom-[-35px] right-0" />
      </div>
    </div>
  );
};

export default CustomerCard;
