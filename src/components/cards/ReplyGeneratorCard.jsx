import { MessageSquareMore } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReplygeneratorCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/reply")}
      className={`${
        isDark
          ? "bg-gray-400/15 border border-gray-400/25 hover:bg-gray-400/20"
          : "bg-gray-400/15 border border-gray-400/25 hover:bg-gray-400/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-gray-400/30" : "bg-gray-400/40"
        } rounded-md xl:rounded-lg`}
      >
        <MessageSquareMore width={25} height={25} className="text-gray-300" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Reply Generator</p>
        <p className="text-base md:text-2xl lg:text-base">
          Generate relevant social media comments and replies that build community.
        </p>
      </div>
    </div>
  );
};

export default ReplygeneratorCard;