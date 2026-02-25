import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import FAQSection from "@/components/component/FAQSection";
import toast from "react-hot-toast";

const replyGeneratorFaqs = [
  {
    question: "What is an AI Reply Generator?",
    answer:
      "An AI Reply Generator is a tool that creates context-aware, relevant, and engaging replies based on provided content and a point of view (POV). It helps improve communication quality, social media engagement, and professional interactions.",
  },
  {
    question: "How does the AI Reply Generator work?",
    answer:
      "The tool analyzes the original content and your provided point of view to generate a response that matches your intent, tone, and communication style while maintaining relevance and clarity.",
  },
  {
    question: "What types of content can I use with this tool?",
    answer:
      "You can use social media posts, comments, messages, emails, reviews, customer inquiries, or any text you want to respond to, making it ideal for personal, professional, and business communication.",
  },
  {
    question: "What is the Point of View (POV) field used for?",
    answer:
      "The POV field helps define your perspective, tone, and intent, such as supportive, professional, friendly, assertive, or customer-service-focused, ensuring the generated reply matches your communication goals.",
  },
  {
    question: "Can this tool improve social media engagement?",
    answer:
      "Yes. The AI Reply Generator creates thoughtful, relevant, and engaging replies that encourage interaction, increase response rates, and strengthen audience relationships on social media platforms.",
  },
  {
    question: "Is the AI Reply Generator free to use?",
    answer:
      "Yes. The AI Reply Generator is completely free to use and does not require any sign-up, making it accessible for creators, marketers, businesses, and individuals.",
  },
  {
    question: "Do I need writing or communication experience to use this tool?",
    answer:
      "No. The tool is designed for users of all experience levels and automatically applies best practices in communication, tone, and clarity to generate high-quality replies.",
  },
  {
    question:
      "Can I use the generated replies for business or customer support?",
    answer:
      "Absolutely. The tool is ideal for customer support responses, professional emails, brand communication, and reputation management, helping maintain a consistent and polished voice.",
  },
  {
    question: "How accurate and relevant are the generated replies?",
    answer:
      "The AI generates highly accurate, context-aware, and intent-driven replies based on your input content and POV, ensuring relevance, clarity, and effectiveness.",
  },
  {
    question: "Can I generate replies for multiple messages or posts?",
    answer:
      "Yes. You can generate unlimited replies by entering different content and POV inputs, making it suitable for high-volume communication and social media management.",
  },
  {
    question: "How does this tool compare to manually writing replies?",
    answer:
      "Manual reply writing can be time-consuming and inconsistent, whereas this AI tool instantly generates optimized replies based on proven communication strategies, saving time and ensuring quality.",
  },
  {
    question: "Will this tool help improve professionalism and brand voice?",
    answer:
      "Yes. The AI Reply Generator helps maintain a consistent brand voice and professional tone across all communications, strengthening credibility, trust, and audience perception.",
  },
];

const ReplyGeneratorPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [content, setContent] = useState("");
  const [pov, setPov] = useState("");

  const [replyLoading, setReplyLoading] = useState(false);
  const [replyResponse, setReplyResponse] = useState("");
  const handleReplyGenerate = async () => {
    if(!content || content.trim() === "" || !pov || pov.trim() === "") {
      toast.error("Please fill in both the content and pov fields!");
      return;
    }
    try {
      setReplyLoading(true);
      const res = await fetch("http://localhost:5001/generate/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ content, pov }),
      });
      const response = await res.json();
      setReplyResponse(response.reply);
    } catch (error) {
      console.error("Error generating Reply!:", error);
    } finally {
      setReplyLoading(false);
    }
  };

  const handleResetFields = () => {
    setContent("");
    setPov("");
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
            AI Reply Generator
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
              className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">Put the content here</Label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Content here..."
            />
          </div>
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label
              className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">
              Describe your pov here (Pov: Point of view, or what is the point
              you are trying to have here)
            </Label>
            <Textarea
              value={pov}
              onChange={(e) => setPov(e.target.value)}
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Pov here..."
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <Button
            onClick={handleReplyGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate Reply
          </Button>
          <Button
            onClick={handleResetFields}
            variant={"reply"}
            className={`w-full font-nunito cursor-pointer ${
              isDark
                ? "hover:bg-red-700/20 hover:text-white bg-gray-800/55 border-gray-600/80 text-white"
                : "hover:bg-red-700/20 hover:text-black bg-white text-black"
            } transition-all duration-200 text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
          >
            Reset All Fields
          </Button>
        </section>
        {(replyLoading || replyResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={replyResponse}
            isLoading={replyLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            💬 Complete Guide to Using the AI Reply Generator for Engagement,
            Clarity & Social Media Growth
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Reply Generator is built for{" "}
            <span className="font-bold">
              social media engagement, professional communication, and audience
              interaction
            </span>{" "}
            — without complex prompts. Simply paste the content and provide your
            point of view to generate{" "}
            <span className="font-bold">
              thoughtful, relevant, and high-impact replies
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">the content and POV fields</span>, how
            to use them effectively, and how they improve response quality,
            engagement rates, brand voice, and communication performance.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">📝 1. Content</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the message, comment, post, or conversation you want to reply to.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Paste the full text from a social media post, email, message, or
              comment to ensure the AI fully understands the context.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Enables
              accurate, relevant, and context-aware reply generation.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 2. Point of View (POV)
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies your perspective, tone, or intent behind the reply.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter brief context such as “supportive,” “professional,” “polite
              disagreement,” “customer service response,” or “brand voice:
              friendly and helpful.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Produces
              replies that match your voice, goals, and communication style.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            📈 Why This Tool Improves Engagement, Communication & Online
            Presence
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Reply Generator follows{" "}
            <span className="font-semibold text-white">
              proven communication, social media, and customer interaction best
              practices
            </span>{" "}
            to maximize results:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Higher Engagement
              </span>{" "}
              – Creates thoughtful replies that encourage interaction and
              conversation
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Brand Voice Consistency
              </span>{" "}
              – Aligns responses with your personal or brand communication style
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Professionalism</span>{" "}
              – Produces polished, respectful, and context-aware replies
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Time Efficiency</span>{" "}
              – Saves time by generating high-quality replies instantly
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern digital communication, customer support, and social media
              standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Social media engagement and community management strategies</li>
            <li className="text-2xl lg:text-base">Customer support communication best practices</li>
            <li className="text-2xl lg:text-base">Professional email and business messaging standards</li>
            <li className="text-2xl lg:text-base">Reputation management and brand trust building techniques</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Reply Generation Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum clarity, engagement, and communication performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Provide{" "}
              <span className="font-semibold text-white">
                complete and accurate content
              </span>{" "}
              for better context understanding
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                a clear point of view or tone
              </span>{" "}
              to guide the reply style
            </li>
            <li className="text-2xl lg:text-base">
              Optimize replies for{" "}
              <span className="font-semibold text-white">
                social media, emails, customer support, and professional
                communication
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Review and personalize replies to ensure{" "}
              <span className="font-semibold text-white">
                authenticity and human touch
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                engagement-driven language and emotional intelligence
              </span>{" "}
              to improve interaction rates
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={replyGeneratorFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI CTA Generator and how it can transform your CTA game."
        />
      </section>
    </div>
  );
};

export default ReplyGeneratorPage;
