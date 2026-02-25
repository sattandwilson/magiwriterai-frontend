import { useNavigate } from "react-router-dom";

const RegularNavCard = ({
  name,
  description,
  endpoint,
  setShowTools,
  Icon,
  bgColor,
  borderColor,
  hoverColor,
  iconBgColor,
  iconColor,
}) => {
  const navigate = useNavigate();
  const clickEvent = () => {
    setShowTools(false);
    navigate(endpoint);
  };
  return (
    <div
      onClick={clickEvent}
      className={`${bgColor} border ${borderColor} hover:${hoverColor}
          flex flex-col items-start gap-[1vw] xl:gap-[0.5vw] rounded-xl p-[2vw] xl:p-[1vw] shadow-lg cursor-pointer transition-all duration-200`}
    >
      <div
        className={`w-[8vw] h-[8vw] md:w-[6vw] md:h-[6vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] flex justify-center items-center ${iconBgColor} rounded-md xl:rounded-lg`}
      >
        <Icon width={25} height={25} className={`${iconColor} md:w-[4vw] md:h-[4vw] lg:w-[1.5vw] lg:h-[1.5vw]`} />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="font-bold text-lg md:text-3xl lg:text-xl xl:text-lg">{name}</p>
        <p className="text-base md:text-2xl lg:text-base xl:text-base">{description}</p>
      </div>
    </div>
  );
};

export default RegularNavCard;
