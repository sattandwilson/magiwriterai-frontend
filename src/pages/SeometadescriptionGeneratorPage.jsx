import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AuroraText } from "@/components/ui/aurora-text";
import toast from "react-hot-toast";

const seoMetadescriptionFaqs = [
  {
    question: "What is an AI Meta Description Generator?",
    answer:
      "An AI Meta Description Generator is a tool that creates optimized meta descriptions based on your page summary and target keywords. It helps improve search engine visibility, click-through rates (CTR), and overall SEO performance.",
  },
  {
    question: "How does the Meta Description Generator improve SEO?",
    answer:
      "The tool generates keyword-rich, search-engine-friendly meta descriptions that align with user intent and Google best practices, improving rankings, indexing, and organic traffic.",
  },
  {
    question: "What inputs does this tool require?",
    answer:
      "This tool requires two inputs: a page summary and target keywords. These inputs allow the AI to generate accurate, relevant, and high-performing meta descriptions.",
  },
  {
    question: "Can this tool improve click-through rate (CTR)?",
    answer:
      "Yes. The tool creates compelling, benefit-driven meta descriptions that attract more clicks from search engine results pages (SERPs), increasing CTR and engagement.",
  },
  {
    question: "Is this Meta Description Generator free to use?",
    answer:
      "Yes. The AI Meta Description Generator is free to use and does not require registration, making it accessible for bloggers, marketers, businesses, and SEO professionals.",
  },
  {
    question: "Do I need SEO experience to use this tool?",
    answer:
      "No. The tool is beginner-friendly and automatically applies SEO best practices, allowing anyone to generate optimized meta descriptions without technical SEO knowledge.",
  },
  {
    question: "Can I use the generated meta descriptions for any website?",
    answer:
      "Yes. You can use the generated meta descriptions for blogs, landing pages, e-commerce stores, portfolios, SaaS websites, and content management systems like WordPress and Shopify.",
  },
  {
    question: "Are the generated meta descriptions compliant with Google guidelines?",
    answer:
      "Yes. The tool follows current Google SEO guidelines and on-page optimization best practices to ensure descriptions are compliant, relevant, and effective.",
  },
  {
    question: "Can I generate meta descriptions for multiple pages?",
    answer:
      "Absolutely. You can generate unlimited meta descriptions by entering different summaries and keywords for each page, making it ideal for large websites and SEO campaigns.",
  },
  {
    question: "Does this tool support local SEO and niche keywords?",
    answer:
      "Yes. By entering location-based or niche-specific keywords, the tool generates meta descriptions optimized for local SEO, industry-specific search terms, and targeted visibility.",
  },
  {
    question: "How does this tool compare to manual meta description writing?",
    answer:
      "Manual meta description writing is time-consuming and requires SEO expertise, whereas this AI tool instantly generates optimized descriptions based on proven SEO and copywriting strategies.",
  },
  {
    question: "Will these meta descriptions improve mobile and voice search visibility?",
    answer:
      "Yes. The tool generates concise, relevant descriptions optimized for mobile SERPs and voice search, improving content visibility across devices and platforms.",
  },
];


const SeometadescriptionGeneratorPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [summary, setSummary] = useState("");
  const [keywords, setKeywords] = useState("");

  const [seometadescriptionLoading, setSeometadescriptionLoading] =
    useState(false);
  const [seometadescriptionResponse, setSeometadescriptionResponse] =
    useState("");
  const handleSeometadescriptionGenerate = async () => {
    if(!summary || summary.trim() === "" || !keywords || keywords.trim() === "") {
      toast.error("Please fill in both the summary and keywords fields!");
      return;
    }
    try {
      setSeometadescriptionLoading(true);
      const res = await fetch(
        "http://localhost:5001/generate/seometadescription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ summary, keywords }),
        }
      );
      const response = await res.json();
      setSeometadescriptionResponse(response.seometadescription);
    } catch (error) {
      console.error("Error generating Seometadescription!:", error);
    } finally {
      setSeometadescriptionLoading(false);
    }
  };

  const handleResetFields = () => {
    setSummary("");
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
            AI SEO Metadescription Generator
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
            <Label htmlFor="message">
              Put the page summary here, describe the page content to AI
              Seometadescription Generator
            </Label>
            <Textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Summary here..."
            />
          </div>
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label              className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">Put keywords here</Label>
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
            onClick={handleSeometadescriptionGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate SEO Metadescription
          </Button>
          <Button
            onClick={handleResetFields}
            variant={"seometadescription"}
            className={`w-full font-nunito cursor-pointer ${
              isDark
                ? "hover:bg-red-700/20 hover:text-white bg-gray-800/55 border-gray-600/80 text-white"
                : "hover:bg-red-700/20 hover:text-black bg-white text-black"
            } transition-all duration-200 text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
          >
            Reset All Fields
          </Button>
        </section>
        {(seometadescriptionLoading || seometadescriptionResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={seometadescriptionResponse}
            isLoading={seometadescriptionLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            📝 Complete Guide to Using the AI Meta Description Generator for
            Higher Click-Through Rates & SEO Performance
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Meta Description Generator is built for{" "}
            <span className="font-bold">
              search engine optimization, higher click-through rates, and
              content visibility
            </span>{" "}
            — without complex prompts. Simply enter your page summary and
            keywords to generate{" "}
            <span className="font-bold">
              compelling, keyword-optimized, and Google-friendly meta
              descriptions
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the summary and keywords fields</span>,
            how to use them effectively, and how they improve organic traffic,
            SERP visibility, and content performance.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📄 1. Page Summary
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the main content and intent of your webpage.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter a concise, accurate summary of your page, such as “AI tools
              for digital marketing,” “best fitness tracking app,” or “complete
              guide to SEO optimization.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              the generated meta description accurately reflects your content
              and appeals to both search engines and users.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔑 2. Target Keywords
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies the primary search terms you want your page to rank for.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter high-intent, SEO-focused keywords related to your page, such
              as “AI meta description generator,” “SEO description tool,” or
              “optimize meta descriptions for Google.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Produces
              keyword-rich, search-engine-optimized meta descriptions that
              improve ranking potential and discoverability.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[45%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            📈 Why This Tool Improves SEO, Click-Through Rates & Search
            Visibility
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Meta Description Generator follows{" "}
            <span className="font-semibold text-white">
              proven on-page SEO, copywriting, and CTR optimization best
              practices
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Higher CTR</span> –
              Creates compelling descriptions that attract more clicks from
              search results
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Search Relevance</span>{" "}
              – Aligns descriptions with user intent and search queries
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Keyword Optimization
              </span>{" "}
              – Uses strategic keywords to improve ranking potential
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Time Efficiency</span>{" "}
              – Generates high-quality meta descriptions instantly
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern SEO standards, Google guidelines, and content marketing
              practices
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">On-page SEO optimization and metadata best practices</li>
            <li className="text-2xl lg:text-base">Search engine ranking algorithms and indexing strategies</li>
            <li className="text-2xl lg:text-base">
              Content visibility, snippet optimization, and SERP performance
            </li>
            <li className="text-2xl lg:text-base">Conversion-focused copywriting and user engagement tactics</li>
          </ul>
        </div>

        <div className="w-full max-w-[45%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Meta Description Generation Results
          </h3>
          <p className="text-2xl lg:text-base">
            For maximum search visibility, engagement, and ranking performance:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear, accurate page summaries
              </span>{" "}
              that reflect real content
            </li>
            <li className="text-2xl lg:text-base">
              Choose{" "}
              <span className="font-semibold text-white">
                high-intent, SEO-focused keywords
              </span>{" "}
              for better discoverability
            </li>
            <li className="text-2xl lg:text-base">
              Optimize descriptions for{" "}
              <span className="font-semibold text-white">
                Google SERPs, mobile search, and voice search
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Keep meta descriptions within{" "}
              <span className="font-semibold text-white">
                optimal character limits (150–160 characters)
              </span>{" "}
              for better display
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                action-oriented language and value propositions
              </span>{" "}
              to increase click-through rates
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={seoMetadescriptionFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI CTA Generator and how it can transform your CTA game."
        />
      </section>
    </div>
  );
};

export default SeometadescriptionGeneratorPage;
