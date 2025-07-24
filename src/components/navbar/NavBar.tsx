"use client";

import { NavLinkData } from "@/data/NavLinkData";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import AuthModal from "./AuthModal";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={clsx(
          "fixed z-51  left-1/2 -translate-x-1/2 flex justify-between items-center ",// Navbar Breakpoints (Responsive Horizontal Padding)
          "px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%]",// Navbar Breakpoints (Responsive Horizontal Padding)
          "transition-all duration-300 ease-in-out",// Transition Behavior
          {
            "bg-gradient-to-b from-black/60 to-black/75 shadow-md w-[90%] mt-5 rounded-4xl py-3": scrolled && !menuOpen, //Scrolled State 
            "bg-white/50 w-full py-5": !scrolled || menuOpen
          }
        )}
      >

        {/* Logo */}
        <img src="/images/navbar/logo.png" alt="Logo"  className="w-[45px] md:w-[90px] h-auto" />

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ rotateX: -90, opacity: 0, transformOrigin: "top center" }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={clsx("flex flex-col gap-10 justify-center items-center z-51 lg:hidden",
                "fixed inset-0  h-screen w-screen",
                "bg-white")}>

              {/* Navigation links */}
              <ul className="flex flex-col  items-center gap-8 text-lg font-semibold ">
                {NavLinkData.map((link, index) => (
                  <li key={index}>
                    <Link href={link.path} onClick={() => setMenuOpen(false)}
                      className={clsx("transition-colors duration-300",
                        pathname === link.path ? "border-b-2 border-b-orange pb-1 pr-2" : "text-black01")}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* languages */}
              <div className={clsx("flex flex-row md:flex-row  items-center gap-3  mt-0")}>
                <select className="appearance-none font-semibold text-lg ">
                  <option value="en">Eng</option>
                  <option value="ar">عربي</option>
                </select>

                <button
                  className="px-3 font-semibold text-lg lg:text-[20px] text-black cursor-pointer"
                  onClick={() => { setAuthType("login"); setModalOpen(true); setMenuOpen(false) }}>
                  Login
                </button>

                <button
                  className="bg-orange py-2 px-11 rounded-[50px] text-white font-semibold text-lg lg:text-[20px] cursor-pointer"
                  onClick={() => { setAuthType("signup"); setModalOpen(true); setMenuOpen(false) }}>
                  Sign Up
                </button>
              </div>


              <button onClick={() => setMenuOpen(false)} aria-label="close menu">
                <img src="/images/navbar/close.svg" alt="Close" className="absolute top-5 right-5 w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Menu */}
        <div
          className={clsx("hidden lg:block",
            "lg:flex lg:flex-row items-center  font-semibold text-lg lg:text-[20px]",
          )}>

          <ul className="flex flex-col md:flex-row items-center gap-4 lg:gap-10">
            {NavLinkData.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className={clsx(
                  "transition-colors duration-300 hover:text-orange",
                  scrolled && "text-sm",
                  pathname === link.path ? "text-white border-b-2 border-b-orange pb-1 pr-2" : "text-white"
                )}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Language + Auth Buttons */}
        <div className={clsx("hidden lg:block  items-center gap-4  mt-0",)}>
          <select className="appearance-none text-white/60  font-semibold  lg:text-[20px] cursor-pointer px-3">
            <option className="text-black">Eng</option>
            <option className="text-black">Ar</option>
          </select>

          <button
            className={clsx("px-3 font-semibold  text-white cursor-pointer ",
              scrolled ? "text-base" : "text-lg lg:text-[20px]")}
            onClick={() => { setAuthType("login"); setModalOpen(true); }}>
            Login
          </button>

          <button
            className={clsx("bg-orange  font-semibold py-2 px-11 rounded-[50px]  text-white cursor-pointer hover:shadow-xl transition",
              scrolled ? "text-base" : "text-lg lg:text-[20px]")}
            onClick={() => { setAuthType("signup"); setModalOpen(true); }}>
            Sign Up
          </button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/images/navbar/bars.svg" alt="Menu" className={clsx("transition duration-300", scrolled && "filter invert")} />
        </button>
      </nav>

      {/* Auth modal */}
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={authType}
        onToggleType={() => setAuthType(prev => prev === "login" ? "signup" : "login")} />
    </>
  );
};

export default NavBar;