import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, UserCircle } from "lucide-react";
import { AnimatedGradientText } from "../ui/animated-gradient-text";
import { ChevronDown } from "lucide-react";
import { FileText } from "lucide-react";
import { SquarePen } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { MousePointerClick } from "lucide-react";
import { Mail } from "lucide-react";
import { ScrollText } from "lucide-react";
import { MessageCircleQuestion } from "lucide-react";
import { CheckCheck } from "lucide-react";
import { MailOpen } from "lucide-react";
import { Megaphone } from "lucide-react";
import { ListTree } from "lucide-react";
import { LucideTextAlignStart } from "lucide-react";
import { MessageSquareMore } from "lucide-react";
import { Shuffle } from "lucide-react";
import { Glasses } from "lucide-react";
import { FileChartColumn } from "lucide-react";
import { Search } from "lucide-react";
import { Tags } from "lucide-react";
import { Sparkles } from "lucide-react";
import { BookOpen } from "lucide-react";
import { ListCheck } from "lucide-react";
import { TextSearch } from "lucide-react";
import { Type } from "lucide-react";
import { AudioLines } from "lucide-react";
import { Bird } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { ShinyButton } from "../ui/shiny-button";
import RegularNavCard from "../cards/navcards/regular";
import ImageGenCard from "../cards/navcards/ImageGen";
import { useNavigate } from "react-router-dom";

