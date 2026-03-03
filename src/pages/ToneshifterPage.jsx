import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import toast from "react-hot-toast";

const toneShifterFaqs = [
  {
    question: "What is the AI Tone Shifter tool?",
    answer:
      "The AI Tone Shifter is an online writing tool that transforms the tone of your text while preserving its original meaning. It helps users adjust content to sound more professional, friendly, formal, persuasive, or empathetic for better communication and engagement."
  },
  {
    question: "How does the AI Tone Shifter work?",
    answer:
      "You paste your original text into the input field and select your desired tone. The AI then rewrites your content using advanced natural language processing to match the selected tone accurately and contextually."
  },
  {
    question: "Who should use an AI Tone Shifter?",
    answer:
      "The AI Tone Shifter is ideal for marketers, business professionals, students, writers, customer support teams, and content creators who need to adapt messaging for different audiences, platforms, or communication goals."
  },
  {
    question: "Can I change the tone without changing the meaning?",
    answer:
      "Yes, the AI Tone Shifter preserves the original message, intent, and key information while modifying only the emotional style, formality level, and communication tone."
  },
  {
    question: "What tones can I apply using this tool?",
    answer:
      "You can apply tones such as professional, formal, casual, friendly, persuasive, empathetic, confident, respectful, apologetic, enthusiastic, and more depending on your communication needs."
  },
  {
    question: "Is the AI Tone Shifter useful for SEO content optimization?",
    answer:
      "Yes, the AI Tone Shifter improves content clarity, readability, and user experience, which are key factors for SEO performance, organic rankings, and search engine discoverability."
  },
  {
    question: "Can I use the AI Tone Shifter for business and marketing content?",
    answer:
      "Absolutely. The tool is ideal for emails, sales copy, landing pages, customer support responses, blog articles, advertisements, and brand messaging across all industries."
  },
  {
    question: "Is my text stored or shared when using the tool?",
    answer:
      "No, your content is processed securely and privately. The AI Tone Shifter does not store, save, or share your input text or generated output."
  },
  {
    question: "Can I regenerate or refine the tone multiple times?",
    answer:
      "Yes, you can regenerate your content multiple times using different tones or the same tone to explore variations and select the best version for your needs."
  },
  {
    question: "Why should I use an AI Tone Shifter instead of rewriting manually?",
    answer:
      "Using an AI Tone Shifter saves time, improves consistency, reduces writing effort, and ensures professional-quality tone adjustments while maintaining accuracy, clarity, and engagement."
  }
];


