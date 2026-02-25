import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import { Plus } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import FAQSection from "@/components/component/FAQSection";
import toast from "react-hot-toast";

const captionFaqs = [
  {
    question: "What is an AI Caption Generator?",
    answer:
      "An AI Caption Generator is a smart writing tool that automatically creates engaging, high-converting captions for social media posts, marketing content, and online branding. It helps users generate captions optimized for engagement, hashtags, and platform algorithms.",
  },
  {
    question: "How does an AI Caption Generator work?",
    answer:
      "The AI Caption Generator analyzes your uploaded image and caption idea, then produces context-aware, SEO-friendly captions using natural language processing and social media marketing best practices.",
  },
  {
    question: "Is this AI Caption Generator free to use?",
    answer:
      "Yes, this AI Caption Generator offers a free version with powerful features, allowing users to create professional-quality captions without any cost or subscription.",
  },
  {
    question: "Can I use this tool for Instagram captions?",
    answer:
      "Absolutely. This AI Caption Generator is optimized for Instagram captions, including hashtag suggestions, engagement-driven phrasing, and audience-focused messaging to improve reach and interaction.",
  },
  {
    question: "Does this tool generate hashtags automatically?",
    answer:
      "Yes, the AI Caption Generator includes hashtag generation to improve discoverability, reach, and algorithm visibility on platforms like Instagram, TikTok, Twitter, and LinkedIn.",
  },
  {
    question: "Can I create captions for TikTok, Facebook, and LinkedIn?",
    answer:
      "Yes, this tool supports caption creation for all major platforms, including TikTok, Facebook, LinkedIn, Twitter (X), Pinterest, and YouTube Shorts.",
  },
  {
    question: "How does this tool improve social media engagement?",
    answer:
      "The AI Caption Generator creates captions using proven engagement psychology, call-to-action strategies, and platform-specific optimization to increase likes, comments, shares, and saves.",
  },
  {
    question: "Can I customize the tone and style of captions?",
    answer:
      "Yes, users can customize tone, writing style, mood, and voice to match personal branding, business identity, or marketing goals.",
  },
  {
    question: "Is this tool useful for businesses and marketers?",
    answer:
      "Yes, marketers, businesses, influencers, agencies, and content creators use this tool to scale content production, improve branding, and increase conversion rates.",
  },
  {
    question: "Does the AI Caption Generator support multiple languages?",
    answer:
      "Yes, this AI Caption Generator supports multiple languages, enabling global content creation and international audience targeting.",
  },
  {
    question: "Can I generate captions for promotional posts and ads?",
    answer:
      "Yes, the tool is ideal for creating promotional captions, ad copy, product descriptions, and campaign messaging optimized for conversion and ROI.",
  },
  {
    question: "Is this tool suitable for influencers and creators?",
    answer:
      "Absolutely. Influencers, bloggers, and content creators use this AI Caption Generator to maintain consistent posting schedules, improve engagement, and grow their audience.",
  },
  {
    question: "Does this tool help with SEO and discoverability?",
    answer:
      "Yes, the AI Caption Generator creates keyword-rich, SEO-friendly captions and hashtags that improve content discoverability on search engines and social platforms.",
  },
  {
    question: "Can I reuse or edit the generated captions?",
    answer:
      "Yes, all generated captions are fully editable, reusable, and can be customized to match your exact posting needs and brand voice.",
  },
  {
    question:
      "Why should I use this AI Caption Generator instead of writing manually?",
    answer:
      "This tool saves time, improves consistency, enhances engagement, and delivers professionally written captions using advanced AI—making it faster and more effective than manual caption writing.",
  },
];

