import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import FAQSection from "@/components/component/FAQSection";
import toast from "react-hot-toast";

const outlineGeneratorFAQs = [
  {
    question: "What is an AI Outline Generator?",
    answer:
      "An AI Outline Generator is a content planning tool that creates structured outlines based on your topic and keywords, helping you organize ideas, improve writing flow, and optimize content for SEO and search engine rankings.",
  },
  {
    question: "How does the AI Outline Generator work?",
    answer:
      "The tool analyzes your topic and keywords to generate a logical content structure with headings and subheadings that align with user intent, SEO best practices, and search engine optimization standards.",
  },
  {
    question: "Why should I use an outline generator before writing?",
    answer:
      "Using an outline generator saves time, improves content organization, ensures topic coverage, and increases the chances of ranking higher on Google by aligning content structure with SEO requirements.",
  },
  {
    question: "What should I enter in the topic field?",
    answer:
      "Enter a clear and specific subject, such as “Benefits of Remote Work,” “SEO Content Strategy,” or “How to Start a Blog,” so the AI can generate a focused and relevant outline.",
  },
  {
    question: "What should I enter in the keywords field?",
    answer:
      "Add primary and secondary SEO keywords related to your topic, such as “content marketing,” “keyword research,” or “search engine optimization,” to improve content visibility and ranking potential.",
  },
  {
    question: "Can this tool help improve SEO rankings?",
    answer:
      "Yes, the AI Outline Generator creates keyword-optimized content structures that improve search engine indexing, topic relevance, and overall SEO performance.",
  },
  {
    question: "Is this tool useful for blog writing and content marketing?",
    answer:
      "Absolutely. It helps bloggers, marketers, and writers create well-structured outlines for articles, landing pages, guides, and long-form content that perform well in search results.",
  },
  {
    question: "Can I use this tool for academic or professional writing?",
    answer:
      "Yes, the AI Outline Generator is suitable for essays, research papers, reports, whitepapers, and professional documents that require logical structure and clarity.",
  },
  {
    question: "Does the outline match user search intent?",
    answer:
      "Yes, the tool aligns headings and sections with user intent, keyword relevance, and semantic SEO principles to improve engagement and discoverability.",
  },
  {
    question: "Is the AI Outline Generator free to use?",
    answer:
      "Many versions of the tool are available for free, making it easy to generate high-quality, SEO-friendly outlines without subscriptions or complex setup.",
  },
  {
    question: "Can I customize or edit the generated outline?",
    answer:
      "Yes, you can freely edit, expand, or adjust the outline to match your writing style, audience, and content goals.",
  },
  {
    question: "What types of content can I create with this tool?",
    answer:
      "You can create outlines for blogs, articles, product pages, SEO content, landing pages, educational content, business reports, and more.",
  },
];

const OutlineGeneratorPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");

  const [outlineLoading, setOutlineLoading] = useState(false);
  const [outlineResponse, setOutlineResponse] = useState("");
  const handleOutlineGenerate = async () => {
    if(!topic || topic.trim() === "" || !keywords || keywords.trim() === "") {
      toast.error("Please fill in both the topic and keywords fields!");
      return;
    }
    try {
      setOutlineLoading(true);
      const res = await fetch("/api/generate/outline", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ topic, keywords }),
      });
      const response = await res.json();
      setOutlineResponse(response.outline);
    } catch (error) {
      console.error("Error generating Outline!:", error);
    } finally {
      setOutlineLoading(false);
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
            AI Outline Generator
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
              className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">Put the topic here</Label>
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
              className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">Put keywords here</Label>
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
            onClick={handleOutlineGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate Outline
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
        {(outlineLoading || outlineResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={outlineResponse}
            isLoading={outlineLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            🗂️ Complete Guide to Using the AI Outline Generator for Structured,
            High-Ranking & SEO-Optimized Content
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Outline Generator is built for{" "}
            <span className="font-bold">
              content structure, topic clarity, and SEO performance
            </span>{" "}
            — without complex prompts. Simply enter your topic and keywords to
            generate{" "}
            <span className="font-bold">
              clear, well-organized, and search-optimized content outlines
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the topic and keyword fields</span>, how
            to use them effectively, and how they improve content structure,
            writing flow, and search visibility.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🧩 1. Topic</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the main subject or theme for which the outline will be generated.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter a clear and specific topic, such as “Benefits of Remote
              Work,” “Digital Marketing Strategy,” “Healthy Meal Planning,” or
              “How to Start a Blog.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              the outline stays focused, relevant, and aligned with user intent
              and search queries.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🔑 2. Keywords</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies the SEO keywords and phrases the content should target.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter primary and secondary keywords related to your topic, such
              as “remote jobs,” “content marketing,” “healthy recipes,” or “SEO
              blogging tips.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Produces
              keyword-optimized headings and subtopics that improve search
              engine rankings and content discoverability.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            📈 Why This Tool Improves Content Structure, Writing Speed & SEO
            Performance
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Outline Generator follows{" "}
            <span className="font-semibold text-white">
              proven content planning, information architecture, and SEO best
              practices
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Clear Structure</span>{" "}
              – Creates logically organized headings and subheadings
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Faster Writing</span> –
              Reduces planning time and speeds up content creation
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Optimization</span>{" "}
              – Aligns content with target keywords and search intent
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Content Quality</span>{" "}
              – Improves depth, flow, and topic coverage
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern content marketing, SEO, and publishing standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Content outline frameworks and editorial planning</li>
            <li className="text-2xl lg:text-base">Search engine ranking and keyword mapping strategies</li>
            <li className="text-2xl lg:text-base">Topic clustering and semantic SEO best practices</li>
            <li className="text-2xl lg:text-base">User intent optimization and content hierarchy design</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Outline Generation Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum structure, clarity, and search performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                a clear and specific topic
              </span>{" "}
              to guide the outline direction
            </li>
            <li className="text-2xl lg:text-base">
              Choose{" "}
              <span className="font-semibold text-white">
                relevant, high-intent keywords
              </span>{" "}
              for better search rankings
            </li>
            <li className="text-2xl lg:text-base">
              Optimize outlines for{" "}
              <span className="font-semibold text-white">
                blogs, articles, essays, reports, and website pages
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Expand each outline section into{" "}
              <span className="font-semibold text-white">
                high-quality, informative content
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                SEO-friendly headings and logical content flow
              </span>{" "}
              to improve user experience and discoverability
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={outlineGeneratorFAQs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Outline Generator and how it can transform your outline game."
        />
      </section>
    </div>
  );
};

export default OutlineGeneratorPage;
