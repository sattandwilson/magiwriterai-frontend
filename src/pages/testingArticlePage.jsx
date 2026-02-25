import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { useRef, useState } from "react";
import ArticleOutputWindow from "@/components/outputScreen/Article";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import FAQSection from "@/components/component/FAQSection";
import toast from "react-hot-toast";

const articleWritingToolFaqs = [
  {
    question: "What is this AI writing tool?",
    answer:
      "This tool helps you write complete articles by filling out simple fields instead of typing long prompts. You choose what you want, and the AI does the rest.",
  },
  {
    question: "How do keywords help my article?",
    answer:
      "Keywords tell the AI what your article is about so it can write content that shows up better on Google.",
  },
  {
    question: "What is the difference between keywords and SEO keywords?",
    answer:
      "Keywords set the main topic, while SEO keywords add extra related words to help your article rank for more searches.",
  },
  {
    question: "Why is the title important?",
    answer:
      "The title is what people see first on Google. A good title makes more people click and read your article.",
  },
  {
    question: "What does the meta description do?",
    answer:
      "It creates the short text under your link on Google, which helps people understand your article before clicking.",
  },
  {
    question: "How does word count affect my article?",
    answer:
      "Longer articles usually explain things better and are more likely to rank higher on search engines.",
  },
  {
    question: "Why should I include FAQs in my article?",
    answer:
      "FAQs help answer common questions and make your article easier to understand for both readers and search engines.",
  },
  {
    question: "What is structural flow?",
    answer:
      "Structural flow controls how your article is organized so it is easy to read and easy for Google to understand.",
  },
  {
    question: "Why should I include tables and lists?",
    answer:
      "Tables and lists make your content clearer and easier to scan, especially on mobile devices.",
  },
  {
    question: "How does choosing a target audience help?",
    answer:
      "When you choose an audience, the AI writes in a way that matches the reader, making the content more helpful and engaging.",
  },
  {
    question: "What does 'Include Human Touch' mean?",
    answer:
      "It makes the writing sound natural and friendly instead of robotic, so people enjoy reading it more.",
  },
  {
    question: "Why are external links useful?",
    answer:
      "External links show that your content is connected to trusted sources, which helps build trust with readers and search engines.",
  },
  {
    question: "What does article tone and writing standard control?",
    answer:
      "They decide how formal, friendly, or professional your article sounds and how advanced the language should be.",
  },
  {
    question: "Do images and videos really help?",
    answer:
      "Yes, they make your article more interesting and keep people on the page longer, which helps with rankings.",
  },
  {
    question: "How does keyword repetition affect my article?",
    answer:
      "It makes sure your keywords appear enough times to help SEO, but not so much that it feels unnatural.",
  },
];