const cards = {
  contentCreationCards: [
    {
      name: "AI Article Writer",
      description:
        "Generate SEO-optimized long-form articles that rank on Google in minutes.",
      endpoint: "/article",
      Icon: FileText,
      bgColor: "bg-fuchsia-400/10",
      borderColor: "border-fuchsia-400/20",
      hoverColor: "bg-fuchsia-400/15",
      iconBgColor: "bg-fuchsia-300/20",
      iconColor: "text-fuchsia-400",
    },
    {
      name: "AI Blog Writer",
      description:
        "Create engaging blog posts tailored to your audience and niche.",
      endpoint: "/blog",
      Icon: SquarePen,
      bgColor: "bg-blue-400/15",
      borderColor: "border-blue-400/25",
      hoverColor: "bg-blue-400/20",
      iconBgColor: "bg-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      name: "AI Email Writer",
      description:
        "Craft professional and personalized emails for any occasion.",
      endpoint: "/email",
      Icon: Mail,
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20",
      hoverColor: "bg-green-400/15",
      iconBgColor: "bg-green-500/30",
      iconColor: "text-green-400",
    },
    {
      name: "AI Essay Writer",
      description:
        "Generate well-structured essays on various topics with ease.",
      endpoint: "/essay",
      Icon: ScrollText,
      bgColor: "bg-orange-300/10",
      borderColor: "border-orange-300/20",
      hoverColor: "bg-orange-300/15",
      iconBgColor: "bg-orange-500/25",
      iconColor: "text-orange-300",
    },
    {
      name: "AI Letter Writer",
      description:
        "Compose formal and informal letters for all your communication needs.",
      endpoint: "/letter",
      Icon: MailOpen,
      bgColor: "bg-stone-400/10",
      borderColor: "border-stone-400/25",
      hoverColor: "bg-stone-400/15",
      iconBgColor: "bg-stone-400/30",
      iconColor: "text-stone-300",
    },
    {
      name: "AI Notice Writer",
      description: "Create clear and concise notices for any purpose.",
      endpoint: "/notice",
      Icon: Megaphone,
      bgColor: "bg-red-400/10",
      borderColor: "border-red-400/25",
      hoverColor: "bg-red-400/15",
      iconBgColor: "bg-red-400/30",
      iconColor: "text-red-300",
    },
    {
      name: "AI Paragraph Writer",
      description:
        "Generate coherent and contextually relevant paragraphs quickly.",
      endpoint: "/paragraph",
      Icon: LucideTextAlignStart,
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/25",
      hoverColor: "bg-cyan-400/15",
      iconBgColor: "bg-cyan-400/30",
      iconColor: "text-cyan-300",
    },
    {
      name: "AI Report Writer",
      description:
        "Produce detailed and structured reports on various subjects.",
      endpoint: "/report",
      Icon: FileChartColumn,
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/25",
      hoverColor: "bg-yellow-400/15",
      iconBgColor: "bg-yellow-400/30",
      iconColor: "text-yellow-300",
    },
    {
      name: "AI Story Writer",
      description:
        "Craft captivating stories with engaging plots and characters.",
      endpoint: "/story",
      Icon: BookOpen,
      bgColor: "bg-indigo-400/10",
      borderColor: "border-indigo-400/25",
      hoverColor: "bg-indigo-400/15",
      iconBgColor: "bg-indigo-400/30",
      iconColor: "text-indigo-300",
    },
  ],
  textPolishingCards: [
    {
      name: "AI Grammar Corrector",
      description:
        "Enhance your text with accurate grammar and spelling corrections.",
      endpoint: "/grammar/corrector",
      Icon: CheckCheck,
      bgColor: "bg-lime-400/10",
      borderColor: "border-lime-400/25",
      hoverColor: "bg-lime-400/15",
      iconBgColor: "bg-lime-400/30",
      iconColor: "text-lime-300",
    },
    {
      name: "AI Humanizer",
      description:
        "Transform AI content into undetectable human-written text that passes all checks.",
      endpoint: "/humanizer",
      Icon: UserCircle,
      bgColor: "bg-slate-400/10",
      borderColor: "border-slate-400/25",
      hoverColor: "bg-slate-400/15",
      iconBgColor: "bg-slate-400/30",
      iconColor: "text-slate-300",
    },
    {
      name: "AI Paraphraser",
      description:
        "Rephrase your content while maintaining the original meaning and context.",
      endpoint: "/paraphraser",
      Icon: Shuffle,
      bgColor: "bg-rose-400/10",
      borderColor: "border-rose-400/25",
      hoverColor: "bg-rose-400/15",
      iconBgColor: "bg-rose-400/30",
      iconColor: "text-rose-300",
    },
    {
      name: "AI Readability Improver",
      description:
        "Improve the clarity and readability of your text for better engagement.",
      endpoint: "/readability/improver",
      Icon: Glasses,
      bgColor: "bg-lime-400/10",
      borderColor: "border-lime-400/25",
      hoverColor: "bg-lime-400/15",
      iconBgColor: "bg-lime-400/30",
      iconColor: "text-lime-300",
    },
    {
      name: "AI Summariser",
      description:
        "Condense lengthy texts into concise summaries without losing key information.",
      endpoint: "/summarise",
      Icon: ListCheck,
      bgColor: "bg-violet-400/10",
      borderColor: "border-violet-400/25",
      hoverColor: "bg-violet-400/15",
      iconBgColor: "bg-violet-400/30",
      iconColor: "text-violet-300",
    },
    {
      name: "AI Detector",
      description:
        "Detects whether content is human-written or AI-generated, scoring from 0 (green, fully human) to 100 (red, fully AI).",
      endpoint: "/detector",
      Icon: TextSearch,
      bgColor: "bg-blue-400/15",
      borderColor: "border-blue-400/30",
      hoverColor: "bg-blue-400/20",
      iconBgColor: "bg-blue-400/30",
      iconColor: "text-blue-300",
    },
  ],
  socialMarketingCards: [
    {
      name: "AI Caption Generator",
      description:
        "Create catchy and relevant captions for your social media posts.",
      endpoint: "/caption",
      Icon: MessageCircle,
      bgColor: "bg-pink-400/10",
      borderColor: "border-pink-400/25",
      hoverColor: "bg-pink-400/15",
      iconBgColor: "bg-pink-400/30",
      iconColor: "text-pink-300",
    },
    {
      name: "AI CTA Generator",
      description:
        "Generate compelling calls-to-action to boost conversions and engagement.",
      endpoint: "/cta",
      Icon: MousePointerClick,
      bgColor: "bg-zinc-400/10",
      borderColor: "border-zinc-400/25",
      hoverColor: "bg-zinc-400/15",
      iconBgColor: "bg-zinc-400/30",
      iconColor: "text-zinc-300",
    },
    {
      name: "AI Reply Generator",
      description:
        "Craft thoughtful and engaging replies for your social media interactions.",
      endpoint: "/reply",
      Icon: MessageSquareMore,
      bgColor: "bg-gray-400/10",
      borderColor: "border-gray-400/25",
      hoverColor: "bg-gray-400/15",
      iconBgColor: "bg-gray-400/30",
      iconColor: "text-gray-300",
    },
    {
      name: "AI Slogan Generator",
      description:
        "Develop memorable slogans that effectively represent your brand.",
      endpoint: "/slogan",
      Icon: Sparkles,
      bgColor: "bg-neutral-400/10",
      borderColor: "border-neutral-400/25",
      hoverColor: "bg-neutral-400/15",
      iconBgColor: "bg-neutral-400/30",
      iconColor: "text-neutral-300",
    },
    {
      name: "AI Title Generator",
      description:
        "Create attention-grabbing titles for your content that drive clicks.",
      endpoint: "/title",
      Icon: Type,
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/25",
      hoverColor: "bg-purple-400/15",
      iconBgColor: "bg-purple-400/30",
      iconColor: "text-purple-300",
    },
    {
      name: "AI Tweet Generator",
      description: "Compose engaging tweets that resonate with your audience.",
      endpoint: "/tweet",
      Icon: Bird,
      bgColor: "bg-sky-400/10",
      borderColor: "border-sky-400/25",
      hoverColor: "bg-sky-400/15",
      iconBgColor: "bg-sky-400/30",
      iconColor: "text-sky-300",
    },
  ],
  seoStructureCards: [
    {
      name: "AI FAQ Generator",
      description:
        "Generate relevant frequently asked questions to enhance your content.",
      endpoint: "/faq",
      Icon: MessageCircleQuestion,
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/25",
      hoverColor: "bg-amber-400/15",
      iconBgColor: "bg-amber-400/30",
      iconColor: "text-amber-300",
    },
    {
      name: "AI Outline Generator",
      description:
        "Create structured outlines to organize your content effectively.",
      endpoint: "/outline",
      Icon: ListTree,
      bgColor: "bg-sky-400/10",
      borderColor: "border-sky-400/25",
      hoverColor: "bg-sky-400/15",
      iconBgColor: "bg-sky-400/30",
      iconColor: "text-sky-300",
    },
    {
      name: "AI SEO Meta Description Generator",
      description:
        "Craft SEO-friendly meta descriptions to improve your search engine rankings.",
      endpoint: "/seometadescription",
      Icon: Search,
      bgColor: "bg-teal-400/10",
      borderColor: "border-teal-400/25",
      hoverColor: "bg-teal-400/15",
      iconBgColor: "bg-teal-400/30",
      iconColor: "text-teal-300",
    },
    {
      name: "AI SEO Tag Generator",
      description:
        "Generate relevant SEO tags to boost your content's visibility online.",
      endpoint: "/seotag",
      Icon: Tags,
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/25",
      hoverColor: "bg-amber-400/15",
      iconBgColor: "bg-amber-400/30",
      iconColor: "text-amber-300",
    },
    {
      name: "AI Tone Shifter",
      description:
        "Adjust the tone of your content to suit different audiences and purposes.",
      endpoint: "/toneshift",
      Icon: AudioLines,
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/25",
      hoverColor: "bg-emerald-400/15",
      iconBgColor: "bg-emerald-400/30",
      iconColor: "text-emerald-300",
    },
  ],
};

