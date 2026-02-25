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
import { ShinyButton } from "@/components/ui/shiny-button";
import { AuroraText } from "@/components/ui/aurora-text";
import toast from "react-hot-toast";

const reportFaqs = [
  {
    question: "What is the AI Report Writer and how does it help in creating professional reports?",
    answer: "The AI Report Writer is an intelligent tool designed to help you generate structured, clear, and data-driven reports quickly by filling in guided fields, making professional report writing effortless."
  },
  {
    question: "How do I choose the right report type in the AI Report Writer?",
    answer: "Select the report type based on your need such as business, technical, analytical, or academic reports to ensure the AI structures content and tone according to industry standards."
  },
  {
    question: "Can I customize the report’s tone and writing style using the AI Report Writer?",
    answer: "Yes, you can customize tone and writing style to be formal, persuasive, technical, or narrative to match your audience and report purpose, enhancing engagement and professionalism."
  },
  {
    question: "How does the AI Report Writer optimize reports for SEO and search rankings?",
    answer: "The tool uses keyword-rich titles, clear headings, and structured content aligned with SEO best practices, helping your reports rank higher in search engines."
  },
  {
    question: "Is it possible to specify the audience in the AI Report Writer?",
    answer: "Absolutely! Defining the target audience (executives, researchers, general public) helps the AI tailor language complexity and tone for maximum impact."
  },
  {
    question: "How can I include visuals like charts or graphs in my AI-generated report?",
    answer: "Use the ‘Visuals Needed’ field to specify charts, tables, or graphs you want the AI to mention or suggest, enhancing clarity and data presentation."
  },
  {
    question: "Does the AI Report Writer support multiple languages?",
    answer: "Yes, you can select the report’s language to create accessible reports for diverse global audiences."
  },
  {
    question: "What is the importance of the ‘Scope’ field in report writing?",
    answer: "Defining the scope ensures your report stays focused, covers relevant areas, and excludes unrelated topics, resulting in clear and concise documents."
  },
  {
    question: "How do I control the length of the report generated?",
    answer: "Specify your desired word count to generate reports ranging from brief summaries to in-depth analyses."
  },
  {
    question: "Can the AI Report Writer include an executive summary or specific report sections?",
    answer: "Yes, use the ‘Explain Format’ field to guide the AI in structuring your report with specific sections like executive summary, methodology, or conclusions."
  },
  {
    question: "How does the AI ensure the accuracy and clarity of the report content?",
    answer: "The AI uses professional reporting standards and logical flow to maintain clarity, factual accuracy, and coherence throughout the report."
  },
  {
    question: "Is the AI Report Writer suitable for academic and business reports?",
    answer: "Definitely! The tool is versatile and adheres to standards for academic, business, technical, and research reports."
  },
  {
    question: "How can including ‘Human Touch’ improve my AI-generated report?",
    answer: "Enabling ‘Human Touch’ makes the writing more natural and engaging, improving readability and audience connection."
  },
  {
    question: "Can I personalize the report’s writing style to match my brand or voice?",
    answer: "Yes, the ‘Own Writing Style’ field lets you instruct the AI to adapt tone and style to fit your unique voice or corporate identity."
  },
  {
    question: "What are best practices to get the most out of the AI Report Writer tool?",
    answer: "Use clear titles with SEO keywords, define your audience and scope precisely, customize tone and style, include main insights, and specify visuals to produce impactful, professional reports."
  }
];


const ReportTestingPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [reportForm, setReportForm] = useState({
    title: "",
    scope: "",
    type: "Type",
    audience: "Select Audience",
    explainFormat: "",
    wordCount: "Word Count",
    language: "Language",
    objective: "",
    mainInsights: "",
    visualsNeeded: "",
    tone: "Report Tone",
    writingStyle: "Writing Style",
    complexity: "Complexity Level",
    humanTouch: "Include Human Touch",
    ownWritingStyle: "",
  });

  const [reportLoading, setReportLoading] = useState(false);
  const [reportResponse, setReportResponse] = useState("");
  const handleGenerateReport = async () => {
    if(reportForm.title.trim() === "" || reportForm.scope.trim() === "" || reportForm.type === "Type" || reportForm.audience === "Select Audience" || reportForm.explainFormat.trim() === "" || reportForm.wordCount === "Word Count" || reportForm.language === "Language" || reportForm.tone === "Report Tone" || reportForm.writingStyle === "Writing Style" || reportForm.complexity === "Complexity Level" || reportForm.humanTouch === "Include Human Touch" || reportForm.objective.trim() === "" || reportForm.mainInsights.trim() === "" || reportForm.visualsNeeded.trim() === "") {
      toast.error("Please fill in all the required fields!");
      return;
    }
    try {
      setReportLoading(true);
      const res = await fetch("http://localhost:5001/generate/report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reportForm),
      });
      const response = await res.json();
      setReportResponse(response.report);
    } catch (error) {
      console.error("Error generating report:", error);
    } finally {
      setReportLoading(false);
    }
  };

  const handleResetFields = () => {
    setReportForm({
      title: "",
      scope: "",
      type: "Type",
      audience: "Select Audience",
      explainFormat: "",
      wordCount: "Word Count",
      language: "Language",
      objective: "",
      mainInsights: "",
      visualsNeeded: "",
      tone: "Report Tone",
      writingStyle: "Writing Style",
      complexity: "Complexity Level",
      humanTouch: "Include Human Touch",
      ownWritingStyle: "",
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
            AI Report Writer
          </AuroraText>
        </h1>
        <h2 className="max-w-[60%] text-center font-semibold text-2xl md:text-4xl lg:text-2xl font-nunito text-gray-300">
          Create fully optimized, human-quality report reports in seconds using
          structured inputs for keywords, tone, audience, SEO, images, tables,
          FAQs, and more—no prompt writing required.
        </h2>
      </header>
      <section className="w-full flex flex-col items-center gap-[1vw]">
        <p className="max-w-[40%] text-center text-xl md:text-3xl lg:text-2xl font-nunito text-gray-100">
          Want to know how you could leverage Magiwriter's AI Report Writer to
          generate top class industry grade reports with best SEO techniques? Look
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
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Task definition</p>
          </div>
          <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw]">
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="title">Title:</Label>
              <Input
                value={reportForm.title}
                onChange={(e) =>
                  setReportForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="scope">Scope:</Label>
              <Input
                value={reportForm.scope}
                onChange={(e) =>
                  setReportForm((prev) => ({
                    ...prev,
                    scope: e.target.value,
                  }))
                }
                className={`border shadow-lg ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                type={"text"}
                placeholder="what is included/excluded (e.g., 'focus on India market only')."
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="type">Type:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {reportForm.type}
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
                      setReportForm((prev) => ({
                        ...prev,
                        type: e.target.innerText,
                      }))
                    }
                  >
                    Adventure
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setReportForm((prev) => ({
                        ...prev,
                        type: e.target.innerText,
                      }))
                    }
                  >
                    Mystery
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setReportForm((prev) => ({
                        ...prev,
                        type: e.target.innerText,
                      }))
                    }
                  >
                    Romance
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setReportForm((prev) => ({
                        ...prev,
                        type: e.target.innerText,
                      }))
                    }
                  >
                    Sci-Fi
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setReportForm((prev) => ({
                        ...prev,
                        type: e.target.innerText,
                      }))
                    }
                  >
                    Fantasy
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setReportForm((prev) => ({
                        ...prev,
                        type: e.target.innerText,
                      }))
                    }
                  >
                    Horror
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
                  {reportForm.audience}
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Constraints and scale</p>
          </div>
          <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
            <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">Explain Format:</Label>
            <Textarea
              value={reportForm.explainFormat}
              onChange={(e) =>
                setReportForm((prev) => ({
                  ...prev,
                  explainFormat: e.target.value,
                }))
              }
              className={`border h-[14vw] xl:h-[5vw] ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
              placeholder="formal headings, numbered sections, bullet summaries."
            />
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
                  {reportForm.wordCount}
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                  {reportForm.language}
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Content Planning</p>
          </div>
          <div className="w-full flex flex-col items-start gap-[1vw]">
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="title">Objective:</Label>
              <Input
                value={reportForm.objective}
                onChange={(e) =>
                  setReportForm((prev) => ({
                    ...prev,
                    objective: e.target.value,
                  }))
                }
                className={`border shadow-lg ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                type={"text"}
                placeholder="2-4 SMART goals (Specific, Measurable, etc.)."
              />
            </div>
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="title">Main insights:</Label>
              <Textarea
                value={reportForm.mainInsights}
                onChange={(e) =>
                  setReportForm((prev) => ({
                    ...prev,
                    mainInsights: e.target.value,
                  }))
                }
                className={`border h-[14vw] xl:h-[5vw] ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                placeholder="Explain your report's insights in main 2-3 points."
              />
            </div>
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="title">Visuals needed:</Label>
              <Input
                value={reportForm.visualsNeeded}
                onChange={(e) =>
                  setReportForm((prev) => ({
                    ...prev,
                    visualsNeeded: e.target.value,
                  }))
                }
                className={`border shadow-lg ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                type={"text"}
                placeholder="tables, charts, graphs..."
              />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Outcomes and tone</p>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Tone:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {reportForm.tone}
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
                      setReportForm((prev) => ({
                        ...prev,
                        tone: e.target.innerText,
                      }))
                    }
                  >
                    Objective/Neutral
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setReportForm((prev) => ({
                        ...prev,
                        tone: e.target.innerText,
                      }))
                    }
                  >
                    Urgent/Action-oriented
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setReportForm((prev) => ({
                        ...prev,
                        tone: e.target.innerText,
                      }))
                    }
                  >
                    Formal/Technical
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="w-[45%] xl:w-[25%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Style tweaks:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {reportForm.writingStyle}
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
                      setReportForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Data Heavy
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setReportForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Esecutive
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setReportForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Visual Emphesis
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Complexity Level:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {reportForm.complexity}
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
                  {reportForm.humanTouch}
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
                      setReportForm((prev) => ({
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
                      setReportForm((prev) => ({
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
              value={reportForm.ownWritingStyle}
              onChange={(e) =>
                setReportForm((prev) => ({
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
          <Button
            onClick={handleGenerateReport}
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
        {(reportLoading || reportResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={reportResponse}
            isLoading={reportLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            📊 Complete Guide to Using the AI Report Writer Tool for
            Professional Reporting
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Report Writer is designed for{" "}
            <span className="font-bold">
              structured, data-driven, and professional report writing
            </span>{" "}
            — without requiring complex prompts. Simply fill in guided fields
            and generate{" "}
            <span className="font-bold">
              accurate, audience-ready, and SEO-optimized reports
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">every report input field</span>, how to
            use it effectively, and how it improves report clarity, structure,
            insight delivery, and professional impact.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">📌 1. Title</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the main subject of the report.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use clear, specific, and SEO-friendly titles such as “Market
              Analysis Report 2026” or “Business Performance Evaluation.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              discoverability, relevance, and reader understanding.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🔍 2. Scope</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              what the report covers and what it excludes.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Clearly state boundaries, time frame, or focus area.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              clarity, precision, and professional standards.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🗂️ 3. Type</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies the type of report being generated.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Select options like analytical, technical, business, academic,
              financial, or research report.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Aligns
              structure, tone, and formatting with report standards.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">👥 4. Audience</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              who will read the report.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Select executives, students, managers, clients, researchers, or
              general audience.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Tailors
              complexity, tone, and terminology for better engagement.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧭 5. Explain Format
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Allows
              you to define how the report should be structured.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Specify formats like executive summary, introduction, methodology,
              findings, analysis, and conclusion.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              professional organization and logical flow.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📏 6. Word Count
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls the length of the report.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use shorter reports for summaries and longer ones for detailed
              analysis and documentation.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              clarity, completeness, and professional formatting.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🌐 7. Language</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the language of the report.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose the primary language of your audience.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              accessibility, clarity, and global usability.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 8. Objective
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the goal or purpose of the report.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use objectives like evaluation, recommendation, comparison,
              analysis, or documentation.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              the report stays focused and actionable.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📈 9. Main Insights
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Captures the key findings or points to highlight.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Include trends, patterns, conclusions, or recommendations.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              executive readability and decision-making value.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📊 10. Visuals Needed
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies charts, tables, graphs, or diagrams to include.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Mention visual elements that improve data understanding.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Enhances
              clarity, comprehension, and professional presentation.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 11. Report Tone
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how formal, analytical, or persuasive the report sounds.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              alignment with professional, academic, or business standards.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ✍️ 12. Writing Style
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              how the report is written (formal, technical, executive, academic,
              or narrative).
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Match writing style to report type and audience.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              readability, consistency, and professionalism.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧠 13. Complexity Level
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how simple or advanced the language is.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use simple for general readers and advanced for experts.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              comprehension and audience alignment.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🤝 14. Include Human Touch
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Makes
              the report sound more natural and reader-friendly.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enable when writing reports for non-technical or public audiences.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              engagement, trust, and readability.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🖋️ 15. Own Writing Style
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Allows
              you to define your preferred writing voice.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Add instructions like “formal but concise” or “analytical and
              data-driven.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span>{" "}
              Personalizes the report to match your professional tone.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Improves Report Quality & Professional
            Decision-Making
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Report Writer follows{" "}
            <span className="font-semibold text-white">
              professional reporting standards
            </span>{" "}
            to ensure clarity, accuracy, and insight-driven communication:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Clarity</span> –
              Well-structured and easy-to-understand reports
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Accuracy</span> –
              Consistent formatting and factual alignment
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Insight</span> – Clear
              presentation of findings and conclusions
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Efficiency</span> –
              Faster report creation with professional quality
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              academic, business, technical, and research standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Business and corporate reporting formats</li>
            <li className="text-2xl lg:text-base">Academic and research report structures</li>
            <li className="text-2xl lg:text-base">Technical and analytical documentation</li>
            <li className="text-2xl lg:text-base">SEO-friendly professional content standards</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Report Writing Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum report effectiveness and SEO performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear, keyword-rich report titles
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Define{" "}
              <span className="font-semibold text-white">
                scope, objectives, and audience
              </span>{" "}
              before generation
            </li>
            <li className="text-2xl lg:text-base">
              Select the{" "}
              <span className="font-semibold text-white">
                appropriate tone and writing style
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Include{" "}
              <span className="font-semibold text-white">
                main insights and visuals
              </span>{" "}
              for clarity and impact
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                complexity and human touch settings
              </span>{" "}
              for better readability and engagement
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={reportFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Report Writer and how it can transform your report and report writing workflow"
        />
      </section>
    </div>
  );
};

export default ReportTestingPage;
