import React, { useState } from "react";
import Image from "next/image";
import { loginFields, signupFields } from "@/data/AuthFields";

import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "login" | "signup";
  onToggleType: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, type, onToggleType }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const fields = type === "signup" ? signupFields : loginFields;

  return (
    <AnimatePresence>
     // Backdrop for the modal with fade-in/out animation
      {isOpen && (<motion.div
        className="fixed inset-0 z-[999] bg-black01/80 flex items-center justify-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

        {/* Modal container */}
        <motion.div className={clsx(" py-7 px-7 lg:py-10 lg:px-[59px]",
          "relative rounded-3xl max-w-md w-[90%]",
          "bg-white   shadow-[0px_4px_20px_0px_#FFFFFF40]")}
          initial={{ opacity: 0, scale: 0.9, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: -20 }} transition={{ duration: 0.3 }}>

          {/* Header with title and close button */}
          <div className="flex justify-between items-center mb-2 lg:mb-6">
            <h2 className="text-[32px] font-bold">{type === "login" ? "Login" : "Create Account"}</h2>

            <button onClick={onClose}>
              <Image src="/images/navbar/authPopUp/close.svg" alt="Close" width={12} height={12} className="cursor-pointer" />
            </button>
          </div>

          {/* Form section */}
          <form className="flex flex-col">
            {fields.map((field, index) => (
              <div key={index}>
                <label className="text-sm sm:text-lg font-semibold mb-1.5 lg:mb-2.5 text-black01/30 block">{field.label}</label>

                {/* Password field to toggle visibility */}
                {field.name === "password" ? (
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} placeholder={field.placeholder}
                      className="text-sm sm:text-base border border-black01/20 px-6 py-3.5 rounded-lg  w-full pr-12" />

                    <Image src={showPassword ? "/images/navbar/authPopUp/eye-off.svg" : "/images/navbar/authPopUp/eye.svg"}
                      alt="Toggle visibility" width={24} height={24} onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100" />
                  </div>

                ) : (

                  <input type={field.type} placeholder={field.placeholder}
                    className="text-sm sm:text-base border border-black01/20 px-6 py-3.5 rounded-lg mb-3  lg:mb-5 w-full" />
                )}
              </div>
            ))}

            {/* Forgot your password */}
            {type === "login" && (
              <label className="text-sm text-end text-black01/30 font-semibold  block mt-3 md:mt-5">Forgot your password?</label>)}

            {/* checkbox */}
            {type === "signup" && (
              <div className="flex items-center gap-3 text-sm text-black01/60   cursor-pointer select-none mt-3 md:mt-5">
                <input type="checkbox" className="w-5 h-5 appearance-none rounded-sm border border-black01/30 checked:bg-orange  focus:outline-none cursor-pointer" />
                <span>I agree with <span className="text-orange cursor-pointer border-b-2 border-transparent hover:border-orange transition-colors duration-300">Terms</span> and <span className="text-orange cursor-pointer border-b-2 border-transparent hover:border-orange transition-colors duration-300">Privacy</span></span>
              </div>
            )}

            {/* Sign in up Button */}
            <button className="bg-orange text-white py-2 rounded-[50px] sm:text-[20px] font-semibold hover:bg-orange/80 hover:shadow-md transition-colors duration-300 mt-5">
              {type === "login" ? "Sign In" : "Sign Up"}
            </button>

            <span className="text-center my-1.5 text-black01/30">or</span>

            {/* Google Button */}
            <div className="bg-white hover:bg-black01/10 transition-colors duration-300 border border-black01/20 text-black01/30 py-2.5 px-6 rounded-[50px] flex gap-5 sm:gap-10 items-center justify-center cursor-pointer  ">
              <Image src="/images/navbar/authPopUp/google.svg" alt="Google" width={24} height={24} />
              <span className="text-sm sm:text-[18px] font-semibold">
                {type === "login" ? "Sign In with Google" : "Sign Up with Google"}
              </span>
            </div>

            {/* Already have an account?*/}
            <div className="text-center mt-2 md:mt-5 text-black01">{type === "login" ? "Don’t have an account?" : "Already have an account?"}{" "}
              <span className="text-orange cursor-pointer font-semibold border-b-2 border-transparent hover:border-orange transition-colors duration-300"
                onClick={onToggleType}>{type === "login" ? "Sign Up" : "Log In"}</span>
            </div>
          </form>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
