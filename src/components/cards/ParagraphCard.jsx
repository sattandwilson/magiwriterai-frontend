import { LucideTextAlignStart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ParagraphCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/paragraph")}
      className={`${
        isDark
          ? "bg-cyan-500/10 border border-cyan-500/25 hover:bg-cyan-500/15"
          : "bg-cyan-500/10 border border-cyan-500/25 hover:bg-cyan-300/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-cyan-500/30" : "bg-cyan-700/40"
        } rounded-md xl:rounded-lg`}
      >
        <LucideTextAlignStart width={25} height={25} className="text-cyan-400" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Paragraph Writer</p>
        <p className="text-base md:text-2xl lg:text-base">
          Build compelling paragraphs with perfect flow and readability scores.
        </p>
      </div>
    </div>
  );
};

export default ParagraphCard;
