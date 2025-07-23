import Image from "next/image";
import { OffersData } from "@/data/OffersData";
import CustomButton from "@/components/CustomButton";

const Offers = () => {
    return (
        <section className="bg-gradient-to-b from-orange-100 via-orange-200 to-orange-300 py-[60px] mt-[120px] relative">
            <div className="max-w-[1800px] mx-auto px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] relative flex items-center justify-center lg:justify-start">
                <div className="bg-white/30 lg:w-[569px] flex flex-col text-center p-[30px] rounded-3xl gap-8 z-10">
                    <h2 className="font-extrabold text-[32px] text-black01">
                        {OffersData[0].title}
                    </h2>
                    <p className="text-lg">
                        {OffersData[0].desc}
                    </p>
                    <CustomButton label="Contact Us" href="/contact" />
                </div>

                <Image
                    src="/images/offers/1.png"
                    alt="Offer Image"
                    width={390}
                    height={300}
                    className="absolute bottom-[-60px] right-[4.1025641%] lg:right-[5.55555556%] xl:right-[13.0208333%] hidden lg:block h-auto"
                />
            </div>
        </section>
    );
};

export default Offers;
