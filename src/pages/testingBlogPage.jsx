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
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import FAQSection from "@/components/component/FAQSection";
import ArticleOutputWindow from "@/components/outputScreen/Article";
import toast from "react-hot-toast";

const blogWriterFaqs = [
  {
    question: "What is an AI blog writer?",
    answer:
      "An AI blog writer helps you create complete blog posts by filling out simple fields like topic, keywords, and tone, without writing long prompts.",
  },
  {
    question: "How is a blog writer different from an article writer?",
    answer:
      "A blog writer focuses more on casual tone, engagement, and reader connection, while articles are usually more formal and informational.",
  },
  {
    question: "How do keywords help my blog rank on Google?",
    answer:
      "Keywords tell search engines what your blog is about so it can appear when people search for related topics.",
  },
  {
    question: "Why should I choose a blog tone?",
    answer:
      "Blog tone helps your writing sound friendly, relatable, or professional, depending on who your readers are.",
  },
  {
    question: "What is the benefit of choosing a target audience?",
    answer:
      "When you select an audience, the blog is written in a way that feels more personal and useful to the reader.",
  },
  {
    question: "Does word count matter for blog SEO?",
    answer:
      "Yes, longer blogs usually explain topics better and keep readers on the page longer, which helps with rankings.",
  },
  {
    question: "Why is the blog title important?",
    answer:
      "A strong title makes people want to click your blog when they see it in search results or on social media.",
  },
  {
    question: "What does the meta description do for blogs?",
    answer:
      "It creates the short summary shown on Google, helping users understand what your blog is about before clicking.",
  },
  {
    question: "How does structural flow improve a blog?",
    answer:
      "Good structure makes your blog easy to read by organizing it into clear sections with headings and smooth flow.",
  },
  {
    question: "Why should I include FAQs in my blog?",
    answer:
      "FAQs help answer common questions and improve your chances of appearing in Google’s featured results.",
  },
  {
    question: "What does 'Include Human Touch' mean for blogs?",
    answer:
      "It makes the blog sound natural and friendly, like it was written by a real person instead of a machine.",
  },
  {
    question: "Do images help blog SEO?",
    answer:
      "Yes, images make blogs more engaging and help readers stay longer on the page.",
  },
  {
    question: "Why should I add videos to blog posts?",
    answer:
      "Videos keep readers engaged and increase time spent on the page, which is good for search ranking.",
  },
  {
    question: "How do external links help my blog?",
    answer:
      "External links show that your blog is connected to trusted sources, which helps build credibility.",
  },
  {
    question: "Is this blog writer good for beginners?",
    answer:
      "Yes, it is designed so anyone can create blogs easily without technical or writing experience.",
  },
];

const BlogTestingPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [blogForm, setBlogForm] = useState({
    keywords: "",
    title: "",
    country: "",
    pointOfView: "",
    language: "Language",
    blogType: "Blog Type",
    wordCount: "Word Count",
    sentenceWord: "Words In Sentence",
    tone: "Blog Tone",
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
  const handleGenerateBlog = async () => {
    if(blogForm.keywords.trim() === "" || blogForm.title.trim() === "" || blogForm.pointOfView.trim() === "" || blogForm.language === "Language" || blogForm.blogType === "Blog Type" || blogForm.wordCount === "Word Count" || blogForm.sentenceWord === "Words In Sentence" || blogForm.tone === "Blog Tone" || blogForm.standard === "Standard" || blogForm.table === "Include Tables" || blogForm.list === "Include Lists" || blogForm.quote === "Include Quotes" || blogForm.aiImage === "Include AI Image" || blogForm.imagePosition === "Image position" || blogForm.youtubeVideo === "YouTube Video" || blogForm.videoPosition === "Video position" || blogForm.includeFaq === "Include FAQ" || blogForm.includeExternalLink === "Include External Links" || blogForm.audience.trim() === "" || blogForm.includeHumanTouch === "Include Human Touch" || blogForm.metaDescription.trim() === "" || blogForm.seoKeywords.trim() === "") {
      toast.error("Please fill all the non optional fields!");
      return;
    }
    // Function to handle blog generation
    if (outputWindowRef.current) {
      outputWindowRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    try {
      setLoadingResponse(true);
      const res = await fetch("/api/generate/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(blogForm),
      });
      const response = await res.json();
      setResponseMarkdown(response.blog);
    } catch (error) {
      console.error("Error generating blog:", error);
    } finally {
      setLoadingResponse(false);
    }
  };

  const handleResetFields = () => {
    // Function to reset all fields
    setBlogForm({
      keywords: "",
      title: "",
      country: "",
      pointOfView: "",
      language: "Language",
      blogType: "Blog Type",
      wordCount: "Word Count",
      sentenceWord: "Words In Sentence",
      tone: "Blog Tone",
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
            AI Blog Writer
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
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Main Details</p>
          </div>
          <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw] text-lg md:text-3xl lg:text-base">
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">Main Keywords</Label>
              <Textarea
                value={blogForm.keywords}
                onChange={(e) =>
                  setBlogForm((prev) => ({
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
                <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="title">Title</Label>
                <Input
                  value={blogForm.title}
                  onChange={(e) =>
                    setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="title">Targetted Country (Optional)</Label>
              <Input
                value={blogForm.country}
                onChange={(e) =>
                  setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">Point Of View</Label>
              <Textarea
                value={blogForm.pointOfView}
                onChange={(e) =>
                  setBlogForm((prev) => ({
                    ...prev,
                    pointOfView: e.target.value,
                  }))
                }
                className={`border h-[14vw] xl:h-[5vw] ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                placeholder="Explain the point of view of this blog little bit for better context..."
              />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Styling Details</p>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="language">Language:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.language}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="type">Blog Type:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.blogType}
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
                      setBlogForm((prev) => ({
                        ...prev,
                        blogType: e.target.innerText,
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
                      setBlogForm((prev) => ({
                        ...prev,
                        blogType: e.target.innerText,
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
                      setBlogForm((prev) => ({
                        ...prev,
                        blogType: e.target.innerText,
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
                      setBlogForm((prev) => ({
                        ...prev,
                        blogType: e.target.innerText,
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
                      setBlogForm((prev) => ({
                        ...prev,
                        blogType: e.target.innerText,
                      }))
                    }
                  >
                    Comparison
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Word Count:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.wordCount}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Word In Sentence:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.sentenceWord}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="type">Tone:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.tone}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="type">Standard:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.standard}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Tables:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.table}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Lists:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.list}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Quotes:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.quote}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
            <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">
              Give your own writing style for results according to your writing
              style (Optional)
            </Label>
            <Textarea
              value={blogForm.ownWritingStyle}
              onChange={(e) =>
                setBlogForm((prev) => ({
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
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Include Images and Videos</p>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="aiImage">AI Generated Image:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.aiImage}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="aiImage">Image Position:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.imagePosition}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="aiImage">YouTube Video:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.youtubeVideo}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="aiImage">Video Position:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.videoPosition}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">SEO Details</p>
          </div>
          <div className="flex flex-col items-center w-full gap-[2vw]">
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="seoKeyword">
                SEO Keywords to include in Blog
              </Label>
              <Textarea
                value={blogForm.seoKeywords}
                onChange={(e) =>
                  setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="seoKeyword">SEO Meta Description</Label>
              <div className="w-full flex flex-col xl:flex-row justify-start items-start xl:items-end gap-[2vw]">
                <Textarea
                  value={blogForm.metaDescription}
                  onChange={(e) =>
                    setBlogForm((prev) => ({
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
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Additional Details</p>
          </div>
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="structureFlow">
              Explain AI the structural flow of your blog (Optional)
            </Label>
            <Textarea
              value={blogForm.structuralFlow}
              onChange={(e) =>
                setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="aiImage">Include FAQ:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.includeFaq}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="aiImage">Include External Links:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.includeExternalLink}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="aiImage">Target Audience:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.audience}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="aiImage">Include Human Touch:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {blogForm.includeHumanTouch}
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
                      setBlogForm((prev) => ({
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
                      setBlogForm((prev) => ({
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
            onClick={handleGenerateBlog}
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
              "Generate Blog"
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
            📘 Complete Guide to Using the AI Blog Writer Tool for Maximum
            Growth
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Blog Writer is built for{" "}
            <span className="font-bold">
              fast, effortless, and high-quality blog content creation
            </span>
            — without needing prompts or technical writing skills. Just fill out
            simple fields and instantly generate{" "}
            <span className="font-bold">
              SEO-optimized, reader-focused, and ranking-ready blog posts
            </span>{" "}
            in minutes.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">every blog input field</span>, how to
            use it properly, and how each option helps improve readability,
            engagement, and Google search rankings.
          </p>
        </div>
        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🔑 1. Keywords</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the main topic and SEO focus of your blog post.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter the main keyword first, followed by related blog search
              terms.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Helps your blog appear for relevant searches and improves topical
              relevance.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🏷️ 2. Title</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the blog headline users see on Google and social platforms.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use a catchy, benefit-driven, keyword-rich title that solves a
              problem.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves click-through rate (CTR) and blog visibility in search
              results.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🌍 3. Country</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Localizes your blog content for a specific region or audience.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Select the country your readers belong to for better language and
              cultural alignment.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Helps your blog rank better in local and regional search results.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👁️ 4. Point of View
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how the blog speaks to the reader.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use second person (“you”) for blogs to create a direct and
              engaging connection.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🌐 5. Language</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the language of your blog post.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose the language your target readers use daily for higher
              engagement.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📝 6. Blog Type
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the blog format such as how-to, listicle, guide, opinion, or
              review.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Aligns content with search intent, increasing ranking potential.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📏 7. Word Count
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how long your blog post will be.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>800–1200 words → Quick reads and casual blogs</li>
              <li>1500–2500 words → SEO-focused blog posts</li>
              <li>3000+ words → In-depth pillar blogs</li>
            </ul>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ✍️ 8. Words in Sentence
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how simple or complex each sentence feels.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use shorter sentences for blogs to improve clarity and mobile
              reading.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎭 9. Blog Tone
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the mood and personality of your blog writing.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves user engagement, scroll depth, and time-on-page.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📐 10. Standard
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls the writing quality and professionalism level.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose “Professional” or “Expert” for authoritative blog content.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📊 11. Include Tables
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              clear comparisons, summaries, or structured information to your
              blog.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Increases chances of appearing in rich results and featured
              snippets.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📋 12. Include Lists
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Breaks
              content into easy-to-read bullet points or steps.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves scannability and ranking potential for list-based
              queries.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              💬 13. Include Quotes
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              expert opinions, real-world insights, or motivational quotes.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Builds credibility and trust for your blog.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧠 14. Own Writing Style
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Lets
              you define a unique blog voice or brand personality.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Add brand tone rules or example phrases to maintain consistency.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🖼️ 15. Include AI Image
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              relevant images to make your blog more visually engaging.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves user experience and image search visibility.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📍 16. Image Position
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls where images appear inside your blog post.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Place images after headings to improve readability and flow.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎥 17. YouTube Video
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Embeds
              helpful videos inside your blog.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Increases engagement, dwell time, and content depth.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📌 18. Video Position
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls where the video appears inside the blog.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔍 19. SEO Keywords
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              extra ranking keywords related to your blog topic.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use long-tail blog keywords and related search phrases.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔢 20. Keyword Quantity
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how many keywords are included in the blog.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Keeps keyword usage natural and balanced.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔁 21. Keyword Repetition Count
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how often keywords repeat.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Keep repetition natural to avoid over-optimization.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧾 22. Meta Description
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Generates the short summary shown under your blog link on Google.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Increases click-through rate from search results.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧱 23. Structural Flow
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Organizes your blog into a smooth, logical reading structure.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves crawlability, readability, and ranking potential.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ❓ 24. Include FAQ
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds a
              question-and-answer section to your blog.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Helps your blog appear in Google’s “People Also Ask” and featured
              snippets.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔗 25. Include External Links
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              trusted outbound links to your blog content.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Builds authority, trust, and topical relevance.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 26. Targeted Audience
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Shapes
              your blog content for a specific type of reader.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves relevance, engagement, and reader satisfaction.
            </p>
          </div>

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ❤️ 27. Include Human Touch
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Makes
              your blog sound natural, friendly, and human.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Impact:</span>{" "}
              Improves user engagement and reduces bounce rate.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Improves Blog SEO & Search Rankings
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Blog Writer is built around{" "}
            <span className="font-semibold text-white">
              Google’s E-E-A-T principles
            </span>
            :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Experience</span> –
              Real blogging tone and real-world examples
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Expertise</span> –
              Structured, accurate, and topic-focused blog writing
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Authoritativeness
              </span>{" "}
              – Quotes, tables, and trusted external sources
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Trustworthiness</span>{" "}
              – Human-friendly, consistent, and well-organized content
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also follows{" "}
            <span className="font-semibold text-white">
              modern blog SEO best practices
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Natural keyword placement for blogs</li>
            <li className="text-2xl lg:text-base">Search intent-focused content structure</li>
            <li className="text-2xl lg:text-base">Rich formatting with images, lists, and tables</li>
            <li className="text-2xl lg:text-base">UX-driven blog layout and readability</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tip for Writing High-Ranking Blogs
          </h3>
          <p className="text-2xl lg:text-base">For maximum blog SEO performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                primary + long-tail blog keywords
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
                professional tone + clear structure
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Write for{" "}
              <span className="font-semibold text-white">
                one specific audience at a time
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={blogWriterFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Blog Writer and how it can transform your blog and blog writing workflow"
        />
      </section>
    </div>
  );
};

export default BlogTestingPage;
