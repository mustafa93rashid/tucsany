import Link from "next/link";

type CustomButtonProps = {
  label: string;
  href?: string; 
  onClick?: () => void;
  type?: "button";
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  href,
  onClick,
  type = "button",
  className = "",
}) => {
  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      className={`bg-orange font-semibold text-white cursor-pointer px-14 w-fit mx-auto py-2.5  text-[20px]  rounded-full hover:shadow-xl transition ${className}`}
    >
      {label}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};

export default CustomButton;
