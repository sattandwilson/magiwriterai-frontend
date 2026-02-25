import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({isDark}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/article")}
      className={`${isDark ? "bg-fuchsia-400/10 border border-fuchsia-400/20 hover:bg-fuchsia-400/15" : "bg-white border border-fuchsia-400/20 hover:bg-fuchsia-400/5"} flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${isDark ? "bg-fuchsia-300/20" : "bg-fuchsia-700/40"} rounded-md xl:rounded-lg`}>
        <FileText width={25} height={25} className="text-fuchsia-400" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Article Writer</p>
        <p className="text-base md:text-2xl lg:text-base">Generate SEO-optimized long-form articles that rank on Google in minutes.</p>
      </div>
    </div>
  );
};

export default ArticleCard;
