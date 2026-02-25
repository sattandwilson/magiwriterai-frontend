import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import toast from "react-hot-toast";

const sloganFaqs = [
  {
    question: "What is an AI Slogan Generator?",
    answer:
      "An AI Slogan Generator is an online tool that creates catchy, memorable, and brand-focused slogans based on your brand name and industry. It helps improve brand recognition, marketing performance, and audience engagement."
  },
  {
    question: "How does the AI Slogan Generator work?",
    answer:
      "You enter your brand name and industry, and the AI analyzes them to generate creative, relevant, and high-impact slogans that align with your brand voice and target market."
  },
  {
    question: "Who should use an AI Slogan Generator?",
    answer:
      "The AI Slogan Generator is ideal for entrepreneurs, startups, marketers, branding agencies, business owners, content creators, and anyone building or refreshing a brand identity."
  },
  {
    question: "Can I use the generated slogans for marketing and branding?",
    answer:
      "Yes, the slogans are suitable for websites, advertisements, social media, packaging, logos, email campaigns, product launches, and all types of branding materials."
  },
  {
    question: "Will the slogans sound natural and professional?",
    answer:
      "Yes, the AI is trained on proven branding and copywriting frameworks to generate slogans that sound natural, professional, persuasive, and emotionally engaging."
  },
  {
    question: "Can I regenerate slogans multiple times?",
    answer:
      "Yes, you can generate multiple slogan variations using the same brand and industry to explore different creative directions and select the best-performing option."
  },
  {
    question: "Is this tool useful for SEO and online visibility?",
    answer:
      "Yes, strong brand slogans improve brand recall, engagement, and click-through rates, which indirectly support SEO performance and online discoverability."
  },
  {
    question: "Is my brand information safe when using the AI Slogan Generator?",
    answer:
      "Yes, your brand name and industry information are processed securely and privately. The tool does not store or share your input data."
  },
  {
    question: "Can I use this tool for startups and new businesses?",
    answer:
      "Absolutely. The AI Slogan Generator is especially useful for startups and new businesses that need fast, creative, and professional branding without hiring an agency."
  },
  {
    question: "Why should I use an AI Slogan Generator instead of creating slogans manually?",
    answer:
      "Using an AI Slogan Generator saves time, boosts creativity, improves consistency, and helps you generate high-quality slogans at scale with minimal effort."
  }
];


const SloganGeneratorPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [brand, setBrand] = useState("");
  const [industry, setIndustry] = useState("");

  const [sloganLoading, setSloganLoading] = useState(false);
  const [sloganResponse, setSloganResponse] = useState("");
  const handleSloganGenerate = async () => {
    if(!brand || brand.trim() === "" || !industry || industry.trim() === "") {
      toast.error("Please fill in both the brand and industry fields!");
      return;
    }
    try {
      setSloganLoading(true);
      const res = await fetch("http://localhost:5001/generate/slogan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ brand, industry }),
      });
      const response = await res.json();
      setSloganResponse(response.slogan);
    } catch (error) {
      console.error("Error generating Slogan!:", error);
    } finally {
      setSloganLoading(false);
    }
  };

  const handleResetFields = () => {
    setBrand("");
    setIndustry("");
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
            AI Slogan Generator
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
              Put the brand name here to generate slogan for it
            </Label>
            <Textarea
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Brand here..."
            />
          </div>
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label
              className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">
              Mention about the industry your brand belongs
            </Label>
            <Textarea
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Industry here..."
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <Button
            onClick={handleSloganGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate Slogan
          </Button>
          <Button
            onClick={handleResetFields}
            variant={"slogan"}
            className={`w-full font-nunito cursor-pointer ${
              isDark
                ? "hover:bg-red-700/20 hover:text-white bg-gray-800/55 border-gray-600/80 text-white"
                : "hover:bg-red-700/20 hover:text-black bg-white text-black"
            } transition-all duration-200 text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
          >
            Reset All Fields
          </Button>
        </section>
        {(sloganLoading || sloganResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={sloganResponse}
            isLoading={sloganLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            💡 Complete Guide to Using the AI Slogan Generator for Brand Growth
            & SEO Performance
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Slogan Generator is built for{" "}
            <span className="font-bold">
              brand identity, marketing impact, and audience recall
            </span>{" "}
            — without complex prompts. Simply enter your brand and industry to
            generate{" "}
            <span className="font-bold">
              memorable, high-converting, and SEO-friendly slogans
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the brand and industry fields</span>,
            how to use them effectively, and how they improve brand awareness,
            engagement, marketing performance, and search visibility.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🏷️ 1. Brand Name
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the brand or business name for which the slogan will be created.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter your brand name exactly as it appears in marketing
              materials, such as “Nike,” “Tesla,” “FreshBite,” or “CloudNova.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              slogans are brand-aligned, memorable, and consistent across all
              platforms.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🏭 2. Industry</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies the market or sector your brand operates in.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter your industry clearly, such as “technology,” “fitness,”
              “food delivery,” “education,” “finance,” or “e-commerce.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Produces
              industry-relevant, market-targeted, and customer-focused slogans.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            📈 Why This Tool Improves Branding, Marketing & SEO Performance
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Slogan Generator follows{" "}
            <span className="font-semibold text-white">
              proven branding, copywriting, and marketing best practices
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Brand Recall</span> –
              Creates catchy, memorable slogans that stick with your audience
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Marketing Impact</span>{" "}
              – Generates persuasive, emotionally resonant messaging
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Audience Relevance
              </span>{" "}
              – Aligns slogans with customer intent and industry expectations
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Performance</span>{" "}
              – Enhances brand discoverability and content visibility
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern branding, content marketing, and SEO standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Brand positioning and messaging frameworks</li>
            <li className="text-2xl lg:text-base">Advertising copywriting and headline optimization</li>
            <li className="text-2xl lg:text-base">Search engine optimization and brand visibility strategies</li>
            <li className="text-2xl lg:text-base">Conversion-focused marketing and growth tactics</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Slogan Generation Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum brand impact, engagement, and search performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                a clear and consistent brand name
              </span>{" "}
              for better recognition
            </li>
            <li className="text-2xl lg:text-base">
              Choose{" "}
              <span className="font-semibold text-white">
                an accurate and specific industry
              </span>{" "}
              to improve relevance
            </li>
            <li className="text-2xl lg:text-base">
              Optimize slogans for{" "}
              <span className="font-semibold text-white">
                websites, ads, social media, packaging, and campaigns
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Test multiple slogans to find the{" "}
              <span className="font-semibold text-white">
                most memorable and high-performing message
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                SEO-friendly branding language and emotional triggers
              </span>{" "}
              to boost discoverability
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={sloganFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Slogan Generator and how it can transform your slogan game."
        />
      </section>
    </div>
  );
};

export default SloganGeneratorPage;
