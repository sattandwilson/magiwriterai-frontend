import { Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NoticeCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/notice")}
      className={`${
        isDark
          ? "bg-red-400/10 border border-red-400/25 hover:bg-red-400/15"
          : "bg-red-400/10 border border-red-400/25 hover:bg-red-300/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-red-500/25" : "bg-red-700/40"
        } rounded-md xl:rounded-lg`}
      >
        <Megaphone width={25} height={25} className="text-red-300" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Notice Writer</p>
        <p className="text-base md:text-2xl lg:text-base">
          Design attention-grabbing notices, announcements, and alerts that get read.
        </p>
      </div>
    </div>
  );
};

export default NoticeCard;
