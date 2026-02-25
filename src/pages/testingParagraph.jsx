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
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import toast from "react-hot-toast";

const paragraphFaqs = [
  {
    question: "What is an AI Paragraph Writer tool?",
    answer:
      "An AI Paragraph Writer is a content generation tool that creates clear, structured, and high-quality paragraphs based on your topic, purpose, tone, audience, and writing style. It is ideal for students, professionals, paragraphgers, and marketers."
  },
  {
    question: "How does this AI Paragraph Generator improve writing quality?",
    answer:
      "This tool uses advanced language models to produce well-structured, readable, and coherent paragraphs. It improves clarity, flow, and engagement while maintaining relevance and accuracy."
  },
  {
    question: "Can I use this AI Paragraph Writer for academic writing?",
    answer:
      "Yes, this tool is perfect for academic writing, including essays, assignments, research papers, and reports. You can control complexity, tone, citation style, and audience to match academic standards."
  },
  {
    question: "Is this paragraph writing tool suitable for SEO content?",
    answer:
      "Absolutely. The tool generates SEO-optimized paragraphs by structuring content clearly, using relevant keywords naturally, and improving readability — all of which help improve search engine rankings."
  },
  {
    question: "Can I control the tone and writing style of the paragraph?",
    answer:
      "Yes. You can choose from multiple tones such as formal, professional, casual, persuasive, or academic, and writing styles like conversational, technical, or storytelling."
  },
  {
    question: "How does the word count setting work in the AI Paragraph Writer?",
    answer:
      "The word count setting allows you to control the length of your paragraph, making it suitable for short summaries, paragraph sections, academic responses, or detailed explanations."
  },
  {
    question: "What does the 'Word in Sentence' option do?",
    answer:
      "This setting controls the average length of sentences in your paragraph, helping you create content that is either simple and easy to read or more complex and detailed."
  },
  {
    question: "Can this tool write paragraphs for paragraphs and articles?",
    answer:
      "Yes, the AI Paragraph Writer is ideal for paragraph writing, article creation, website content, product descriptions, and marketing copy."
  },
  {
    question: "Does this AI tool support multiple languages?",
    answer:
      "Yes, you can generate paragraphs in multiple languages, making this tool useful for global content creation, multilingual paragraphs, and international communication."
  },
  {
    question: "How does selecting an audience improve paragraph quality?",
    answer:
      "Choosing an audience helps tailor vocabulary, tone, complexity, and structure to ensure the paragraph matches the reader’s level, expectations, and purpose."
  },
  {
    question: "What is the 'Human Touch' option in paragraph writing?",
    answer:
      "The Human Touch feature makes the paragraph sound more natural, empathetic, and authentic, which improves engagement, trust, and reader connection."
  },
  {
    question: "Can I use this paragraph generator for professional writing?",
    answer:
      "Yes, this tool is perfect for professional emails, business documents, reports, proposals, presentations, and corporate content."
  },
  {
    question: "How does this tool help students and educators?",
    answer:
      "Students can use it to write assignments, essays, and study materials, while educators can generate examples, explanations, and teaching content quickly and efficiently."
  },
  {
    question: "Is the AI Paragraph Writer free to use?",
    answer:
      "The availability of free and premium features depends on your platform, but the tool is designed to provide high-quality paragraph writing with fast results and minimal effort."
  },
  {
    question: "Why should I use this AI Paragraph Writer instead of writing manually?",
    answer:
      "This tool saves time, improves writing quality, ensures consistency, enhances SEO, and allows you to generate polished paragraphs instantly without sacrificing accuracy or originality."
  }
];


const ParagraphTestingPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [paragraphForm, setParagraphForm] = useState({
    title: "",
    writingPurpose: "",
    topic: "",
    language: "Language",
    tone: "Paragraph Tone",
    writingStyle: "Writing Style",
    wordCount: "Word Count",
    sentenceWord: "Word In Sentence",
    audience: "Select Audience",
    complexity: "Complexity Level",
    humanTouch: "Include Human Touch",
    additionalDetails: "",
  });

  const [paragraphLoading, setParagraphLoading] = useState(false);
  const [paragraphResponse, setParagraphResponse] = useState("");
  const handleParagraphGenerate = async () => {
    if(paragraphForm.title.trim() === "" || paragraphForm.writingPurpose.trim() === "" || paragraphForm.language === "Language" || paragraphForm.tone === "Paragraph Tone" || paragraphForm.writingStyle === "Writing Style" || paragraphForm.wordCount === "Word Count" || paragraphForm.sentenceWord === "Word In Sentence" || paragraphForm.audience === "Select Audience" || paragraphForm.complexity === "Complexity Level" || paragraphForm.humanTouch === "Include Human Touch") {
      toast.error("Please fill in all the required fields!");
      return;
    }
    try {
      setParagraphLoading(true);
      const res = await fetch("http://localhost:5001/generate/paragraph", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(paragraphForm),
      });
      const response = await res.json();
      setParagraphResponse(response.paragraph);
    } catch (error) {
      console.error("Error generating paragraph:", error);
    } finally {
      setParagraphLoading(false);
    }
  };

  const handleResetFields = () => {
    setParagraphForm({
      title: "",
      writingPurpose: "",
      topic: "",
      language: "Language",
      tone: "Paragraph Tone",
      writingStyle: "Writing Style",
      wordCount: "Word Count",
      sentenceWord: "Word In Sentence",
      audience: "Select Audience",
      complexity: "Complexity Level",
      humanTouch: "Include Human Touch",
      additionalDetails: "",
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
            AI Paragraph Writer
          </AuroraText>
        </h1>
        <h2 className="max-w-[60%] text-center font-semibold text-2xl md:text-4xl lg:text-2xl font-nunito text-gray-300">
          Create fully optimized, human-quality paragraph paragraphs in seconds using
          structured inputs for keywords, tone, audience, SEO, images, tables,
          FAQs, and more—no prompt writing required.
        </h2>
      </header>
      <section className="w-full flex flex-col items-center gap-[1vw]">
        <p className="max-w-[40%] text-center text-xl md:text-3xl lg:text-2xl font-nunito text-gray-100">
          Want to know how you could leverage Magiwriter's AI Paragraph Writer to
          generate top class industry grade paragraphs with best SEO techniques? Look
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
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Main Details</p>
          </div>
          <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw] text-lg md:text-3xl lg:text-base">
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="title">Title/Subject</Label>
              <Input
                value={paragraphForm.title}
                onChange={(e) =>
                  setParagraphForm((prev) => ({
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
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">Writing purpose</Label>
              <Textarea
                value={paragraphForm.writingPurpose}
                onChange={(e) =>
                  setParagraphForm((prev) => ({
                    ...prev,
                    writingPurpose: e.target.value,
                  }))
                }
                className={`border h-[14vw] xl:h-[5vw] ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                placeholder="Describe your purpose for this paragraph here..."
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
                  {paragraphForm.language}
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="type">Tone:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {paragraphForm.tone}
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="type">Writing Style:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {paragraphForm.writingStyle}
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
                      setParagraphForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Casual
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Formal
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Academic
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Bussiness
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Essay
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
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
                      setParagraphForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Sales
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Marketing
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Review
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Literary
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
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
                  {paragraphForm.wordCount}
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
                        ...prev,
                        wordCount: e.target.innerText,
                      }))
                    }
                  >
                    Large (400-800 words)
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        wordCount: e.target.innerText,
                      }))
                    }
                  >
                    Extra Large (800-1500 words)
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
                  {paragraphForm.sentenceWord}
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
                      setParagraphForm((prev) => ({
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
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Complexity Level</p>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Targetted Audience:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {paragraphForm.audience}
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
                      setParagraphForm((prev) => ({
                        ...prev,
                        audience: e.target.innerText,
                      }))
                    }
                  >
                    Children
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        audience: e.target.innerText,
                      }))
                    }
                  >
                    Adults
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Complexity Level:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {paragraphForm.complexity}
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
                      setParagraphForm((prev) => ({
                        ...prev,
                        complexity: e.target.innerText,
                      }))
                    }
                  >
                    Very Easy
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        complexity: e.target.innerText,
                      }))
                    }
                  >
                    Easy
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        complexity: e.target.innerText,
                      }))
                    }
                  >
                    Medium
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        complexity: e.target.innerText,
                      }))
                    }
                  >
                    Hard
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setParagraphForm((prev) => ({
                        ...prev,
                        complexity: e.target.innerText,
                      }))
                    }
                  >
                    Extra Hard
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Humaniser:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {paragraphForm.humanTouch}
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
                      setParagraphForm((prev) => ({
                        ...prev,
                        humanTouch: e.target.innerText,
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
                      setParagraphForm((prev) => ({
                        ...prev,
                        humanTouch: e.target.innerText,
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
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Additional Details</p>
          </div>
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">
              Give your own writing style for results according to your writing
              style (Optional)
            </Label>
            <Textarea
              value={paragraphForm.additionalDetails}
              onChange={(e) =>
                setParagraphForm((prev) => ({
                  ...prev,
                  additionalDetails: e.target.value,
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
          <Button
            onClick={handleParagraphGenerate}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate Paragraph
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
        {(paragraphLoading || paragraphResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={paragraphResponse}
            isLoading={paragraphLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            ✍️ Complete Guide to Using the AI Paragraph Writer Tool for Powerful
            Writing
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Paragraph Writer is built for{" "}
            <span className="font-bold">
              clear, structured, and high-impact paragraph creation
            </span>{" "}
            — without requiring complex prompts. Simply fill in the required
            fields and generate{" "}
            <span className="font-bold">
              engaging, SEO-optimized, and audience-ready paragraphs
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">every input field</span>, how to use it
            effectively, and how it improves paragraph clarity, readability, and
            content quality.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">📘 1. Title</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the central idea of the paragraph.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use a clear, specific, and relevant title.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              focus, coherence, and SEO relevance.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 2. Writing Purpose
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              why the paragraph is being written.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Select goals like informative, persuasive, descriptive, narrative,
              analytical, or explanatory.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Shapes
              structure, tone, and messaging style.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">📌 3. Topic</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies what the paragraph will focus on.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Clearly define the subject or idea you want to explain.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              relevance, coherence, and topic accuracy.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🌐 4. Language</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the language for the paragraph output.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose the audience’s primary or preferred language.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              accessibility, comprehension, and global reach.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎼 5. Paragraph Tone
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how the paragraph sounds emotionally and stylistically.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose formal, casual, professional, friendly, academic, or
              persuasive tones.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              the paragraph matches the audience and context.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🖋️ 6. Writing Style
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              how the paragraph is written.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Select styles such as conversational, technical, storytelling,
              journalistic, marketing, or academic.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              readability, engagement, and voice consistency.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📏 7. Word Count
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls the length of the paragraph.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Adjust based on platform, SEO needs, or academic limits.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              concise, complete, and goal-oriented writing.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📐 8. Word in Sentence
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls sentence length within the paragraph.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use shorter sentences for clarity and longer ones for depth.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              flow, rhythm, and reader engagement.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👥 9. Select Audience
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              who the paragraph is written for.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose students, professionals, beginners, experts, researchers,
              or general readers.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Helps
              tailor language, tone, and depth for better understanding.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧠 10. Complexity Level
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how simple or advanced the paragraph language is.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use simple language for general audiences and advanced language
              for academic or technical writing.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              comprehension and content suitability.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🤝 11. Include Human Touch
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Makes
              the paragraph sound natural and emotionally engaging.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enable this when writing for people, storytelling, or persuasive
              content.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              authenticity, trust, and reader connection.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📎 12. Additional Details
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Allows
              you to provide extra instructions or context.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Add keywords, references, tone preferences, or formatting rules.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Refines
              the paragraph and personalizes the output.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Improves Paragraph Quality & Writing Success
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Paragraph Writer follows{" "}
            <span className="font-semibold text-white">
              modern writing and SEO standards
            </span>{" "}
            to ensure clarity, engagement, and effectiveness:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Clarity</span> – Clear
              and focused paragraphs
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Readability</span> –
              Easy-to-read sentence structures
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">SEO Optimization</span>{" "}
              – Search-friendly content formatting
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Efficiency</span> –
              Faster paragraph creation with consistent quality
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              academic, professional, and digital content standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Academic writing and essay paragraph formats</li>
            <li className="text-2xl lg:text-base">Paragraph and article paragraph structuring</li>
            <li className="text-2xl lg:text-base">Marketing and persuasive content writing</li>
            <li className="text-2xl lg:text-base">Clear audience-targeted communication</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best Paragraph Writing Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum paragraph effectiveness:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear titles and focused topics
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Always define the{" "}
              <span className="font-semibold text-white">
                purpose and target audience
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Keep paragraphs{" "}
              <span className="font-semibold text-white">
                concise, structured, and relevant
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Match the{" "}
              <span className="font-semibold text-white">
                tone, style, and complexity
              </span>{" "}
              to your readers
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                word count and sentence length settings
              </span>{" "}
              for better readability
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={paragraphFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Paragraph Writer and how it can transform your paragraph and paragraph writing workflow"
        />
      </section>
    </div>
  );
};

export default ParagraphTestingPage;
