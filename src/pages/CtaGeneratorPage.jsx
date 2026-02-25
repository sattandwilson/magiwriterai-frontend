import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import toast from "react-hot-toast";

const ctaGeneratorFaqs = [
  {
    question: "What is an AI CTA Generator?",
    answer:
      "An AI CTA Generator is a tool that creates high-converting call-to-action phrases using artificial intelligence. It helps marketers, businesses, and creators generate persuasive CTAs that drive clicks, leads, and sales.",
  },
  {
    question: "How does the AI CTA Generator work?",
    answer:
      "You simply describe your goal, such as increasing sales, collecting emails, or driving app installs. The AI analyzes your objective and generates optimized call-to-action text designed for maximum conversion and engagement.",
  },
  {
    question: "Who should use an AI CTA Generator?",
    answer:
      "This tool is ideal for digital marketers, business owners, entrepreneurs, content creators, advertisers, eCommerce brands, and anyone who wants to improve conversion rates and marketing performance.",
  },
  {
    question: "What types of CTAs can this tool generate?",
    answer:
      "The tool can generate CTAs for landing pages, websites, emails, ads, social media posts, product pages, lead forms, sales funnels, and marketing campaigns across all industries.",
  },
  {
    question: "How does this tool improve conversion rates?",
    answer:
      "It uses proven copywriting principles such as urgency, clarity, benefit-driven messaging, and emotional triggers to create CTAs that encourage users to take immediate action.",
  },
  {
    question: "Can I use the generated CTAs for ads and marketing campaigns?",
    answer:
      "Yes. The AI CTA Generator is optimized for ad copy, email marketing, landing pages, social media promotions, and sales campaigns to increase click-through rate and ROI.",
  },
  {
    question: "Is this CTA Generator suitable for SEO and content marketing?",
    answer:
      "Absolutely. The tool produces SEO-friendly CTAs using relevant marketing keywords that improve content discoverability and engagement on search engines like Google.",
  },
  {
    question: "Can I generate CTAs for different business goals?",
    answer:
      "Yes. You can generate CTAs for goals such as lead generation, product sales, webinar registrations, app downloads, newsletter signups, bookings, and customer engagement.",
  },
  {
    question: "Does this tool work for both B2B and B2C marketing?",
    answer:
      "Yes. The AI CTA Generator supports both B2B and B2C use cases, producing CTAs suitable for enterprise marketing, SaaS products, eCommerce brands, startups, and service businesses.",
  },
  {
    question: "Can I customize the tone of the call-to-action?",
    answer:
      "Yes. By adjusting your goal description, you can influence whether the CTA sounds professional, urgent, friendly, persuasive, or motivational.",
  },
  {
    question: "Does the AI CTA Generator support different industries?",
    answer:
      "Yes. It works across industries such as eCommerce, SaaS, healthcare, education, real estate, finance, fitness, coaching, and digital marketing.",
  },
  {
    question: "Is this tool better than writing CTAs manually?",
    answer:
      "The AI CTA Generator saves time, reduces guesswork, and applies proven marketing psychology to produce high-performing CTAs faster than manual writing.",
  },
  {
    question: "Can I use the generated CTAs on landing pages?",
    answer:
      "Yes. The tool is optimized for landing page CTAs, helping increase conversion rates, reduce bounce rates, and improve user engagement.",
  },
  {
    question: "Does this CTA Generator help improve click-through rate (CTR)?",
    answer:
      "Yes. The tool is designed to improve CTR by generating compelling, action-oriented CTAs that encourage users to click, sign up, or buy.",
  },
  {
    question: "Is the AI CTA Generator free to use?",
    answer:
      "You can start using the AI CTA Generator for free, with optional premium features available for advanced customization and higher-volume usage.",
  },
];

const CtaGeneratorPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [goal, setGoal] = useState("");

  const [ctaLoading, setCtaLoading] = useState(false);
  const [ctaResponse, setCtaResponse] = useState("");
  const handleCtaGenerate = async () => {
    if(!goal || goal.trim() === "") {
      toast.error("Please fill in the goal field!");
      return;
    }
    try {
      setCtaLoading(true);
      const res = await fetch("http://localhost:5001/generate/cta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({goal}),
      });
      const response = await res.json();
      setCtaResponse(response.cta);
    } catch (error) {
      console.error("Error generating CTA:", error);
    } finally {
      setCtaLoading(false);
    }
  };

  const handleResetFields = () => {
    setGoal("");
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
            AI CTA Generator
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
              className={"text-xl md:text-3xl lg:text-base"}
              htmlFor="message"
            >
              Describe your goal or context to generate custom CTA
            </Label>
            <Textarea
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
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
            onClick={handleCtaGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate CTA
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
        {(ctaLoading || ctaResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={ctaResponse}
            isLoading={ctaLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            🎯 Complete Guide to Using the AI CTA Generator Tool for Higher
            Conversions
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI CTA Generator is built for{" "}
            <span className="font-bold">
              marketing conversions, lead generation, and sales optimization
            </span>{" "}
            — without needing complex prompts. Simply describe your goal to
            generate{" "}
            <span className="font-bold">
              high-impact, action-driven, and conversion-optimized calls to
              action
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the CTA goal field</span>, how to use it
            effectively, and how it improves click-through rate, engagement,
            lead capture, and sales performance.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 1. CTA Goal
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the action you want users to take.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Clearly describe your objective, such as “increase newsletter
              signups,” “boost product sales,” “drive app installs,” or
              “encourage demo bookings.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Enables
              highly targeted, persuasive, and conversion-focused call-to-action
              generation.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Improves Conversion Rates & Marketing Performance
          </h3>
          <p className="text-2xl lg:text-base">
            This AI CTA Generator follows{" "}
            <span className="font-semibold text-white">
              proven digital marketing and conversion optimization principles
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Conversions</span> –
              CTAs designed to increase clicks, leads, and sales
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Clarity</span> – Clear,
              action-oriented messaging
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Persuasion</span> –
              Uses urgency, value, and benefit-driven language
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Efficiency</span> –
              Faster CTA creation with high conversion impact
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              conversion rate optimization (CRO), marketing copywriting, and
              growth hacking standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Sales funnel and lead generation best practices
            </li>
            <li className="text-2xl lg:text-base">
              Landing page optimization and ad copy strategies
            </li>
            <li className="text-2xl lg:text-base">
              Email marketing and campaign CTA frameworks
            </li>
            <li className="text-2xl lg:text-base">
              SEO-friendly marketing content standards
            </li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI CTA Generation Results
          </h3>
          <p className="text-2xl lg:text-base">
            For maximum click-through rates, engagement, and search performance:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear, measurable conversion goals
              </span>{" "}
              (e.g., “increase signups,” “book demos,” “buy now”)
            </li>
            <li className="text-2xl lg:text-base">
              Focus on{" "}
              <span className="font-semibold text-white">
                user benefits and outcomes
              </span>{" "}
              rather than features
            </li>
            <li className="text-2xl lg:text-base">
              Include{" "}
              <span className="font-semibold text-white">
                urgency and value-driven language
              </span>{" "}
              to improve action rates
            </li>
            <li className="text-2xl lg:text-base">
              Optimize CTAs for{" "}
              <span className="font-semibold text-white">
                landing pages, ads, emails, and social media
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                SEO-friendly marketing keywords
              </span>{" "}
              for discoverability and performance
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={ctaGeneratorFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI CTA Generator and how it can transform your CTA game."
        />
      </section>
    </div>
  );
};

export default CtaGeneratorPage;
