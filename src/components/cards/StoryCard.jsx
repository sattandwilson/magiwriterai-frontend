import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StoryCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/story")}
      className={`${
        isDark
          ? "bg-indigo-500/15 border border-indigo-500/30 hover:bg-indigo-500/20"
          : "bg-indigo-500/15 border border-indigo-500/30 hover:bg-indigo-500/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-indigo-500/30" : "bg-indigo-700/40"
        } rounded-md xl:rounded-lg`}
      >
        <BookOpen width={25} height={25} className="text-indigo-400" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Story Writer</p>
        <p className="text-base md:text-2xl lg:text-base">
          Create captivating short stories and fiction with perfect narrative structure.
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
