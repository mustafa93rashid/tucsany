
import DestinantionsCard from "@/components/DestinantionsCard";
import { DestinantionsData } from "@//data/DestinantionsData";
import Carousel from "@//components/Carousel";

const Destinantions = () => {
  return (
    <div className="max-w-[1800px] mx-auto">
      <div className="px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] pt-[123px]  ">
        <Carousel defaultItemsToShow={4} title="Explore Our Popular Destinantions">
          {DestinantionsData.map((data, index) => (
            <DestinantionsCard
              key={index}
              image={data.image}
              title={data.title}
              Available={data.Available}
              person={data.person}
              desc={data.desc}
              aos={data.aos}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Destinantions;
