import { BookingFormData } from "@/data/BookingFormData";
import Title from "./Title";
import CustomButton from "./CustomButton";

type BookingField = {
  title: string;
  type: string;
  placeholder: string;
  options?: string[];
  icon?: string;
};

const BookingForm = () => {
  return (
    <div  className="flex flex-col items-center z-20">
      <Title title="Book Now Bike" />

      <div className="bg-white/20 rounded-3xl p-[30px] w-full  lg:w-[734px] ">
        <form className="flex flex-col lg:flex-row gap-5gi lg:gap-[30px] flex-wrap">
          {BookingFormData.map((data: BookingField & { options?: string[] }, index) => (
            <div key={index} className="flex flex-col gap-2">
              <label className="font-semibold text-lg text-black01">{data.title}</label>

              {data.type === "select" ? (
                <div className="relative w-full lg:w-[318px]">
                  <select
                    className="appearance-none bg-white text-black01/50 py-3.5 pr-10 pl-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange md:text-sm w-full"
                  >
                    <option>{data.placeholder}</option>
                    {data.options?.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  {data.icon && (
                    <span className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
                      <img src={data.icon} alt="icon" />
                    </span>
                  )}
                </div>

              ) : (
                <input
                  type={data.type}
                  placeholder={data.placeholder}
                  className="bg-white text-black01/50 py-3.5 pr-2 pl-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange md:text-sm w-full lg:w-[318px]"
                />
              )}
            </div>
          ))}
        </form>

        <div className="md:col-span-2 flex justify-center mt-7">
          <CustomButton label="Book Now" />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
