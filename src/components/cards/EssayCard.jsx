import { ScrollText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EssayCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/essay")}
      className={`${
        isDark
          ? "bg-orange-300/10 border border-orange-300/20 hover:bg-orange-300/15"
          : "bg-orange-300/10 border border-orange-300/20 hover:bg-orange-300/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-orange-500/25" : "bg-orange-700/40"
        } rounded-md xl:rounded-lg`}
      >
        <ScrollText width={25} height={25} className="text-orange-300" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Essay Writer</p>
        <p className="text-base md:text-2xl lg:text-base">
          Produce well-structured academic essays with proper citations instantly.
        </p>
      </div>
    </div>
  );
};

export default EssayCard;
