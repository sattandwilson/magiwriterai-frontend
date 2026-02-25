import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = ({ faqs, title, subtitle }) => {
  return (
    <div className="max-w-full flex flex-col items-center relative">
      <div className="xl:w-[50vw] lg:w-[80vw] w-full max-w-full flex flex-col items-center lg:gap-[3vw] gap-[6vw]">
        <div className="max-w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw]">
          <h4 className="xl:text-4xl lg:text-5xl md:text-6xl text-3xl font-bold text-center">
            {title || (
              <>
                Frequently Asked <br /> Questions
              </>
            )}
          </h4>
          <p className="lg:max-w-[60%] w-full max-w-[90%] lg:text-xl md:text-4xl text-2xl text-gray-200 text-center">
            {subtitle ||
              "Everything you need to know about this tool and how it can improve your workflow."}
          </p>
        </div>

        <div className="max-w-full w-full flex justify-center items-center relative">
          <ol className="max-w-full w-full flex flex-col items-center lg:gap-[1vw] gap-[3vw] z-30">
            {faqs.map((faq, i) => (
              <li
                key={i}
                className="xl:w-[94%] lg:w-[80%] w-[90%] bg-gray-700/50 py-[0.5vh] rounded-lg px-[5%]"
              >
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${i}`}>
                    <AccordionTrigger className="text-white lg:text-xl md:text-3xl text-xl lg:font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="lg:text-xl md:text-3xl text-xl text-gray-200">
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
  );
};

export default FAQSection;