const staticMd = `# Rising Demand of AI Datacenters Are Causing Shortage in Consumer PC Components

![AI data center server racks with glowing blue lights and magnified HBM memory chips, illustrating high demand.](https://www.azuraconsultancy.com/wp-content/uploads/2024/07/AI-Data-Center.webp)

## Introduction
The rise of Artificial Intelligence (AI) has redefined software capabilities globally. Now, this transformative wave is significantly impacting the hardware landscape, particularly for \`consumer PC components\`. We are witnessing a monumental shift in the \`memory\` market. \`AI datacenters\` have an insatiable demand for cutting-edge, high-performance \`HBM\` (High Bandwidth Memory). This specialized \`memory\` is crucial for faster \`AI training and development\`.

However, this surging demand is causing a profound \`shortage\` in the availability of \`consumer memory\` components. Key manufacturers like \`Micron\`, \`Samsung\`, and \`SK Hynix\` are strategically pivoting. They are dedicating more resources to the highly profitable \`HBM\` production. This redirection directly impacts the supply chain for everyday \`DDR4\` and \`DDR5 RAM\`, \`SSDs\`, and even \`GPUs\`. Consequently, we are seeing \`PC\` \`memory crisis\` with prices skyrocketing. This article will explain why this market dynamic is occurring and what it means for your next \`computer\` upgrade. 

## The AI Revolution's Insatiable Demand for HBM
The rapid advancement of \`AI\` technologies, especially large language models from entities like \`OpenAI\`, requires unprecedented computational power. Training these sophisticated models involves processing colossal datasets at lightning speeds. This is where \`HBM\` becomes indispensable.

Traditional \`DDR RAM\`, while adequate for most \`consumer\` applications, simply cannot match \`HBM\`'s incredible bandwidth. \`HBM\` is designed to be stacked vertically, close to the processor or \`GPU\`. This architecture significantly reduces data travel distance, enabling far quicker data access. For companies like \`Nvidia\`, whose \`GPUs\` power many \`AI datacenters\`, integrating \`HBM\` is critical for delivering the performance demanded by \`AI development\`. The need for faster data processing in \`AI training\` means \`HBM\` is now a strategic imperative, driving its demand sky-high. 

## Memory Manufacturers Pivot: Profits Over PCs
The economic realities of \`memory\` production are stark. Manufacturing \`HBM\` for high-end \`AI datacenters\` offers substantially higher profit margins compared to producing standard \`DDR4\` or \`DDR5 RAM\` for \`consumer PCs\`. This fundamental difference has led to a strategic shift among the world's leading \`memory\` manufacturers.

Companies like \`Micron\`, \`Samsung\`, and \`SK Hynix\` are reallocating their manufacturing capacity and research and development budgets. They are prioritizing the lucrative \`HBM\` market. For instance, \`Micron\` has reportedly streamlined its focus, even discontinuing its \`consumer-facing\` brand ‘Crucial’ to concentrate on \`HBM\` production. This move highlights a broader industry trend where profitability from \`business supply\` outweighs the dwindling margins from \`consumer memory\`. This intentional pivot means fewer resources are dedicated to meeting \`consumer\` \`PC component\` needs.

| Feature            | HBM (High Bandwidth Memory)                                | DDR5 (Double Data Rate 5)                                |
| :----------------- | :--------------------------------------------------------- | :------------------------------------------------------- |
| **Typical Use**    | AI Accelerators, High-Performance Computing (HPC), GPUs    | Consumer PCs, Workstations, Entry-level Servers          |
| **Bandwidth**      | Extremely High (e.g., 1 TB/s or more per stack)          | High (e.g., 48-80 GB/s per stick)                      |
| **Architecture**   | Stacked vertically, close to CPU/GPU                       | Horizontal modules (DIMMs)                               |
| **Power Cons.**    | Lower per bit transfer due to close proximity              | Higher per bit transfer due to longer traces             |
| **Profitability**  | Very High for Manufacturers                              | Moderate for Manufacturers                               |

## The Consumer PC Component Crisis Unfolds
The strategic shift by \`memory\` manufacturers has created a direct and severe \`shortage\` in the \`consumer PC component\` market. The ripple effect is being felt across India and globally. Components that rely heavily on standard \`memory\` are experiencing unprecedented price increases and reduced availability.

Specifically, the prices of \`DDR5 RAM\` and \`DDR4 RAM\` modules have reportedly surged by 300% to 400% in a mere two months. \`SSDs\` (Solid State Drives), which also rely on \`NAND flash memory\` (often produced by the same manufacturers), are following a similar upward trend. Even \`GPUs\` and other \`electronics\` that incorporate dedicated \`memory\` are affected by this \`shortage\`.

This price surge means that building or upgrading a \`computer\` has become significantly more expensive for the average consumer.

Key Affected \`PC Components\` and Price Surges:
*   **\`DDR5 RAM\`:** Experiencing the most dramatic price increases due to its modern architecture and demand.
*   **\`DDR4 RAM\`:** Prices for the still-dominant \`DDR4\` standard have also climbed sharply, catching many off guard.
*   **\`SSDs\`:** Both SATA and NVMe \`SSDs\` are seeing considerable price hikes.
*   **\`GPUs\`:** While \`GPU\` prices aren't solely determined by \`memory\` \`shortage\`, the scarcity and increased cost of integrated \`VRAM\` components contribute to overall higher prices.
*   **Other \`Electronics\`:** Any device requiring substantial \`memory\` for its operation faces supply chain pressure.

> "The shift of global \`memory\` production towards \`HBM\` for \`AI\` is an undeniable market force. While profitable for manufacturers, it inadvertently creates a profound challenge for \`consumer PC\` affordability and accessibility, forcing a re-evaluation of upgrade cycles for many."

## What This Means for Indian PC Enthusiasts and Businesses
The global \`memory crisis\` has a direct and tangible impact on the Indian market. For \`PC\` enthusiasts, students, gamers, and small businesses in India, the soaring prices of \`RAM\` and \`SSDs\` pose a significant challenge. Building a new \`computer\` or upgrading an existing one on a budget has become considerably harder. The dream of affordable, high-performance \`PCs\` is currently facing headwinds.

Consumers in India might need to adjust their expectations. Delaying non-essential upgrades could be a prudent strategy. Exploring the used component market, though with caution, might offer some relief. Focusing on maximizing the efficiency of existing \`memory\` or choosing \`computer\` configurations with slightly less \`RAM\` but optimized for current needs could also be considered. Staying informed about market trends and understanding the reasons behind these price shifts empowers better purchasing decisions. For more insights into the global chip market, you can refer to [market analysis reports](https://www.example.com/global-chip-market-analysis).

## Conclusion
The \`AI\` revolution, while propelling technological advancement, is concurrently reshaping the global hardware supply chain. The massive demand for high-bandwidth \`HBM\` from \`AI datacenters\` has prompted major \`memory\` manufacturers like \`Micron\`, \`Samsung\`, and \`SK Hynix\` to strategically prioritize \`HBM\` production due to its higher profitability. This pivot has directly resulted in a severe \`shortage\` and unprecedented price increases for \`consumer PC components\`, including \`DDR4\`, \`DDR5 RAM\`, and \`SSDs\`. Understanding this dynamic is crucial for navigating the current \`memory crisis\`.

**CTA: Stay informed about market trends and plan your \`PC\` upgrades wisely, considering the long-term implications of this industry shift.**

[VIDEO REFERENCE: Understanding the Global RAM and SSD Price Hike: Why Your PC Components are More Expensive]

## FAQ
**Q: Why are \`RAM\` and \`SSD\` prices increasing so rapidly?**
**A:** Prices are increasing due to a significant shift in production focus by major \`memory\` manufacturers like \`Micron\`, \`Samsung\`, and \`SK Hynix\`. They are prioritizing highly profitable \`HBM\` (\`High Bandwidth Memory\`) for \`AI datacenters\` over traditional \`consumer PC components\`.

**Q: What is \`HBM\` and why is \`AI\` demanding it?**
**A:** \`HBM\` (High Bandwidth Memory) is a specialized type of \`memory\` that offers extremely high data transfer rates. \`AI\` models, especially for \`training and development\` in \`datacenters\`, require this fast \`memory\` to process vast amounts of data efficiently, making \`HBM\` crucial for their performance.

**Q: How does this \`shortage\` affect \`PC\` users in India?**
**A:** \`PC\` users in India face significantly higher costs for \`DDR4\` and \`DDR5 RAM\`, \`SSDs\`, and even some \`GPUs\`. This makes building new \`computers\` or upgrading existing ones more expensive and challenging, impacting budget-conscious consumers.

**Q: Are all \`computer components\` affected by this \`memory crisis\`?**
**A:** The primary impact is on \`RAM\` (DDR4, DDR5) and \`SSDs\`. However, any \`electronics\` or \`GPUs\` that incorporate substantial amounts of standard \`memory\` components can also experience supply chain pressures and price increases as a secondary effect.

**Q: What can consumers do amidst this \`shortage\` and \`price increase\`?**
**A:** Consumers can consider delaying non-essential \`PC\` upgrades, exploring the used component market cautiously, or optimizing their current \`computer\` setup for efficiency. Staying informed about market trends is also vital for making informed purchasing decisions.

**Q: Did \`Micron\` really stop making \`consumer memory\`?**
**A:** While \`Micron\` hasn't entirely ceased \`consumer memory\` production, they have significantly reallocated resources and reportedly shut down their \`consumer-facing\` 'Crucial' brand. Their strategic focus has clearly shifted towards \`HBM\` for \`AI\`, leading to reduced availability and increased prices for \`consumer\` products.`;

const ArticleTestingPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [articleForm, setArticleForm] = useState({
    keywords: "",
    title: "",
    country: "",
    pointOfView: "",
    language: "Language",
    articleType: "Article Type",
    wordCount: "Word Count",
    sentenceWord: "Words In Sentence",
    tone: "Article Tone",
    standard: "Standard",
    table: "Include Tables",
    list: "Include Lists",
    quote: "Include Quotes",
    ownWritingStyle: "",
    aiImage: "Include AI Image",
    imagePosition: "Image position",
    youtubeVideo: "YouTube Video",
    videoPosition: "Video position",
    seoKeywords: "",
    metaDescription: "",
    structuralFlow: "",
    includeFaq: "Include FAQ",
    includeExternalLink: "Include External Links",
    audience: "Targetted Audience",
    includeHumanTouch: "Include Human Touch",
  });

  const [responseMarkdown, setResponseMarkdown] = useState("");
  const [loadingResponse, setLoadingResponse] = useState(false);
  const outputWindowRef = useRef(null);
  const handleGenerateArticle = async () => {
    if(articleForm.keywords.trim() === "" || articleForm.title.trim() === "" || articleForm.pointOfView.trim() === "" || articleForm.language === "Language" || articleForm.articleType === "Article Type" || articleForm.wordCount === "Word Count" || articleForm.sentenceWord === "Words In Sentence" || articleForm.tone === "Article Tone" || articleForm.standard === "Standard" || articleForm.table === "Include Tables" || articleForm.list === "Include Lists" || articleForm.quote === "Include Quotes" || articleForm.aiImage === "Include AI Image" || articleForm.imagePosition === "Image position" || articleForm.youtubeVideo === "YouTube Video" || articleForm.videoPosition === "Video position" || articleForm.includeFaq === "Include FAQ" || articleForm.includeExternalLink === "Include External Links" || articleForm.audience.trim() === "" || articleForm.includeHumanTouch === "Include Human Touch" || articleForm.seoKeywords.trim() === "" || articleForm.metaDescription.trim() === "") {
      toast.error("Please fill all the non optional fields!");
      return;
    }
    // Function to handle article generation
    setResponseMarkdown("");
    handleResetFields();
    if (outputWindowRef.current) {
      outputWindowRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    try {
      setLoadingResponse(true);
      const res = await fetch("http://localhost:5001/generate/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(articleForm),
      });
      const response = await res.json();
      setResponseMarkdown(response.article);
      console.log("Received article:", response.article);
    } catch (error) {
      console.error("Error generating article:", error);
    } finally {
      setLoadingResponse(false);
    }
  };

  const handleResetFields = () => {
    // Function to reset all fields
    setArticleForm({
      keywords: "",
      title: "",
      country: "",
      pointOfView: "",
      language: "Language",
      articleType: "Article Type",
      wordCount: "Word Count",
      sentenceWord: "Words In Sentence",
      tone: "Article Tone",
      standard: "Standard",
      table: "Include Tables",
      list: "Include Lists",
      quote: "Include Quotes",
      ownWritingStyle: "",
      aiImage: "Include AI Image",
      imagePosition: "Image position",
      youtubeVideo: "YouTube Video",
      videoPosition: "Video position",
      seoKeywords: "",
      metaDescription: "",
      structuralFlow: "",
      includeFaq: "Include FAQ",
      includeExternalLink: "Include External Links",
      audience: "Targetted Audience",
      includeHumanTouch: "Include Human Touch",
    });
  };

  return (
    <div className="w-screen flex flex-col items-center gap-[3vw] mt-[1vw] text-white">
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
            AI Article Writer
          </AuroraText>
        </h1>
        <h2 className="max-w-[60%] text-center font-semibold text-2xl md:text-4xl lg:text-2xl font-nunito text-gray-300">
          Create fully optimized, human-quality article articles in seconds
          using structured inputs for keywords, tone, audience, SEO, images,
          tables, FAQs, and more—no prompt writing required.
        </h2>
      </header>
      <section className="w-full flex flex-col items-center gap-[1vw]">
        <p className="max-w-[40%] text-center text-xl md:text-3xl lg:text-2xl font-nunito text-gray-100">
          Want to know how you could leverage Magiwriter's AI Article Writer to
          generate top class industry grade articles with best SEO techniques?
          Look no further, just check down bellow.
        </p>
        <ShinyButton onClick={()=>guideRef.current.scrollIntoView({behavior: "smooth"})} className={"bg-white/15 md:text-4xl lg:text-sm m-0"}>
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
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">
              Main Details
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw] text-lg md:text-3xl lg:text-base">
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="message"
              >
                Main Keywords
              </Label>
              <Textarea
                value={articleForm.keywords}
                onChange={(e) =>
                  setArticleForm((prev) => ({
                    ...prev,
                    keywords: e.target.value,
                  }))
                }
                className={`border h-[14vw] xl:h-[5vw] ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                placeholder="Type your keywords here..."
              />
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-start items-start xl:items-end gap-[2vw] xl:gap-[1vw]">
              <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                <Label
                  className={"text-xl md:text-3xl lg:text-base"}
                  htmlFor="title"
                >
                  Title
                </Label>
                <Input
                  value={articleForm.title}
                  onChange={(e) =>
                    setArticleForm((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                      : "bg-white text-black placeholder:text-gray-400"
                  } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                  type={"text"}
                  placeholder="Put your title here..."
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="title"
              >
                Targetted Country (Optional)
              </Label>
              <Input
                value={articleForm.country}
                onChange={(e) =>
                  setArticleForm((prev) => ({
                    ...prev,
                    country: e.target.value,
                  }))
                }
                className={`border shadow-lg ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                type={"text"}
                placeholder="The country you want to focus mainly..."
              />
            </div>
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="message"
              >
                Point Of View
              </Label>
              <Textarea
                value={articleForm.pointOfView}
                onChange={(e) =>
                  setArticleForm((prev) => ({
                    ...prev,
                    pointOfView: e.target.value,
                  }))
                }
                className={`border h-[14vw] xl:h-[5vw] ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                placeholder="Explain the point of view of this article little bit for better context..."
              />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">
              Styling Details
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="language"
              >
                Language:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.language}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        language: e.target.innerText,
                      }))
                    }
                  >
                    American English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        language: e.target.innerText,
                      }))
                    }
                  >
                    British English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        language: e.target.innerText,
                      }))
                    }
                  >
                    Indian English
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        language: e.target.innerText,
                      }))
                    }
                  >
                    Hindi
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        language: e.target.innerText,
                      }))
                    }
                  >
                    Bengali
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="type"
              >
                Article Type:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.articleType}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        articleType: e.target.innerText,
                      }))
                    }
                  >
                    None
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        articleType: e.target.innerText,
                      }))
                    }
                  >
                    How To
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        articleType: e.target.innerText,
                      }))
                    }
                  >
                    Listicle
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        articleType: e.target.innerText,
                      }))
                    }
                  >
                    Product Review
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        articleType: e.target.innerText,
                      }))
                    }
                  >
                    Comparison
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="Title"
              >
                Word Count:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.wordCount}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        wordCount: e.target.innerText,
                      }))
                    }
                  >
                    Very Small (50-100 words)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        wordCount: e.target.innerText,
                      }))
                    }
                  >
                    Small (100-200 words)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        wordCount: e.target.innerText,
                      }))
                    }
                  >
                    Medium (200-400 words)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        wordCount: e.target.innerText,
                      }))
                    }
                  >
                    Large (400-1000 words)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        wordCount: e.target.innerText,
                      }))
                    }
                  >
                    Extra Large (1000-2500 words)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="Title"
              >
                Word In Sentence:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.sentenceWord}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        sentenceWord: e.target.innerText,
                      }))
                    }
                  >
                    Small (5-10 words)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        sentenceWord: e.target.innerText,
                      }))
                    }
                  >
                    Medium (10-15 words)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        sentenceWord: e.target.innerText,
                      }))
                    }
                  >
                    Large (15-20 words)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        sentenceWord: e.target.innerText,
                      }))
                    }
                  >
                    Extra Large (20-50 words)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="type"
              >
                Tone:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.tone}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        tone: e.target.innerText,
                      }))
                    }
                  >
                    Professional
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        tone: e.target.innerText,
                      }))
                    }
                  >
                    Informational
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        tone: e.target.innerText,
                      }))
                    }
                  >
                    Motivational
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        tone: e.target.innerText,
                      }))
                    }
                  >
                    Friendly
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        tone: e.target.innerText,
                      }))
                    }
                  >
                    Humorous
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        tone: e.target.innerText,
                      }))
                    }
                  >
                    Pragmatic
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="type"
              >
                Standard:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.standard}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        standard: e.target.innerText,
                      }))
                    }
                  >
                    5th Grade
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        standard: e.target.innerText,
                      }))
                    }
                  >
                    6th Grade
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        standard: e.target.innerText,
                      }))
                    }
                  >
                    7th Grade
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        standard: e.target.innerText,
                      }))
                    }
                  >
                    8th Grade
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        standard: e.target.innerText,
                      }))
                    }
                  >
                    9th to 10th Grade
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        standard: e.target.innerText,
                      }))
                    }
                  >
                    11th to 12th Grade
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        standard: e.target.innerText,
                      }))
                    }
                  >
                    Undergraduate Level
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        standard: e.target.innerText,
                      }))
                    }
                  >
                    Postgraduate Level
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="Title"
              >
                Tables:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.table}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        table: e.target.innerText,
                      }))
                    }
                  >
                    Yes
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        table: e.target.innerText,
                      }))
                    }
                  >
                    No
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="Title"
              >
                Lists:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.list}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        list: e.target.innerText,
                      }))
                    }
                  >
                    Yes
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        list: e.target.innerText,
                      }))
                    }
                  >
                    No
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="Title"
              >
                Quotes:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.quote}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        quote: e.target.innerText,
                      }))
                    }
                  >
                    Yes
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        quote: e.target.innerText,
                      }))
                    }
                  >
                    No
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label
              className={"text-xl md:text-3xl lg:text-base"}
              htmlFor="message"
            >
              Give your own writing style for results according to your writing
              style (Optional)
            </Label>
            <Textarea
              value={articleForm.ownWritingStyle}
              onChange={(e) =>
                setArticleForm((prev) => ({
                  ...prev,
                  ownWritingStyle: e.target.value,
                }))
              }
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="Write here in your style and make AI to follow you..."
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">
              Include Images and Videos
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="aiImage"
              >
                AI Generated Image:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.aiImage}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        aiImage: e.target.innerText,
                      }))
                    }
                  >
                    Yes
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        aiImage: e.target.innerText,
                      }))
                    }
                  >
                    No
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="aiImage"
              >
                Image Position:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.imagePosition}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        imagePosition: e.target.innerText,
                      }))
                    }
                  >
                    Not Valid
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        imagePosition: e.target.innerText,
                      }))
                    }
                  >
                    Before content
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        imagePosition: e.target.innerText,
                      }))
                    }
                  >
                    After content
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="aiImage"
              >
                YouTube Video:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.youtubeVideo}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        youtubeVideo: e.target.innerText,
                      }))
                    }
                  >
                    Yes
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        youtubeVideo: e.target.innerText,
                      }))
                    }
                  >
                    No
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="aiImage"
              >
                Video Position:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.videoPosition}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        videoPosition: e.target.innerText,
                      }))
                    }
                  >
                    Not Valid
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        videoPosition: e.target.innerText,
                      }))
                    }
                  >
                    Before Content
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        videoPosition: e.target.innerText,
                      }))
                    }
                  >
                    After Content
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">
              SEO Details
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-[2vw]">
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="seoKeyword"
              >
                SEO Keywords to include in Article
              </Label>
              <Textarea
                value={articleForm.seoKeywords}
                onChange={(e) =>
                  setArticleForm((prev) => ({
                    ...prev,
                    seoKeywords: e.target.value,
                  }))
                }
                className={`border h-[14vw] xl:h-[5vw] ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                id="seoKeyword"
                placeholder="Write or edit keywords here..."
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-[2vw]">
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="seoKeyword"
              >
                SEO Meta Description
              </Label>
              <div className="w-full flex flex-col xl:flex-row justify-start items-start xl:items-end gap-[2vw]">
                <Textarea
                  value={articleForm.metaDescription}
                  onChange={(e) =>
                    setArticleForm((prev) => ({
                      ...prev,
                      metaDescription: e.target.value,
                    }))
                  }
                  className={`border h-[14vw] xl:h-[5vw] ${
                    isDark
                      ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                      : "bg-white text-black placeholder:text-gray-400"
                  } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                  placeholder="Write or edit meta description here..."
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">
              Additional Details
            </p>
          </div>
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label
              className={"text-xl md:text-3xl lg:text-base"}
              htmlFor="structureFlow"
            >
              Explain AI the structural flow of your article (Optional)
            </Label>
            <Textarea
              value={articleForm.structuralFlow}
              onChange={(e) =>
                setArticleForm((prev) => ({
                  ...prev,
                  structuralFlow: e.target.value,
                }))
              }
              className={`border h-[14vw] xl:h-[5vw] ${
                isDark
                  ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                  : "bg-white text-black placeholder:text-gray-400"
              } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              id="structureFlow"
              placeholder="Explain the structural flow as you wish..."
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="aiImage"
              >
                Include FAQ:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.includeFaq}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        includeFaq: e.target.innerText,
                      }))
                    }
                  >
                    Yes
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        includeFaq: e.target.innerText,
                      }))
                    }
                  >
                    No
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="aiImage"
              >
                Include External Links:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.includeExternalLink}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        includeExternalLink: e.target.innerText,
                      }))
                    }
                  >
                    Yes
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        includeExternalLink: e.target.innerText,
                      }))
                    }
                  >
                    No
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="aiImage"
              >
                Target Audience:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.audience}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        audience: e.target.innerText,
                      }))
                    }
                  >
                    children
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        audience: e.target.innerText,
                      }))
                    }
                  >
                    Adults
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        audience: e.target.innerText,
                      }))
                    }
                  >
                    Older Gen
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label
                className={"text-xl md:text-3xl lg:text-base"}
                htmlFor="aiImage"
              >
                Include Human Touch:
              </Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {articleForm.includeHumanTouch}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80 text-white"
                      : "bg-white border-gray-400/15 text-black"
                  }`}
                >
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        includeHumanTouch: e.target.innerText,
                      }))
                    }
                  >
                    Yes
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setArticleForm((prev) => ({
                        ...prev,
                        includeHumanTouch: e.target.innerText,
                      }))
                    }
                  >
                    No
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] md:gap-[2vw] lg:gap-[3vw] xl:gap-[1vw]">
          <Button
            disabled={loadingResponse}
            onClick={handleGenerateArticle}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            {loadingResponse ? (
              <>
                <Spinner /> "Generating"
              </>
            ) : (
              "Generate Article"
            )}
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
        {(loadingResponse || responseMarkdown) && (
        <ArticleOutputWindow
          articleMarkdown={responseMarkdown}
          isLoading={loadingResponse}
          isDark={isDark}
          />
        )}
        {/* Zero-size scroll target */}
        <div
          ref={outputWindowRef}
          className="w-0 h-0 hidden overflow-hidden"
        ></div>
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            📘 Complete Guide to Using the AI Article Writer Tool for Maximum
            Results
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Article Writer is designed for{" "}
            <span className="font-bold">
              speed, convenience, and professional-quality content creation
            </span>
            — without requiring you to write prompts manually. By simply filling
            out structured fields, you can generate{" "}
            <span className="font-bold">
              SEO-optimized, audience-targeted, high-performing article posts
            </span>{" "}
            in minutes.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">every input field</span>, how to use it
            effectively, and how it impacts content quality, SEO, and search
            engine rankings.
          </p>
        </div>
        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔑 1. Keywords
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the main topic and SEO focus of the article.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter primary and secondary keywords separated by commas.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Helps search engines understand your content and improves ranking
              for targeted queries.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🏷️ 2. Title
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the article headline.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use a compelling, keyword-rich title with emotional or
              problem-solving language.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Strong titles improve click-through rates (CTR) from Google search
              results.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🌍 3. Country
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Localizes content for regional audiences.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Select the target country for location-specific language,
              references, and SEO relevance.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves geo-targeted search visibility.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40  p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👁️ 4. Point of View
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Determines narrative voice (first person, second person, third
              person).
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use second person (“you”) for articles, first person for personal
              stories, third person for reports.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🌐 5. Language
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the language of the article.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose the audience’s primary language for maximum reach and
              engagement.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📝 6. Article Type
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the article format (informational, listicle, how-to, review,
              opinion, etc.).
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Helps structure content according to search intent (informational,
              transactional, navigational).
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📏 7. Word Count
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls article length.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li className="text-2xl lg:text-base">
                800–1200 words → Short articles
              </li>
              <li className="text-2xl lg:text-base">
                1500–2500 words → SEO-focused content
              </li>
              <li className="text-2xl lg:text-base">
                3000+ words → Pillar content
              </li>
            </ul>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ✍️ 8. Words in Sentence
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls sentence complexity and readability.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use shorter sentences for articles and web content to improve UX
              and readability scores.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎭 9. Article Tone
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              emotional and stylistic tone (professional, casual, persuasive,
              friendly, etc.).
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves engagement metrics like time-on-page and bounce rate.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📐 10. Standard
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls writing quality level (basic, intermediate, professional,
              academic).
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use “Professional” or “Expert” for business and SEO articles.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📊 11. Include Tables
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              structured data for comparisons, pricing, steps, or features.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves content scannability and eligibility for rich snippets.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📋 12. Include Lists
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              bullet points or numbered lists.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves readability and featured snippet potential.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              💬 13. Include Quotes
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              authoritative or inspirational quotes.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Increases content credibility and trust signals.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧠 14. Own Writing Style
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Allows
              users to define a custom writing voice or style.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Add brand voice guidelines or sample tone instructions for
              consistency.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🖼️ 15. Include AI Image
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              AI-generated images to enhance visual appeal.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves engagement and supports image SEO when paired with alt
              text.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📍 16. Image Position
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls where images appear in the article.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Place images after headings for better UX and layout balance.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎥 17. YouTube Video
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Embeds
              a relevant YouTube video.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Increases dwell time and content depth signals.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📌 18. Video Position
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls video placement within the article.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔍 19. SEO Keywords
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              additional ranking keywords beyond the main topic.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use long-tail keywords, semantic keywords, and related search
              terms.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔢 20. Keyword Quantity
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              how many keywords the AI should include.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Helps maintain natural keyword density.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔁 21. Keyword Repetition Count
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls keyword frequency.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Keep repetition natural to avoid keyword stuffing penalties.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧾 22. Meta Description
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Generates a search engine snippet summary.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Directly affects CTR from Google search results.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧱 23. Structural Flow
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              article organization (intro → headings → subheadings →
              conclusion).
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves readability, content hierarchy, and crawlability.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ❓ 24. Include FAQ
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds a
              frequently asked questions section.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Increases chances of appearing in People Also Ask and featured
              snippets.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔗 25. Include External Links
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              authoritative outbound links.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves trust signals and topical relevance.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 26. Targeted Audience
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Tailors
              content to a specific user group (students, professionals,
              marketers, beginners, etc.).
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves content relevance and user satisfaction.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ❤️ 27. Include Human Touch
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Makes
              content sound more natural, conversational, and emotionally
              engaging.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves engagement metrics and reduces bounce rate.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Improves SEO & Rankings
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Article Writer follows{" "}
            <span className="font-semibold text-white">
              Google’s E-E-A-T principles
            </span>
            :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Experience</span> –
              Real-world tone and examples
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Expertise</span> –
              Structured, accurate, in-depth writing
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Authoritativeness
              </span>{" "}
              – External links, quotes, tables
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Trustworthiness</span>{" "}
              – Humanized, well-organized content
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              modern SEO best practices
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Semantic keyword usage</li>
            <li className="text-2xl lg:text-base">
              Search intent optimization
            </li>
            <li className="text-2xl lg:text-base">Rich content formatting</li>
            <li className="text-2xl lg:text-base">
              UX-driven content structure
            </li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tip for Best Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum SEO performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                primary + long-tail keywords
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Enable{" "}
              <span className="font-semibold text-white">
                FAQs, tables, lists, and human touch
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Add{" "}
              <span className="font-semibold text-white">
                meta descriptions and external links
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Choose{" "}
              <span className="font-semibold text-white">
                professional tone + structured flow
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Target a{" "}
              <span className="font-semibold text-white">
                specific audience
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={articleWritingToolFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Article Writer and how it can transform your article and article writing workflow"
        />
      </section>
    </div>
  );
};

export default ArticleTestingPage;
