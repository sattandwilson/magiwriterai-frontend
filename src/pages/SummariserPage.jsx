import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import toast from "react-hot-toast";

const summarizerFaqs = [
  {
    question: "What is an AI Summarizer?",
    answer:
      "An AI Summarizer is an online tool that converts long-form text into concise, accurate summaries while preserving the original meaning. It helps users save time, improve readability, and optimize content for search engines."
  },
  {
    question: "How does the AI Summarizer work?",
    answer:
      "You paste your text into the input field, and the AI analyzes the content using natural language processing to extract key points, main ideas, and essential information into a clear summary."
  },
  {
    question: "Who should use an AI Summarizer?",
    answer:
      "The AI Summarizer is ideal for students, researchers, professionals, marketers, writers, journalists, and business owners who need quick, accurate summaries of articles, reports, papers, emails, and documents."
  },
  {
    question: "Can I use the AI Summarizer for SEO content optimization?",
    answer:
      "Yes, the AI Summarizer improves content clarity, structure, and relevance, which supports SEO performance, organic rankings, featured snippets, and search engine discoverability."
  },
  {
    question: "Will the summary change the meaning of my content?",
    answer:
      "No, the AI Summarizer preserves the original meaning, context, and key messages while reducing length and removing unnecessary details."
  },
  {
    question: "Can I summarize long documents and articles?",
    answer:
      "Yes, the AI Summarizer supports long-form content such as blog posts, research papers, whitepapers, reports, academic documents, legal text, and business communications."
  },
  {
    question: "Is my content safe and private when using the AI Summarizer?",
    answer:
      "Yes, your text is processed securely and privately. The AI Summarizer does not store, save, or share your content."
  },
  {
    question: "Can I regenerate or refine summaries multiple times?",
    answer:
      "Yes, you can generate multiple summary variations to adjust length, focus, or clarity until you find the version that best fits your needs."
  },
  {
    question: "Is the AI Summarizer useful for academic and professional writing?",
    answer:
      "Absolutely. The tool is widely used for academic research, business reports, executive summaries, study notes, meeting minutes, and professional documentation."
  },
  {
    question: "Why should I use an AI Summarizer instead of summarizing manually?",
    answer:
      "Using an AI Summarizer saves time, increases accuracy, improves consistency, reduces cognitive load, and ensures professional-quality summaries at scale."
  }
];


const SummarizerPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [text, setText] = useState("");

  const [summarizeTextLoading, setSummarizeTextLoading] = useState(false);
  const [summarizeTextResponse, setSummarizeTextResponse] = useState("");
  const handleSummarizeTextGenerate = async () => {
    if(!text || text.trim() === "") {
      toast.error("Please enter some text to summarize!");
      return;
    }
    try {
      setSummarizeTextLoading(true);
      const res = await fetch("/api/generate/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({text}),
      });
      const response = await res.json();
      setSummarizeTextResponse(response.summerizedText);
    } catch (error) {
      console.error("Error converting robotic text into human tone!:", error);
    } finally {
      setSummarizeTextLoading(false);
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
            AI Summarizer
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
              Paste your long text content and convert it into short form
              summary with points
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
            onClick={handleSummarizeTextGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Summarize Text
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
        {(summarizeTextLoading || summarizeTextResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={summarizeTextResponse}
            isLoading={summarizeTextLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            🧾 Complete Guide to Using the AI Summarizer for Faster Reading &
            Better SEO Performance
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Summarizer is built for{" "}
            <span className="font-bold">
              content optimization, information extraction, and time efficiency
            </span>{" "}
            — without complex prompts. Simply paste your text to generate{" "}
            <span className="font-bold">
              concise, accurate, and SEO-friendly summaries
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the text input field</span>, how to use
            it effectively, and how it improves readability, engagement, content
            performance, and search rankings.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📝 1. Text Input
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Provides the original content you want summarized.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Paste full articles, research papers, blog posts, reports, emails,
              or long documents for more accurate and context-aware summaries.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span>{" "}
              Generates clear, concise, and meaning-preserving summaries
              optimized for user comprehension and SEO performance.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            📈 Why This Tool Improves Productivity, SEO & Content Performance
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Summarizer follows{" "}
            <span className="font-semibold text-white">
              proven content optimization and information processing best
              practices
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Time Efficiency</span>{" "}
              – Quickly extracts key points and main ideas
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Readability</span> –
              Improves clarity and content accessibility
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Performance</span>{" "}
              – Enhances content quality, relevance, and search discoverability
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">User Engagement</span>{" "}
              – Increases time on page and reduces bounce rates
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern SEO, content strategy, and knowledge management standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">On-page SEO and semantic keyword optimization</li>
            <li className="text-2xl lg:text-base">Content marketing and information architecture frameworks</li>
            <li className="text-2xl lg:text-base">Academic research and document analysis best practices</li>
            <li className="text-2xl lg:text-base">Conversion-focused informational content strategies</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Summarization Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum clarity, productivity, and search performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                complete, well-structured input text
              </span>{" "}
              for more accurate summaries
            </li>
            <li className="text-2xl lg:text-base">
              Focus on{" "}
              <span className="font-semibold text-white">
                key ideas, topics, and core messages
              </span>{" "}
              rather than unnecessary details
            </li>
            <li className="text-2xl lg:text-base">
              Apply summarization to{" "}
              <span className="font-semibold text-white">
                blogs, research papers, reports, emails, and long-form content
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                SEO-friendly language and structure
              </span>{" "}
              to improve content visibility
            </li>
            <li className="text-2xl lg:text-base">
              Optimize summaries for{" "}
              <span className="font-semibold text-white">
                readability, scannability, and user intent
              </span>{" "}
              to boost engagement and rankings
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={summarizerFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI CTA Generator and how it can transform your CTA game."
        />
      </section>
    </div>
  );
};

export default SummarizerPage;
