import { UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HumanizerCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/humanizer")}
      className={`${
        isDark
          ? "bg-slate-400/10 border border-slate-400/20 hover:bg-slate-400/15"
          : "bg-slate-400/10 border border-slate-400/20 hover:bg-slate-400/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-slate-400/30" : "bg-slate-400/40"
        } rounded-md xl:rounded-lg`}
      >
        <UserCircle width={25} height={25} className="text-slate-300" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Humanizer</p>
        <p className="text-base md:text-2xl lg:text-base">
          Transform AI content into undetectable human-written text that passes all checks.
        </p>
      </div>
    </div>
  );
};

export default HumanizerCard;