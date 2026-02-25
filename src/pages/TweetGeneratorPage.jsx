import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import toast from "react-hot-toast";

const tweetGeneratorFaqs = [
  {
    question: "What is the AI Tweet Generator?",
    answer:
      "The AI Tweet Generator is an online tool that creates engaging, high-quality tweets from a single idea. It uses artificial intelligence to craft concise, relevant, and platform-optimized content for Twitter (X) users.",
  },
  {
    question: "How does the AI Tweet Generator work?",
    answer:
      "You simply enter your idea into the input field, and the AI analyzes it to generate a tweet that matches your intent, tone, and audience expectations, ensuring clarity, engagement, and shareability.",
  },
  {
    question: "Is the AI Tweet Generator free to use?",
    answer:
      "Yes, the AI Tweet Generator is completely free to use. You can generate unlimited tweets without any subscription or account requirements.",
  },
  {
    question: "Can I use the generated tweets for business or marketing?",
    answer:
      "Absolutely. The AI Tweet Generator is ideal for marketers, entrepreneurs, brands, influencers, and content creators who want to boost engagement, promote products, or grow their audience on Twitter.",
  },
  {
    question: "Does the AI Tweet Generator support hashtags and emojis?",
    answer:
      "Yes, the tool intelligently includes relevant hashtags and emojis when appropriate, helping improve reach, visibility, and engagement while keeping the tweet natural and professional.",
  },
  {
    question: "Will the generated tweets sound human or robotic?",
    answer:
      "The AI is trained to produce natural, human-like tweets that match real conversational patterns, ensuring your posts feel authentic and relatable rather than automated.",
  },
  {
    question: "Can I generate tweets for different topics and industries?",
    answer:
      "Yes, the AI Tweet Generator works across all niches, including business, tech, fitness, education, entertainment, finance, startups, and personal branding, adapting the tone and style to your idea.",
  },
  {
    question: "Is my input data stored or shared?",
    answer:
      "No, your ideas and generated tweets are not stored or shared. All inputs are processed securely and privately to protect user data and confidentiality.",
  },
  {
    question: "Can I regenerate or modify the tweet?",
    answer:
      "Yes, you can regenerate tweets multiple times using the same idea to explore different tones, formats, or styles until you find the perfect version.",
  },
  {
    question:
      "Why should I use an AI Tweet Generator instead of writing manually?",
    answer:
      "Using an AI Tweet Generator saves time, boosts creativity, ensures consistency, and helps you overcome writer’s block while producing high-performing tweets optimized for engagement and discoverability.",
  },
];

const TweetGeneratorPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [idea, setIdea] = useState("");

  const [tweetLoading, setTweetLoading] = useState(false);
  const [tweetResponse, setTweetResponse] = useState("");
  const handleTweetGenerate = async () => {
    if(!idea || idea.trim() === "") {
      toast.error("Please enter an idea to generate a tweet!");
      return;
    }
    try {
      setTweetLoading(true);
      const res = await fetch("http://localhost:5001/generate/tweet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({idea}),
      });
      const response = await res.json();
      setTweetResponse(response.tweet);
    } catch (error) {
      console.error("Error generating Tweet:", error);
    } finally {
      setTweetLoading(false);
    }
  };

  const handleResetFields = () => {
    setIdea("");
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
            AI Tweet Generator
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
            <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">
              Describe your idea or context to generate Tweet
            </Label>
            <Textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Describe here..."
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <Button
            onClick={handleTweetGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate Tweet
          </Button>
          <Button
            onClick={handleResetFields}
            variant={"outline"}
            className={`w-full font-nunito cursor-pointer ${
              isDark
                ? "hover:bg-red-700/20 hover:text-white bg-gray-800/55 border-gray-600/80 text-white"
                : "hover:bg-red-700/20 hover:text-black bg-white text-black"
            } transition-all duration-200 text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
          >
            Reset All Fields
          </Button>
        </section>
        {(tweetLoading || tweetResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={tweetResponse}
            isLoading={tweetLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            ❓ Complete Guide to Using the AI FAQ Generator for Better SEO &
            User Experience
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI FAQ Generator is built for{" "}
            <span className="font-bold">
              search engine optimization, content authority, and user trust
            </span>{" "}
            — without requiring complex prompts. Simply describe your topic to
            generate{" "}
            <span className="font-bold">
              clear, structured, and SEO-optimized frequently asked questions
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the FAQ topic field</span>, how to use
            it effectively, and how it improves organic traffic, engagement,
            featured snippets, and search rankings.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
      <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ❓ 1. FAQ Topic
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the subject or service your FAQs should cover.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Clearly describe your topic, such as “AI writing tools,” “SEO
              services,” “e-commerce returns,” or “mobile app onboarding.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Enables
              highly relevant, keyword-rich, and user-focused FAQ generation
              that improves discoverability and credibility.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            📈 Why This Tool Improves SEO, Rankings & User Trust
          </h3>
          <p className="text-2xl lg:text-base">
            This AI FAQ Generator follows{" "}
            <span className="font-semibold text-white">
              proven SEO and content marketing best practices
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Search Visibility
              </span>{" "}
              – Optimized FAQs that target long-tail and intent-based keywords
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Featured Snippets
              </span>{" "}
              – Structured answers designed for rich results and “People Also
              Ask”
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">User Experience</span>{" "}
              – Clear answers that reduce bounce rate and increase time on page
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Authority</span> –
              Builds topical relevance and trust with search engines and users
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern SEO, content strategy, and knowledge-base standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">On-page SEO and semantic keyword optimization</li>
            <li className="text-2xl lg:text-base">Structured data and FAQ schema readiness</li>
            <li className="text-2xl lg:text-base">Help center and support content frameworks</li>
            <li className="text-2xl lg:text-base">Conversion-focused informational content strategies</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI FAQ Generation Results
          </h3>
          <p className="text-2xl lg:text-base">
            For maximum organic traffic, visibility, and content performance:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear, specific topic descriptions
              </span>{" "}
              (e.g., “AI chatbot pricing,” “refund policy,” “SaaS onboarding”)
            </li>
            <li className="text-2xl lg:text-base">
              Focus on{" "}
              <span className="font-semibold text-white">
                user intent and real search queries
              </span>{" "}
              rather than generic descriptions
            </li>
            <li className="text-2xl lg:text-base">
              Include{" "}
              <span className="font-semibold text-white">
                SEO keywords and natural language phrasing
              </span>{" "}
              to improve ranking potential
            </li>
            <li className="text-2xl lg:text-base">
              Optimize FAQs for{" "}
              <span className="font-semibold text-white">
                landing pages, help centers, blogs, and product pages
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                structured, scannable, and schema-ready content
              </span>{" "}
              for better indexing and rich results
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={tweetGeneratorFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI FAQ Generator and how it can transform your FAQ game."
        />
      </section>
    </div>
  );
};

export default TweetGeneratorPage;
