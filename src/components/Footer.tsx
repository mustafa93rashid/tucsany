import Image from "next/image";
import { footerData } from "@/data/FooterData";
import Link from "next/link";

const Footer = () => {
    return (

        <footer className="bg-black01 text-white   py-10 px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] ">
            <section className="max-w-[1800px] mx-auto ">

                {/* Logo */}
                <div className="flex  justify-center lg:justify-start" >
                    {footerData.Logo.map((logo, index) => (
                        <Image
                            key={index}
                            src={logo.logo}
                            alt="Footer Logo"
                            width={133}
                            height={130}
                            className="object-contain w-auto h-auto"
                        />
                    ))}
                </div>


                <div className="flex text-center lg:text-start lg:justify-between flex-col lg:flex-row  gap-10 lg:gap-0 flex-wrap border-y border-white/10 py-[33px] my-[33px]">
                    {/* Services */}
                    <div>
                        <h3 className="font-extrabold mb-5 text-[20px]">Services</h3>
                        <ul className="flex flex-col gap-2.5">
                            {footerData.Services.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-sm hover:text-orange cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Home */}
                    <div>
  <h3 className="font-extrabold mb-5 text-[20px]">Home</h3>
  <ul className="flex flex-col gap-2.5">
    {footerData.Home.map((item, index) => (
      <li key={index}>
        <Link
          href={item.href}
          className="text-sm hover:text-orange cursor-pointer"
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

                    {/* Help */}
                    <div>
                        <h3 className="font-extrabold mb-5 text-[20px]">Help</h3>
                        <ul className="flex flex-col gap-2.5">
                            {footerData.Help.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-sm hover:text-orange cursor-pointer"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-extrabold mb-5 text-[20px]">Contact</h3>
                        <ul className="flex flex-col items-center lg:items-start gap-2.5">
                            {footerData.Contact.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm">
                                    <Image src={item.icon} alt="icon" width={20} height={20} className="w-auto h-auto" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-extrabold mb-5 text-[20px] text-center">Social Media</h3>

                        <div className="flex justify-center gap-6 ">

                            {footerData.Socials.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={item.icon}
                                        alt="social icon"
                                        width={50}
                                        height={50}
                                        className="hover:opacity-75 transition w-auto h-auto"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Copyright */}
                <div className="text-center mt-6 text-sm text-white/70">
                    {footerData.footerCopyright[0].text}
                </div>
            </section>

        </footer>

    );
};

export default Footer;
