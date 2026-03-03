import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import toast from "react-hot-toast";

const readabilityFaqs = [
  {
    question: "What is an AI Readability Improver?",
    answer:
      "An AI Readability Improver is a tool that enhances the clarity, structure, and flow of text to make it easier to read, understand, and engage with. It improves user experience, accessibility, and SEO performance.",
  },
  {
    question: "How does the Readability Improver improve SEO?",
    answer:
      "The tool improves content clarity, structure, and user engagement signals, which are key factors in search engine rankings, helping pages perform better in Google search results.",
  },
  {
    question: "What type of content can I improve with this tool?",
    answer:
      "You can improve blog posts, articles, website copy, emails, academic writing, marketing content, social media captions, and business communication.",
  },
  {
    question: "Is this Readability Improver free to use?",
    answer:
      "Yes. The AI Readability Improver is completely free to use, with no sign-up required, making it accessible to writers, students, marketers, and businesses.",
  },
  {
    question: "Do I need writing experience to use this tool?",
    answer:
      "No. The tool is beginner-friendly and automatically applies best practices in readability, UX writing, and SEO without requiring technical expertise.",
  },
  {
    question: "Can this tool improve user engagement and retention?",
    answer:
      "Yes. By making content clearer and easier to read, the tool helps reduce bounce rates, increase time on page, and improve overall user engagement.",
  },
  {
    question: "Will the tool change the meaning of my content?",
    answer:
      "No. The AI preserves your original meaning and intent while improving sentence structure, clarity, and readability for better comprehension.",
  },
  {
    question: "Can I use this tool for academic or professional writing?",
    answer:
      "Absolutely. The tool is suitable for academic papers, professional emails, reports, presentations, and business documentation.",
  },
  {
    question: "Does this tool improve accessibility and inclusive writing?",
    answer:
      "Yes. The tool simplifies language and improves structure, making content more accessible to wider audiences, including non-native speakers and users with reading difficulties.",
  },
  {
    question: "Can I improve multiple texts using this tool?",
    answer:
      "Yes. You can improve unlimited pieces of content by entering different texts, making it ideal for high-volume writing and content optimization.",
  },
  {
    question: "How does this tool compare to manual editing?",
    answer:
      "Manual editing requires time and writing expertise, whereas this AI tool instantly improves readability using proven content optimization and UX writing strategies.",
  },
  {
    question: "Will this help my content rank higher on Google?",
    answer:
      "Yes. Improved readability, user experience, and engagement metrics are strong SEO ranking signals, helping your content achieve better visibility in search results.",
  },
];


const ReadabilityImproverPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [text, setText] = useState("");

  const [readableTextLoading, setReadableTextLoading] = useState(false);
  const [readableTextResponse, setReadableTextResponse] = useState("");
  const handleReadableTextGenerate = async () => {
    if(!text || text.trim() === "") {
      toast.error("Please fill in the text field!");
      return;
    }
    try {
      setReadableTextLoading(true);
      const res = await fetch(
        "/api/generate/readability/improve",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({text}),
        },
      );
      const response = await res.json();
      setReadableTextResponse(response.improvedText);
    } catch (error) {
      console.error("Error generating FAQ:", error);
    } finally {
      setReadableTextLoading(false);
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
            AI Readability Improver
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
              Paste/write your text to improve the readability
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
            onClick={handleReadableTextGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Improve Readability
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
        {(readableTextLoading || readableTextResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={readableTextResponse}
            isLoading={readableTextLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            📖 Complete Guide to Using the AI Readability Improver for Clear,
            Engaging & SEO-Optimized Content
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Readability Improver is built for{" "}
            <span className="font-bold">
              content clarity, user experience, and SEO performance
            </span>{" "}
            — without complex prompts. Simply paste your text to generate{" "}
            <span className="font-bold">
              clearer, more engaging, and easier-to-read content
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the text input field</span>, how to use
            it effectively, and how it improves readability scores, user
            engagement, and search visibility.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📝 1. Text Input
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the content you want to improve for clarity and readability.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Paste your full article, paragraph, blog post, email, or webpage
              content for optimal readability improvement.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Produces
              simplified, well-structured, and reader-friendly content optimized
              for SEO and user experience.
            </p>
          </div>
        </div>

       <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            📈 Why This Tool Improves Readability, Engagement & SEO Performance
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Readability Improver follows{" "}
            <span className="font-semibold text-white">
              proven content optimization, UX writing, and SEO best practices
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Improved Readability
              </span>{" "}
              – Makes content easier to understand and scan
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Higher Engagement
              </span>{" "}
              – Keeps readers on your page longer
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Optimization</span>{" "}
              – Enhances content quality signals for search engines
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Time Efficiency</span>{" "}
              – Instantly improves content without manual rewriting
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern content writing, accessibility, and SEO standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Content clarity and user experience optimization</li>
            <li className="text-2xl lg:text-base">
              Readability scoring systems (Flesch, grade level, scanability)
            </li>
            <li className="text-2xl lg:text-base">Search engine ranking and content quality guidelines</li>
            <li className="text-2xl lg:text-base">
              Accessibility, inclusivity, and plain-language best practices
            </li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Readability Improvement Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum clarity, engagement, and search performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                complete and unedited text
              </span>{" "}
              for best optimization
            </li>
            <li className="text-2xl lg:text-base">
              Optimize content for{" "}
              <span className="font-semibold text-white">
                blogs, websites, emails, academic writing, and business
                communication
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Focus on{" "}
              <span className="font-semibold text-white">
                sentence simplicity and paragraph structure
              </span>{" "}
              to improve comprehension
            </li>
            <li className="text-2xl lg:text-base">
              Review output to ensure{" "}
              <span className="font-semibold text-white">
                accuracy, tone consistency, and intent preservation
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                readability-friendly language and formatting
              </span>{" "}
              to boost user experience and SEO rankings
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={readabilityFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Readability Improver and how it can transform your content."
        />
      </section>
    </div>
  );
};

export default ReadabilityImproverPage;
