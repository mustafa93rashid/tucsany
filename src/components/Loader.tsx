import { useEffect, useRef } from "react";

const Loader = () => {
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes scale {
        0%, 40%, 100% {
          transform: scaleY(0.05);
        }
        20% {
          transform: scaleY(1);
        }
      }
    `;
    document.head.appendChild(style);
    styleRef.current = style;

    return () => {
      if (styleRef.current && styleRef.current.parentNode) {
        styleRef.current.parentNode.removeChild(styleRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-55">
      <div className="flex items-center justify-center gap-[10px] w-[250px] h-[250px]">
        <span
          className="w-[6px] h-[80px] rounded-sm"
          style={{
            backgroundColor: "#4c86f9",
            animation: "scale 2s ease-in-out infinite",
          }}
        ></span>
        <span
          className="w-[6px] h-[80px] rounded-sm"
          style={{
            backgroundColor: "#49a84c",
            animation: "scale 2s ease-in-out infinite",
            animationDelay: "-1.8s",
          }}
        ></span>
        <span
          className="w-[6px] h-[80px] rounded-sm"
          style={{
            backgroundColor: "#f6bb02",
            animation: "scale 2s ease-in-out infinite",
            animationDelay: "-1.6s",
          }}
        ></span>
        <span
          className="w-[6px] h-[80px] rounded-sm"
          style={{
            backgroundColor: "#f6bb02",
            animation: "scale 2s ease-in-out infinite",
            animationDelay: "-1.4s",
          }}
        ></span>
        <span
          className="w-[6px] h-[80px] rounded-sm"
          style={{
            backgroundColor: "#2196f3",
            animation: "scale 2s ease-in-out infinite",
            animationDelay: "-1.2s",
          }}
        ></span>
      </div>
    </div>
  );
};

export default Loader;