const Navbar = () => {
  const { user, setUser, isLoading } = useUser();
  const [scrolled, setScrolled] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSignin = () => {
    window.location.href = "http://localhost:5001/auth/google";
  };

  return (
    <nav
      className={`
        max-w-screen fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        ${
          scrolled || showTools
            ? "backdrop-blur-md bg-white/10 shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-full lg:h-16 flex lg:justify-around justify-between items-center my-[2vw] mx-[2vw] lg:my-0">
        <div className="flex justify-left items-center">
          <img
            onClick={() => navigate(`${user ? "/dashboard" : "/"}`)}
            className="xl:w-[1.5vw] lg:w-[4vw] w-[7vw] xl:h-[1.5vw] lg:h-[4vw] h-[7vw] ml-[1vw] lg:ml-0 lg:mr-[0.5vw] cursor-pointer"
            src="magiwriter_icon.png"
            alt="magiwriter-ai logo"
          />
          <p
            onClick={() => navigate(`${user ? "/dashboard" : "/"}`)}
            className="hidden lg:block xl:font-bold font-semibold lg:text-xl text-base text-white cursor-pointer"
          >
            Magiwriter AI
          </p>
          <p className="ml-[0.5vw]">Beta</p>
        </div>
        <div className="flex justify-center items-center xl:gap-[1vw] gap-[3vw]">
          <button
            onClick={() => setShowTools((prev) => !prev)}
            className={`flex justify-center items-center gap-[1vh] cursor-pointer outline-none border-none`}
          >
            <AnimatedGradientText
              speed={1}
              className="text-xl md:text-4xl lg:text-2xl xl:text-xl font-bold"
            >
              AI Tools
            </AnimatedGradientText>
            <ChevronDown
              className={`text-white ${
                showTools ? "rotate-180" : "rotate-0"
              } transition-all duration-200 md:w-[5vw] md:h-[5vw] lg:w-[1.5vw] lg:h-[1.5vw]`}
              width={20}
              height={20}
            />
          </button>
          {user ? (
            <div className="flex items-center gap-[2vw] xl:gap-[1vw] font-nunito">
              <Popover>
                <PopoverTrigger>
                  {user.profileImageUrl ? (
                    <img
                      className="w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[1.7vw] xl:h-[1.7vw] rounded-full cursor-pointer"
                      src={user.profileImageUrl || User}
                      alt="magiwriter-user-profile-image"
                    />
                  ) : (
                    <UserCircle
                      className={
                        "w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[1.7vw] xl:h-[1.7vw] cursor-pointer"
                      }
                    />
                  )}
                </PopoverTrigger>
                <PopoverContent
                  className={`p-0 border-none ${
                    isDark ? "bg-black text-white" : "bg-white text-black"
                  }`}
                >
                  <Card
                    className={`border-none shadow-none font-nunito ${
                      isDark ? "bg-black text-white" : "bg-white text-black"
                    }`}
                  >
                    <CardHeader
                      className={"flex flex-col items-center gap-[1vw]"}
                    >
                      <CardTitle>Profile</CardTitle>
                      <CardDescription>{user.username}</CardDescription>
                    </CardHeader>
                    <CardContent
                      className={"flex flex-col items-center gap-[1vw]"}
                    >
                      <div>
                        <p>{user.email}</p>
                      </div>
                      <div className="w-full flex flex-col items-center gap-[0.5vw]">
                        <img
                          className="w-[8vw] h-[8vw] lg:w-[4vw] lg:h-[4vw] xl:w-[2vw] xl:h-[2vw] rounded-full"
                          src="wordpress-logo.jpg"
                          alt="wordpress-logo"
                        />
                        <AnimatedGradientText
                          speed={1}
                          className="text-lg md:text-3xl lg:text-xl xl:text-lg font-bold text-center"
                        >
                          WordPress connection is coming soon!
                        </AnimatedGradientText>
                      </div>
                    </CardContent>
                  </Card>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <ShinyButton
              onClick={handleSignin}
              className={`group relative mx-auto flex items-center justify-center rounded-md lg:rounded-lg py-1.5 cursor-pointer ${
                scrolled || showTools ? "bg-transparent" : "bg-white/15"
              } text-xs md:text-3xl lg:text-base lg:mr-0`}
            >
              Get started for free
            </ShinyButton>
          )}
        </div>
      </div>
      <div
        className={`${
          showTools
            ? "mx-auto w-full py-[5vw] lg:py-[5vw] xl:py-[2vw] h-[95vh] z-50 overflow-y-scroll flex flex-col gap-[5vw] xl:gap-[2vw] items-center border-t border-t-gray-700 bg-gray-950/90 fade-in"
            : "hidden"
        }`}
      >
        <div className="w-[90%] xl:w-[95%] flex flex-col items-start gap-[2vw] xl:gap-[1vw] text-white">
          <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
            AI Content Creation Tools
          </h3>
          <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-[5vw] lg:gap-[3vw] xl:gap-[1vw]">
            {cards.contentCreationCards.map((card, i) => (
              <RegularNavCard
                key={i}
                name={card.name}
                description={card.description}
                themeColor={card.themeColor}
                endpoint={card.endpoint}
                setShowTools={setShowTools}
                Icon={card.Icon}
                bgColor={card.bgColor}
                hoverColor={card.hoverColor}
                borderColor={card.borderColor}
                iconBgColor={card.iconBgColor}
                iconColor={card.iconColor}
              />
            ))}
          </div>
        </div>
        <div className="w-[90%] xl:w-[95%] flex flex-col items-start gap-[2vw] xl:gap-[1vw] text-white">
          <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
            AI Text Polishing Tools
          </h3>
          <div className=" lg:w-full grid grid-cols-2 xl:grid-cols-4 gap-[5vw] lg:gap-[3vw] xl:gap-[1vw]">
            {cards.textPolishingCards.map((card, i) => (
              <RegularNavCard
                key={i}
                name={card.name}
                description={card.description}
                themeColor={card.themeColor}
                endpoint={card.endpoint}
                setShowTools={setShowTools}
                Icon={card.Icon}
                bgColor={card.bgColor}
                hoverColor={card.hoverColor}
                borderColor={card.borderColor}
                iconBgColor={card.iconBgColor}
                iconColor={card.iconColor}
              />
            ))}
          </div>
        </div>
        <div className="w-[90%] xl:w-[95%] flex flex-col items-start gap-[2vw] xl:gap-[1vw] text-white">
          <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
            AI Social & Marketing Generators
          </h3>
          <div className=" grid grid-cols-2 xl:grid-cols-4 gap-[5vw] lg:gap-[3vw] xl:gap-[1vw]">
            {cards.socialMarketingCards.map((card, i) => (
              <RegularNavCard
                key={i}
                name={card.name}
                description={card.description}
                endpoint={card.endpoint}
                setShowTools={setShowTools}
                Icon={card.Icon}
                bgColor={card.bgColor}
                hoverColor={card.hoverColor}
                borderColor={card.borderColor}
                iconBgColor={card.iconBgColor}
                iconColor={card.iconColor}
              />
            ))}
          </div>
        </div>
        <div className="w-[90%] xl:w-[95%] flex flex-col items-start gap-[2vw] xl:gap-[1vw] text-white">
          <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
            AI SEO & Structure Tools
          </h3>
          <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-[5vw] lg:gap-[3vw] xl:gap-[1vw]">
            {cards.seoStructureCards.map((card, i) => (
              <RegularNavCard
                key={i}
                name={card.name}
                description={card.description}
                themeColor={card.themeColor}
                endpoint={card.endpoint}
                setShowTools={setShowTools}
                Icon={card.Icon}
                bgColor={card.bgColor}
                hoverColor={card.hoverColor}
                borderColor={card.borderColor}
                iconBgColor={card.iconBgColor}
                iconColor={card.iconColor}
              />
            ))}
          </div>
        </div>
        <div className="w-[90%] xl:w-[95%] flex flex-col items-start gap-[2vw] xl:gap-[1vw] text-white">
          <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
            AI Image Generation Tools
          </h3>
          <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-[5vw] lg:gap-[3vw] xl:gap-[1vw]">
            <ImageGenCard isDark={isDark} setShowTools={setShowTools} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