const CaptionGeneratorPage = () => {
  const guideRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [captionLoading, setCaptionLoading] = useState(false);
  const [captionResponse, setCaptionResponse] = useState("");

  const handleImageInput = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  const handleCaptionGenerate = async () => {
    if(!image || !formData || !formData.get("image")) {
      toast.error("Please upload an image to generate a caption!");
      return;
    }
    const formData = new FormData();
    formData.append("image", image);
    setCaptionLoading(true);
    try {
      const res = await fetch("http://localhost:5001/generate/caption", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      
      const response = await res.json();
      const caption = response.caption;
      setCaptionResponse(caption);
      setCaptionLoading(false);
    } catch (error) {
      console.error("Error generating caption:", error);
    } finally {
      setCaptionLoading(false);
    }
  };

  const handleResetFields = () => {
    setImage(null);
    setImagePreview(null);
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
            AI Caption Generator
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
              Export your social media image for reference
            </Label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              name="social-media-post-reference"
              className="hidden"
              onChange={handleImageInput}
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className={`w-full aspect-video border ${
                isDark
                  ? "bg-gray-900 text-white border-gray-600 hover:bg-gray-800"
                  : "bg-white text-black"
              } rounded-xl flex justify-center items-center cursor-pointer transition-colors duration-200 overflow-hidden`}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="socialmedia-image-reference-preview-for-ai-caption-generator"
                  className="w-full object-cover"
                />
              ) : (
                <div className="w-full flex flex-col justify-center items-center gap-[1vw]">
                  <p className="font-semibold text-xl">Add Image</p>
                  <Plus className="w-[6vw] h-[6vw] xl:w-[2vw] xl:h-[2vw]" />
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <Button
            onClick={handleCaptionGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate Caption
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
        {(captionLoading || captionResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={captionResponse}
            isLoading={captionLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            📸 Complete Guide to Using the AI Caption Generator Tool for Social
            Media Growth
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Caption Generator is built for{" "}
            <span className="font-bold">
              social media captions, post engagement, and viral content creation
            </span>{" "}
            — without needing complex prompts. Simply upload your image and
            describe your idea to generate{" "}
            <span className="font-bold">
              high-converting, hashtag-optimized, and audience-ready captions
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">every caption input field</span>, how to
            use it effectively, and how it improves post visibility, engagement
            rate, brand voice, and social media performance.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🖼️ 1. Upload Image
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Provides the visual content for caption generation.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Upload clear, high-quality images related to your post theme,
              brand, or campaign.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Enables
              accurate image context understanding and highly relevant caption
              creation.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[45%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Improves Social Media Engagement & Content
            Performance
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Caption Generator follows{" "}
            <span className="font-semibold text-white">
              social media marketing best practices
            </span>{" "}
            to ensure visibility, engagement, and audience growth:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Engagement</span> –
              Captions designed to increase likes, comments, and shares
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Visibility</span> –
              SEO-friendly captions with trending hashtags
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Branding</span> –
              Consistent voice across all platforms
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Efficiency</span> –
              Faster caption creation with high conversion impact
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              social media content creation, influencer marketing, and digital
              branding standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Instagram, Facebook, TikTok, LinkedIn, and Twitter caption best
              practices
            </li>
            <li className="text-2xl lg:text-base">
              Hashtag optimization and discoverability strategies
            </li>
            <li className="text-2xl lg:text-base">
              Audience targeting and engagement psychology
            </li>
            <li className="text-2xl lg:text-base">
              SEO-friendly social content writing standards
            </li>
          </ul>
        </div>

        <div className="w-full max-w-[45%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Caption Generation Results
          </h3>
          <p className="text-2xl lg:text-base">
            For maximum post reach, engagement, and search performance:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear, visually relevant images
              </span>{" "}
              for better caption accuracy
            </li>
            <li className="text-2xl lg:text-base">
              Include{" "}
              <span className="font-semibold text-white">
                call-to-action phrases
              </span>{" "}
              to boost engagement
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                trending hashtags and keywords
              </span>{" "}
              for discoverability
            </li>
            <li className="text-2xl lg:text-base">
              Optimize for{" "}
              <span className="font-semibold text-white">
                platform-specific posting strategies
              </span>{" "}
              (Instagram, TikTok, LinkedIn, Facebook, Twitter)
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={captionFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Caption Generator and how it can transform your social caption styling"
        />
      </section>
    </div>
  );
};

export default CaptionGeneratorPage;
