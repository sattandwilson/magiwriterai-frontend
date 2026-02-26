import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import toast from "react-hot-toast";

const titleGeneratorFaqs = [
  {
    question: "What is an AI Title Generator?",
    answer:
      "An AI Title Generator is an online tool that creates compelling, keyword-optimized titles based on your topic and target keywords. It helps improve click-through rates, SEO performance, and content discoverability.",
  },
  {
    question: "How does the AI Title Generator work?",
    answer:
      "You enter your topic and relevant keywords, and the AI analyzes them to generate high-quality, search-engine-friendly titles that align with user intent and ranking factors.",
  },
  {
    question: "Who should use an AI Title Generator?",
    answer:
      "This tool is ideal for bloggers, marketers, SEO professionals, content creators, business owners, students, and anyone who wants to write better headlines and improve organic traffic.",
  },
  {
    question: "Can I use the generated titles for SEO and marketing?",
    answer:
      "Yes, the generated titles are optimized for SEO, marketing, advertising, blogs, landing pages, social media, email subject lines, and content campaigns across all industries.",
  },
  {
    question: "Does the AI Title Generator include SEO keywords automatically?",
    answer:
      "Yes, the tool intelligently incorporates your target keywords into the titles while maintaining natural language, readability, and search engine optimization best practices.",
  },
  {
    question: "Will the titles sound natural or robotic?",
    answer:
      "The AI is trained to generate natural, human-like titles that follow proven copywriting and headline optimization frameworks, ensuring professional and engaging output.",
  },
  {
    question: "Can I regenerate titles multiple times?",
    answer:
      "Yes, you can generate multiple title variations using the same topic and keywords to compare options and select the highest-performing headline.",
  },
  {
    question: "Is this tool useful for improving click-through rate (CTR)?",
    answer:
      "Absolutely. The AI Title Generator focuses on clarity, emotional appeal, keyword placement, and user intent to maximize click-through rates and engagement.",
  },
  {
    question: "Is my data safe when using the AI Title Generator?",
    answer:
      "Yes, your inputs and generated titles are processed securely and privately. The tool does not store or share your data.",
  },
  {
    question:
      "Why should I use an AI Title Generator instead of writing titles manually?",
    answer:
      "Using an AI Title Generator saves time, reduces guesswork, improves SEO accuracy, increases consistency, and helps you create high-converting titles at scale.",
  },
];

const TitleGeneratorPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");

  const [titleLoading, setTitleLoading] = useState(false);
  const [titleResponse, setTitleResponse] = useState("");
  const handleTitleGenerate = async () => {
    if(!topic || topic.trim() === "" || !keywords || keywords.trim() === "") {
      toast.error("Please enter topic and keywords to generate title!");
      return;
    }
    try {
      setTitleLoading(true);
      const res = await fetch("https://www.magiwriter.com/api/generate/title", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ topic, keywords }),
      });
      const response = await res.json();
      setTitleResponse(response.title);
    } catch (error) {
      console.error("Error generating Title!:", error);
    } finally {
      setTitleLoading(false);
    }
  };

  const handleResetFields = () => {
    setTopic("");
    setKeywords("");
  };

  return (
    <div className="max-w-screen flex flex-col items-center gap-[3vw] mt-[1vw] text-white">
      <header className="w-full flex flex-col items-center gap-[1vw] mt-[14vw] md:mt-[14vw] lg:mt-[8vw]">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-4xl font-nunito">
          <AuroraText
            colors={[
              "#60efff",
              "#0061ff",
              "#40c9ff",
              "#cbff49",
              "#ff8989",
              "#fff95b",
            ]}
            speed={1.5}
          >
            AI Title Generator
          </AuroraText>
        </h1>
        <h2 className="max-w-[60%] text-center font-semibold text-2xl md:text-4xl lg:text-2xl font-nunito text-gray-300">
          Create fully optimized, human-quality blog blogs in seconds using
          structured inputs for keywords, tone, audience, SEO, images, tables,
          FAQs, and more—no prompt writing required.
        </h2>
      </header>
      <section className="w-full flex flex-col items-center gap-[1vw]">
        <p className="max-w-[40%] text-center text-xl md:text-3xl lg:text-2xl font-nunito text-gray-100">
          Want to know how you could leverage Magiwriter's AI Blog Writer to
          generate top class industry grade blogs with best SEO techniques? Look
          no further, just check down bellow.
        </p>
        <ShinyButton onClick={()=> guideRef.current.scrollIntoView({behavior: "smooth"})} className={"bg-white/15 md:text-4xl lg:text-sm m-0"}>
          Check Full Guide
        </ShinyButton>
      </section>
      <main
        className={`w-[95%] xl:w-[60%] flex flex-col items-center gap-[6vw] lg:gap-[5vw] xl:gap-[2vw] border ${
          isDark
            ? "bg-black/35 border-gray-300/25"
            : "bg-white/55 border-gray-400/15"
        } blur-in-3xl z-10 p-[4vw] xl:p-[2vw] xl:my-[1vw] rounded-3xl font-nunito`}
      >
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label
              className={"text-xl md:text-3xl lg:text-base"}
              htmlFor="message"
            >
              Put the topic here
            </Label>
            <Textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Topic here..."
            />
          </div>
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label
              className={"text-xl md:text-3xl lg:text-base"}
              htmlFor="message"
            >
              Put keywords here
            </Label>
            <Textarea
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Keywords here..."
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <Button
            onClick={handleTitleGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate Title
          </Button>
          <Button
            onClick={handleResetFields}
            variant={"title"}
            className={`w-full font-nunito cursor-pointer ${
              isDark
                ? "hover:bg-red-700/20 hover:text-white bg-gray-800/55 border-gray-600/80 text-white"
                : "hover:bg-red-700/20 hover:text-black bg-white text-black"
            } transition-all duration-200 text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
          >
            Reset All Fields
          </Button>
        </section>
        {(titleLoading || titleResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={titleResponse}
            isLoading={titleLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            🏷️ Complete Guide to Using the AI Title Generator for Higher
            Click-Through Rates & SEO Performance
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Title Generator is built for{" "}
            <span className="font-bold">
              search engine optimization, content marketing, and click
              optimization
            </span>{" "}
            — without complex prompts. Simply enter your topic and keywords to
            generate{" "}
            <span className="font-bold">
              compelling, keyword-rich, and high-converting titles
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the topic and keywords fields</span>,
            how to use them effectively, and how they improve search visibility,
            click-through rate, content discoverability, and organic traffic.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧩 1. Topic
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the main subject or theme of your content.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Clearly describe your topic, such as “AI writing tools,” “fitness
              for beginners,” “email marketing strategies,” or “e-commerce SEO.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              contextually relevant, user-focused, and search-intent-aligned
              title generation.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔑 2. Keywords
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies the target SEO keywords you want included in your
              titles.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter primary and secondary keywords such as “best AI tools,” “SEO
              title generator,” “content marketing,” or “high-converting
              headlines.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Produces
              keyword-optimized, search-engine-friendly, and ranking-focused
              titles.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            📈 Why This Tool Improves Click-Through Rates, SEO & Content
            Performance
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Title Generator follows{" "}
            <span className="font-semibold text-white">
              proven SEO, copywriting, and headline optimization principles
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Search Visibility
              </span>{" "}
              – Creates titles optimized for organic rankings and
              discoverability
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Click-Through Rate
              </span>{" "}
              – Generates compelling headlines that drive more clicks
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">User Intent</span> –
              Aligns titles with search intent and audience needs
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Content Authority
              </span>{" "}
              – Builds topical relevance and trust with search engines
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern SEO, content marketing, and headline writing standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              On-page SEO and semantic keyword placement
            </li>
            <li className="text-2xl lg:text-base">
              Content marketing and blog headline frameworks
            </li>
            <li className="text-2xl lg:text-base">
              Advertising and conversion-focused title strategies
            </li>
            <li className="text-2xl lg:text-base">
              Search engine ranking and organic traffic optimization
            </li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Title Generation Results
          </h3>
          <p className="text-2xl lg:text-base">
            For maximum organic traffic, clicks, and search performance:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear, focused topics and intent-driven keywords
              </span>{" "}
              for higher relevance
            </li>
            <li className="text-2xl lg:text-base">
              Include{" "}
              <span className="font-semibold text-white">
                high-volume, low-competition SEO keywords
              </span>{" "}
              when possible
            </li>
            <li className="text-2xl lg:text-base">
              Optimize titles for{" "}
              <span className="font-semibold text-white">
                blogs, landing pages, ads, YouTube, and social media
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Test multiple titles to identify the{" "}
              <span className="font-semibold text-white">
                highest-performing headline
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                SEO-friendly language, power words, and emotional triggers
              </span>{" "}
              to improve ranking potential
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={titleGeneratorFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Title Generator and how it can transform your title generating game."
        />
      </section>
    </div>
  );
};

export default TitleGeneratorPage;
