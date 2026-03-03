import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import { Highlighter } from "@/components/ui/highlighter";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Bentogrid } from "@/components/component/BentoGrid";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useUser } from "@/context/UserContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TestingLandingPage = () => {
  const faqs = [
    {
      question: "What is the Magiwriter AI writing platform used for?",
      answer:
        "Magiwriter AI writing platform helps users generate high-quality written content for multiple purposes, including articles, blogs, essays, emails, notices, reports, letters, paragraphs, and stories. It is designed for students, professionals, creators, and businesses who want to write faster while maintaining clarity, structure, and quality.",
    },
    {
      question: "What types of writing tools are available on this platform?",
      answer:
        "The platform offers 9 long-form AI writing tools: Article writer, Blog post generator, Essay writer, Email writer, Notice generator, Paragraph writer, Report writer, Letter writer, Story writer, In addition, it includes short utility tools such as grammar correction, content humanizer, title generator, SEO tag generator, tweet generator, and social media caption generator.",
    },
    {
      question: "How is this different from a normal AI chatbot?",
      answer:
        "Unlike a general AI chatbot, this platform provides structured, form-based writing tools. Each tool has dedicated input fields like title, tone, language, length, and SEO settings. This ensures more accurate, purpose-driven content instead of generic AI responses.",
    },
    {
      question: "Can I generate SEO-optimized articles using this tool?",
      answer:
        "Yes. The article writing tool includes dedicated SEO features such as: SEO keyword input, Meta title and meta description generation, Structured long-form content. You can generate articles that are ready to publish on blogs or WordPress websites.",
    },
    {
      question: "Can I directly publish articles to WordPress?",
      answer:
        "Yes. Articles generated using the platform can be exported and published to WordPress, making it easy to go from AI generation to live publishing without rewriting the content manually.",
    },
    {
      question: "What languages does the AI writing tool support?",
      answer:
        "The platform supports multiple languages, allowing users to generate content in their preferred language. Language selection is available directly in the writing form for long-form tools like articles, blogs, and essays.",
    },
    {
      question: "Can I control the tone and writing style?",
      answer:
        "Yes. Each long-form writing tool allows you to choose the tone (such as professional, formal, casual, or creative) and sentence length, helping you match the writing style to your audience and purpose.",
    },
    {
      question: "Can I download the generated content as PDF or Word files?",
      answer:
        "Yes. All long-form content generated on the platform can be saved and downloaded as PDF or Word (DOCX) files, making it easy to submit, share, or publish your work.",
    },
    {
      question: "Is this AI writing tool suitable for students?",
      answer:
        "Yes. The platform is highly suitable for students who need help writing essays, reports, paragraphs, notices, and letters. It helps structure ideas clearly while saving time and improving writing quality.",
    },
    {
      question: "What does the AI Humanizer tool do?",
      answer:
        "The AI Humanizer tool rewrites AI-generated content to make it sound more natural, human-like, and less robotic, which is especially useful for academic, professional, or personal writing.",
    },
    {
      question: "How does the grammar correction tool work?",
      answer:
        "The grammar correction tool automatically detects and fixes: Grammar mistakes, Spelling errors, Sentence structure issues. It improves readability while keeping the original meaning intact.",
    },
    {
      question: "What is the SEO tag generator used for?",
      answer:
        "The SEO tag generator helps create SEO-friendly tags and keywords that can be used in blog posts, articles, and web pages to improve search engine visibility.",
    },
    {
      question: "Can I use this platform for social media content?",
      answer:
        "Yes. The platform includes tools for: Tweet generation, Social media caption writing, Title generation, These tools are ideal for creating short, engaging content for platforms like Twitter, Instagram, and LinkedIn.",
    },
    {
      question: "Do I need technical or SEO knowledge to use this tool?",
      answer:
        "No. The platform is designed to be beginner-friendly. All SEO and writing options are presented as simple form inputs, so users do not need prior technical or SEO expertise.",
    },
    {
      question: "Is my generated content can be saved?",
      answer:
        "Yes. You can download the content securely on your computer drive. Your writings can be saved, downloaded without being publicly accessible.",
    },
  ];

  const { user, isLoading } = useUser();

  useEffect(()=> {
    if(!isLoading && user) {
      window.location.href = "/dashboard";
    }
  }, []);

  const handleSignin = async () => {
    window.location.href = "/api/auth/google";
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-screen min-h-screen bg-black text-white font-nunito">
      <header className="max-w-full flex flex-col items-center mt-[6vw] md:mt-[14vw] lg:mt-[6vw]">
        <section className="max-w-full flex flex-col items-center z-10 bg-linear-to-b from-black via-blue-400/75 to-black xl:gap-[3vw] gap-[10vw] mb-[5vw]">
          <div className="max-w-[70%] flex justify-center items-center xl:pt-[2vw] lg:pt-[4vw] md:pt-[6vw] pt-[15vw]">
            <BlurFade delay={0.25} inView>
              <h1 className="xl:text-6xl lg:text-4xl md:text-7xl text-3xl font-bold text-center">
                Writing Made{" "}
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
                  Effortless.
                </AuroraText>
                <br /> Fillup Your Thoughts And Create On Your Will. <br />
                <span className="max-w-full flex justify-center">
                  With&nbsp;<AuroraText speed={1.5}>Magiwriter</AuroraText>
                  &nbsp;
                  <TextAnimate
                    animation="blurInUp"
                    by="character"
                    duration={0.5}
                  >
                    AI.
                  </TextAnimate>
                </span>
              </h1>
            </BlurFade>
          </div>
          <div className="w-[60%] flex flex-col items-center">
            <h2 className="xl:text-2xl lg:text-3xl md:text-5xl text-2xl mt-[1vw] text-center">
              Accelerate your content writing workflow with{" "}
              <Highlighter action="underline" color="#FF9800">
                intelligent AI agents
              </Highlighter>{" "}
              that writes your content,{" "}
              <Highlighter action="highlight" color="purple">
                upload to platforms like Wordpress
              </Highlighter>{" "}
              and creates professional emails and respond to it.
            </h2>
          </div>
          <ShinyButton
            onClick={handleSignin}
            className={"bg-white/15 md:text-4xl lg:text-xl m-0"}
          >
            Signup for free
          </ShinyButton>
          <div className="xl:w-[70%] lg:w-[80%] w-[95%] rounded-xl z-20">
            <BlurFade delay={0.25} inView direction="up" blur="12px">
              <div className="max-w-full flex justify-center items-center bg-linear-to-b from-white/20 via-white/20 to-black xl:rounded-4xl rounded-3xl shadow-lg p-[2vw] lg:p-[1vw]">
                <img
                  className="rounded-2xl z-30"
                  src="dashboardview.png"
                  alt="hero-preview-image"
                />
              </div>
            </BlurFade>
          </div>
        </section>
      </header>
      <main className="max-w-full flex flex-col items-center mt-[17vw]">
        <div className="max-w-full flex flex-col items-center lg:gap-[10vw] gap-[20vw]">
          <div className="max-w-full flex flex-col items-center xl:gap-[1vw] gap-[4vw]">
            <h2 className="xl:text-5xl lg:text-5xl md:text-6xl text-3xl font-bold text-center">
              Empower Your{" "}
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
                Workflow
              </AuroraText>{" "}
              with <br /> Magiwriter AI Tools
            </h2>
            <p className="xl:w-[70%] w-[90%] xl:text-xl lg:text-2xl md:text-4xl text-2xl text-gray-200 text-center">
              Writing needs change depending on what you’re creating — an
              article, an email, a report, or even a short social post. That’s
              why MagiWriter is built as a collection of purpose-driven AI
              tools, not a single generic text box. Each tool is designed around
              a specific type of writing, with the right structure, tone
              controls, and formatting options to help you get meaningful
              results faster. Whether you’re working on long-form content or
              quick everyday writing, you’ll find tools that guide you through
              the process and give you output you can actually use.
            </p>
          </div>
          <div className="max-w-full flex flex-col items-center">
            <div className="max-w-full xl:w-[70%] lg:w-[80%] flex flex-col items-center lg:gap-[4vw] gap-[10vw] lg:py-[2vw] md:py-[4vw] py-[5vw] lg:p-[2vw] p-[4vw] bg-linear-to-b from-black via-fuchsia-500/40 to-black border border-fuchsia-800/40 rounded-3xl">
              <div className="flex flex-col items-center gap-[1vh]">
                <h2 className="font-semibold xl:text-3xl lg:text-4xl md:text-5xl text-3xl">
                  AI Article Writer
                </h2>
                <p className="lg:w-[60%] w-[90%] text-center xl:text-lg lg:text-2xl md:text-3xl text-2xl text-gray-300">
                  Generate high-quality, long-form articles using AI.
                  Magiwriter’s AI Article Writer helps you create SEO-optimized
                  articles designed for informational search intent, topical
                  authority, and long-term organic traffic growth.
                </p>
              </div>
              <div className="lg:w-[50%] w-[80%] flex flex-col items-center gap-[1.5vh]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Article Writer by Magiwriter helps you with :
                </p>
                <ul className="lg:w-[70%] w-[90%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                  <li>
                    <p>
                      AI-generated long-form articles optimized for search
                      engines.
                    </p>
                  </li>
                  <li>
                    <p>
                      SEO-focused articles for informational and educational
                      keywords.
                    </p>
                  </li>
                  <li>
                    <p>
                      In-depth guides, research-based articles, and evergreen
                      content.
                    </p>
                  </li>
                  <li>
                    <p>
                      AI Article Writer includes the best humanizer tool for
                      natural and human touch in article.
                    </p>
                  </li>
                  <li>
                    <p>
                      Publish-ready articles for WordPress and similar content
                      platforms.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl text-center">
                  AI Article Writer allows you to customize :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Article title, topic, primary and secondary keywords.
                      </p>
                    </li>
                    <li>
                      <p>
                        Writing tone, language, audience, depth of coverage, and
                        search intent.
                      </p>
                    </li>
                    <li>
                      <p>
                        Article length, sentence complexity, and SEO
                        readability.
                      </p>
                    </li>
                    <li>
                      <p>
                        Inclusion of headings (H1–H4), tables, lists, images,
                        and references.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Article Writer generates :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Well-structured, long-form SEO articles.</p>
                    </li>
                    <li>
                      <p>
                        Content optimized for on-page SEO, clarity, and
                        authority.
                      </p>
                    </li>
                    <li>
                      <p>
                        Multi-language and region-specific articles for global
                        reach.
                      </p>
                    </li>
                  </ul>
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[2vw] gap-[4vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  You get multiple export options :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Download SEO-optimized articles as a PDF.</p>
                    </li>
                    <li>
                      <p>Export articles as MS Word (DOCX) files.</p>
                    </li>
                    <li>
                      <p>
                        Directly publish your article to your Wordpress site.{" "}
                        <br />{" "}
                        <span className="text-gray-300">
                          <span className="font-bold">Disclaimer :</span> You
                          need to connect your wordpress account with
                          Magiwriter.{" "}
                          <a
                            className="text-blue-500 hover:text-blue-600 hover:underline"
                            href="#"
                          >
                            Feel free to know more.
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                  <div className="flex lg:w-[40%] max-w-full justify-center items-center xl:gap-[1vw] lg:gap-[3vw] gap-[5vw]">
                    <img
                      className="rounded-full xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="wordpress-logo.jpg"
                      alt="directly upload ai generated articles with one click"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="PDF_file_icon.png"
                      alt="export ai generated article as pdf format file"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="msword-logo.jpg"
                      alt="export ai generated article as pdf format file"
                    />
                  </div>
                </div>
                <ShinyButton
                onClick={handleSignin}
                  className={"bg-fuchsia-400/15 md:text-4xl lg:text-xl m-0"}
                >
                  <p className={"lg:text-base md:text-3xl text-lg"}>
                    Try AI Article Writer for free
                  </p>
                </ShinyButton>
              </div>
            </div>
          </div>
          <div className="max-w-full flex flex-col items-center gap-[3vw]">
            <div className="max-w-full xl:w-[70%] lg:w-[80%] flex flex-col items-center lg:gap-[4vw] gap-[10vw] lg:py-[2vw] md:py-[4vw] py-[5vw] lg:p-[2vw] p-[4vw] bg-linear-to-b from-black via-blue-500/40 to-black border border-blue-800/40 rounded-3xl">
              <div className="flex flex-col items-center gap-[1vh]">
                <h2 className="font-semibold xl:text-3xl lg:text-4xl md:text-5xl text-3xl">
                  AI Blog Writer
                </h2>
                <p className="lg:w-[60%] w-[90%] text-center xl:text-lg lg:text-2xl md:text-3xl text-2xl text-gray-300">
                  Write blogs that people actually enjoy reading and designed
                  for search intent, keyword targeting — while still ranking on
                  search engines. Create engaging, SEO-friendly blog posts that
                  help you grow organic traffic, build authority, and stay
                  consistent.
                </p>
              </div>
              <div className="lg:w-[50%] w-[80%] flex flex-col items-center gap-[1.5vh]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Blog Writer by Magiwriter helps you with :
                </p>
                <ul className="lg:w-[70%] w-[90%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                  <li>
                    <p>
                      AI-generated blog posts for personal, business, and niche
                      websites which optimized for Google and other search
                      engines.
                    </p>
                  </li>
                  <li>
                    <p>
                      SEO-optimized blogs for organic search traffic growth.
                    </p>
                  </li>
                  <li>
                    <p>
                      Informative, opinion-based, and storytelling blog content.
                    </p>
                  </li>
                  <li>
                    <p>
                      Publish-ready blogs for WordPress, Medium, and similar
                      platforms.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl text-center">
                  AI Blog Writer allows you to customize :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Blog title, topic, and target audience and target
                        keywords.
                      </p>
                    </li>
                    <li>
                      <p>Writing tone (casual, professional, persuasive).</p>
                    </li>
                    <li>
                      <p>
                        Blog length, paragraph depth, and SEO readability score.
                      </p>
                    </li>
                    <li>
                      <p>
                        Whether to include headings (H1-H5), lists, tables,
                        images, and references.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Blog Writer generates :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Clean, natural, engaging, and human-like blog content
                        with headings, lists, and visuals.
                      </p>
                    </li>
                    <li>
                      <p>
                        SEO-friendly blog content with clear structure and
                        formatting.
                      </p>
                    </li>
                    <li>
                      <p>
                        Blogs optimized for on-page SEO, readability, and
                        engagement.
                      </p>
                    </li>
                    <li>
                      <p>
                        Blogs optimized for multiple languages and regional
                        audiences.
                      </p>
                    </li>
                  </ul>
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[2vw] gap-[4vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  You get multiple export options :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Download and save blog posts as a PDF.</p>
                    </li>
                    <li>
                      <p>Export blogs as MS Word (DOCX) files.</p>
                    </li>
                    <li>
                      <p>
                        Publish blogs directly to your WordPress site. <br />{" "}
                        <span className="text-gray-300">
                          <span className="font-bold">Disclaimer :</span> You
                          need to connect your wordpress account with
                          Magiwriter.{" "}
                          <a
                            className="text-blue-500 hover:text-blue-600 hover:underline"
                            href="#"
                          >
                            Feel free to know more.
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                  <div className="flex lg:w-[40%] max-w-full justify-center items-center xl:gap-[1vw] lg:gap-[3vw] gap-[5vw]">
                    <img
                      className="rounded-full xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="wordpress-logo.jpg"
                      alt="directly upload ai generated blogs with one click"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="PDF_file_icon.png"
                      alt="export ai generated blogs as pdf format file"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="msword-logo.jpg"
                      alt="export ai generated blogs as pdf format file"
                    />
                  </div>
                </div>
                <ShinyButton
                onClick={handleSignin}
                  className={"bg-blue-400/15 md:text-4xl lg:text-xl m-0"}
                >
                  <p className={"lg:text-base md:text-3xl text-lg"}>
                    Try AI Blog Writer for free
                  </p>
                </ShinyButton>
              </div>
            </div>
          </div>
          <div className="max-w-full flex flex-col items-center gap-[3vw]">
            <div className="max-w-full xl:w-[70%] lg:w-[80%] flex flex-col items-center lg:gap-[4vw] gap-[8vw] lg:py-[2vw] md:py-[4vw] py-[5vw] lg:p-[2vw] p-[4vw] bg-linear-to-b from-black via-green-500/35 to-black border border-green-800/40 rounded-3xl">
              <div className="flex flex-col items-center gap-[1vh]">
                <h2 className="font-semibold lg:text-3xl md:text-5xl text-3xl">
                  AI Email Writer
                </h2>
                <p className="lg:w-[60%] w-[90%] text-center lg:text-lg md:text-3xl text-2xl text-gray-300">
                  Write clear, professional, and effective emails using AI.
                  Magiwriter’s AI Email Writer helps you create and reply to
                  business emails with the right tone, structure, and clarity
                  for professional communication.
                </p>
              </div>
              <div className="lg:w-[50%] w-[80%] flex flex-col items-center gap-[1.5vh]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Email Writer by Magiwriter helps you with :
                </p>
                <ul className="lg:w-[70%] w-[90%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                  <li>
                    <p>
                      AI-generated professional emails for business
                      communication.
                    </p>
                  </li>
                  <li>
                    <p>
                      Writing and replying to emails with clarity and proper
                      etiquette.
                    </p>
                  </li>
                  <li>
                    <p>Formal, semi-formal, and professional email drafting.</p>
                  </li>
                  <li>
                    <p>
                      Time-saving email writing for daily professional
                      workflows.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl text-center">
                  AI Email Writer allows you to customize :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Email purpose, subject line, and key talking points.
                      </p>
                    </li>
                    <li>
                      <p>
                        Writing tone (formal, polite, confident, persuasive, or
                        neutral).
                      </p>
                    </li>
                    <li>
                      <p>
                        Language, depth of explanation, and level of formality.
                      </p>
                    </li>
                    <li>
                      <p>
                        Sender details, recipient role, and professional
                        context.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Email Writer generates :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Well-structured, professional emails with clear intent.
                      </p>
                    </li>
                    <li>
                      <p>
                        Context-aware email replies based on pasted incoming
                        emails.
                      </p>
                    </li>
                    <li>
                      <p>
                        Emails optimized for clarity, professionalism, and
                        response rate.
                      </p>
                    </li>
                  </ul>
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[2vw] gap-[4vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  You get flexible usage options :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Copy and use emails instantly in your email client.</p>
                    </li>
                    <li>
                      <p>
                        Save as PDF and Microsoft Word DOCX file and make custom
                        changes on your own later.
                      </p>
                    </li>
                    <li>
                      <p>Edit and refine emails before sending.</p>
                    </li>
                    <li>
                      <p>
                        Generate professional replies by pasting received emails
                        into the editor.
                      </p>
                    </li>
                  </ul>
                  <div className="flex lg:w-[40%] max-w-full justify-center items-center xl:gap-[1vw] lg:gap-[3vw] gap-[5vw]">
                    <img
                      className="rounded-full xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="mail-logo.png"
                      alt="generate email with ai magiwriter tools"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="PDF_file_icon.png"
                      alt="export ai generated email as pdf format file"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="msword-logo.jpg"
                      alt="export ai generated email as pdf format file"
                    />
                  </div>
                </div>
                <ShinyButton
                onClick={handleSignin}
                  className={"bg-green-400/15 lg:text-base text-sm m-0"}
                >
                  <p className={"lg:text-base md:text-3xl text-lg"}>
                    Try AI Email Writer for free
                  </p>
                </ShinyButton>
              </div>
            </div>
          </div>
          <div className="max-w-full flex flex-col items-center gap-[3vw]">
            <div className="max-w-full xl:w-[70%] lg:w-[80%] flex flex-col items-center lg:gap-[4vw] gap-[8vw] lg:py-[2vw] md:py-[4vw] py-[5vw] lg:p-[2vw] p-[4vw] bg-linear-to-b from-black via-orange-400/35 to-black border border-orange-800/40 rounded-3xl">
              <div className="flex flex-col items-center gap-[1vh]">
                <h2 className="font-semibold lg:text-3xl md:text-5xl text-3xl">
                  AI Essay Writer
                </h2>
                <p className="lg:w-[60%] w-[90%] text-center lg:text-lg md:text-3xl text-2xl text-gray-300">
                  Generate well-structured, academically sound essays using AI.
                  Magiwriter’s AI Essay Writer helps students and professionals
                  create clear, coherent, and topic-focused essays with proper
                  structure and logical flow.
                </p>
              </div>
              <div className="lg:w-[50%] w-[80%] flex flex-col items-center gap-[1.5vh]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Essay Writer by Magiwriter helps you with :
                </p>
                <ul className="lg:w-[70%] w-[90%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                  <li>
                    <p>
                      AI-generated essays for academic and educational purposes.
                    </p>
                  </li>
                  <li>
                    <p>
                      Structured essays aligned with standard academic formats.
                    </p>
                  </li>
                  <li>
                    <p>Clear argument development with logical progression.</p>
                  </li>
                  <li>
                    <p>
                      Time-efficient essay writing for assignments and research
                      tasks.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl text-center">
                  AI Essay Writer allows you to customize :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Essay topic, thesis statement, and key arguments.</p>
                    </li>
                    <li>
                      <p>
                        Writing tone (formal, academic, analytical, or neutral).
                      </p>
                    </li>
                    <li>
                      <p>
                        Essay length, depth of analysis, and sentence
                        complexity.
                      </p>
                    </li>
                    <li>
                      <p>
                        Language, academic level, and regional writing
                        standards.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Essay Writer generates :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Well-organized essays with introduction, body, and
                        conclusion.
                      </p>
                    </li>
                    <li>
                      <p>
                        Clear, concise, and academically appropriate content.
                      </p>
                    </li>
                    <li>
                      <p>
                        Multi-language essays adapted to different educational
                        contexts.
                      </p>
                    </li>
                  </ul>
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[2vw] gap-[4vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  You get flexible usage options :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Download essays as a PDF for submission or review.</p>
                    </li>
                    <li>
                      <p>Export essays as MS Word (DOCX) files.</p>
                    </li>
                    <li>
                      <p>
                        Edit, refine, and format essays before final submission.
                      </p>
                    </li>
                  </ul>
                  <div className="flex lg:w-[40%] max-w-full justify-center items-center xl:gap-[1vw] lg:gap-[3vw] gap-[5vw]">
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="PDF_file_icon.png"
                      alt="export ai generated essay as pdf format file"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="msword-logo.jpg"
                      alt="export ai generated essay as pdf format file"
                    />
                  </div>
                </div>
                <ShinyButton
                onClick={handleSignin}
                  className={"bg-orange-400/15 lg:text-base text-sm"}
                >
                  <p className={"lg:text-base md:text-3xl text-lg"}>
                    Try AI Essay Writer for free
                  </p>
                </ShinyButton>
              </div>
            </div>
          </div>
          <div className="max-w-full flex flex-col items-center gap-[3vw]">
            <div className="max-w-full xl:w-[70%] lg:w-[80%] flex flex-col items-center lg:gap-[4vw] gap-[8vw] lg:py-[2vw] md:py-[4vw] py-[5vw] lg:p-[2vw] p-[4vw] bg-linear-to-b from-black via-stone-400/45 to-black border border-stone-600/50 rounded-3xl">
              <div className="flex flex-col items-center gap-[1vh]">
                <h2 className="font-semibold lg:text-3xl md:text-5xl text-3xl">
                  AI Letter Writer
                </h2>
                <p className="lg:w-[60%] w-[90%] text-center lg:text-lg md:text-3xl text-2xl text-gray-300">
                  Write clear, well-structured personal and professional letters
                  using AI. Magiwriter’s AI Letter Writer helps you generate
                  casual letters and formal business letters with the correct
                  tone, format, and writing standards.
                </p>
              </div>
              <div className="lg:w-[50%] w-[80%] flex flex-col items-center gap-[1.5vh]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Letter Writer by Magiwriter helps you with :
                </p>
                <ul className="lg:w-[70%] w-[90%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                  <li>
                    <p>AI-generated personal and professional letters.</p>
                  </li>
                  <li>
                    <p>
                      Casual, friendly letters and formally structured business
                      letters.
                    </p>
                  </li>
                  <li>
                    <p>
                      Correct letter formatting, tone, and writing etiquette.
                    </p>
                  </li>
                  <li>
                    <p>
                      Time-saving letter writing for personal and professional
                      needs.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl text-center">
                  AI Letter Writer allows you to customize :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Letter purpose, subject, and key message.</p>
                    </li>
                    <li>
                      <p>
                        Writing tone (casual, polite, formal, professional, or
                        persuasive).
                      </p>
                    </li>
                    <li>
                      <p>Language, length, and level of formality.</p>
                    </li>
                    <li>
                      <p>
                        Sender information, recipient details, and
                        organizational context.
                      </p>
                    </li>
                    <li>
                      <p>
                        Date, salutation, closing, and signature formatting.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Letter Writer generates :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Properly formatted personal and professional letters.
                      </p>
                    </li>
                    <li>
                      <p>
                        Context-aware letters with clear structure and intent.
                      </p>
                    </li>
                    <li>
                      <p>
                        Multi-language letters adapted to regional writing
                        standards.
                      </p>
                    </li>
                  </ul>
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[2vw] gap-[4vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  You get flexible usage options :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Download letters as PDF files.</p>
                    </li>
                    <li>
                      <p>Export letters as MS Word (DOCX) documents.</p>
                    </li>
                    <li>
                      <p>
                        Edit, review, and finalize letters before sending or
                        submission.
                      </p>
                    </li>
                  </ul>
                  <div className="flex lg:w-[40%] max-w-full justify-center items-center xl:gap-[1vw] lg:gap-[3vw] gap-[5vw]">
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="PDF_file_icon.png"
                      alt="export ai generated letters as pdf format file"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="msword-logo.jpg"
                      alt="export ai generated letters as pdf format file"
                    />
                  </div>
                </div>
                <ShinyButton
                onClick={handleSignin}
                className={"bg-stone-400/20 lg:text-base text-sm"}>
                  <p className={"lg:text-base md:text-3xl text-lg"}>
                    Try AI Letter Writer for free
                  </p>
                </ShinyButton>
              </div>
            </div>
          </div>
          <div className="max-w-full flex flex-col items-center gap-[3vw]">
            <div className="max-w-full xl:w-[70%] lg:w-[80%] flex flex-col items-center lg:gap-[4vw] gap-[8vw] lg:py-[2vw] md:py-[4vw] py-[5vw] lg:p-[2vw] p-[4vw] bg-linear-to-b from-black via-red-500/35 to-black border border-red-800/40 rounded-3xl">
              <div className="flex flex-col items-center gap-[1vh]">
                <h2 className="font-semibold lg:text-3xl md:text-5xl text-3xl">
                  AI Notice Writer
                </h2>
                <p className="lg:w-[60%] w-[90%] text-center lg:text-lg md:text-3xl text-2xl text-gray-300">
                  Create clear, professional, and well-structured notices using
                  AI. Magiwriter’s AI Notice Writer helps you generate official
                  notices with the correct format, tone, and clarity for
                  institutional and public communication.
                </p>
              </div>
              <div className="lg:w-[50%] w-[80%] flex flex-col items-center gap-[1.5vh]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Notice Writer by Magiwriter helps you with :
                </p>
                <ul className="lg:w-[70%] w-[90%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                  <li>
                    <p>
                      AI-generated notices for official and formal
                      communication.
                    </p>
                  </li>
                  <li>
                    <p>
                      Properly formatted notices following standard
                      notice-writing rules.
                    </p>
                  </li>
                  <li>
                    <p>
                      Clear and concise messaging for announcements and
                      instructions.
                    </p>
                  </li>
                  <li>
                    <p>
                      Time-efficient notice creation for organizations and
                      institutions.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl text-center">
                  AI Notice Writer allows you to customize :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Notice topic, purpose, and key information.</p>
                    </li>
                    <li>
                      <p>
                        Writing tone (formal, neutral, urgent, or
                        informational).
                      </p>
                    </li>
                    <li>
                      <p>Language and targeted audience.</p>
                    </li>
                    <li>
                      <p>Notice length, clarity level, and formatting style.</p>
                    </li>
                    <li>
                      <p>Issuing authority, date, and reference details.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Notice Writer generates :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Structured notices with clear headings and body content.
                      </p>
                    </li>
                    <li>
                      <p>
                        Audience-focused notices optimized for readability and
                        compliance.
                      </p>
                    </li>
                    <li>
                      <p>
                        Multi-language notices adapted to regional and
                        institutional standards.
                      </p>
                    </li>
                  </ul>
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[2vw] gap-[4vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  You get flexible usage options :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Download notices as PDF files.</p>
                    </li>
                    <li>
                      <p>Export notices as MS Word (DOCX) documents.</p>
                    </li>
                    <li>
                      <p>
                        Edit and finalize notices before official release or
                        publication.
                      </p>
                    </li>
                  </ul>
                  <div className="flex lg:w-[40%] max-w-full justify-center items-center xl:gap-[1vw] lg:gap-[3vw] gap-[5vw]">
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="PDF_file_icon.png"
                      alt="export ai generated notices as pdf format file"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="msword-logo.jpg"
                      alt="export ai generated notices as pdf format file"
                    />
                  </div>
                </div>
                <ShinyButton
                onClick={handleSignin}
                className={"bg-red-400/15 lg:text-base text-sm"}>
                  <p className={"lg:text-base md:text-3xl text-lg"}>
                    Try AI Notice Writer for free
                  </p>
                </ShinyButton>
              </div>
            </div>
          </div>
          <div className="max-w-full flex flex-col items-center gap-[3vw]">
            <div className="max-w-full xl:w-[70%] lg:w-[80%] flex flex-col items-center lg:gap-[4vw] gap-[8vw] lg:py-[2vw] md:py-[4vw] py-[5vw] lg:p-[2vw] p-[4vw] bg-linear-to-b from-black via-cyan-500/45 to-black border border-cyan-700/40 rounded-3xl">
              <div className="flex flex-col items-center gap-[1vh]">
                <h2 className="font-semibold lg:text-3xl md:text-5xl text-3xl">
                  AI Paragraph Writer
                </h2>
                <p className="lg:w-[60%] w-[90%] text-center lg:text-lg md:text-3xl text-2xl text-gray-300">
                  Generate clear, concise, and well-structured paragraphs using
                  AI. Magiwriter’s AI Paragraph Writer helps you create
                  high-quality paragraphs optimized for clarity, readability,
                  and purpose across academic, professional, and content writing
                  needs.
                </p>
              </div>
              <div className="lg:w-[50%] w-[80%] flex flex-col items-center gap-[1.5vh]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Paragraph Writer by Magiwriter helps you with :
                </p>
                <ul className="lg:w-[70%] w-[90%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                  <li>
                    <p>
                      AI-generated paragraphs for academic, professional, and
                      content writing.
                    </p>
                  </li>
                  <li>
                    <p>
                      Topic-focused paragraphs with clear ideas and logical
                      flow.
                    </p>
                  </li>
                  <li>
                    <p>
                      Fast paragraph creation for essays, articles, blogs, and
                      reports.
                    </p>
                  </li>
                  <li>
                    <p>
                      Improved writing clarity and readability in less time.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl text-center">
                  AI Paragraph Writer allows you to customize :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Paragraph topic, main idea, and supporting points.</p>
                    </li>
                    <li>
                      <p>
                        Writing tone (formal, academic, professional, or
                        casual).
                      </p>
                    </li>
                    <li>
                      <p>Paragraph length, depth, and sentence structure.</p>
                    </li>
                    <li>
                      <p>Language and targeted audience.</p>
                    </li>
                    <li>
                      <p>Level of simplicity or complexity.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Paragraph Writer generates :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Well-structured paragraphs with clear topic sentences.
                      </p>
                    </li>
                    <li>
                      <p>Cohesive, readable, and context-aware content.</p>
                    </li>
                    <li>
                      <p>
                        Multi-language paragraphs adapted to different regions
                        and audiences.
                      </p>
                    </li>
                  </ul>
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[2vw] gap-[4vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  You get flexible usage options :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Copy and use paragraphs instantly.</p>
                    </li>
                    <li>
                      <p>Edit and refine paragraphs before final use.</p>
                    </li>
                    <li>
                      <p>
                        Combine generated paragraphs into longer content pieces.
                      </p>
                    </li>
                    <li>
                      <p>Download and save as PDF. Print later.</p>
                    </li>
                    <li>
                      <p>Export as Microsoft Word DOCX and print.</p>
                    </li>
                  </ul>
                  <div className="flex lg:w-[40%] max-w-full justify-center items-center xl:gap-[1vw] lg:gap-[3vw] gap-[5vw]">
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="PDF_file_icon.png"
                      alt="export ai generated paragraphs as pdf format file"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="msword-logo.jpg"
                      alt="export ai generated paragraphs as pdf format file"
                    />
                  </div>
                </div>
                <ShinyButton
                onClick={handleSignin}
                className={"bg-cyan-400/15 lg:text-base text-sm"}>
                  <p className={"lg:text-base md:text-3xl text-lg"}>
                    Try AI Paragraph Writer for free
                  </p>
                </ShinyButton>
              </div>
            </div>
          </div>
          <div className="max-w-full flex flex-col items-center gap-[3vw]">
            <div className="max-w-full xl:w-[70%] lg:w-[80%] flex flex-col items-center lg:gap-[4vw] gap-[8vw] lg:py-[2vw] md:py-[4vw] py-[5vw] lg:p-[2vw] p-[4vw] bg-linear-to-b from-black via-yellow-400/35 to-black border border-yellow-800/50 rounded-3xl">
              <div className="flex flex-col items-center gap-[1vh]">
                <h2 className="font-semibold lg:text-3xl md:text-5xl text-3xl">
                  AI Report Writer
                </h2>
                <p className="lg:w-[60%] w-[90%] text-center lg:text-lg md:text-3xl text-2xl text-gray-300">
                  Generate clear, structured, and professional reports using AI.
                  Magiwriter’s AI Report Writer helps you create well-organized
                  reports with accurate flow, logical sections, and
                  purpose-driven content for academic, business, and
                  professional use.
                </p>
              </div>
              <div className="lg:w-[50%] w-[80%] flex flex-col items-center gap-[1.5vh]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Report Writer by Magiwriter helps you with :
                </p>
                <ul className="lg:w-[70%] w-[90%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                  <li>
                    <p>
                      AI-generated reports for academic, business, and
                      professional needs.
                    </p>
                  </li>
                  <li>
                    <p>
                      Structured reports based on the 5W framework (What, Why,
                      Who, When, Where).
                    </p>
                  </li>
                  <li>
                    <p>Clear presentation of facts, analysis, and findings.</p>
                  </li>
                  <li>
                    <p>
                      Time-efficient report writing with consistent formatting.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl text-center">
                  AI Report Writer allows you to customize :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Report topic, objective, and key points.</p>
                    </li>
                    <li>
                      <p>
                        Writing tone (formal, professional, analytical, or
                        neutral).
                      </p>
                    </li>
                    <li>
                      <p>Language, length, and level of detail.</p>
                    </li>
                    <li>
                      <p>
                        Target audience (management, academic, technical, or
                        general).
                      </p>
                    </li>
                    <li>
                      <p>Report structure, headings, and formatting style.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Report Writer generates :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Well-structured reports with introduction, body, and
                        conclusion.
                      </p>
                    </li>
                    <li>
                      <p>Fact-focused, logical, and easy-to-read content.</p>
                    </li>
                    <li>
                      <p>
                        Multi-language reports adapted to regional and
                        organizational standards.
                      </p>
                    </li>
                  </ul>
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[2vw] gap-[4vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  You get flexible usage options :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Download reports as PDF files.</p>
                    </li>
                    <li>
                      <p>Export reports as MS Word (DOCX) documents.</p>
                    </li>
                    <li>
                      <p>
                        Edit, review, and finalize reports before submission or
                        presentation.
                      </p>
                    </li>
                  </ul>
                  <div className="flex lg:w-[40%] max-w-full justify-center items-center xl:gap-[1vw] lg:gap-[3vw] gap-[5vw]">
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="PDF_file_icon.png"
                      alt="export ai generated reports as pdf format file"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="msword-logo.jpg"
                      alt="export ai generated reports as pdf format file"
                    />
                  </div>
                </div>
                <ShinyButton
                onClick={handleSignin}
                  className={"bg-yellow-400/15 lg:text-base text-sm"}
                >
                  <p className={"lg:text-base md:text-3xl text-lg"}>
                    Try AI Report Writer for free
                  </p>
                </ShinyButton>
              </div>
            </div>
          </div>
          <div className="max-w-full flex flex-col items-center gap-[3vw]">
            <div className="max-w-full xl:w-[70%] lg:w-[80%] flex flex-col items-center lg:gap-[4vw] gap-[8vw] lg:py-[2vw] md:py-[4vw] py-[5vw] lg:p-[2vw] p-[4vw] bg-linear-to-b from-black via-indigo-500/45 to-black border border-indigo-700/40 rounded-3xl">
              <div className="flex flex-col items-center gap-[1vh]">
                <h2 className="font-semibold lg:text-3xl md:text-5xl text-3xl">
                  AI Story Writer
                </h2>
                <p className="lg:w-[60%] w-[90%] text-center lg:text-lg md:text-3xl text-2xl text-gray-300">
                  Create engaging, original, and well-structured stories using
                  AI. Magiwriter’s AI Story Writer helps you generate creative
                  stories with strong narratives, clear characters, and
                  immersive storytelling for students, writers, and
                  professionals.
                </p>
              </div>
              <div className="lg:w-[50%] w-[80%] flex flex-col items-center gap-[1.5vh]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Story Writer by Magiwriter helps you with :
                </p>
                <ul className="lg:w-[70%] w-[90%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                  <li>
                    <p>
                      AI-generated stories for creative and educational use.
                    </p>
                  </li>
                  <li>
                    <p>
                      Short stories, long-form stories, and narrative writing.
                    </p>
                  </li>
                  <li>
                    <p>Idea development, plot building, and story expansion.</p>
                  </li>
                  <li>
                    <p>
                      Consistent storytelling with logical flow and structure.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl text-center">
                  AI Story Writer allows you to customize :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Story theme, genre, and core idea.</p>
                    </li>
                    <li>
                      <p>
                        Writing tone (casual, dramatic, emotional, professional,
                        or neutral).
                      </p>
                    </li>
                    <li>
                      <p>Story length, pacing, and level of detail.</p>
                    </li>
                    <li>
                      <p>Language, audience, and regional context.</p>
                    </li>
                    <li>
                      <p>
                        Characters, setting, point of view, and narrative style.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  AI Story Writer generates :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>
                        Original stories with clear beginning, middle, and
                        ending.
                      </p>
                    </li>
                    <li>
                      <p>Character-driven narratives with engaging plots.</p>
                    </li>
                    <li>
                      <p>
                        Multi-language stories adapted for different audiences
                        and regions.
                      </p>
                    </li>
                  </ul>
                  <img
                    className="lg:w-[40%] w-[90%] rounded-lg"
                    src="dashboardview.png"
                    alt="AI Article Writer form layout showcase"
                  />
                </div>
              </div>
              <div className="max-w-full flex flex-col items-center lg:gap-[2vw] gap-[4vw]">
                <p className="xl:text-lg lg:text-xl md:text-3xl text-2xl">
                  You get flexible usage options :
                </p>
                <div className="max-w-full flex lg:flex-row flex-col justify-around items-center lg:gap-[1vw] gap-[2vw]">
                  <ul className="lg:w-[40%] w-[80%] flex flex-col items-start list-disc gap-[1vh] xl:text-base lg:text-xl md:text-3xl text-xl">
                    <li>
                      <p>Download stories as PDF files.</p>
                    </li>
                    <li>
                      <p>Export stories as MS Word (DOCX) documents.</p>
                    </li>
                    <li>
                      <p>Edit, refine, and expand stories before final use.</p>
                    </li>
                  </ul>
                  <div className="flex lg:w-[40%] max-w-full justify-center items-center xl:gap-[1vw] lg:gap-[3vw] gap-[5vw]">
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="PDF_file_icon.png"
                      alt="export ai generated story as pdf format file"
                    />
                    <img
                      className="rounded xl:w-[2vw] lg:w-[5vw] w-[8vw]"
                      src="msword-logo.jpg"
                      alt="export ai generated story as pdf format file"
                    />
                  </div>
                </div>
                <ShinyButton
                onClick={handleSignin}
                  className={"bg-indigo-400/20 lg:text-base text-sm"}
                >
                  <p className={"lg:text-base md:text-3xl text-lg"}>
                    Try AI Story Writer for free
                  </p>
                </ShinyButton>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-full flex flex-col items-center  lg:gap-[6vw] gap-[12vw] mt-[20vw]">
          <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
            <h2 className="xl:text-5xl lg:text-4xl md:text-6xl text-3xl font-bold text-center">
              Explore Magiwriter AI{" "}
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
                Utility
              </AuroraText>{" "}
              Tools
            </h2>
            <p className="lg:w-[70%] w-[90%] xl:text-xl md:text-4xl text-2xl text-gray-200 text-center">
              Do the daily small tasks effortlessly. No matter if it is
              generating title for your content or generating SEO tags and meta
              description and even creating a tweet, Magiwriter utility AI tools
              are here to help you.
            </p>
          </div>
          <div className="lg:w-[80%] w-[95%] flex flex-col items-center gap-[3vw]">
            <Bentogrid />
          </div>
        </div>
        <div className="max-w-full flex flex-col items-center lg:mt-[17vw] mt-[25vw]">
          <div className="lg:w-[75%] w-[98%] py-[7vw] flex flex-col items-center gap-[3vw] bg-linear-to-b from-black via-[#1b3377] to-[#1d4ed8] rounded-2xl">
            <p className="lg:w-[50%] w-[90%] text-center xl:text-5xl lg:text-4xl md:text-6xl text-3xl font-bold">
              We are making Magiwriter writing tool platform and updating day by
              day for you,{" "}
              <span className="text-gray-400">
                so that you can collaborate with your Magiwriter AI tools to
              </span>{" "}
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
                Create.
              </AuroraText>
            </p>
            <div className="max-w-full flex justify-center items-center">
              <Carousel className="lg:w-[60%] w-[95%]">
                <CarouselContent>
                  <CarouselItem>
                    <div className="max-w-full rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex flex-col items-center gap-[5vw] py-[2vw]">
                      {/* add images */}
                      <Avatar
                        className={"lg:w-[3vw] w-[10vw] lg:h-[3vw] h-[10vw]"}
                      >
                        <AvatarImage src="ceo.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="lg:w-[60%] w-[80%] flex justify-center items-center text-center xl:text-base lg:text-xl md:text-3xl text-xl">
                        <p>
                          We built this platform with one simple belief —
                          writing should never feel overwhelming. Whether you’re
                          a student trying to finish an essay, a creator
                          publishing a blog, or a professional sending an
                          important email, the hardest part is usually getting
                          started. This platform exists to remove that friction.{" "}
                          <br />
                          Instead of a generic AI chat, we focused on structured
                          writing tools that understand why you’re writing and
                          what you need. My goal as the founder is to make
                          high-quality writing accessible to everyone, without
                          complexity, without confusion, and without
                          compromising on clarity or control.
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="lg:text-lg md:text-3xl text-2xl font-semibold">
                          Amit Giri
                        </p>
                        <p className="text-gray-300 lg:text-base md:text-2xl text-xl font-semibold">
                          CEO, Magiwriter
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="max-w-full rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 flex flex-col items-center gap-[5vw] py-[2vw]">
                      {/* add images */}
                      <Avatar
                        className={"lg:w-[3vw] w-[10vw] lg:h-[3vw] h-[10vw]"}
                      >
                        <AvatarImage src="cto.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="lg:w-[60%] w-[80%] flex justify-center items-center text-center xl:text-base lg:text-xl md:text-3xl text-xl">
                        <p>
                          From a technical perspective, our focus has always
                          been simplicity with purpose. We didn’t want to build
                          “just another AI writer.” We wanted to build a system
                          where each tool is thoughtfully designed around real
                          writing workflows — articles, blogs, emails, reports,
                          and more. Every form field, every feature, and every
                          export option is built to give users control over
                          their content while keeping the experience fast and
                          intuitive. As we grow, our priority remains the same:
                          build reliable, scalable tools that feel helpful, not
                          overwhelming.
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="lg:text-lg md:text-3xl text-2xl font-semibold">
                          Satwik Bera
                        </p>
                        <p className="text-gray-300 lg:text-base md:text-2xl text-xl font-semibold">
                          CTO, Magiwriter
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="max-w-full flex flex-col items-center mt-[25vw]">
          <div className="lg:max-w-[65%] max-w-[80%] flex justify-center items-center bg-linear-to-r from-blue-400 via-orange-500 to-pink-400 rounded-2xl p-[0.5vh]">
            <div className="flex flex-col items-center lg:gap-[2vw] gap-[6vw] bg-black rounded-xl lg:py-[2vw] md:py-[4vw] py-[3vw]">
              <SparklesText>
                <span className="pointer-events-none z-10 h-full bg-linear-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center lg:text-4xl md:text-7xl xl:text-6xl text-4xl leading-none font-bold tracking-tighter text-balance whitespace-pre-wrap text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  Its Free for Now
                </span>
              </SparklesText>
              <p className="lg:w-[60%] w-[80%] xl:text-xl lg:text-2xl md:text-4xl text-2xl text-gray-200 text-center">
                We have decided to offer only free plan to the users right now.
                After using it you guys give us reviews and your thoughts and
                recomendations. After that if needed, Magiwriter will be updated
                according to your needs.
              </p>
              <ShinyButton
                onClick={handleSignin}
                className={
                  "lg:mb-[2vw] mb-[4vw] bg-linear-to-r from-blue-600/80 to-orange-600/80 lg:text-base md:text-4xl"
                }
              >
                Go For It
              </ShinyButton>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-[25vw] relative">
          <div className="xl:w-[50vw] lg:w-[80vw] max-w-full flex flex-col items-center lg:gap-[3vw] gap-[6vw]">
            <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
              <h4 className="lg:text-5xl md:text-6xl text-4xl font-bold text-center">
                Frequently Asked <br /> Questions
              </h4>
              <p className="lg:max-w-[60%] max-w-[90%] lg:text-xl md:text-4xl text-2xl text-gray-200 text-center">
                Everything you need to know about Magiwriter and how it can
                transform your writing workflow
              </p>
            </div>
            <div className="w-full flex justify-center items-center relative">
              <ol className="lg:max-w-full w-[90%] flex flex-col items-center lg:gap-[1vw] gap-[3vw] z-30">
                {faqs.map((faq, i) => (
                  <li
                    key={i}
                    className="xl:w-[94%] lg:w-[80%] w-[90%] bg-gray-700/50 py-[0.5vh] rounded-lg px-[5%]"
                  >
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger
                          className={
                            "text-white lg:text-lg md:text-3xl text-lg lg:font-semibold"
                          }
                        >
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent
                          className={
                            "lg:text-lg md:text-3xl text-lg text-gray-200"
                          }
                        >
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
      <footer className="max-w-full flex flex-col items-center mt-[15vw] mb-[5vw] lg:pb-[2vw] p-0 bg-linear-to-b from-blue-500 to-black">
        <div className="max-w-full flex flex-col items-center mt-[5vw] lg:gap-[2vw] gap-[5vw] pt-[2vw]">
          <div className="max-w-full flex flex-col items-center lg:gap-[2vw] gap-[4vw]">
            <h2 className="lg:text-5xl md:text-6xl text-3xl font-bold text-center">
              Save Your Time and Efforts. <br /> Use Magiwriter.
            </h2>
            <p className="lg:w-[60%] w-[90%] lg:text-xl md:text-3xl text-xl text-gray-200 text-center">
              See how you leverage Magiwriter to create more and deliver more in
              less time period.
            </p>
          </div>
          <ShinyButton
            onClick={handleSignin}
            className={"lg:text-base text-sm"}
          >
            <p className={"lg:text-base md:text-3xl text-lg"}>
              Signup for free
            </p>
          </ShinyButton>
        </div>
        <div className="max-w-full flex lg:flex-row flex-col justify-around items-start mt-[15vw] pb-[2vw] lg:gap-0 gap-[5vw]">
          <div className="flex flex-col items-start gap-[1vw] lg:p-0 pl-[4vw]">
            <div className="flex lg:gap-[0.5vw] gap-[2vw] items-center">
              <img
                className="lg:w-[1.5vw] w-[6vw] lg:h-[1.5vw] h-[6vw]"
                src="magiwriter_icon.png"
                alt="magiwriter-icon"
              />
              <h4 className="lg:text-2xl md:text-4xl text-2xl font-semibold">
                Magiwriter
              </h4>
            </div>
            <p className="text-gray-300 lg:text-base md:text-3xl text-xl">
              Writing made effortless
            </p>
            <div>
              <p className="flex items-center justify-center space-x-1 lg:text-base md:text-2xl text-xl">
                <span className="lg:text-lg md:text-2xl text-2xl">©</span>
                <span>2026</span>
                <span className="font-medium text-slate-300">
                  Magiwriter AI.
                </span>
                <span>All rights reserved.</span>
              </p>
              <p className="mt-1 text-slate-400 lg:text-base md:text-2xl text-xl">
                Built with ❤️ from India
              </p>
            </div>
          </div>
          <div className="lg:max-w-[50%] w-[95%] flex justify-center items-center">
            <table className="w-[95%] border-collapse text-center">
              <thead className="font-bold lg:text-xl md:text-3xl text-xl">
                <tr>
                  <th className="py-2">Products</th>
                  <th className="py-2">Company</th>
                  <th className="py-2">Resources</th>
                </tr>
              </thead>

              <tbody className="lg:text-base md:text-3xl text-xl">
                <tr>
                  <td onClick={()=> navigate("/article")} className="py-1 cursor-pointer">AI Article Writer</td>
                  <td onClick={()=> navigate("/about/us")} className="py-1 cursor-pointer">About Us</td>
                  <td onClick={()=> navigate("/terms/use")} className="py-1 cursor-pointer">Terms of use</td>
                </tr>

                <tr>
                  <td onClick={()=> navigate("/email")} className="py-1 cursor-pointer">AI Email Writer</td>
                  <td className="py-1"></td>
                  <td onClick={()=> navigate("/privacy/policy")} className="py-1 cursor-pointer">Privacy Policy</td>
                </tr>

                <tr>
                  <td onClick={()=> navigate("/letter")} className="py-1 cursor-pointer">AI Letter Writer</td>
                  <td className="py-1"></td>
                  <td className="py-1"></td>
                </tr>

                <tr>
                  <td onClick={()=> navigate("/blog")} className="py-1 cursor-pointer">AI Blog Writer</td>
                  <td className="py-1"></td>
                  <td className="py-1"></td>
                </tr>

                <tr>
                  <td onClick={()=> navigate("/report")} className="py-1 cursor-pointer">AI Report Writer</td>
                  <td className="py-1"></td>
                  <td className="py-1"></td>
                </tr>

                <tr>
                  <td onClick={()=> navigate("/essay")} className="py-1 cursor-pointer">AI Essay Writer</td>
                  <td className="py-1"></td>
                  <td className="py-1"></td>
                </tr>
                <tr>
                  <td onClick={()=> navigate("/paragraph")} className="py-1 cursor-pointer">AI Paragraph Writer</td>
                  <td className="py-1"></td>
                  <td className="py-1"></td>
                </tr>
                <tr>
                  <td onClick={()=> navigate("/notice")} className="py-1 cursor-pointer">AI Notice Writer</td>
                  <td className="py-1"></td>
                  <td className="py-1"></td>
                </tr>
                <tr>
                  <td onClick={()=> navigate("/story")} className="py-1 cursor-pointer">AI Story Writer</td>
                  <td className="py-1"></td>
                  <td className="py-1"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TestingLandingPage;
