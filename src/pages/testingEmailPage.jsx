import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRef, useState } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AuroraText } from "@/components/ui/aurora-text";
import FAQSection from "@/components/component/FAQSection";
import toast from "react-hot-toast";

const emailWriterFaqs = [
  {
    question: "What is an AI email writer?",
    answer:
      "An AI email writer helps you create professional, clear, and effective emails by filling out simple fields instead of writing prompts.",
  },
  {
    question: "Can this tool write both new emails and replies?",
    answer:
      "Yes, this tool has two modes: one for writing fresh emails and another for generating smart replies using a received email.",
  },
  {
    question: "How does the email response feature work?",
    answer:
      "You paste the received email, choose your response goal, and the AI creates a clear and appropriate reply.",
  },
  {
    question: "What is the benefit of selecting a subject line?",
    answer:
      "A strong subject line improves open rates and helps the recipient understand the email’s purpose instantly.",
  },
  {
    question: "Why do I need to enter the recipient and sender?",
    answer:
      "This helps personalize the email so it feels natural and correctly addressed.",
  },
  {
    question: "How does choosing a language help?",
    answer:
      "It ensures your email is written in the correct language for your audience, improving clarity and professionalism.",
  },
  {
    question: "Why should I choose an email tone?",
    answer:
      "Tone controls whether your email sounds formal, friendly, persuasive, or casual, depending on the situation.",
  },
  {
    question: "What does writing style mean in an email?",
    answer:
      "Writing style defines how the email is structured, such as business, casual, concise, detailed, or customer support style.",
  },
  {
    question: "Does word count matter in email writing?",
    answer:
      "Yes, controlling word count helps keep emails clear, short, and effective without unnecessary information.",
  },
  {
    question: "What should I write in additional details?",
    answer:
      "You can add context, instructions, or key points you want included in the email.",
  },
  {
    question: "Is this email writer good for business emails?",
    answer:
      "Yes, it is designed for professional emails, client communication, workplace messages, and formal responses.",
  },
  {
    question: "Can this tool write personal emails too?",
    answer:
      "Yes, you can adjust the tone and style to write friendly, personal, or informal emails as well.",
  },
  {
    question: "How does this tool save time?",
    answer:
      "It eliminates manual drafting by instantly generating complete, ready-to-send emails in seconds.",
  },
  {
    question: "Is this AI email writer beginner-friendly?",
    answer:
      "Yes, anyone can use it easily without writing experience or technical skills.",
  },
  {
    question: "Does this tool improve email quality?",
    answer:
      "Yes, it helps improve clarity, tone, grammar, and structure, making your emails more professional and effective.",
  },
  {
    question: "Can I use this for customer support emails?",
    answer:
      "Yes, it works well for support replies, follow-ups, complaint handling, and service responses.",
  },
  {
    question: "Is this tool suitable for sales and marketing emails?",
    answer:
      "Yes, it can generate persuasive sales emails, follow-ups, and outreach messages.",
  },
  {
    question: "Does this email writer support multiple industries?",
    answer:
      "Yes, you can use it for business, education, healthcare, real estate, technology, and more.",
  },
];

const EmailTestingPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [emailForm, setEmailForm] = useState({
    topic: "",
    subjectLine: "",
    recipient: "",
    sender: "",
    language: "Language",
    tone: "Email Tone",
    writingStyle: "Writing Style",
    wordCount: "Word Count",
    additionalDetails: "",
  });
  const [resEmailForm, setResEmailForm] = useState({
    receivedEmail: "",
    responseGoal: "",
    subjectLine: "",
    recipient: "",
    sender: "",
    language: "Language",
    tone: "Email Tone",
    writingStyle: "Writing Style",
    wordCount: "Word Count",
  });

  const [newEmailResponseLoading, setNewEmailResponseLoading] = useState(false);
  const [resEmailResponseLoading, setResEmailResponseLoading] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [resEmail, setResEmail] = useState("");
  const handleGenerateNewEmail = async () => {
    if (
      emailForm.topic.trim() === "" ||
      emailForm.subjectLine.trim() === "" ||
      emailForm.recipient.trim() === "" ||
      emailForm.sender.trim() === "" ||
      emailForm.language === "Language" ||
      emailForm.tone === "Email Tone" ||
      emailForm.writingStyle === "Writing Style" ||
      emailForm.wordCount === "Word Count"
    ) {
      toast.error(
        "Please fill in all the required fields for generating a new email!",
      );
      return;
    }
    try {
      setNewEmailResponseLoading(true);
      const res = await fetch("https://www.magiwriter.com/api/generate/newEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(emailForm),
      });
      const response = await res.json();
      setNewEmail(response.newEmail);
    } catch (error) {
      console.error("Error generating new email:", error);
    } finally {
      setNewEmailResponseLoading(false);
    }
  };

  const handleGenerateResponseEmail = async () => {
    if (
      resEmailForm.receivedEmail.trim() === "" ||
      resEmailForm.responseGoal.trim() === "" ||
      resEmailForm.subjectLine.trim() === "" ||
      resEmailForm.recipient.trim() === "" ||
      resEmailForm.sender.trim() === "" ||
      resEmailForm.language === "Language" ||
      resEmailForm.tone === "Email Tone" ||
      resEmailForm.writingStyle === "Writing Style" ||
      resEmailForm.wordCount === "Word Count"
    ) {
      toast.error(
        "Please fill in all the required fields for generating a response email!",
      );
      return;
    }
    try {
      setResEmailResponseLoading(true);
      const res = await fetch("https://www.magiwriter.com/api/generate/resEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(resEmailForm),
      });
      const response = await res.json();
      setResEmail(response.resEmail);
    } catch (error) {
      console.error("Error generating response email:", error);
    } finally {
      setResEmailResponseLoading(false);
    }
  };

  const handleResetNewEmail = () => {
    setEmailForm({
      topic: "",
      subjectLine: "",
      recipient: "",
      sender: "",
      language: "Language",
      tone: "Email Tone",
      writingStyle: "Writing Style",
      wordCount: "Word Count",
      additionalDetails: "",
    });
  };

  const handleResetResponseEmail = () => {
    setResEmailForm({
      receivedEmail: "",
      responseGoal: "",
      subjectLine: "",
      recipient: "",
      sender: "",
      language: "Language",
      tone: "Email Tone",
      writingStyle: "Writing Style",
      wordCount: "Word Count",
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
            AI Email Writer
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
        <Tabs
          defaultValue="generate"
          className="w-full flex flex-col items-center gap-[5vw] xl:gap-[0.1vw]"
        >
          <TabsList
            className={`${
              isDark
                ? "bg-gray-700 border border-gray-400"
                : "bg-white border-none"
            }`}
          >
            <TabsTrigger
              className={`cursor-pointer ${
                isDark
                  ? "text-white data-[state=active]:text-white"
                  : "text-black data-[state=active]:text-black"
              }`}
              value="generate"
            >
              Generate A New Email
            </TabsTrigger>
            <TabsTrigger
              className={`cursor-pointer ${
                isDark
                  ? "text-white data-[state=active]:text-white"
                  : "text-black data-[state=active]:text-black"
              }`}
              value="response"
            >
              Generate Response To An Email
            </TabsTrigger>
          </TabsList>
          <TabsContent className={"w-full"} value="generate">
            <div className="w-full flex flex-col items-center gap-[6vw] xl:gap-[2vw]">
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
                      htmlFor="topic"
                    >
                      Topic of Email:
                    </Label>
                    <Textarea
                      value={emailForm.topic}
                      onChange={(e) =>
                        setEmailForm((prev) => ({
                          ...prev,
                          topic: e.target.value,
                        }))
                      }
                      className={`border h-[14vw] xl:h-[5vw] ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                      id="topic"
                      placeholder="Describe the purpose of this email here..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="message"
                    >
                      Subject Line:
                    </Label>
                    <Textarea
                      value={emailForm.subjectLine}
                      onChange={(e) =>
                        setEmailForm((prev) => ({
                          ...prev,
                          subjectLine: e.target.value,
                        }))
                      }
                      className={`border h-[14vw] xl:h-[5vw] ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="recipient"
                    >
                      Recipient:
                    </Label>
                    <Input
                      value={emailForm.recipient}
                      onChange={(e) =>
                        setEmailForm((prev) => ({
                          ...prev,
                          recipient: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder="Recipient name..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="recipient"
                    >
                      Sender:
                    </Label>
                    <Input
                      value={emailForm.sender}
                      onChange={(e) =>
                        setEmailForm((prev) => ({
                          ...prev,
                          sender: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder="Name of the person sending (Most probably you)..."
                    />
                  </div>
                </div>
              </section>
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Extra Details
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
                        {emailForm.language}
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                        {emailForm.tone}
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                      Writing Style:
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        className={`w-full border shadow-lg ${
                          isDark
                            ? "bg-gray-800 border-gray-600/80"
                            : "bg-white border-gray-400/15"
                        } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                      >
                        {emailForm.writingStyle}
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                        {emailForm.wordCount}
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
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
                            setEmailForm((prev) => ({
                              ...prev,
                              wordCount: e.target.innerText,
                            }))
                          }
                        >
                          Extra Large (1000-2000 words)
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
                    Give additional details (Optional)
                  </Label>
                  <Textarea
                    value={emailForm.additionalDetails}
                    onChange={(e) =>
                      setEmailForm((prev) => ({
                        ...prev,
                        additionalDetails: e.target.value,
                      }))
                    }
                    className={`border h-[14vw] xl:h-[5vw] ${
                      isDark
                        ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                        : "bg-white text-black placeholder:text-gray-400"
                    } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                    placeholder="Give details here in your style and make AI to follow you..."
                  />
                </div>
              </section>
              <section className="w-full flex flex-col items-center gap-[5vw] md:gap-[2vw] lg:gap-[3vw] xl:gap-[1vw]">
                <Button
                  onClick={handleGenerateNewEmail}
                  className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
                    isDark
                      ? "text-white hover:bg-white/20"
                      : "text-black hover:bg-black/20"
                  } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
                >
                  Generate New Email
                </Button>
                <Button
                  onClick={handleResetNewEmail}
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
              {(newEmailResponseLoading || newEmail) && (
                <RestAllWritingOutputWindow
                  restAllWritingMarkdown={newEmail}
                  isLoading={newEmailResponseLoading}
                  isDark={isDark}
                />
              )}
            </div>
          </TabsContent>
          <TabsContent className={"w-full"} value="response">
            <div className="w-full flex flex-col items-center gap-[6vw] xl:gap-[2vw]">
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Main Details
                  </p>
                </div>
                <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw]">
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="reveived-email"
                    >
                      Received Email:
                    </Label>
                    <Textarea
                      value={resEmailForm.receivedEmail}
                      onChange={(e) =>
                        setResEmailForm((prev) => ({
                          ...prev,
                          receivedEmail: e.target.value,
                        }))
                      }
                      className={`border h-[14vw] xl:h-[5vw] ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                      id="topic"
                      placeholder="Paste your received email here..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="topic"
                    >
                      Response Goal:
                    </Label>
                    <Textarea
                      value={resEmailForm.responseGoal}
                      onChange={(e) =>
                        setResEmailForm((prev) => ({
                          ...prev,
                          responseGoal: e.target.value,
                        }))
                      }
                      className={`border h-[14vw] xl:h-[5vw] ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                      id="topic"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="message"
                    >
                      Subject Line:
                    </Label>
                    <Textarea
                      value={resEmailForm.subjectLine}
                      onChange={(e) =>
                        setResEmailForm((prev) => ({
                          ...prev,
                          subjectLine: e.target.value,
                        }))
                      }
                      className={`border h-[14vw] xl:h-[5vw] ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="recipient"
                    >
                      Recipient:
                    </Label>
                    <Input
                      value={resEmailForm.recipient}
                      onChange={(e) =>
                        setResEmailForm((prev) => ({
                          ...prev,
                          recipient: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder="Recipient name..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="recipient"
                    >
                      Sender:
                    </Label>
                    <Input
                      value={resEmailForm.sender}
                      onChange={(e) =>
                        setResEmailForm((prev) => ({
                          ...prev,
                          sender: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder="Name of the person sending (Most probably you)..."
                    />
                  </div>
                </div>
              </section>
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Extra Details
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
                        {resEmailForm.language}
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                        {resEmailForm.tone}
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                      Writing Style:
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        className={`w-full border shadow-lg ${
                          isDark
                            ? "bg-gray-800 border-gray-600/80"
                            : "bg-white border-gray-400/15"
                        } rounded-md xl:rounded-lg px-[1vw] py-[1vw] xl:py-[0.5vw] text-xl md:text-3xl lg:text-base cursor-pointer`}
                      >
                        {resEmailForm.writingStyle}
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                        {resEmailForm.wordCount}
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                            setResEmailForm((prev) => ({
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
                </div>
              </section>
              <section className="w-full flex flex-col items-center gap-[5vw] md:gap-[2vw] lg:gap-[3vw] xl:gap-[1vw]">
                <Button
                  onClick={handleGenerateResponseEmail}
                  className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
                    isDark
                      ? "text-white hover:bg-white/20"
                      : "text-black hover:bg-black/20"
                  } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
                >
                  Generate Response Email
                </Button>
                <Button
                  onClick={handleResetResponseEmail}
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
              {(resEmailResponseLoading || resEmail) && (
                <RestAllWritingOutputWindow
                  restAllWritingMarkdown={resEmail}
                  isLoading={resEmailResponseLoading}
                  isDark={isDark}
                />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <section ref={guideRef} className="max-w-full flex flex-col items-center gap-[4vw] mt-[10vw]">
        <div className="w-full flex flex-col items-center gap-[1vw]">
          <h2 className="lg:max-w-[45%] max-w-[70%] font-bold text-3xl md:text-5xl lg:text-3xl text-center">
            ✉️ Complete Guide to Using the AI Email Writer Tool for Professional
            Results
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Email Writer is built for{" "}
            <span className="font-bold">
              speed, clarity, and professional communication
            </span>
            — without requiring you to write complex prompts. Simply fill in
            structured fields and generate{" "}
            <span className="font-bold">
              high-quality, well-toned, and purpose-driven emails
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">every input field</span>, how to use it
            effectively, and how it improves email quality, clarity, and
            communication success.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧠 1. Topic
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              what the email is about.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Write a clear topic such as “Meeting request,” “Job application,”
              or “Customer follow-up.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Helps
              the AI generate focused and relevant email content.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📝 2. Subject Line
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the email headline that appears in the inbox.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use a short, clear, and action-oriented subject line.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Strong
              subject lines improve email open rates.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👤 3. Recipient
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Identifies who the email is sent to.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter a name or role (e.g., “Hiring Manager,” “Customer Support”).
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Helps
              personalize the email.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧑‍💼 4. Sender
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              who is sending the email.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter your name, company, or role to match your identity.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🌐 5. Language
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the email language.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose the recipient’s primary language for clarity and
              professionalism.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎭 6. Email Tone
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how the email sounds (formal, friendly, persuasive,
              apologetic, etc.).
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              the message matches the situation and audience.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🖋️ 7. Writing Style
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              how the email is written (business, casual, concise, detailed,
              customer support style).
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use “Business” for professional emails and “Concise” for quick
              messages.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📏 8. Word Count
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls the email length.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li className="text-2xl lg:text-base">
                50–100 words → Short replies
              </li>
              <li className="text-2xl lg:text-base">
                120–200 words → Professional emails
              </li>
              <li className="text-2xl lg:text-base">
                200+ words → Detailed explanations
              </li>
            </ul>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧩 9. Additional Details
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              extra instructions or context.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Include deadlines, references, or specific points you want
              mentioned.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📥 10. Received Email
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Used
              for generating response emails.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Paste the full received email for accurate understanding and reply
              generation.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 11. Response Goal
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              what you want to achieve with the reply.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use goals like “Accept,” “Decline,” “Request clarification,” or
              “Provide solution.”
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🔁 12. Subject Line (Reply)
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets or
              refines the reply email subject.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Keep it relevant and aligned with the original thread.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👥 13. Recipient (Reply)
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Ensures
              the reply is addressed correctly.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span>{" "}
              Maintains proper communication etiquette.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ✉️ 14. Sender (Reply)
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              who is responding.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use the same sender identity as the original conversation when
              appropriate.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🌍 15. Language (Reply)
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the reply email language.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Match the original email’s language for consistency.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 16. Email Tone (Reply)
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls the emotional tone of the reply.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Helps
              ensure the reply feels appropriate and professional.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🖊️ 17. Writing Style (Reply)
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              how the reply is written.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use “Clear and polite” for most replies.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📐 18. Word Count (Reply)
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls reply length.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Keep replies short, clear, and respectful.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Improves Email Quality & Communication Success
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Email Writer follows{" "}
            <span className="font-semibold text-white">
              modern communication best practices
            </span>
            :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Clarity</span> – Clear,
              easy-to-understand messages
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Professionalism</span>{" "}
              – Proper tone, structure, and etiquette
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Personalization</span>{" "}
              – Tailored to recipient and context
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Efficiency</span> –
              Faster writing without sacrificing quality
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              productivity and communication standards
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">Inbox-friendly formatting</li>
            <li className="text-2xl lg:text-base">Purpose-driven messaging</li>
            <li className="text-2xl lg:text-base">Professional tone control</li>
            <li className="text-2xl lg:text-base">Time-saving automation</li>
          </ul>
        </div>
        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best Email Results
          </h3>
          <p className="text-2xl lg:text-base">
            For maximum email effectiveness:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear topics and strong subject lines
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Select the{" "}
              <span className="font-semibold text-white">
                right tone and writing style
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Keep emails{" "}
              <span className="font-semibold text-white">
                concise, respectful, and purposeful
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Match the{" "}
              <span className="font-semibold text-white">
                language and tone of the recipient
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use the{" "}
              <span className="font-semibold text-white">response goal</span>{" "}
              field to guide replies effectively
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={emailWriterFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Email Writer and how it can transform your email and email writing workflow"
        />
      </section>
    </div>
  );
};

export default EmailTestingPage;
