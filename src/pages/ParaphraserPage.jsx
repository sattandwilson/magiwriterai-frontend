import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import toast from "react-hot-toast";

const paraphraserFaqs = [
  {
    question: "What is an AI paraphrasing tool?",
    answer:
      "An AI paraphrasing tool rewrites your text while preserving its original meaning. It helps generate unique, plagiarism-free, and SEO-optimized content for blogs, websites, academic writing, marketing copy, and business communication.",
  },
  {
    question: "Is this paraphraser free to use?",
    answer:
      "Yes, this AI Paraphraser is free to use and requires no login. You can instantly rewrite content with high accuracy, clarity, and originality.",
  },
  {
    question: "Does the AI paraphraser remove plagiarism?",
    answer:
      "Yes, the tool rewrites content in a unique way, making it plagiarism-safe while maintaining the original intent and context. This helps improve content originality and SEO rankings.",
  },
  {
    question: "Will paraphrasing affect my SEO rankings?",
    answer:
      "No — it improves SEO. The AI paraphraser enhances content uniqueness, readability, and keyword placement, which strengthens search engine ranking signals and content quality scores.",
  },
  {
    question: "Can I use this paraphraser for academic writing?",
    answer:
      "Yes. This tool is ideal for rewriting essays, research papers, assignments, and reports while preserving meaning, improving clarity, and ensuring originality.",
  },
  {
    question: "Does the paraphraser change the meaning of my text?",
    answer:
      "No. The AI is designed to preserve the original meaning, tone, and intent of your content while improving wording, flow, and structure.",
  },
  {
    question: "What types of content can I paraphrase?",
    answer:
      "You can paraphrase blog posts, website pages, emails, marketing content, academic papers, product descriptions, social media posts, and business documents.",
  },
  {
    question: "How fast does the AI paraphraser work?",
    answer:
      "The AI paraphraser delivers rewritten content in seconds, saving time and eliminating the need for manual rewriting or editing.",
  },
  {
    question: "Does this paraphrasing tool support SEO keywords?",
    answer:
      "Yes. The AI preserves and intelligently integrates your keywords, helping improve search visibility, organic traffic, and content relevance.",
  },
  {
    question: "Is the paraphrased content safe to publish?",
    answer:
      "Yes. The output is original, plagiarism-free, SEO-friendly, and suitable for direct publishing across websites, blogs, academic platforms, and marketing channels.",
  },
];

const ParaphraserPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [text, setText] = useState("");
  const [lenth, setLength] = useState("Short");

  const [paraphraserLoading, setParaphraserLoading] = useState(false);
  const [paraphraserResponse, setParaphraserResponse] = useState("");
  const handleParaphraserGenerate = async () => {
    if(!text || text.trim() === "") {
      toast.error("Please fill in the text field!");
      return;
    }
    try {
      setParaphraserLoading(true);
      const res = await fetch("/api/generate/paraphraser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({text, lenth}),
      });
      const response = await res.json();
      setParaphraserResponse(response.paraphrasedText);
    } catch (error) {
      console.error("Error generating Paraphraser:", error);
    } finally {
      setParaphraserLoading(false);
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
            AI Paraphraser
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
              Put your text here and change its writing style
            </Label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Put text here..."
            />
          </div>
          <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label
              className={"text-xl md:text-3xl lg:text-base"} htmlFor="language">Length:</Label>
            <DropdownMenu>
              <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                {lenth}
              </DropdownMenuTrigger>
              <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                >
                <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) => setLength(e.target.innerText)}
                  >
                  Short
                </DropdownMenuItem>
                <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) => setLength(e.target.innerText)}
                  >
                  Medium
                </DropdownMenuItem>
                <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) => setLength(e.target.innerText)}
                  >
                  Long
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <Button
            onClick={handleParaphraserGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Start Process
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
        {(paraphraserLoading || paraphraserResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={paraphraserResponse}
            isLoading={paraphraserLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            🔁 Complete Guide to Using the AI Paraphraser for Unique, Clear &
            SEO-Optimized Content
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Paraphraser is built for{" "}
            <span className="font-bold">
              content originality, clarity, and SEO performance
            </span>{" "}
            — without complex prompts. Simply paste your text to generate{" "}
            <span className="font-bold">
              rewritten, plagiarism-free, and natural-sounding content
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the text input field</span>, how to use
            it effectively, and how it improves content uniqueness, tone
            consistency, and search visibility.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ✍️ 1. Text Input
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the content you want to rewrite while preserving the original
              meaning.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Paste your article, paragraph, blog post, email, or webpage
              content for accurate paraphrasing.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Produces
              unique, fluent, and SEO-friendly content that avoids duplication
              and improves readability.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Improves Originality, Engagement & SEO Performance
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Paraphraser follows{" "}
            <span className="font-semibold text-white">
              proven content rewriting, NLP, and SEO optimization best practices
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Improved Originality
              </span>{" "}
              – Generates plagiarism-free content
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Higher Engagement
              </span>{" "}
              – Enhances clarity and flow for better reader retention
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Optimization</span>{" "}
              – Improves content uniqueness and ranking signals
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Time Efficiency</span>{" "}
              – Instantly rewrites content without manual editing
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern content writing, originality, and SEO standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Content originality and plagiarism prevention</li>
            <li className="text-2xl lg:text-base">Semantic rewriting and tone preservation</li>
            <li className="text-2xl lg:text-base">Search engine ranking and content quality guidelines</li>
            <li className="text-2xl lg:text-base">Accessibility, clarity, and natural language best practices</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            💡 Final Tips for Best AI Paraphrasing Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum originality, clarity, and search performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                complete and unedited text
              </span>{" "}
              for accurate rewriting
            </li>
            <li className="text-2xl lg:text-base">
              Optimize content for{" "}
              <span className="font-semibold text-white">
                blogs, websites, academic writing, emails, and marketing copy
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Focus on{" "}
              <span className="font-semibold text-white">
                tone consistency and intent preservation
              </span>{" "}
              when reviewing output
            </li>
            <li className="text-2xl lg:text-base">
              Ensure{" "}
              <span className="font-semibold text-white">
                meaning accuracy and contextual relevance
              </span>{" "}
              after paraphrasing
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                plagiarism-safe, SEO-friendly phrasing
              </span>{" "}
              to boost rankings and trust
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={paraphraserFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Paraphraser and how it can transform your content."
        />
      </section>
    </div>
  );
};

export default ParaphraserPage;
