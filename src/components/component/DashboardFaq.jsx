import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DashboardFaq = () => {
  return (
    <div className="max-w-full w-full flex flex-col items-center gap-[2vw]">
      <p className="text-2xl xl:text-4xl md:text-3xl font-semibold">Frecuently Asked Questions</p>
      <div className="w-full flex justify-center items-center relative">
        <ol className="w-full flex flex-col items-center gap-[2vw] lg:gap-[1vw] z-30">
          {/* FAQ 1 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  What is this AI writing dashboard and how does it work?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  This AI writing dashboard is an all-in-one platform offering
                  26+ AI-powered tools for content creation. Users provide
                  inputs such as tone, language, length, and audience through
                  structured forms, and the AI instantly generates customized,
                  high-quality content.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 2 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  What types of content can I create using these AI tools?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  You can generate a wide range of content including:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Emails, letters, notices, and paragraphs</li>
                    <li>Reports, essays, stories, articles, and blogs</li>
                    <li>Captions, CTAs, slogans, tweets, and replies</li>
                    <li>
                      SEO titles, meta descriptions, outlines, and summaries
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 3 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Which tools are considered long-form content generators?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  The first nine tools are advanced long-form generators:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Email Writer</li>
                    <li>Letter Writer</li>
                    <li>Paragraph Writer</li>
                    <li>Notice Writer</li>
                    <li>Report Writer</li>
                    <li>Essay Writer</li>
                    <li>Story Writer</li>
                    <li>Article Writer</li>
                    <li>Blog Writer</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 4 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  What are utility AI tools and how are they different?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Utility tools are lightweight AI features designed for quick
                  tasks such as rewriting, summarizing, grammar correction, tone
                  shifting, and SEO optimization. They prioritize speed,
                  precision, and ease of use.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 5 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Can I customize the AI-generated content?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. Each tool allows customization through form inputs such
                  as:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Tone and writing style</li>
                    <li>Language and region</li>
                    <li>Content length</li>
                    <li>Target audience</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 6 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Can I publish articles and blogs directly to WordPress?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. The Article Writer and Blog Writer include one-click
                  WordPress publishing, allowing you to post content directly to
                  your site without manual copying.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 7 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-7">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Can I download generated content?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  All tools support downloading content in:
                  <ul className="list-disc pl-6 mt-2">
                    <li>PDF format</li>
                    <li>Word (.docx) format</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 8 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-8">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Is this platform suitable for SEO content creation?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. The platform is optimized for SEO with tools for titles,
                  meta descriptions, tags, readability improvement, and semantic
                  keyword coverage.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 9 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-9">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Who should use this AI dashboard?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  This platform is ideal for bloggers, marketers, students,
                  professionals, agencies, startups, and businesses seeking fast
                  and scalable content creation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 10 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-10">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  How does the AI Image Generator work?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  The Image Generator creates visuals from text prompts with
                  customization options such as resolution, aspect ratio, and
                  output format (PNG or JPG).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 11 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-11">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Can I generate social media content?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. Tools like Caption Generator, Tweet Generator, CTA
                  Generator, and Slogan Generator help create high-engagement
                  social content.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 12 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-12">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Does the platform correct grammar and language?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. The Grammar Corrector fixes spelling, grammar,
                  punctuation, and sentence clarity automatically.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 13 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-13">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  What is the Humanizer tool used for?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  The Humanizer rewrites AI-generated text to sound more
                  natural, conversational, and human-like.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 14 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-14">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Can I paraphrase content without plagiarism?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. The Paraphraser rewrites content while preserving
                  meaning, helping you produce unique and plagiarism-free text.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 15 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-15">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  How does the Readability Improver help?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  It improves clarity, sentence flow, and structure, making
                  content easier to read and more engaging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 16 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-16">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  What does the Summariser tool do?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  It condenses long documents, articles, or reports into concise
                  summaries while preserving key points.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 17 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-17">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Can I generate content outlines?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. The Outline Generator creates structured frameworks for
                  blogs, essays, reports, and articles.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 18 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-18">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  How does the Tone Shifter work?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  It allows you to instantly change the tone of content such as
                  formal, casual, persuasive, or professional.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 19 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-19">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Are SEO metadata tools included?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. You get dedicated tools for SEO titles, meta
                  descriptions, and search-engine-friendly tags.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 20 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-20">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Can this platform help with FAQs and support content?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. The FAQ Generator produces clear, structured, and
                  SEO-optimized FAQ content.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 21 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-21">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Is the generated content original?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. Content is generated uniquely based on user input and can
                  be further refined for originality.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 22 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-22">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Is this platform suitable for students?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. Students can use essay, report, summariser, and paragraph
                  tools for academic assistance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 23 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-23">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Does the platform support multiple languages?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. Most tools support multilingual content generation for
                  global audiences.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 24 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-24">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Is this platform suitable for businesses and agencies?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. It enables scalable content production, faster
                  turnaround, and consistent quality.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 25 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-25">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Can this platform help with marketing and conversions?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. CTA, slogan, caption, and title generators are designed
                  to improve engagement and conversions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 26 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-26">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Why choose this platform over individual AI tools?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  You get 26+ integrated AI tools, unified customization,
                  downloads, WordPress publishing, and image generation in a
                  single dashboard.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 27 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-27">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Is the dashboard beginner-friendly?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. The form-based interface is intuitive for beginners while
                  powerful for professionals.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 28 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-28">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Does this platform improve content production speed?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. Content that normally takes hours can be generated in
                  seconds.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>

          {/* FAQ 29 */}
          <li className="max-w-full xl:w-[50%] w-[90%] bg-gray-700/50 xl:px-[1vw] px-[2vw] py-[0.5vh] rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-29">
                <AccordionTrigger className="text-white text-lg md:text-2xl lg:text-lg font-semibold">
                  Can I reuse generated content across platforms?
                </AccordionTrigger>
                <AccordionContent className="text-lg md:text-2xl lg:text-lg text-gray-200">
                  Yes. Generated content can be edited, downloaded, and reused
                  across websites, blogs, emails, and social media.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default DashboardFaq;
