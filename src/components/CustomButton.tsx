type CustomButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" ;
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`px-14 w-fit mx-auto py-2.5 font-semibold text-[20px] bg-orange text-white rounded-full hover:shadow-xl transition ${className}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
