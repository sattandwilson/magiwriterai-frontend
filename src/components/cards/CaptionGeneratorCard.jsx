import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CaptiongeneratorCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/caption")}
      className={`${
        isDark
          ? "bg-pink-400/15 border border-pink-400/25 hover:bg-pink-400/20"
          : "bg-pink-400/15 border border-gray-400/15 hover:bg-pink-300/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-pink-400/30" : "bg-pink-700/40"
        } rounded-md xl:rounded-lg`}
      >
        <MessageCircle width={25} height={25} className="text-pink-300" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Caption Generator</p>
        <p className="text-base md:text-2xl lg:text-base">
          Generate Instagram captions with trending hashtags for maximum reach.
        </p>
      </div>
    </div>
  );
};

export default CaptiongeneratorCard;