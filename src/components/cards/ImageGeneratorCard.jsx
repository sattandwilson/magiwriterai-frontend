import { Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ImageGeneratorCard = ({ isDark }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/image")}
      className={`${
        isDark
          ? "bg-linear-to-r from-pink-400/35 via-orange-500/35 via-yellow-300/35 to-sky-300/40 border border-orange-400/20 hover:from-pink-400/40 hover:via-orange-500/40 hover:via-yellow-300/40 hover:to-sky-300/45"
          : "bg-orange-400/10 border border-orange-400/20 hover:bg-orange-400/5"
      } flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-color duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${
          isDark ? "bg-orange-400/30" : "bg-orange-400/40"
        } rounded-md xl:rounded-lg`}
      >
        <Image width={25} height={25} className="text-orange-300" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-xl md:text-2xl lg:text-xl xl:text-lg">AI Image Generator</p>
        <p className="text-base md:text-2xl lg:text-base">
          Transform AI content into undetectable human-written text that passes all checks.
        </p>
      </div>
    </div>
  );
};

export default ImageGeneratorCard;