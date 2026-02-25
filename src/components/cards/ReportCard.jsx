import { FileChartColumn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReportCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/report")}
      className={`${
        isDark
          ? "bg-yellow-500/10 border border-yellow-500/25 hover:bg-yellow-500/15"
          : "bg-yellow-500/10 border border-yellow-500/25 hover:bg-yellow-500/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-yellow-500/25" : "bg-yellow-700/40"
        } rounded-md xl:rounded-lg`}
      >
        <FileChartColumn width={25} height={25} className="text-yellow-300" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Report Writer</p>
        <p className="text-base md:text-2xl lg:text-base">
          Generate professional business reports with data visualization ready.
        </p>
      </div>
    </div>
  );
};

export default ReportCard;
