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
import { useState, useRef } from "react";
import RestAllWritingOutputWindow from "@/components/outputScreen/restAllWriting";
import FAQSection from "@/components/component/FAQSection";
import { ShinyButton } from "@/components/ui/shiny-button";
import { AuroraText } from "@/components/ui/aurora-text";
import toast from "react-hot-toast";

const letterWriterFaqs = [
  {
    question: "What is the AI Letter Writer tool?",
    answer:
      "The AI Letter Writer is a smart tool that helps you create personal and professional letters quickly by filling in simple fields instead of writing long prompts.",
  },
  {
    question:
      "Can I write both personal and professional letters with this tool?",
    answer:
      "Yes, this tool supports both personal letters like friendly or family messages and professional letters such as business, job, or official communication.",
  },
  {
    question: "What should I write in the sender field?",
    answer:
      "Enter your name or the person who is sending the letter. This helps personalize the letter and make it feel authentic.",
  },
  {
    question: "Why is the sender address important?",
    answer:
      "The sender address helps format the letter properly, especially for formal and professional letters.",
  },
  {
    question: "How does the date field improve my letter?",
    answer:
      "Adding the date makes your letter look complete, professional, and ready for real-world use.",
  },
  {
    question: "What should I enter in the recipient field?",
    answer:
      "Enter the name or role of the person receiving the letter so the message feels direct and respectful.",
  },
  {
    question: "Why does the tool ask for recipient address and organization?",
    answer:
      "These fields help structure professional letters correctly, especially for business, legal, or official communication.",
  },
  {
    question: "What is the purpose field used for?",
    answer:
      "The purpose explains why you are writing the letter and helps the AI generate a clear and focused message.",
  },
  {
    question: "What should I write in the main body field?",
    answer:
      "This is where you describe your main message, details, or story that you want included in the letter.",
  },
  {
    question: "What are closing remarks and closing phrases?",
    answer:
      "Closing remarks summarize your message, while the closing phrase is the polite ending like 'Sincerely' or 'Yours truly.'",
  },
  {
    question: "What is a postscript (P.S.) and when should I use it?",
    answer:
      "A postscript is an extra note added after the letter. You can use it for reminders, small details, or friendly messages.",
  },
  {
    question: "How does language selection help in letter writing?",
    answer:
      "Choosing the right language ensures your letter is clear, understandable, and suitable for the recipient.",
  },
  {
    question: "Why is tone important in letter writing?",
    answer:
      "Tone controls how your letter feels, such as formal, friendly, respectful, or professional, matching your situation.",
  },
  {
    question: "What does writing style control in my letter?",
    answer:
      "Writing style defines how your message is written, such as formal, polite, simple, or conversational.",
  },
  {
    question: "How does word count improve my letter quality?",
    answer:
      "Word count helps control the length of your letter, keeping it clear, readable, and appropriate for the purpose.",
  },
];

