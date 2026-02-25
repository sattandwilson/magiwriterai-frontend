import { CheckCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GrammarcorrectorCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/grammar/corrector")}
      className={`${
        isDark
          ? "bg-lime-500/10 border border-lime-500/20 hover:bg-lime-500/15"
          : "bg-lime-500/10 border border-lime-500/20 hover:bg-lime-500/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-lime-500/25" : "bg-lime-500/40"
        } rounded-md xl:rounded-lg`}
      >
          <CheckCheck width={25} height={25} className="text-lime-400" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Grammar Corrector</p>
        <p className="text-base md:text-2xl lg:text-base">
          Fix grammar, spelling, and punctuation errors instantly with 99% accuracy.
        </p>
      </div>
    </div>
  );
};

export default GrammarcorrectorCard;