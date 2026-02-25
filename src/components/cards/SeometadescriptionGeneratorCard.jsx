import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SeometadescriptiongeneratorCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/seometadescription")}
      className={`${
        isDark
          ? "bg-teal-400/10 border border-teal-400/20 hover:bg-teal-400/15"
          : "bg-teal-400/10 border border-teal-400/20 hover:bg-teal-400/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-teal-400/25" : "bg-teal-400/40"
        } rounded-md xl:rounded-lg`}
      >
        <Search width={25} height={25} className="text-teal-300" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI SEO Meta Description Generator</p>
        <p className="text-base md:text-2xl lg:text-base">
          Write compelling 160-character meta descriptions with optimal CTR.
        </p>
      </div>
    </div>
  );
};

export default SeometadescriptiongeneratorCard;