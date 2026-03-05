import { useState } from "react";
import ArticleCard from "@/components/cards/ArticleCard";
import BlogCard from "@/components/cards/BlogCard";
import EmailCard from "@/components/cards/EmailCard";
import LetterCard from "@/components/cards/LetterCard";
import NoticeCard from "@/components/cards/NoticeCard";
import ParagraphCard from "@/components/cards/ParagraphCard";
import ReportCard from "@/components/cards/ReportCard";
import StoryCard from "@/components/cards/StoryCard";
import EssayCard from "@/components/cards/EssayCard";
import CaptiongeneratorCard from "@/components/cards/CaptionGeneratorCard";
import CtageneratorCard from "@/components/cards/CtageneratorCard";
import FaqgeneratorCard from "@/components/cards/FaqgeneratorCard";
import GrammarcorrectorCard from "@/components/cards/GrammarCorrectorCard";
import HumanizerCard from "@/components/cards/HumanizerCard";
import OutlinegeneratorCard from "@/components/cards/OutlinegeneratorCard";
import ParaphraserCard from "@/components/cards/ParaphraserCard";
import ReadabilityCard from "@/components/cards/ReadabilityCard";
import ReplygeneratorCard from "@/components/cards/ReplyGeneratorCard";
import SeometadescriptiongeneratorCard from "@/components/cards/SeometadescriptionGeneratorCard";
import SeotagGeneratorCard from "@/components/cards/SeotagGeneratorCard";
import SlogangeneratorCard from "@/components/cards/SloganGeneratorCard";
import SummariserCard from "@/components/cards/SummariserCard";
import TitlegeneratorCard from "@/components/cards/TitleGeneratorCard";
import ToneshifterCard from "@/components/cards/ToneshifterCard";
import TweetgeneratorCard from "@/components/cards/TweetGeneratorCard";
import ImageGeneratorCard from "@/components/cards/ImageGeneratorCard";
import DashboardFaq from "@/components/component/DashboardFaq";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DetectorCard from "@/components/cards/DectectorCard";
import { useUser } from "@/context/UserContext";

