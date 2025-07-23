import ServicesCard from "@/components/ServicesCard";
import { ServicesData } from "@/data/ServicesData";

const Services = () => {
  return (
    <section className="max-w-[1800px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-[33px] px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] pt-[120px]">
        {ServicesData.map((data, index) => (
          <ServicesCard
            key={index}
            image={data.image}
            title={data.title}
            desc={data.desc}
          />
        ))}
      </div>
    </section>
  )
}

export default Services