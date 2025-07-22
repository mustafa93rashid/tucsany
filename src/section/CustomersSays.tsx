import CustomerCard from "@/components/CustomerCard";
import { CustomerData } from "../data/CustomerData";
import Title from "@/components/Title";
import Carousel from "@/components/Carousel";
const CustomersSays = () => {
  return (
    <section className="max-w-[1800px] mx-auto mb-[160px]">

      <div className="px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] pt-[120px]">
        <div className="flex flex-col lg:flex-row  gap-5">
          <Carousel defaultItemsToShow={2} title="Happy Customers Says">
            {CustomerData.map((data, index) => (
              <CustomerCard
                key={index}
                image={data.image}
                name={data.name}
                desc={data.desc}
                aos={data.aos}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>

  )
}

export default CustomersSays