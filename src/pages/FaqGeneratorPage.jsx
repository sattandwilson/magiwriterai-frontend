import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import FAQSection from "@/components/component/FAQSection";
import toast from "react-hot-toast";

const faqGeneratorFAQs = [
  {
    question: "What is an AI FAQ Generator tool?",
    answer:
      "An AI FAQ Generator automatically creates frequently asked questions and answers based on your input idea or context, helping you build relevant and SEO-friendly FAQ sections quickly.",
  },
  {
    question: "How does the FAQ Generator tool work?",
    answer:
      "You provide a clear topic or idea, and the AI analyzes it to generate targeted questions and informative answers that address common user queries related to that subject.",
  },
  {
    question: "Why should I use an AI FAQ Generator?",
    answer:
      "It saves time, improves user engagement, boosts SEO by incorporating relevant keywords, and helps answer your audience’s most common questions effectively.",
  },
  {
    question: "Can this tool improve my website’s search rankings?",
    answer:
      "Yes, well-structured FAQ content with relevant keywords enhances your site’s SEO, increases chances of appearing in rich snippets, and improves overall search visibility.",
  },
  {
    question: "What kind of input should I provide for best results?",
    answer:
      "Provide a clear, concise idea or context related to your product, service, or topic to generate the most relevant and helpful FAQs.",
  },
  {
    question: "Can I customize or edit the generated FAQs?",
    answer:
      "Yes, you can review, edit, and tailor the generated questions and answers to better fit your brand voice and audience needs.",
  },
  {
    question: "Is this FAQ Generator suitable for all industries?",
    answer:
      "Absolutely. Whether you are in e-commerce, education, healthcare, technology, or any other field, the tool can generate relevant FAQs tailored to your niche.",
  },
  {
    question: "Does using FAQs help improve user experience?",
    answer:
      "Yes, FAQs provide quick answers, reduce customer support requests, and keep visitors engaged longer on your site.",
  },
  {
    question: "How fast can I generate FAQs with this tool?",
    answer:
      "FAQs are generated instantly, allowing you to build comprehensive FAQ sections within seconds without manual effort.",
  },
  {
    question: "Is the AI FAQ Generator free to use?",
    answer:
      "Many versions of this tool are available for free, making it accessible for individuals and businesses to enhance their content and SEO.",
  },
];

const FaqGeneratorPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [content, setContent] = useState("");

  const [faqLoading, setFaqLoading] = useState(false);
  const [faqResponse, setFaqResponse] = useState("");
  const handleFaqGenerate = async () => {
    if(!content || content.trim() === "") {
      toast.error("Please fill in the content field!");
      return;
    }
    try {
      setFaqLoading(true);
      const res = await fetch("http://localhost:5001/generate/faq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({content}),
      });
      const response = await res.json();
      setFaqResponse(response.faq);
    } catch (error) {
      console.error("Error generating FAQ:", error);
    } finally {
      setFaqLoading(false);
    }
  };

  const handleResetFields = () => {
    setContent("");
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
            AI FAQ Generator
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
              Describe your content or context to generate custom FAQ
            </Label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
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
            onClick={handleFaqGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate FAQ
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
        {(faqLoading || faqResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={faqResponse}
            isLoading={faqLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            ❓ Complete Guide to Using the AI FAQ Generator for Clear, Relevant
            & SEO-Friendly FAQs
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI FAQ Generator is designed for{" "}
            <span className="font-bold">
              creating accurate, relevant, and SEO-optimized frequently asked
              questions
            </span>{" "}
            — without any complex setup. Simply enter your idea or context to
            generate{" "}
            <span className="font-bold">
              high-quality FAQs that boost user engagement and improve search
              rankings
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the idea input field</span>, how to use
            it effectively, and how it enhances content relevance, user
            experience, and SEO visibility.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧠 1. Idea Input
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the topic, context, or idea for which you want to generate FAQs.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter a clear and concise description of your product, service, or
              subject to generate the most relevant and useful FAQs.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Produces
              focused, informative, and SEO-friendly frequently asked questions
              that improve user engagement and search visibility.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Boosts Content Relevance, Engagement & SEO
            Performance
          </h3>
          <p className="text-2xl lg:text-base">
            This AI FAQ Generator follows{" "}
            <span className="font-semibold text-white">
              best practices in content marketing, SEO optimization, and user
              experience
            </span>{" "}
            to deliver high-impact results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Relevant FAQs</span> –
              Generates targeted questions that answer user intent
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Optimization</span>{" "}
              – Improves search visibility with keyword-rich content
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">User Engagement</span>{" "}
              – Enhances website stickiness and reduces bounce rates
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Time Savings</span> –
              Quickly produces comprehensive FAQ sections without manual effort
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern SEO standards, content strategy, and UX best practices
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Keyword research and content relevance optimization</li>
            <li className="text-2xl lg:text-base">
              Search engine friendly FAQ formatting and schema integration
            </li>
            <li className="text-2xl lg:text-base">User intent targeting and question answering strategies</li>
            <li className="text-2xl lg:text-base">
              Improved crawlability and snippet eligibility for search engines
            </li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI FAQ Generation Results
          </h3>
          <p className="text-2xl lg:text-base">For the most effective and SEO-friendly FAQ content:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear and detailed ideas or contexts
              </span>{" "}
              to get precise FAQs
            </li>
            <li className="text-2xl lg:text-base">
              Focus on{" "}
              <span className="font-semibold text-white">
                common customer questions and pain points
              </span>{" "}
              to increase relevance
            </li>
            <li className="text-2xl lg:text-base">
              Incorporate{" "}
              <span className="font-semibold text-white">
                keywords naturally within questions and answers
              </span>{" "}
              for better search rankings
            </li>
            <li className="text-2xl lg:text-base">
              Regularly update FAQs to{" "}
              <span className="font-semibold text-white">
                reflect new trends and user queries
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                structured FAQ schema markup
              </span>{" "}
              to enhance search snippet visibility
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={faqGeneratorFAQs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI FAQ Generator and how it can transform your FAQ writing game."
        />
      </section>
    </div>
  );
};

export default FaqGeneratorPage;
