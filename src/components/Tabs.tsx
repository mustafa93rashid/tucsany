"use client";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import PublicTours from "../../public/images/hero/tab/PublicTours";
import PrivateTours from "../../public/images/hero/tab/PrivateTours";
import { filterFields } from "@/data/TabsOption";

const Tabs = () => {
    const [activeTab, setActiveTab] = useState<"public" | "private">("public");
    const [startDate, setStartDate] = useState<Date | null>(null);

    return (
        <div data-aos="flip-up" className="mx-auto p-3 rounded-xl bg-white/20 mt-5 sm:mt-12">
            {/* Tabs */}
            <div className="flex w-fit mx-auto xl:mx-0">
                {[
                    { key: "public", label: "Public Tours", Icon: PublicTours },
                    { key: "private", label: "Private Tours", Icon: PrivateTours },
                ].map(({ key, label, Icon }) => (
                    <button
                        key={key}
                        onClick={() => setActiveTab(key as "public" | "private")}
                        className={`flex items-center p-2 sm:gap-2 sm:p-4 ${key === "public" ? "rounded-tl-xl" : "rounded-tr-xl"
                            } ${activeTab === key ? "text-orange bg-white" : "text-white bg-white/40"}`}
                    >
                        <Icon />
                        <span className="font-semibold text-sm sm:text-lg">{label}</span>
                    </button>
                ))}
            </div>

            {/* Filter Form */}
            <div className="bg-white xl:flex items-center rounded-tl-0 p-3 gap-4 rounded-b-lg rounded-tr-lg  rounded-tl-lg xl:rounded-tl-[0px] flex-wrap xl:flex-nowrap">
                {filterFields.map((field) => (

                    <div key={field.key} className="flex items-start gap-[7px] p-1 sm:py-4 sm:pl-4 sm:pr-[3.5px]">
                        <img src={field.icon} alt={`${field.label} Icon`} className="mt-1.5" />

                        <div className="flex flex-col  text-start px-3 relative">
                            <label className="text-black01 text-sm sm:text-lg ">{field.label}</label>
                            {field.type === "select" && field.options && (

                                <select className="text-black01/50 rounded-sm py-1  text-sm sm:text-lg">
                                    {field.options.map((option, index) => (
                                        <option key={index} >{option}</option>
                                    ))}
                                </select>

                            )}

                            {field.type === "date" && (
                                <div className="relative w-fit">
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        placeholderText="Choose Date"
                                        dateFormat="yyyy-MM-dd"
                                        className="w-[150px] pr-6 border-none outline-none bg-transparent text-black01 text-sm sm:text-lg"
                                        calendarClassName="!z-[9999]"
                                    />

                                    <span className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-sm sm:text-base w-3">
                                        <img
                                            src="/images/hero/tab/arrow-down.svg"
                                            alt="Search Icon"

                                        />
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                ))}



                {/* Search Button */}
                <button className="rounded-lg w-full xl:w-[80px] bg-orange p-3 sm:p-5 xl:ml-3   flex items-center justify-center cursor-pointer">
                    <img
                        src="/images/hero/tab/search.png"
                        alt="Search Icon"

                    />
                </button>
            </div>
        </div>
    );
};

export default Tabs;
