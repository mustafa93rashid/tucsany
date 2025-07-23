import { LuccaData } from "@/data/LuccaData";
import Feature from "../../section/Feature";
import Hero from "@/section/Hero";
import WelcomeToSite from "@/section/WelcomeToSite";
import CustomersSays from "@/section/CustomersSays";

export default function About() {
  return (
    <div>
      <Hero images="/images/hero/2.webp" showContent={false} />
      <WelcomeToSite
        data={LuccaData[0]}
        className="w-[600px] h-[500px] xl:w-[600px] xl:h-[516px] py-[21.5px] px-[25px] border border-[#EFEFEF] rounded-3xl"/>
      <CustomersSays />
      <Feature />
    </div>
  );
}