const LetterTestingPage = () => {
  const guideRef = useRef(null);
  const [isDark, setIsDark] = useState(true);
  const [personalLetterForm, setPersonalLetterForm] = useState({
    sender: "",
    senderAddress: "",
    date: "",
    recipient: "",
    recipientAddress: "",
    greeting: "",
    purpose: "",
    mainBody: "",
    closingRemarks: "",
    closingPhrase: "",
    senderSignature: "",
    postScript: "",
    language: "Language",
    tone: "Letter Tone",
    writingStyle: "Writing Style",
    wordCount: "Word Count",
  });
  const [professionalLetterForm, setProfessionalLetterForm] = useState({
    sender: "",
    senderStreetAddress: "",
    senderMainAddress: "",
    senderCountry: "",
    senderEmail: "",
    senderPhone: "",
    date: "",
    recipient: "",
    recipientOrganization: "",
    recipientStreetAddress: "",
    recipientMainAddress: "",
    recipientCountry: "",
    subjectLine: "",
    salutation: "",
    purpose: "",
    mainBody: "",
    closingRequest: "",
    Enclosures: "",
    complimentaryClose: "",
    senderSignature: "",
    senderDesignation: "",
    language: "Language",
    tone: "Tone",
    writingStyle: "Writing Style",
    wordCount: "Word Count",
  });

  const [personalLetterLoading, setPersonalLetterLoading] = useState(false);
  const [professionalLetterLoading, setProfessionalLetterLoading] =
    useState(false);
  const [personalLetter, setPersonalLetter] = useState("");
  const [professionalLetter, setProfessionalLetter] = useState("");
  const handleGeneratePersonalLetter = async () => {
    if(personalLetterForm.sender.trim() === "" || personalLetterForm.recipient.trim() === "" || personalLetterForm.purpose.trim() === "" || personalLetterForm.mainBody.trim() === "" || personalLetterForm.language === "Language" || personalLetterForm.tone === "Letter Tone" || personalLetterForm.writingStyle === "Writing Style" || personalLetterForm.wordCount === "Word Count") {
      toast.error("Please fill in all the non optional fields!");
      return;
    }
    try {
      setPersonalLetterLoading(true);
      const res = await fetch("/api/generate/personalletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(personalLetterForm),
      });
      const response = await res.json();
      setPersonalLetter(response.personalLetter);
    } catch (error) {
      console.error("Error generating personal letter:", error);
    } finally {
      setPersonalLetterLoading(false);
    }
  };

  const handleGenerateProfessionalLetter = async () => {
    if(professionalLetterForm.sender.trim() === "" || professionalLetterForm.senderStreetAddress.trim() === "" || professionalLetterForm.senderMainAddress.trim() === "" || professionalLetterForm.mainBody.trim() === "" || professionalLetterForm.language === "Language" || professionalLetterForm.tone === "Tone" || professionalLetterForm.writingStyle === "Writing Style" || professionalLetterForm.wordCount === "Word Count" || professionalLetterForm.date.trim() === "" || professionalLetterForm.recipient.trim() === "" || professionalLetterForm.recipientOrganization.trim() === "" || professionalLetterForm.recipientStreetAddress.trim() === "" || professionalLetterForm.recipientMainAddress.trim() === "" || professionalLetterForm.recipientCountry.trim() === "" || professionalLetterForm.subjectLine.trim() === "" || professionalLetterForm.salutation.trim() === "" || professionalLetterForm.purpose.trim() === "" || professionalLetterForm.complimentaryClose.trim() === "" || professionalLetterForm.senderSignature.trim() === "") {
      toast.error("Please fill in all the non optional fields!");
      return;
    }
    try {
      setProfessionalLetterLoading(true);
      const res = await fetch(
        "/api/generate/professionalletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(professionalLetterForm),
        },
      );
      const response = await res.json();
      setProfessionalLetter(response.professionalLetter);
    } catch (error) {
      console.error("Error generating professional letter:", error);
    } finally {
      setProfessionalLetterLoading(false);
    }
  };

  const handleResetPersonalLetterForm = () => {
    setPersonalLetterForm({
      sender: "",
      senderAddress: "",
      date: "",
      recipient: "",
      recipientAddress: "",
      greeting: "",
      purpose: "",
      mainBody: "",
      closingRemarks: "",
      closingPhrase: "",
      senderSignature: "",
      postScript: "",
      language: "Language",
      tone: "Letter Tone",
      writingStyle: "Writing Style",
      wordCount: "Word Count",
    });
  };

  const handleResetProfessionalLetterForm = () => {
    setProfessionalLetterForm({
      sender: "",
      senderStreetAddress: "",
      senderMainAddress: "",
      senderCountry: "",
      senderEmail: "",
      senderPhone: "",
      date: "",
      recipient: "",
      recipientOrganization: "",
      recipientStreetAddress: "",
      recipientMainAddress: "",
      recipientCountry: "",
      subjectLine: "",
      salutation: "",
      purpose: "",
      mainBody: "",
      closingRequest: "",
      Enclosures: "",
      complimentaryClose: "",
      senderSignature: "",
      senderDesignation: "",
      language: "Language",
      tone: "Tone",
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
            AI Letter Writer
          </AuroraText>
        </h1>
        <h2 className="max-w-[60%] text-center font-semibold text-2xl md:text-4xl lg:text-2xl font-nunito text-gray-300">
          Create fully optimized, human-quality letter letters in seconds using
          structured inputs for keywords, tone, audience, SEO, images, tables,
          FAQs, and more—no prompt writing required.
        </h2>
      </header>
      <section className="w-full flex flex-col items-center gap-[1vw]">
        <p className="max-w-[40%] text-center text-xl md:text-3xl lg:text-2xl font-nunito text-gray-100">
          Want to know how you could leverage Magiwriter's AI Letter Writer to
          generate top class industry grade letters with best SEO techniques?
          Look no further, just check down bellow.
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
          defaultValue="personalLetter"
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
              value="personalLetter"
            >
              Personal Letter
            </TabsTrigger>
            <TabsTrigger
              className={`cursor-pointer ${
                isDark
                  ? "text-white data-[state=active]:text-white"
                  : "text-black data-[state=active]:text-black"
              }`}
              value="professionalletter"
            >
              Professional Letter
            </TabsTrigger>
          </TabsList>
          <TabsContent className={"w-full"} value="personalLetter">
            <div className="w-full flex flex-col items-center gap-[6vw] xl:gap-[2vw]">
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Sender Details
                  </p>
                </div>
                <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw] text-lg md:text-3xl lg:text-base">
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="fullName"
                    >
                      Sender's name (first name or nickname is sufficient):
                    </Label>
                    <Input
                      value={personalLetterForm.sender}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
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
                      placeholder="Put your name here..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="streetAddress"
                    >
                      Optional sender's address or city (used for personal
                      context or if desired):
                    </Label>
                    <Textarea
                      value={personalLetterForm.senderAddress}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
                          ...prev,
                          senderAddress: e.target.value,
                        }))
                      }
                      className={`border h-[14vw] xl:h-[5vw] ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                      placeholder="Put your address here..."
                    />
                  </div>
                </div>
              </section>
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Date and Recipient Details
                  </p>
                </div>
                <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw]">
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Date of writing:
                    </Label>
                    <Input
                      value={personalLetterForm.date}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
                          ...prev,
                          date: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder="Put the date in any understandable formate..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Recipient's name or nickname:
                    </Label>
                    <Input
                      value={personalLetterForm.recipient}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
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
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Optional address or city (if relevant or for shared
                      context):
                    </Label>
                    <Input
                      value={personalLetterForm.recipientAddress}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
                          ...prev,
                          recipientAddress: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
              </section>
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Letter Content Fields
                  </p>
                </div>
                <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw]">
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Greeting (e.g., "Dear John," "Hi Mom," or casual "Hey!"):
                    </Label>
                    <Input
                      value={personalLetterForm.greeting}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
                          ...prev,
                          greeting: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Purpose or occasion for writing (e.g., catching up,
                      thanking, apologizing):
                    </Label>
                    <Textarea
                      value={personalLetterForm.purpose}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
                          ...prev,
                          purpose: e.target.value,
                        }))
                      }
                      className={`border h-[14vw] xl:h-[5vw] ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                      placeholder="Better to explain what is purpose in brief for better results..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Main body content (paragraphs or bullet points with
                      stories, updates, questions, feelings):
                    </Label>
                    <Textarea
                      value={personalLetterForm.mainBody}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
                          ...prev,
                          mainBody: e.target.value,
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
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Closing remarks (e.g., well wishes, future plans,
                      invitations):
                    </Label>
                    <Input
                      value={personalLetterForm.closingRemarks}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
                          ...prev,
                          closingRemarks: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
              </section>
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Closing Fields
                  </p>
                </div>
                <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw]">
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Closing phrase (e.g., "Love," "Best," "Yours truly,"
                      "Cheers"):
                    </Label>
                    <Input
                      value={personalLetterForm.closingPhrase}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
                          ...prev,
                          closingPhrase: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Sender's name or nickname (signature optional):
                    </Label>
                    <Input
                      value={personalLetterForm.senderSignature}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
                          ...prev,
                          senderSignature: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Optional PS or afterthought:
                    </Label>
                    <Input
                      value={personalLetterForm.postScript}
                      onChange={(e) =>
                        setPersonalLetterForm((prev) => ({
                          ...prev,
                          postScript: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
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
                        {personalLetterForm.language}
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                        {personalLetterForm.tone}
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                        {personalLetterForm.writingStyle}
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                            setPersonalLetterForm((prev) => ({
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
                  <div className="w-[45%] xl:w-[20%] flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
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
                        {professionalLetterForm.wordCount}
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                  onClick={handleGeneratePersonalLetter}
                  className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
                    isDark
                      ? "text-white hover:bg-white/20"
                      : "text-black hover:bg-black/20"
                  } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
                >
                  Generate Personal Letter
                </Button>
                <Button
                  onClick={handleResetPersonalLetterForm}
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
              {(personalLetterLoading || personalLetter) && (
                <RestAllWritingOutputWindow
                  restAllWritingMarkdown={personalLetter}
                  isLoading={personalLetterLoading}
                  isDark={isDark}
                />
              )}
            </div>
          </TabsContent>
          <TabsContent className={"w-full"} value="professionalletter">
            <div className="w-full flex flex-col items-center gap-[6vw] xl:gap-[2vw]">
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Sender Details
                  </p>
                </div>
                <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw]">
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="fullName"
                    >
                      Your Full Name:
                    </Label>
                    <Input
                      value={professionalLetterForm.sender}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
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
                      placeholder="Put your full name here..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label
                      className={"text-xl md:text-3xl lg:text-base"}
                      htmlFor="streetAddress"
                    >
                      Street Address(Including number):
                    </Label>
                    <Input
                      value={professionalLetterForm.senderStreetAddress}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          senderStreetAddress: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder="Put your street address here..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      City, state/province, ZIP/postal code (Use comma "," to
                      seperate):
                    </Label>
                    <Textarea
                      value={professionalLetterForm.senderMainAddress}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          senderMainAddress: e.target.value,
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
                      htmlFor="message"
                    >
                      Country (optional for domestic):
                    </Label>
                    <Input
                      value={professionalLetterForm.senderCountry}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          senderCountry: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Email Address:
                    </Label>
                    <Input
                      value={professionalLetterForm.senderEmail}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          senderEmail: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Phone number (optional):
                    </Label>
                    <Input
                      value={professionalLetterForm.senderPhone}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          senderPhone: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
              </section>
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Date and Recipient Details
                  </p>
                </div>
                <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw]">
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Date of letter:
                    </Label>
                    <Input
                      value={professionalLetterForm.date}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          date: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder="Put the date in any understandable formate..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Recipient's full name and title (e.g., Dr., Principal):
                    </Label>
                    <Input
                      value={professionalLetterForm.recipient}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
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
                      placeholder="Ex: Dr. Amit Kumar..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Recipient's organization/department (e.g., Health
                      Department):
                    </Label>
                    <Input
                      value={professionalLetterForm.recipientOrganization}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          recipientOrganization: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Recipient's street address:
                    </Label>
                    <Input
                      value={professionalLetterForm.recipientStreetAddress}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          recipientStreetAddress: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Recipient's city, state/province, ZIP/postal code:
                    </Label>
                    <Textarea
                      value={professionalLetterForm.recipientMainAddress}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          recipientMainAddress: e.target.value,
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
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Recipient's country:
                    </Label>
                    <Input
                      value={professionalLetterForm.recipientCountry}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          recipientCountry: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
              </section>
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Letter Content Fields
                  </p>
                </div>
                <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw]">
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Subject line (brief, in title case or all caps):
                    </Label>
                    <Input
                      value={professionalLetterForm.subjectLine}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          subjectLine: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Salutation preference (e.g., "Dear Sir/Madam" or
                      personalized):
                    </Label>
                    <Input
                      value={professionalLetterForm.salutation}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          salutation: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Purpose of letter:
                    </Label>
                    <Textarea
                      value={professionalLetterForm.purpose}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          purpose: e.target.value,
                        }))
                      }
                      className={`border h-[14vw] xl:h-[5vw] ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } shadow-lg resize-none overflow-auto text-xl md:text-3xl lg:text-base p-[2vw] lg:p-[1vw] xl:p-[0.5vw]`}
                      placeholder="Better to explain what is purpose in brief for better results..."
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Main body details (bullet points or paragraphs:
                      introduction, key facts/requests, supporting info):
                    </Label>
                    <Textarea
                      value={professionalLetterForm.mainBody}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          mainBody: e.target.value,
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
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Closing action/request (e.g., "Please respond by..."):
                    </Label>
                    <Input
                      value={professionalLetterForm.closingRequest}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          closingRequest: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Attachments/enclosures (list if any):
                    </Label>
                    <Textarea
                      value={professionalLetterForm.Enclosures}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          Enclosures: e.target.value,
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
                </div>
              </section>
              <section className="w-full flex flex-col items-center gap-[5vw] xl:gap-[1vw]">
                <div className="w-full flex justify-start items-center">
                  <p className="font-bold text-2xl md:text-4xl lg:text-xl">
                    Closing Fields
                  </p>
                </div>
                <div className="w-full flex flex-col items-start gap-[4vw] xl:gap-[1vw]">
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Complimentary close (e.g., "Yours sincerely", "Regards"):
                    </Label>
                    <Input
                      value={professionalLetterForm.complimentaryClose}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          complimentaryClose: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Sender's signature name (printed below signature line):
                    </Label>
                    <Input
                      value={professionalLetterForm.senderSignature}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          senderSignature: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
                    />
                  </div>
                  <div className="w-full flex flex-col items-start gap-[2vw] xl:gap-[0.5vw]">
                    <Label className={"text-xl md:text-3xl lg:text-base"}>
                      Sender's designation/position (optional):
                    </Label>
                    <Input
                      value={professionalLetterForm.senderDesignation}
                      onChange={(e) =>
                        setProfessionalLetterForm((prev) => ({
                          ...prev,
                          senderDesignation: e.target.value,
                        }))
                      }
                      className={`border shadow-lg ${
                        isDark
                          ? "bg-gray-900 text-white placeholder:text-gray-300 border-gray-600"
                          : "bg-white text-black placeholder:text-gray-400"
                      } text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw]`}
                      type="text"
                      placeholder=""
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
                        {professionalLetterForm.language}
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                        {professionalLetterForm.tone}
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                        {professionalLetterForm.writingStyle}
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                        {professionalLetterForm.wordCount}
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                            setProfessionalLetterForm((prev) => ({
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
                  onClick={handleGenerateProfessionalLetter}
                  className={`w-full font-nunito cursor-pointer bg-linear-from-l bg-linear-to-r from-blue-500/50 via-pink-500/70 to-orange-500/65 ${
                    isDark
                      ? "text-white hover:bg-white/20"
                      : "text-black hover:bg-black/20"
                  } shadow-xl text-xl md:text-3xl lg:text-base px-[2vw] lg:px-[1vw] xl:px-[0.5vw] py-[4vw] lg:py-[2vw] xl:py-[1vw] transition-all duration-200`}
                >
                  Generate Professional Letter
                </Button>
                <Button
                  onClick={handleResetProfessionalLetterForm}
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
              {(professionalLetterLoading || professionalLetter) && (
                <RestAllWritingOutputWindow
                  restAllWritingMarkdown={professionalLetter}
                  isLoading={professionalLetterLoading}
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
            ✉️ Complete Guide to Using the AI Letter Writer Tool for Perfect
            Letters
          </h2>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center">
            Our AI Letter Writer is built for{" "}
            <span className="font-bold">
              personal communication, professional correspondence, and formal
              letter writing
            </span>
            — without needing complex prompts. Simply fill structured fields and
            generate{" "}
            <span className="font-bold">
              well-formatted, clear, and purpose-driven letters
            </span>{" "}
            in seconds.
          </p>
          <p className="lg:max-w-[60%] max-w-[80%] text-2xl md:text-3xl lg:text-xl text-center text-gray-300 mt-[1vw]">
            This guide explains{" "}
            <span className="font-bold">every input field</span>, how to use it
            effectively, and how it improves letter quality, structure, tone,
            and communication success.
          </p>
        </div>

        <div className="lg:max-w-[60%] max-w-[90%] space-y-16">
          {/* PERSONAL / CASUAL LETTER SECTION */}

          <div className="max-w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[4vw] lg:p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              💌 Personal & Casual Letter Fields
            </h3>
            <p className="text-gray-300 text-2xl lg:text-base">
              Use these fields to write friendly, emotional, or informal letters
              for family, friends, and personal communication.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👤 1. Sender
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Identifies who is writing the letter.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Enter your full name or nickname based on formality.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Helps
              personalize the letter and build emotional connection.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🏠 2. Sender Address
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              your mailing address at the top of the letter.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use this for handwritten, postal, or formal personal letters.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              formatting and authenticity.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📅 3. Date
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Indicates when the letter was written.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use today’s date or the date of sending.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Adds
              professionalism and proper letter format.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👥 4. Recipient
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Identifies who the letter is written to.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use the recipient’s full name or relationship title.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Helps
              personalize the message.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🏡 5. Recipient Address
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              the recipient’s address.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Include this for mailed or formal personal letters.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              formatting and delivery accuracy.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👋 6. Greeting
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Opens
              the letter with a friendly or respectful tone.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use “Dear,” “Hi,” or “Hello” based on your relationship.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Sets the
              emotional tone of the letter.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 7. Purpose
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> States
              why you are writing the letter.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Clearly explain your intention — apology, appreciation, update,
              invitation, etc.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Helps
              the AI keep the letter focused and meaningful.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📝 8. Main Body
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Contains the main message of your letter.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Share details, feelings, or explanations clearly.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Forms
              the heart of the letter and drives its emotional or informational
              value.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              💭 9. Closing Remarks
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Wraps
              up the letter with final thoughts.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Add well-wishes, gratitude, or emotional closure.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Leaves a
              positive lasting impression.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ✒️ 10. Closing Phrase
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Ends
              the letter with a polite sign-off.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use “Sincerely,” “With love,” “Warm regards,” etc.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Adds
              emotional or professional tone to the ending.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🖊️ 11. Sender Signature
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Displays the sender’s name at the end.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use your full name or preferred signature style.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span>{" "}
              Completes the letter format properly.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📌 12. Post Script (P.S.)
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds an
              extra note after the signature.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use it for reminders, follow-ups, or emotional notes.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Enhances
              clarity or emotional connection.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🌍 13. Language
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Determines the language of the letter.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose the recipient’s preferred language.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              clarity, accessibility, and communication success.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎭 14. Letter Tone
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how the letter feels emotionally.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use friendly, emotional, thankful, apologetic, or caring tones.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              the message matches your relationship and intent.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ✍️ 15. Writing Style
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              how the letter is written.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Choose casual, heartfelt, expressive, or simple styles.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Shapes
              readability and emotional tone.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📏 16. Word Count
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls the length of the personal letter.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Keep letters clear, meaningful, and appropriately detailed.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              the letter feels complete without being overwhelming.
            </p>
          </div>

          {/* PROFESSIONAL / FORMAL LETTER SECTION */}

          <div className="w-full space-y-2 bg-gray-900/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🏢 Professional & Formal Letter Fields
            </h3>
            <p className="text-gray-300">
              Use these fields to write official, business, legal, academic, or
              corporate letters with proper formatting and professional tone.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👤 17. Sender
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Identifies the person writing the letter.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use your full legal or professional name.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Adds
              credibility and accountability.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🏠 18. Sender Street Address
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies your street address.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use this for formal or postal correspondence.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              official formatting.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🏢 19. Sender Main Address
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              your city, state, or region.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use your official business or residential address.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Supports
              formal letter formatting.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🌍 20. Sender Country
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies the sender’s country.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use for international correspondence.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              clarity and mailing accuracy.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📧 21. Sender Email
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Provides an official email address.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use a professional or business email.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Enables
              easy reply and follow-up.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📞 22. Sender Phone
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds a
              contact phone number.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use an official or reachable number.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              accessibility and professionalism.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📅 23. Date
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Indicates when the letter was written.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use the date of submission or sending.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Supports
              formal record keeping.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👥 24. Recipient
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Identifies the person receiving the letter.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use the full name and professional title.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              personalization and respect.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🏢 25. Recipient Organization
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies the company or institution.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use the official organization name.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Adds
              formality and professionalism.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🏛️ 26. Recipient Street Address
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              the recipient’s street address.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use for official correspondence.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              formal layout.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🏢 27. Recipient Main Address
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              city, state, or region of the recipient.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use the official business address.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Supports
              professional formatting.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🌍 28. Recipient Country
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Specifies the recipient’s country.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use for international letters.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              delivery accuracy and clarity.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🧾 29. Subject Line
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Summarizes the purpose of the letter.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use a clear, formal subject line.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              clarity and professional presentation.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              👋 30. Salutation
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Opens
              the letter formally.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use “Dear Mr./Ms.” or professional titles.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Sets
              professional tone from the start.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎯 31. Purpose
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Explains why the letter is being written.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Clearly state the request, complaint, application, or inquiry.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Keeps
              the letter focused and professional.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📝 32. Main Body
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Contains the detailed explanation or request.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Keep paragraphs clear, logical, and professional.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Forms
              the core of the professional letter.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📨 33. Closing Request
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> States
              what action you expect from the recipient.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Clearly mention deadlines, follow-ups, or expectations.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span>{" "}
              Encourages response and action.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📎 34. Enclosures
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Lists
              attached documents.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Include resume, certificates, or forms if applicable.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Adds
              clarity and completeness.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ✒️ 35. Complimentary Close
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Ends
              the letter politely.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use “Sincerely,” “Yours faithfully,” or “Respectfully.”
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span>{" "}
              Maintains professionalism and respect.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🖊️ 36. Sender Signature
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Displays the sender’s name.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use your full legal or professional name.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span>{" "}
              Completes the formal letter layout.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎓 37. Sender Designation
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Adds
              your job title or professional role.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Include your official designation.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span>{" "}
              Increases credibility and authority.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🌍 38. Language
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Sets
              the letter’s language.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Match the recipient’s preferred or official language.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Improves
              clarity and communication success.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              🎭 39. Letter Tone
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls how the letter sounds emotionally and professionally.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use formal, respectful, polite, assertive, or neutral tones.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              tone matches business and professional standards.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              ✍️ 40. Writing Style
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span> Defines
              how the professional letter is written.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Use clear, formal, business, or legal writing styles.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Shapes
              structure, readability, and professionalism.
            </p>
          </div>

          <div className="w-full space-y-2 bg-gray-800/80 border border-gray-400/40 p-[1vw] rounded-xl">
            <h3 className="text-2xl md:text-3xl lg:text-2xl font-semibold text-white">
              📏 41. Word Count
            </h3>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Purpose:</span>{" "}
              Controls the length of the professional letter.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Best Practice:</span>{" "}
              Keep letters concise, clear, and to the point.
            </p>
            <p className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Impact:</span> Ensures
              professional readability and efficiency.
            </p>
          </div>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🚀 Why This Tool Improves Letter Writing Quality & Communication
            Success
          </h3>
          <p className="text-2xl lg:text-base">
            This AI Letter Writer follows{" "}
            <span className="font-semibold text-white">
              modern correspondence standards
            </span>
            :
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">
                Proper Formatting
              </span>{" "}
              – Correct layout for personal and professional letters
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Tone Control</span> –
              Emotional and professional tone matching
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Clarity</span> – Clear,
              easy-to-read sentences
            </li>
            <li className="text-2xl lg:text-base">
              <span className="font-semibold text-white">Originality</span> –
              Human-like, plagiarism-free writing
            </li>
          </ul>

          <p className="text-2xl lg:text-base">
            It also aligns with{" "}
            <span className="font-semibold text-white">
              communication best practices
            </span>
            , including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Formal business letter standards
            </li>
            <li className="text-2xl lg:text-base">
              Personal letter writing etiquette
            </li>
            <li className="text-2xl lg:text-base">
              Professional communication guidelines
            </li>
            <li className="text-2xl lg:text-base">Time-saving automation</li>
          </ul>
        </div>

        <div className="max-w-full lg:max-w-[45%] w-[80%] flex flex-col items-center pt-8 border-t border-gray-700 space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-2xl font-bold text-white">
            🧠 Final Tips for Best Letter Results
          </h3>
          <p>For maximum communication success:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                clear purpose and structured content
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Select the{" "}
              <span className="font-semibold text-white">
                correct tone and writing style
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Include{" "}
              <span className="font-semibold text-white">
                proper greetings and closing phrases
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Keep letters{" "}
              <span className="font-semibold text-white">
                concise, respectful, and well-formatted
              </span>
            </li>
            <li className="text-2xl lg:text-base">
              Use{" "}
              <span className="font-semibold text-white">
                professional details and contact information
              </span>{" "}
              when writing formal letters
            </li>
          </ul>
        </div>
      </section>
      <section className="max-w-full lg:w-[60%] w-[90%] flex flex-col items-center mt-[10vw]">
        <FAQSection
          faqs={letterWriterFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Magiwriter's AI Letter Writer and how it can transform your letter and letter writing workflow"
        />
      </section>
    </div>
  );
};

export default LetterTestingPage;
