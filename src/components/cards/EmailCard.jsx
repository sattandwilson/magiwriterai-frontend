import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmailCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/email")}
      className={`${
        isDark
          ? "bg-green-400/10 border border-green-400/20 hover:bg-green-400/15"
          : "bg-green-400/10 border border-green-400/20 hover:bg-green-300/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-green-500/30" : "bg-green-700/40"
        } rounded-md xl:rounded-lg`}
      >
        <Mail width={25} height={25} className="text-green-400" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Email Writer</p>
        <p className="text-base md:text-2xl lg:text-base">
          Craft high-converting email copy that boosts open rates and click-throughs.
        </p>
      </div>
    </div>
  );
};

export default EmailCard;
