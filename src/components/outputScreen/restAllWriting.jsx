import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownContent } from "./markdownContent.jsx";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { generateDocxFilename, generatePdfFilename } from "@/utils/filename.js";

const RestAllWritingOutputWindow = ({
  restAllWritingMarkdown,
  isLoading,
  isDark,
}) => {
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [isDownloadingDocx, setIsDownloadingDocx] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [processedMarkdown, setProcessedMarkdown] = useState("");

  const normalizeMarkdown = async (markdown) => {
    // const result = await replaceImageBlocks(markdown);
    // const normalMarkdown = markdown.replace(/`/g, "\`").replace(/\n/g, "\n\n");

    return markdown;
  };

  useEffect(() => {
    const processMarkdown = async () => {
      if (!restAllWritingMarkdown) return;
      const normalMarkdonw = await normalizeMarkdown(restAllWritingMarkdown);
      setProcessedMarkdown(normalMarkdonw);
    };
    processMarkdown();
  }, [restAllWritingMarkdown]);

  const handleDownloadPdf = async () => {
    try {
      setIsDownloadingPdf(true);
      const response = await fetch("https://www.magiwriter.com/api/download/pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          markdownContent: processedMarkdown,
        }),
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = generatePdfFilename();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      console.log("PDF generated:", url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  const handleDownloadDocx = async () => {
    try {
      setIsDownloadingDocx(true);
      const response = await fetch("https://www.magiwriter.com/api/download/docx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          markdownContent: processedMarkdown,
        }),
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = generateDocxFilename();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading DOCX:", error);
    } finally {
      setIsDownloadingDocx(false);
    }
  };

  const handleDownloadHtml = async () => {
    try {
      const response = await fetch("https://www.magiwriter.com/api/download/html", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          markdownContent: processedMarkdown,
        }),
      });
      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error("Error downloading HTML for copy:", error);
    }
  };

  const handleCopy = async () => {
    setIsCopying(true);
    try {
      if (navigator.clipboard && window.ClipboardItem) {
        const blob = await handleDownloadHtml();
        const textHtml = await blob.text();
        const doc = new DOMParser().parseFromString(textHtml, "text/html");
        doc.querySelectorAll("p, div, h1, h2, h3, li, br").forEach((el) => {
          el.append("\n");
        });
        const text = doc.body.textContent.replace(/\n+/g, "\n").trim();
        const item = new ClipboardItem({
          "text/html": new Blob([blob], { type: "text/html" }),
          "text/plain": new Blob([text], { type: "text/plain" }),
        });
        await navigator.clipboard.write([item]);
        return;
      }
    } catch (error) {
      console.warn("Modern clipboard failed!", error);
    } finally {
      setIsCopying(false);
    }
  };

  return (
    <section
      className={`w-full min-h-0 flex flex-col items-center border rounded-2xl ${
        isDark
          ? "bg-black/35 border-gray-300/25 text-white"
          : "bg-white/55 border-gray-400/15 text-black"
      } p-[2vw] transition-all duration-200 ease-in-out`}
    >
      {isLoading ? (
        <Empty className="w-full">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Spinner />
            </EmptyMedia>
            <EmptyTitle>Processing your request</EmptyTitle>
            <EmptyDescription>
              Please wait while AI processes your request. Do not refresh the
              page.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="prose prose-neutral dark:prose-invert">
          <ReactMarkDown
            remarkPlugins={[remarkGfm]}
            components={markdownContent}
            class="w-full min-h-0 max-h-[50vh] overflow-y-auto flex flex-col items-center transition-all duration-200 ease-in-out"
          >
            {processedMarkdown}
          </ReactMarkDown>
          {!isLoading && (
            <div className="w-full flex justify-end items-center gap-[2vw] p-[1vw]">
              <Button
                size="sm"
                variant="outline"
                disabled={isDownloadingPdf}
                onClick={handleDownloadPdf}
                className={`${
                  isDark ? "bg-black text-white" : "bg-white text-black"
                } cursor-pointer`}
              >
                {isDownloadingPdf ? (
                  <>
                    <Spinner />
                    "Downloading PDF"
                  </>
                ) : (
                  "Download PDF"
                )}
              </Button>
              <Button
                size="sm"
                variant="outline"
                disabled={isDownloadingDocx}
                onClick={handleDownloadDocx}
                className={`${
                  isDark ? "bg-black text-white" : "bg-white text-black"
                } cursor-pointer`}
              >
                {isDownloadingDocx ? (
                  <>
                    <Spinner />
                    "Downloading DOCX"
                  </>
                ) : (
                  "Download DOCX"
                )}
              </Button>
              <Button
                size="sm"
                variant="outline"
                disabled={isCopying}
                onClick={handleCopy}
                className={`${
                  isDark ? "bg-black text-white" : "bg-white text-black"
                } cursor-pointer`}
              >
                {isCopying ? (
                  <>
                    <Spinner />
                    "Copying"
                  </>
                ) : (
                  "Copy"
                )}
              </Button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default RestAllWritingOutputWindow;
