import FeaturesCard from '@/components/featuresCard'
import { FeaturesData } from '@/data/FeaturesData'

const Feature = () => {
  return (
    <section className='bg-gradient-to-b from-orange-100 via-orange-200 to-orange-300  mt-[120px] py-[83px]   px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] mb-[160px]  '>
      <div className="mx-auto  max-w-[1600px] flex flex-col lg:flex-row gap-[83px]" >
        {FeaturesData.map((data, index) => (
          <FeaturesCard key={index}
            icon={data.icon}
            pargraph={data.pargraph}
          />
        ))}
      </div>
    </section>
  )
}

export default Feature