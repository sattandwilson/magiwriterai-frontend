import { ListCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SummariserCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/summarise")}
      className={`${
        isDark
          ? "bg-violet-400/15 border border-violet-400/25 hover:bg-violet-400/20"
          : "bg-violet-400/15 border border-violet-400/25 hover:bg-violet-400/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-violet-400/35" : "bg-violet-400/40"
        } rounded-md xl:rounded-lg`}
      >
        <ListCheck width={25} height={25} className="text-violet-300" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Summariser</p>
        <p className="text-base md:text-2xl lg:text-base">
          Extract key points from long articles into concise, scannable summaries.
        </p>
      </div>
    </div>
  );
};

export default SummariserCard;