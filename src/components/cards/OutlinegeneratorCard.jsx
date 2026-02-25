import { ListTree } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OutlinegeneratorCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/outline")}
      className={`${
        isDark
          ? "bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/15"
          : "bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-sky-500/30" : "bg-sky-500/40"
        } rounded-md xl:rounded-lg`}
      >
        <ListTree width={25} height={25} className="text-sky-400" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Outline Generator</p>
        <p className="text-base md:text-2xl lg:text-base">
         Build SEO-friendly content outlines with H1-H3 structure and keyword placement.
        </p>
      </div>
    </div>
  );
};

export default OutlinegeneratorCard;