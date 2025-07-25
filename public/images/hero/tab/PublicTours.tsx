import React from "react";

const PublicTours: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 25 24"
    fill="currentColor"
    className="shrink-0"
    {...props} 
  >
    <path d="M12.5 2C6.98 2 2.5 6.48 2.5 12C2.5 17.52 6.98 22 12.5 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.5 2ZM11.5 19.93C7.55 19.44 4.5 16.08 4.5 12C4.5 11.38 4.58 10.79 4.71 10.21L9.5 15V16C9.5 17.1 10.4 18 11.5 18V19.93ZM18.4 17.39C18.14 16.58 17.4 16 16.5 16H15.5V13C15.5 12.45 15.05 12 14.5 12H8.5V10H10.5C11.05 10 11.5 9.55 11.5 9V7H13.5C14.6 7 15.5 6.1 15.5 5V4.59C18.43 5.78 20.5 8.65 20.5 12C20.5 14.08 19.7 15.97 18.4 17.39Z" />
  </svg>
);

export default PublicTours;
