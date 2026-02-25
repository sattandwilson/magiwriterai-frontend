import { Ripple } from "../ui/ripple";

const Loading = () => {
  return (
    <div className="max-w-full h-screen overflow-hidden bg-black">
      <div className="bg-black relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <p className="z-10 text-center text-6xl lg:text-5xl font-medium tracking-tighter whitespace-pre-wrap text-white">
        Magiwriter AI
      </p>
      <Ripple className={"w-full"} />
    </div>
    </div>
  );
};

export default Loading;