const Dashboard = () => {
  const [isDark, setIsDark] = useState(true);
  const { user, setUser, isLoading } = useUser();

  const toolsSearchData = [
    {
      tool: <ArticleCard isDark={isDark} />,
      keywords: [
        "article writer",
        "ai article",
        "content writer",
        "long form content",
        "news article",
        "blog article",
        "web article",
        "article generator",
        "write article",
        "ai content",
        "professional article",
        "editorial",
      ],
    },
    {
      tool: <BlogCard isDark={isDark} />,
      keywords: [
        "blog writer",
        "ai blog",
        "blog generator",
        "post writer",
        "write blog",
        "content blog",
        "blog content",
        "blogging",
        "seo blog",
        "blog post",
        "website blog",
        "content creation",
      ],
    },
    {
      tool: <EmailCard isDark={isDark} />,
      keywords: [
        "email writer",
        "ai email",
        "email generator",
        "write email",
        "professional email",
        "business email",
        "marketing email",
        "cold email",
        "outreach email",
        "formal email",
        "email content",
      ],
    },
    {
      tool: <EssayCard isDark={isDark} />,
      keywords: [
        "essay writer",
        "ai essay",
        "essay generator",
        "write essay",
        "academic essay",
        "school essay",
        "college essay",
        "assignment writing",
        "research essay",
        "student essay",
      ],
    },
    {
      tool: <LetterCard isDark={isDark} />,
      keywords: [
        "letter writer",
        "ai letter",
        "letter generator",
        "write letter",
        "formal letter",
        "business letter",
        "personal letter",
        "official letter",
        "application letter",
        "cover letter",
      ],
    },
    {
      tool: <NoticeCard isDark={isDark} />,
      keywords: [
        "notice writer",
        "ai notice",
        "notice generator",
        "write notice",
        "official notice",
        "school notice",
        "office notice",
        "announcement notice",
        "public notice",
        "formal notice",
      ],
    },
    {
      tool: <ParagraphCard isDark={isDark} />,
      keywords: [
        "paragraph writer",
        "ai paragraph",
        "paragraph generator",
        "write paragraph",
        "short content",
        "content block",
        "paragraph creator",
        "text generator",
        "content snippet",
      ],
    },
    {
      tool: <ReportCard isDark={isDark} />,
      keywords: [
        "report writer",
        "ai report",
        "report generator",
        "write report",
        "business report",
        "project report",
        "technical report",
        "formal report",
        "academic report",
        "professional report",
      ],
    },
    {
      tool: <StoryCard isDark={isDark} />,
      keywords: [
        "story writer",
        "ai story",
        "story generator",
        "write story",
        "creative writing",
        "fiction",
        "short story",
        "novel writing",
        "narrative",
        "storytelling",
      ],
    },
    {
      tool: <CaptiongeneratorCard isDark={isDark} />,
      keywords: [
        "caption generator",
        "ai caption",
        "caption writer",
        "social media caption",
        "instagram caption",
        "post caption",
        "short caption",
        "photo caption",
        "content caption",
        "reel caption",
      ],
    },
    {
      tool: <CtageneratorCard isDark={isDark} />,
      keywords: [
        "cta generator",
        "call to action",
        "ai cta",
        "marketing cta",
        "conversion text",
        "button text",
        "sales copy",
        "click text",
        "engagement text",
        "action prompt",
      ],
    },
    {
      tool: <GrammarcorrectorCard isDark={isDark} />,
      keywords: [
        "grammar corrector",
        "ai grammar",
        "grammar checker",
        "fix grammar",
        "proofread",
        "grammar editor",
        "spelling checker",
        "language correction",
        "grammar fix",
      ],
    },
    {
      tool: <HumanizerCard isDark={isDark} />,
      keywords: [
        "ai humanizer",
        "humanize text",
        "make text natural",
        "rewrite human",
        "ai to human",
        "natural language",
        "human tone",
        "remove ai detection",
        "natural rewrite",
      ],
    },
    {
      tool: <ParaphraserCard isDark={isDark} />,
      keywords: [
        "paraphraser",
        "ai paraphrase",
        "rewrite text",
        "reword sentence",
        "content rewriter",
        "text spinner",
        "rephrase",
        "sentence rewrite",
        "content variation",
      ],
    },
    {
      tool: <DetectorCard isDark={isDark} />,
      keywords: [
        "ai detector",
        "ai content checker",
        "ai detection",
        "detect ai text",
        "ai scanner",
        "content authenticity",
        "human or ai",
        "plagiarism ai",
        "ai checker",
        "content detection",
      ],
    },
    {
      tool: <FaqgeneratorCard isDark={isDark} />,
      keywords: [
        "faq generator",
        "ai faq",
        "faq creator",
        "questions and answers",
        "help content",
        "support faq",
        "product faq",
        "service faq",
        "customer faq",
      ],
    },
    {
      tool: <ImageGeneratorCard isDark={isDark} />,
      keywords: [
        "image generator",
        "ai image",
        "ai art",
        "generate image",
        "text to image",
        "art generator",
        "picture generator",
        "ai photo",
        "visual creator",
        "graphic ai",
      ],
    },
    {
      tool: <OutlinegeneratorCard isDark={isDark} />,
      keywords: [
        "outline generator",
        "ai outline",
        "content outline",
        "blog outline",
        "article structure",
        "writing framework",
        "content planning",
        "topic outline",
        "story outline",
      ],
    },
    {
      tool: <ReadabilityCard isDark={isDark} />,
      keywords: [
        "readability improver",
        "improve readability",
        "simplify text",
        "easy to read",
        "clarity enhancer",
        "text simplifier",
        "content clarity",
        "reading level",
        "text improvement",
      ],
    },
    {
      tool: <ReplygeneratorCard isDark={isDark} />,
      keywords: [
        "reply generator",
        "ai reply",
        "response generator",
        "auto reply",
        "email reply",
        "message reply",
        "chat reply",
        "professional response",
        "customer reply",
        "quick response",
      ],
    },
    {
      tool: <SeotagGeneratorCard isDark={isDark} />,
      keywords: [
        "seo metatag generator",
        "meta tag generator",
        "ai seo tags",
        "html meta tags",
        "website seo tags",
        "meta keyword generator",
        "seo optimization",
        "search engine tags",
        "page seo",
      ],
    },
    {
      tool: <SeometadescriptiongeneratorCard isDark={isDark} />,
      keywords: [
        "seo meta description generator",
        "meta description generator",
        "ai meta description",
        "search snippet",
        "google description",
        "website description",
        "page description",
        "seo snippet",
        "search result description",
      ],
    },
    {
      tool: <SlogangeneratorCard isDark={isDark} />,
      keywords: [
        "slogan generator",
        "ai slogan",
        "tagline generator",
        "brand slogan",
        "marketing slogan",
        "catchy line",
        "advertising slogan",
        "brand tagline",
        "promo line",
      ],
    },
    {
      tool: <SummariserCard isDark={isDark} />,
      keywords: [
        "summarizer",
        "ai summary",
        "text summarizer",
        "content summary",
        "short summary",
        "tl;dr",
        "article summary",
        "document summary",
        "brief text",
        "summary generator",
      ],
    },
    {
      tool: <TitlegeneratorCard isDark={isDark} />,
      keywords: [
        "title generator",
        "ai title",
        "headline generator",
        "content title",
        "blog title",
        "article headline",
        "seo title",
        "catchy title",
        "post title",
        "subject line",
      ],
    },
    {
      tool: <TweetgeneratorCard isDark={isDark} />,
      keywords: [
        "tweet generator",
        "ai tweet",
        "twitter post",
        "x post",
        "tweet writer",
        "social tweet",
        "short post",
        "viral tweet",
        "twitter content",
        "microblog",
      ],
    },
    {
      tool: <ToneshifterCard isDark={isDark} />,
      keywords: [
        "tone shifter",
        "ai tone",
        "change tone",
        "rewrite tone",
        "formal to casual",
        "casual to formal",
        "professional tone",
        "friendly tone",
        "tone changer",
        "style changer",
      ],
    },
  ];

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const searchFunction = async () => {
    const query = searchInput.trim().toLowerCase();
    const results = toolsSearchData.filter((tool) =>
      tool.keywords.some((word) => word.toLowerCase().includes(query)),
    );
    setSearchResults(results);
  };

  const handleResetSearch = () => {
    setSearchInput(" ");
    setSearchResults("");
  };

  return (
    <div className="max-w-full w-full flex flex-col items-center gap-[1vw] text-white">
      <header className="max-w-full xl:w-[60%] w-[95%] flex flex-col items-center gap-[1vw] mt-[14vw] md:mt-[14vw] lg:mt-[6vw]">
        <section className="w-full flex flex-col items-center gap-[3vw] lg:gap-[2vw] relative">
          <div className="w-[70%] h-[10vh] bg-purple-400 blur-[20vw] rounded-full absolute"></div>
          <div
            className={`w-full flex flex-col items-center gap-[1vw] ${
              isDark
                ? "bg-white/5 border-gray-400/25"
                : "bg-white/15 border-gray-400/15"
            } blur-in-3xl border shadow-xl font-nunito rounded-xl py-[6vw] lg:py-[4vw] xl:py-[2vw] z-40`}
          >
            <div className="w-[92%] flex justify-start items-center">
              {user ? (
                <p className="text-3xl md:text-4xl lg:text-4xl xl:text-2xl font-nunito font-bold z-40 text-gray-400">
                  Hi! {user.username}, Welcome 👋 <br />{" "}
                  <span className="text-white">
                    What will you create today?
                  </span>
                </p>
              ) : (
                <p className="text-3xl md:text-4xl lg:text-4xl xl:text-2xl font-nunito font-bold z-40 text-gray-400">
                  Welcome 👋 <br />{" "}
                  <span className="text-white">
                    What will you create today?
                  </span>
                </p>
              )}
            </div>
            <div className="w-[92%] flex justify-start items-center"></div>
            <div className="w-[92%] flex justify-between items-center gap-[1vw]">
              <Input
                className={`${
                  isDark
                    ? "bg-black text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } flex-1 md:p-[4vw] lg:p-[3vw] xl:p-[1vw] xl:text-base lg:text-2xl md:text-3xl text-xl transition-all duration-200`}
                placeholder={"Search among AI tools . . ."}
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
              />
              <Button
                disabled={searchInput === " " || searchInput === ""}
                onClick={searchFunction}
                className={`w-[20%] font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/30 via-pink-500/40 to-orange-500/45 ${
                  isDark
                    ? "text-white hover:bg-white/20"
                    : "text-black hover:bg-black/20"
                } shadow-xl xl:text-base lg:text-2xl md:text-3xl text-xl md:p-[4vw] lg:p-[3vw] xl:p-[1vw] transition-all duration-200`}
              >
                Search
              </Button>
            </div>
          </div>
          {searchResults && (
            <div
              className={`w-full max-w-full flex flex-col items-center xl:gap-[1vw] gap-[2vw] ${
                isDark
                  ? "bg-white/5 border-gray-400/25"
                  : "bg-white/15 border-gray-400/15"
              } blur-in-3xl border shadow-xl font-nunito rounded-xl py-[6vw] lg:py-[4vw] xl:py-[2vw] xl:px-[2vw] px-[2vw] z-40`}
            >
              <p className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
                Your search results
              </p>
              <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-[2vw] xl:gap-[1vw]">
                {searchResults.map((res, i) => (
                  <div key={i}>{res.tool}</div>
                ))}
              </div>
              <Button
                onClick={handleResetSearch}
                variant={"seotag"}
                className={`w-full font-nunito cursor-pointer ${
                  isDark
                    ? "hover:bg-red-700/20 hover:text-white bg-gray-800/55 border-gray-600/80 text-white"
                    : "hover:bg-red-700/20 hover:text-black bg-white text-black"
                } transition-all duration-200 xl:text-base md:text-3xl text-xl md:p-[4vw] lg:p-[8vw] xl:p-[1vw] shadow-xl`}
              >
                Clear search
              </Button>
            </div>
          )}
        </section>
      </header>
      <main
        className={`max-w-full w-full xl:w-[60%] flex flex-col items-center gap-[6vw] lg:gap-[5vw] xl:gap-[2vw] xl:border ${
          isDark
            ? "bg-black/35 border-gray-300/25"
            : "bg-white/55 border-gray-400/15"
        } blur-in-3xl z-10 p-[4vw] xl:p-[2vw] xl:my-[1vw] xl:rounded-3xl font-nunito`}
      >
        <section className="w-full flex flex-col items-center font-nunito gap-[3vw] lg:gap-[3vw] xl:gap-[2vw]">
          <div className="w-full flex justify-start items-center">
            <h2 className="text-2xl md:text-4xl lg:text-3xl xl:text-2xl font-bold">
              Your Magiwriter AI Tools
            </h2>
          </div>
          <div className="max-w-full w-full flex flex-col gap-[3vw] xl:gap-[2vw]">
            <div className="max-w-full w-full flex flex-col items-start gap-[2vw] xl:gap-[1vw]">
              <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
                AI Content Creation Tools
              </h3>
              <div className="max-w-full w-full grid grid-cols-2 xl:grid-cols-3 gap-[2vw] xl:gap-[1vw]">
                <ArticleCard isDark={isDark} />
                <BlogCard isDark={isDark} />
                <EmailCard isDark={isDark} />
                <EssayCard isDark={isDark} />
                <LetterCard isDark={isDark} />
                <NoticeCard isDark={isDark} />
                <ParagraphCard isDark={isDark} />
                <ReportCard isDark={isDark} />
                <StoryCard isDark={isDark} />
              </div>
            </div>
            <div className="max-w-full w-full flex flex-col items-start gap-[2vw] xl:gap-[1vw]">
              <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
                AI Text Polishing Tools
              </h3>
              <div className="max-w-full w-full grid grid-cols-2 xl:grid-cols-3 gap-[2vw] xl:gap-[1vw]">
                <GrammarcorrectorCard isDark={isDark} />
                <HumanizerCard isDark={isDark} />
                <ParaphraserCard isDark={isDark} />
                <ReadabilityCard isDark={isDark} />
                <SummariserCard isDark={isDark} />
                <DetectorCard isDark={isDark} />
              </div>
            </div>
            <div className="max-w-full w-full flex flex-col items-start gap-[2vw] xl:gap-[1vw]">
              <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
                AI Social & Marketing Generators
              </h3>
              <div className="max-w-full w-full grid grid-cols-2 xl:grid-cols-3 gap-[2vw] xl:gap-[1vw]">
                <CaptiongeneratorCard isDark={isDark} />
                <CtageneratorCard isDark={isDark} />
                <ReplygeneratorCard isDark={isDark} />
                <SlogangeneratorCard isDark={isDark} />
                <TitlegeneratorCard isDark={isDark} />
                <TweetgeneratorCard isDark={isDark} />
              </div>
            </div>
            <div className="max-w-full w-full flex flex-col items-start gap-[2vw] xl:gap-[1vw]">
              <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
                AI SEO & Structure Tools
              </h3>
              <div className="max-w-full w-full grid grid-cols-2 xl:grid-cols-3 gap-[2vw] xl:gap-[1vw]">
                <FaqgeneratorCard isDark={isDark} />
                <OutlinegeneratorCard isDark={isDark} />
                <SeometadescriptiongeneratorCard isDark={isDark} />
                <SeotagGeneratorCard isDark={isDark} />
                <ToneshifterCard isDark={isDark} />
              </div>
            </div>
            <div className="max-w-full w-full flex flex-col items-start gap-[2vw] xl:gap-[1vw]">
              <h3 className="text-xl md:text-3xl lg:text-2xl xl:text-xl font-semibold">
                AI Image Generation Tools
              </h3>
              <div className="max-w-full w-full grid grid-cols-2 xl:grid-cols-3 gap-[2vw] xl:gap-[1vw]">
                <ImageGeneratorCard isDark={isDark} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-full w-full mt-[10vw]">
        <DashboardFaq />
      </div>
    </div>
  );
};

export default Dashboard;
