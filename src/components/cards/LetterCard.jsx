import { MailOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LetterCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/letter")}
      className={`${
        isDark
          ? "bg-stone-400/10 border border-stone-400/25 hover:bg-stone-400/15"
          : "bg-stone-400/10 border border-stone-400/25 hover:bg-stone-500/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-stone-400/30" : "bg-stone-700/40"
        } rounded-md xl:rounded-lg`}
      >
        <MailOpen width={25} height={25} className="text-stone-300" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Letter Writer</p>
        <p className="text-base md:text-2xl lg:text-base">
          Write professional business letters and formal correspondence effortlessly.
        </p>
      </div>
    </div>
  );
};

export default LetterCard;
