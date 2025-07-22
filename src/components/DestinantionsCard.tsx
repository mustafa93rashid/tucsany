
type DestinantionsCardProps = {
    image: string;
    person: string;
    desc: string;
    title: string;
    Available: string;
    aos?: string;
};

const DestinantionsCard: React.FC<DestinantionsCardProps> = ({ image, title, Available, person, desc, aos }) => {
    return (

        <div data-aos={aos} className='flex flex-col gap-4 w-full lg:w-[330px] '>
            <div className="overflow-hidden rounded-3xl">
                <img src={image} alt={title}
                    className="h-[404px] w-full object-cover rounded-3xl transform transition-transform duration-500 hover:scale-105"
                />
            </div>
            <div className='flex flex-col gap-3'>
                <h2 className='font-bold text-2xl text-black01'>{title}</h2>
                <span className='font-semibold text-lg text-black01'>from <span className='font-extrabold text-2xl text-orange' >34 €</span></span>
                <div className="flex justify-between">
                    <div className='flex items-center gap-[6px]'>
                        <img src="/images/destinations/calendar.png" alt="calendar icon" />
                        <span className='text-orange/70 '>{Available}</span>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                        <img src="/images/destinations/icon.png" alt="icon" />
                        <span className='text-orange/70 '>{person}</span></div>
                </div>
                <p className="text-lg leading-[26px]">{desc}</p>
            </div>
        </div>
    )
}

export default DestinantionsCard