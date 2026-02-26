import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import toast from "react-hot-toast";

const grammarCorrectorFAQs = [
  {
    question: "What is an AI Grammar Corrector tool?",
    answer:
      "An AI Grammar Corrector is an advanced writing assistant that detects and fixes grammar, spelling, punctuation, and sentence structure errors to produce clear, professional, and error-free content instantly.",
  },
  {
    question: "How does the AI Grammar Corrector tool work?",
    answer:
      "Simply paste your text into the input field, and the AI analyzes it using natural language processing to automatically correct grammar mistakes and improve sentence flow.",
  },
  {
    question: "Is the Grammar Corrector tool free to use?",
    answer:
      "Yes, this grammar corrector tool is completely free and allows unlimited grammar checks without requiring sign-up or subscriptions.",
  },
  {
    question: "Can this tool improve sentence clarity and readability?",
    answer:
      "Absolutely. Besides fixing grammar errors, it enhances sentence clarity, tone, and structure for better readability and professional communication.",
  },
  {
    question: "Who can benefit from using this Grammar Corrector?",
    answer:
      "Students, bloggers, writers, marketers, professionals, and anyone looking to create accurate, polished, and error-free writing can benefit from this tool.",
  },
  {
    question: "Does the tool correct punctuation and spelling mistakes as well?",
    answer:
      "Yes, it corrects grammar errors, punctuation, spelling mistakes, and awkward phrasing to ensure your content is flawless and professional.",
  },
  {
    question: "Can I use this tool for academic and business writing?",
    answer:
      "Definitely. The Grammar Corrector is perfect for essays, reports, emails, resumes, blogs, and business communication to ensure error-free content.",
  },
  {
    question: "How does using this tool improve my SEO?",
    answer:
      "Clear, grammatically correct content improves user experience, reduces bounce rates, and signals quality to search engines, helping your content rank higher in search results.",
  },
  {
    question: "Can the tool help non-native English speakers?",
    answer:
      "Yes, it’s an excellent tool for non-native speakers to improve grammar accuracy, sentence structure, and writing fluency.",
  },
  {
    question: "Is my text safe and private when using the Grammar Corrector?",
    answer:
      "Yes, your text is processed securely and not stored or shared, ensuring your content privacy and confidentiality.",
  },
  {
    question: "Can I edit the corrected text after using the tool?",
    answer:
      "Yes, you can review, edit, and customize the corrected output to match your preferred tone and style.",
  },
];


const GrammarcorrectorPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [text, setText] = useState("");

  const [improvedGrammarLoading, setImprovedGrammarLoading] = useState(false);
  const [improvedGrammarResponse, setImprovedGrammarResponse] = useState("");
  const handleGrammarCorrection = async () => {
    if(!text || text.trim() === "") {
      toast.error("Please fill in the text field!");
      return;
    }
    try {
      setImprovedGrammarLoading(true);
      const res = await fetch(
        "https://www.magiwriter.com/api/generate/grammar/correct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ text }),
        },
      );
      const response = await res.json();
      setImprovedGrammarResponse(response.correctedGrammar);
    } catch (error) {
      console.error("Error generating FAQ:", error);
    } finally {
      setImprovedGrammarLoading(false);
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
            AI Grammar Corrector
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
              Paste your text content to improve the grammar
            </Label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Paste/write here..."
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <Button
            onClick={handleGrammarCorrection}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Improve Grammar
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
        {(improvedGrammarLoading || improvedGrammarResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={improvedGrammarResponse}
            isLoading={improvedGrammarLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            ✏️ Complete Guide to Using the AI Grammar Corrector for Accurate,
            Polished & Error-Free Writing
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Grammar Corrector is built for{" "}
            <span className="font-bold">
              grammar accuracy, professional writing, and content quality
            </span>{" "}
            — without complex rules or manual editing. Simply paste your text to
            generate{" "}
            <span className="font-bold">
              grammatically correct, polished, and professional content
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the text input field</span>, how to use
            it effectively, and how it improves writing quality, clarity, and
            credibility.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📄 1. Text Input
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the content you want to correct for grammar, spelling, and
              punctuation.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Paste your full paragraph, email, essay, blog post, or document
              for complete grammar correction and proofreading.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Produces
              error-free, fluent, and professional writing optimized for
              readability and communication clarity.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🛠️ Why This Tool Improves Writing Quality, Accuracy & Communication
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Grammar Corrector follows{" "}
            <span className="font-semibold text-white">
              proven grammar rules, language standards, and editing best
              practices
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Grammar Accuracy</span>{" "}
              – Fixes grammar, spelling, and punctuation errors
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Professional Tone
              </span>{" "}
              – Enhances writing quality and credibility
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Improved Clarity</span>{" "}
              – Makes sentences clear, fluent, and readable
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Time Efficiency</span>{" "}
              – Instantly corrects content without manual proofreading
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern writing, editing, and language standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Professional writing and proofreading guidelines</li>
            <li className="text-2xl lg:text-base">Academic writing and business communication standards</li>
            <li className="text-2xl lg:text-base">Grammar rules, punctuation usage, and style consistency</li>
            <li className="text-2xl lg:text-base">
              Content quality, clarity, and reader experience optimization
            </li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best Grammar Correction Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum accuracy, clarity, and professional impact:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                complete and unedited text
              </span>{" "}
              for best grammar correction
            </li>
            <li className="text-2xl lg:text-base">
              Apply corrected content to{" "}
              <span className="font-semibold text-white">
                emails, essays, blogs, reports, resumes, and business writing
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Review output to ensure{" "}
              <span className="font-semibold text-white">
                tone consistency, meaning accuracy, and formatting
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Combine with{" "}
              <span className="font-semibold text-white">
                readability and humanizer tools
              </span>{" "}
              for best writing results
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear, correct, and professional language
              </span>{" "}
              to enhance communication and credibility
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={grammarCorrectorFAQs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Grammar Corrector and how it can transform your content writing game."
        />
      </section>
    </div>
  );
};

export default GrammarcorrectorPage;
