import Image from 'next/image';

interface Feature {
    icon: string;
    text: string;
}

interface PackageCardProps {
    image: string;
    title: string;
    price: string;
    features: Feature[];
}

const PackageCard = ({ image, title, price, features }: PackageCardProps) => {
    return (
        <div data-aos="flip-left" className="bg-white rounded-3xl shadow-[0px_0px_20px_0px_#0000001A] w-full lg:w-[340px] overflow-hidden transition-all duration-300 hover:shadow-[0px_10px_30px_0px_#00000030] hover:scale-[1.02]">
            <Image src={image} alt={title} width={400} height={300} className="w-full h-[340px] object-center lg:object-cover" />
            <div className="p-[25px] flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[20px] font-extrabold text-black01">{title}</h2>
                    <h3 className="text-orange font-bold text-5xl">
                        <span className="text-[20px] text-black01/50 font-normal align-super">€</span>
                        {price}
                        <span className="font-normal text-[20px] text-black01/50">/day</span>
                    </h3>
                </div>

                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 text-lg text-black01/80 py-4">
                            <img src={feature.icon} alt="icon"  className='w-6 h-auto'  />
                            <span>{feature.text}</span>
                        </div>
                    ))}
                </div>

                <button className="py-3 px-6 border text-orange font-semibold text-[20px] border-orange rounded-[50px] transition-colors duration-300 hover:bg-orange hover:text-white">
                    Book Now
                </button>
            </div>
        </div>

    );
};

export default PackageCard;
