import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AuroraText } from "@/components/ui/aurora-text";
import FAQSection from "@/components/component/FAQSection";
import toast from "react-hot-toast";

const humanizerFAQs = [
  {
    question: "What is an AI Humanizer tool?",
    answer:
      "An AI Humanizer tool transforms robotic or AI-generated text into natural, human-like, and conversational content, improving readability, engagement, and authenticity.",
  },
  {
    question: "How does the AI Humanizer work?",
    answer:
      "The tool analyzes your input text and rewrites it using natural language patterns, emotional tone, and conversational flow while preserving the original meaning.",
  },
  {
    question: "Why should I use an AI Humanizer?",
    answer:
      "Using an AI Humanizer helps improve trust, engagement, and clarity in your content, making it ideal for blogs, marketing copy, emails, chatbots, and professional communication.",
  },
  {
    question: "Can this tool help content pass AI detection tools?",
    answer:
      "Yes, the AI Humanizer rewrites content to sound more human, which can reduce AI detection scores and improve content authenticity, depending on usage and platform policies.",
  },
  {
    question: "What types of content can I humanize?",
    answer:
      "You can humanize blog posts, social media captions, emails, chatbot responses, marketing copy, academic writing, business communication, and website content.",
  },
  {
    question: "Does the AI Humanizer preserve the original meaning?",
    answer:
      "Yes, the tool is designed to maintain the original intent, message, and context while improving tone, flow, and readability.",
  },
  {
    question: "Is the AI Humanizer suitable for SEO content?",
    answer:
      "Absolutely. Humanized content improves user engagement, dwell time, and readability, which positively impacts SEO rankings and search engine performance.",
  },
  {
    question: "Can I use this tool for professional and business writing?",
    answer:
      "Yes, it is ideal for professional emails, reports, proposals, customer support messages, and corporate communication that require a natural and polished tone.",
  },
  {
    question: "Is the AI Humanizer free to use?",
    answer:
      "Many versions of the AI Humanizer tool are available for free, allowing users to improve content quality without subscriptions or advanced writing skills.",
  },
  {
    question: "Who should use the AI Humanizer?",
    answer:
      "This tool is perfect for content creators, marketers, students, educators, business owners, freelancers, and anyone who wants more natural, human-like writing.",
  },
  {
    question: "Can I edit the humanized output?",
    answer:
      "Yes, you can freely review, edit, and refine the output to better match your voice, brand tone, and audience expectations.",
  },
  {
    question: "Does this tool improve content engagement and conversions?",
    answer:
      "Yes, human-like content increases trust, reader engagement, and conversion rates, making it more effective for marketing, sales, and communication.",
  },
];


const HumanizerPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [text, setText] = useState("");

  const [humanizeTextLoading, setHumanizeTextLoading] = useState(false);
  const [humanizeTextResponse, setHumanizeTextResponse] = useState("");
  const handleHumanizeTextGenerate = async () => {
    if(!text || text.trim() === "") {
      toast.error("Please fill in the text field!");
      return;
    }
    try {
      setHumanizeTextLoading(true);
      const res = await fetch("http://localhost:5001/generate/humanize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({text}),
      });
      const response = await res.json();
      setHumanizeTextResponse(response.humanizedText);
    } catch (error) {
      console.error("Error converting robotic text into human tone!:", error);
    } finally {
      setHumanizeTextLoading(false);
    }
  };

  const handleResetFields = () => {
    setText("");
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
            AI Humanizer
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
              className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">
              Paste your robotic text content and convert it into human's
              natural tone
            </Label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Write/paste here..."
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <Button
            onClick={handleHumanizeTextGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Humanize Text
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
        {(humanizeTextLoading || humanizeTextResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={humanizeTextResponse}
            isLoading={humanizeTextLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            🧑‍💬 Complete Guide to Using the AI Humanizer for Natural, Engaging
            & Human-Like Content
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Humanizer is built for{" "}
            <span className="font-bold">
              natural language, emotional tone, and authentic communication
            </span>{" "}
            — without complex prompts. Simply paste your text to generate{" "}
            <span className="font-bold">
              human-like, conversational, and engaging content
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the text input field</span>, how to use
            it effectively, and how it improves tone, engagement, and content
            authenticity.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ✍️ 1. Text Input
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the content you want to humanize and make more natural.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Paste your full article, paragraph, email, social media post, or
              chatbot response for best humanization results.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Produces
              natural-sounding, emotionally intelligent, and human-like content
              optimized for reader engagement.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🤝 Why This Tool Improves Engagement, Trust & Content Quality
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Humanizer follows{" "}
            <span className="font-semibold text-white">
              proven communication psychology, UX writing, and content
              optimization principles
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Human-Like Tone</span>{" "}
              – Makes AI text sound natural and conversational
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Higher Engagement
              </span>{" "}
              – Keeps readers interested and emotionally connected
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Improved Trust</span> –
              Builds credibility through authentic language
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Content Quality</span>{" "}
              – Enhances clarity, flow, and readability
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern communication, UX writing, and content strategy standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Natural language processing and conversational AI principles
            </li>
            <li className="text-2xl lg:text-base">User-centered content and tone optimization</li>
            <li className="text-2xl lg:text-base">Content engagement and trust-building frameworks</li>
            <li className="text-2xl lg:text-base">
              Accessibility and plain-language communication best practices
            </li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Humanization Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum naturalness, engagement, and content quality:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                complete and unedited text
              </span>{" "}
              for best tone transformation
            </li>
            <li className="text-2xl lg:text-base">
              Apply humanized content to{" "}
              <span className="font-semibold text-white">
                blogs, emails, chatbots, marketing copy, and customer
                communication
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Review output to ensure{" "}
              <span className="font-semibold text-white">
                accuracy, emotional tone, and intent preservation
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Combine with{" "}
              <span className="font-semibold text-white">
                readability and SEO optimization tools
              </span>{" "}
              for best overall performance
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                natural, empathetic, and audience-focused language
              </span>{" "}
              to build stronger connections
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={humanizerFAQs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Humanizer and how it can transform your content writing game."
        />
      </section>
    </div>
  );
};

export default HumanizerPage;