const ToneShifterPage = () => {
  const guideRef= useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [text, setText] = useState("");
  const [tone, setTone] = useState("");

  const [shiftedToneLoading, setShiftedToneLoading] = useState(false);
  const [shiftedToneResponse, setShiftedToneResponse] = useState("");
  const handleShiftedToneGenerate = async () => {
    if(!text || text.trim() === "" || !tone || tone.trim() === "") {
      toast.error("Please enter text and tone to shift its tone!");
      return;
    }
    try {
      setShiftedToneLoading(true);
      const res = await fetch("/api/generate/toneshift", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ text, tone }),
      });
      const response = await res.json();
      setShiftedToneResponse(response.toneshiftedText);
    } catch (error) {
      console.error("Error shifting tone!:", error);
    } finally {
      setShiftedToneLoading(false);
    }
  };

  const handleResetFields = () => {
    setText("");
    setTone("");
  };

  return (
    <div className="w-screen flex flex-col items-center gap-[3vw] mt-[1vw] text-white">
      <header className="w-full flex flex-col items-center gap-[1vw] mt-[6vw] md:mt-[14vw] lg:mt-[5vw]">
        <h1 className="font-bold text-4xl font-nunito">
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
            AI Tone Shifter
          </AuroraText>
        </h1>
        <h2 className="max-w-[60%] text-center font-semibold text-2xl font-nunito text-gray-300">
          Create fully optimized, human-quality blog blogs in seconds using
          structured inputs for keywords, tone, audience, SEO, images, tables,
          FAQs, and more—no prompt writing required.
        </h2>
      </header>
      <section className="w-full flex flex-col items-center gap-[1vw]">
        <p className="max-w-[40%] text-center text-xl font-nunito text-gray-100">
          Want to know how you could leverage Magiwriter's AI Blog Writer to
          generate top class industry grade blogs with best SEO techniques? Look
          no further, just check down bellow.
        </p>
        <ShinyButton onClick={()=> guideRef.current.scrollIntoView({behavior: "smooth"})} className={"bg-white/15 md:text-4xl lg:text-sm m-0"}>
          Check Full Guide
        </ShinyButton>
      </section>
      <main
        className={`w-[90%] xl:w-[60%] flex flex-col items-center gap-[6vw] lg:gap-[5vw] xl:gap-[2vw] border ${
          isDark
            ? "bg-black/35 border-gray-300/25"
            : "bg-white/55 border-gray-400/15"
        } blur-in-3xl z-10 p-[4vw] xl:p-[2vw] xl:my-[1vw] rounded-3xl font-nunito`}
      >
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label htmlFor="message">Put the text here to shift its tone</Label>
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={`border ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto`}
              placeholder="Text here..."
            />
          </div>
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label htmlFor="message">
              Put tone here, tone that you want to attach to the text
            </Label>
            <Textarea
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className={`border ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto`}
              placeholder="Tone here..."
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <Button
            onClick={handleShiftedToneGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-base transition-all duration-200`}
          >
            Shift Tone
          </Button>
          <Button
            onClick={handleResetFields}
            variant={"shiftedTone"}
            className={`w-full font-nunito cursor-pointer ${
              isDark
                ? "hover:bg-red-700/20 hover:text-white bg-gray-800/55 border-gray-600/80 text-white"
                : "hover:bg-red-700/20 hover:text-black bg-white text-black"
            } transition-all duration-200 text-base shadow-xl`}
          >
            Reset All Fields
          </Button>
        </section>
        {(shiftedToneLoading || shiftedToneResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={shiftedToneResponse}
            isLoading={shiftedToneLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            🎭 Complete Guide to Using the AI Tone Shifter for Better
            Communication & Content Performance
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Tone Shifter is built for{" "}
            <span className="font-bold">
              professional communication, brand consistency, and content
              optimization
            </span>{" "}
            — without complex prompts. Simply paste your text and select a tone
            to generate{" "}
            <span className="font-bold">
              clear, context-aware, and tone-optimized content
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the text and tone fields</span>, how to
            use them effectively, and how they improve readability, engagement,
            brand voice, and search performance.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📝 1. Text Input
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Provides the original content whose tone you want to change.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Paste complete sentences or paragraphs such as emails, blog
              content, social posts, customer support replies, or marketing
              copy.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              accurate rewriting while preserving meaning, context, and key
              messaging.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 2. Tone Selection
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the emotional style and communication intent of your output.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose tones such as “professional,” “friendly,” “formal,”
              “casual,” “persuasive,” “empathetic,” or “confident.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span>{" "}
              Generates context-aware, audience-appropriate, and brand-aligned
              content.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            📈 Why This Tool Improves Communication, Engagement & SEO
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Tone Shifter follows{" "}
            <span className="font-semibold text-white">
              proven content optimization and communication best practices
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Readability</span> –
              Improves clarity, flow, and audience comprehension
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Engagement</span> –
              Aligns messaging with user intent and emotional tone
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Brand Voice</span> –
              Maintains consistent tone across all communication channels
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Performance</span>{" "}
              – Enhances content quality, relevance, and search discoverability
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern content strategy, UX writing, and SEO standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">On-page SEO and semantic content optimization</li>
            <li className="text-2xl lg:text-base">Marketing copywriting and brand messaging frameworks</li>
            <li className="text-2xl lg:text-base">Email communication and customer support best practices</li>
            <li className="text-2xl lg:text-base">Conversion-focused content and user experience design</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
    <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Tone Shifting Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum clarity, engagement, and search performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                complete, context-rich input text
              </span>{" "}
              for more accurate tone transformation
            </li>
            <li className="text-2xl lg:text-base">
              Select{" "}
              <span className="font-semibold text-white">
                precise tone descriptors
              </span>{" "}
              (e.g., “formal,” “friendly,” “persuasive,” “supportive”)
            </li>
            <li className="text-2xl lg:text-base">
              Optimize content for{" "}
              <span className="font-semibold text-white">
                audience intent, platform, and communication goal
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Apply tone shifting to{" "}
              <span className="font-semibold text-white">
                emails, blogs, social posts, ads, landing pages, and support
                replies
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                SEO-friendly language and readability improvements
              </span>{" "}
              to boost discoverability and content performance
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full w-[60%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={toneShifterFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Tone Shifter and how it can transform your tone shifting game."
        />
      </section>
    </div>
  );
};

export default ToneShifterPage;
