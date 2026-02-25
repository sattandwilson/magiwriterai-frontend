import { TextSearch } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DetectorCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/detector")}
      className={`${
        isDark
          ? "bg-blue-400/20 border border-blue-400/30 hover:bg-blue-400/25"
          : "bg-blue-400/20 border border-blue-400/30 hover:bg-blue-300/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-blue-500/30" : "bg-blue-700/40"
        } rounded-md xl:rounded-lg`}
      >
        <TextSearch width={25} height={25} className="text-blue-400" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Detector</p>
        <p className="text-base md:text-2xl lg:text-base">
          Detects whether content is human-written or AI-generated, scoring from 0 (green, fully human) to 100 (red, fully AI).
        </p>
      </div>
    </div>
  );
};

export default DetectorCard