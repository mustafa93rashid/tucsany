import { BestCompanyData } from "@/data/BestCompanyData";
import BookBike from "@/section/BookBike";
import CustomersSays from "@/section/CustomersSays";
import Destinantions from "@/section/Destinantions";
import Hero from "@/section/Hero";
import Offers from "@/section/Offers";
import Package from "@/section/Package";
import Services from "@/section/Services";
import WelcomeToSite from "@/section/WelcomeToSite";

const HomePage = () => {
  return (
    <>
      <Hero images="/images/hero/1.webp" showContent={true} />
      <Destinantions />
      <WelcomeToSite
        data={BestCompanyData[0]}
        className="w-[300px] h-[500px] xl:w-[450px] xl:h-[650px]"
      />
      <Offers />
      <Services />
      <BookBike />
      <Package />
      <CustomersSays />
    </>
  );
};

export default HomePage;
