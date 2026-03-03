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
import FAQSection from "@/components/component/FAQSection";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import toast from "react-hot-toast";

const storyWriterFaqs = [
  {
    question: "What is an AI Story Writer?",
    answer:
      "An AI Story Writer is a smart writing tool that helps you create original stories, fiction, and creative content instantly. It uses artificial intelligence to generate engaging plots, characters, and narratives based on your inputs.",
  },
  {
    question: "How does the AI Story Writer work?",
    answer:
      "You simply enter a story title, prompt, genre, audience, tone, and other preferences. The AI then creates a complete, well-structured story that matches your creative goals.",
  },
  {
    question: "Can I use this AI tool to write short stories and novels?",
    answer:
      "Yes. The AI Story Writer can generate short stories, long-form fiction, novels, children’s stories, and even screenplay-style narratives based on your word count and complexity settings.",
  },
  {
    question: "Is this AI Story Writer good for creative writing and fiction?",
    answer:
      "Absolutely. This tool is designed specifically for creative writing, storytelling, and fiction creation. It helps writers develop plots, characters, dialogue, and emotional depth quickly and easily.",
  },
  {
    question: "Can I choose the genre or type of story?",
    answer:
      "Yes. You can select story types such as fantasy, romance, horror, science fiction, adventure, mystery, or children’s stories to ensure the story matches your genre preference.",
  },
  {
    question: "Does the AI Story Writer support multiple languages?",
    answer:
      "Yes. You can generate stories in multiple languages, making it ideal for writers, students, and creators worldwide who want multilingual storytelling support.",
  },
  {
    question: "How do I control the tone and style of the story?",
    answer:
      "You can choose the story tone, writing style, complexity level, and whether to include a human touch. This ensures the story sounds exactly how you want — emotional, dramatic, humorous, or professional.",
  },
  {
    question: "Is this tool suitable for children’s stories?",
    answer:
      "Yes. You can select a child-friendly audience and simple complexity level to generate safe, engaging, and easy-to-understand stories for kids and young readers.",
  },
  {
    question: "Can I use this AI Story Writer for educational purposes?",
    answer:
      "Yes. Teachers, students, and educators use this tool to create storytelling exercises, creative assignments, and narrative examples for learning and classroom use.",
  },
  {
    question: "Will the stories generated be original?",
    answer:
      "Yes. The AI Story Writer generates unique and original content based on your inputs, helping you avoid plagiarism and create fresh stories every time.",
  },
  {
    question: "Can I customize the story length?",
    answer:
      "Yes. You can set a word count to control whether the AI generates a short story, medium-length narrative, or long-form fiction.",
  },
  {
    question: "Is this AI Story Writer good for writers and authors?",
    answer:
      "Yes. Writers and authors use this tool to overcome writer’s block, brainstorm ideas, develop characters, and draft full stories faster.",
  },
  {
    question: "Does the AI Story Writer improve storytelling quality?",
    answer:
      "Yes. The tool improves story structure, pacing, character development, and emotional engagement, making your stories more compelling and professional.",
  },
  {
    question: "Can I write stories from different perspectives?",
    answer:
      "Yes. You can choose the narrative perspective, such as first person, third person, or omniscient, to shape how the story is told.",
  },
  {
    question: "Is this AI Story Writer free to use?",
    answer:
      "Many platforms offer a free version or trial of the AI Story Writer, with optional premium features for longer stories, advanced customization, and higher-quality output.",
  },
];

const StoryTestingPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [storyForm, setStoryForm] = useState({
    title: "",
    prompt: "",
    type: "Type",
    purpose: "Purpose",
    audience: "Select Audience",
    wordCount: "Word Count",
    perspective: "Perspective",
    language: "Language",
    tone: "Story Tone",
    complexity: "Complexity Level",
    humanTouch: "Include Human Touch",
    writingStyle: "Writing Style",
    ownWritingStyle: "",
  });

  const [storyLoading, setStoryLoading] = useState(false);
  const [storyResponse, setStoryResponse] = useState("");
  const handleGenerateStory = async () => {
    if(storyForm.title.trim() === "" || storyForm.prompt.trim() === "" || storyForm.type === "Type" || storyForm.purpose === "Purpose" || storyForm.audience === "Select Audience" || storyForm.wordCount === "Word Count" || storyForm.perspective === "Perspective" || storyForm.language === "Language" || storyForm.tone === "Story Tone" || storyForm.complexity === "Complexity Level" || storyForm.humanTouch === "Include Human Touch" || storyForm.writingStyle === "Writing Style") {
      toast.error("Please fill in all the required fields!");
      return;
    }
    try {
      setStoryLoading(true);
      const res = await fetch("/api/generate/story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(storyForm),
      });
      const response = await res.json();
      setStoryResponse(response.story);
    } catch (error) {
      console.error("Error generating story:", error);
    } finally {
      setStoryLoading(false);
    }
  };

  const handleResetFields = () => {
    setStoryForm({
      title: "",
      prompt: "",
      type: "Type",
      purpose: "Purpose",
      audience: "Select Audience",
      wordCount: "Word Count",
      perspective: "Perspective",
      language: "Language",
      tone: "Story Tone",
      complexity: "Complexity Level",
      humanTouch: "Include Human Touch",
      writingStyle: "Writing Style",
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
            AI Story Writer
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
          <div className="w-full flex justify-start items-center">
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Task definition</p>
          </div>
          <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw]">
            <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="title">Title:</Label>
              <Input
                value={storyForm.title}
                onChange={(e) =>
                  setStoryForm((prev) => ({ ...prev, title: e.target.value }))
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="message">Prompt/idea:</Label>
              <Textarea
                value={storyForm.prompt}
                onChange={(e) =>
                  setStoryForm((prev) => ({
                    ...prev,
                    prompt: e.target.value,
                  }))
                }
                className={`border h-[14vw] xl:h-[5vw] ${
                  isDark
                    ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                    : "bg-white text-black placeholder:text-gray-400"
                } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                placeholder=" core concept, e.g., 'A detective solves a theft in a futuristic city' or user free-text."
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
                  {storyForm.type}
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="type">Purpose:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {storyForm.purpose}
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
                      setStoryForm((prev) => ({
                        ...prev,
                        purpose: e.target.innerText,
                      }))
                    }
                  >
                    Entertain
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setStoryForm((prev) => ({
                        ...prev,
                        purpose: e.target.innerText,
                      }))
                    }
                  >
                    Moral Teaching
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setStoryForm((prev) => ({
                        ...prev,
                        purpose: e.target.innerText,
                      }))
                    }
                  >
                    Inspire
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setStoryForm((prev) => ({
                        ...prev,
                        purpose: e.target.innerText,
                      }))
                    }
                  >
                    Scare
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setStoryForm((prev) => ({
                        ...prev,
                        purpose: e.target.innerText,
                      }))
                    }
                  >
                    Exploration
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setStoryForm((prev) => ({
                        ...prev,
                        purpose: e.target.innerText,
                      }))
                    }
                  >
                    Emotional
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
                  {storyForm.audience}
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                  {storyForm.wordCount}
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Perspective:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {storyForm.perspective}
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
                      setStoryForm((prev) => ({
                        ...prev,
                        perspective: e.target.innerText,
                      }))
                    }
                  >
                    First Person "I"
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setStoryForm((prev) => ({
                        ...prev,
                        perspective: e.target.innerText,
                      }))
                    }
                  >
                    third-person limited
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setStoryForm((prev) => ({
                        ...prev,
                        perspective: e.target.innerText,
                      }))
                    }
                  >
                    omniscient
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setStoryForm((prev) => ({
                        ...prev,
                        perspective: e.target.innerText,
                      }))
                    }
                  >
                    second-person (rare)
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
                  {storyForm.language}
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
            <p className="font-bold text-2xl md:text-4xl lg:text-xl">Complexity Level</p>
          </div>
          <div className="w-full flex flex-wrap justify-between items-center gap-[2vw]">
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
                  {storyForm.tone}
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Complexity Level:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {storyForm.complexity}
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
                  {storyForm.humanTouch}
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
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
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
            <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
              <Label className={"text-xl md:text-3xl lg:text-base"} htmlFor="Title">Writing Style:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`w-full border shadow-lg ${
                    isDark
                      ? "bg-gray-800 border-gray-600/80"
                      : "bg-white border-gray-400/15"
                  } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                >
                  {storyForm.writingStyle}
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
                      setStoryForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Informative
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      isDark
                        ? "focus:bg-black focus:text-white text-white"
                        : "focus:bg-gray-200 focus:text-black text-black"
                    } text-xl md:text-3xl lg:text-base py-[2vw] lg:py-[1vw] xl:py-[0.5vw]`}
                    onClick={(e) =>
                      setStoryForm((prev) => ({
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
                      setStoryForm((prev) => ({
                        ...prev,
                        writingStyle: e.target.innerText,
                      }))
                    }
                  >
                    Emergency
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
              value={storyForm.ownWritingStyle}
              onChange={(e) =>
                setStoryForm((prev) => ({
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
            onClick={handleGenerateStory}
            className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
              isDark
                ? "text-white hover:bg-white/20"
                : "text-black hover:bg-black/20"
            } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
          >
            Generate Story
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
        {(storyLoading || storyResponse) && (
          <RestAllWritingOutputWindow
            restAllWritingMarkdown={storyResponse}
            isLoading={storyLoading}
            isDark={isDark}
          />
        )}
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            📖 Complete Guide to Using the AI Story Writer Tool for Creative
            Writing
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Story Writer is built for{" "}
            <span className="font-bold">
              creative storytelling, fiction writing, and narrative generation
            </span>{" "}
            — without needing complex prompts. Simply fill in guided fields and
            generate{" "}
            <span className="font-bold">
              original, engaging, and emotionally rich stories
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">every story input field</span>, how to
            use it effectively, and how it improves plot structure, character
            development, narrative flow, and reader engagement.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">📌 1. Title</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the story’s main theme or focus.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use compelling, creative, and SEO-friendly titles such as “The
              Last Star Voyager” or “A Tale of Courage and Hope.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              discoverability, reader curiosity, and narrative clarity.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">💡 2. Prompt</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Provides the story idea, concept, or plot seed.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Describe the setting, conflict, or character situation clearly.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              originality, creativity, and contextual accuracy.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">📚 3. Type</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies the genre or format of the story.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Select options like short story, fantasy, horror, romance, science
              fiction, or children’s story.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Aligns
              narrative structure, tone, and style with genre standards.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🎯 4. Purpose</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              the goal of the story.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose entertainment, education, branding, inspiration, or
              emotional engagement.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Shapes
              narrative tone, pacing, and emotional depth.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">👥 5. Audience</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              who the story is written for.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Select children, teens, adults, general readers, or niche
              audiences.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Tailors
              vocabulary, themes, and emotional tone for engagement.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📏 6. Word Count
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls the length of the story.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use shorter lengths for flash fiction and longer ones for detailed
              storytelling.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              narrative completeness, pacing, and readability.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">🌐 7. Language</h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the language of the story.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose the primary language of your target audience.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              accessibility, clarity, and global reach.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎭 8. Story Tone
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls the emotional mood of the story.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose adventurous, dramatic, suspenseful, humorous, romantic, or
              inspirational.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Enhances
              emotional connection and reader immersion.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎨 9. Writing Style
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              how the story is written.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose descriptive, cinematic, poetic, conversational, or
              minimalist styles.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              storytelling voice, consistency, and reader experience.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧠 10. Complexity Level
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how simple or advanced the story language is.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use simple for children and general readers, advanced for literary
              or expert audiences.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              comprehension and audience alignment.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🤝 11. Include Human Touch
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Makes
              the story sound more natural and emotionally engaging.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enable when writing for emotional connection or realism.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              relatability, immersion, and reader trust.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🖋️ 12. Own Writing Style
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Allows
              you to define your personal storytelling voice.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Add instructions like “vivid and emotional” or “cinematic and
              immersive.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span>{" "}
              Personalizes the story to match your creative identity.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Improves Story Quality & Creative Writing
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Story Writer follows{" "}
            <span className="font-semibold text-white">
              professional storytelling principles
            </span>{" "}
            to ensure originality, emotional depth, and narrative excellence:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Creativity</span> –
              Generates unique and imaginative storylines
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Structure</span> –
              Ensures clear plot flow, pacing, and resolution
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Emotion</span> – Builds
              emotional connection and reader engagement
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Efficiency</span> –
              Faster story creation with professional quality
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              creative writing, fiction, and storytelling standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Fiction and narrative writing best practices</li>
            <li className="text-2xl lg:text-base">Children’s story and young adult storytelling formats</li>
            <li className="text-2xl lg:text-base">Short story, novel, and screenplay structures</li>
            <li className="text-2xl lg:text-base">SEO-friendly creative content standards</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best AI Story Writing Results
          </h3>
          <p className="text-2xl lg:text-base">For maximum storytelling quality and SEO performance:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                creative, keyword-rich story titles
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Define{" "}
              <span className="font-semibold text-white">
                genre, audience, and story purpose
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
              Use{" "}
              <span className="font-semibold text-white">
                complexity and human touch settings
              </span>{" "}
              for better immersion and readability
            </li>
            <li className="text-2xl lg:text-base">
              Provide{" "}
              <span className="font-semibold text-white">
                clear prompts and creative direction
              </span>{" "}
              for higher-quality stories
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={storyWriterFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Story Writer and how it can transform your story and story writing workflow"
        />
      </section>
    </div>
  );
};

export default StoryTestingPage;
