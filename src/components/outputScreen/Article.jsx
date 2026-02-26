import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import { markdownContent } from "./markdownContent.jsx";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  generateDocxFilename,
  generatePdfFilename,
  generateHtmlFilename,
} from "@/utils/filename.js";

const ArticleOutputWindow = ({ articleMarkdown, isLoading, isDark }) => {
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [isDownloadingDocx, setIsDownloadingDocx] = useState(false);
  const [isDownloadingHtml, setIsDownloadingHtml] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [processedMarkdown, setProcessedMarkdown] = useState("");
  const blobUrlsRef = useRef([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsProcessing(true);
    if (!articleMarkdown) return;
    blobUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
    blobUrlsRef.current = [];
    let isMounted = true;
    const regex =
      /\[IMAGE_BLOCK\][\s\S]*?Alt:\s*(.+)\nPrompt:\s*([\s\S]*?)\n\[\/IMAGE_BLOCK\]/g;
    const matches = [...articleMarkdown.matchAll(regex)];
    if (matches.length === 0) {
      if (isMounted) {
        setProcessedMarkdown(articleMarkdown);
      }
      return;
    }
    const processMarkdown = async () => {
      let result = articleMarkdown;
      const replacements = await Promise.all(
        matches.map(async (match) => {
          const [fullBlock, alt, prompt] = match;
          const { image } = await generateImageFromPrompt(prompt);
          const bytes = atob(image);
          const length = bytes.length;
          const uint8Array = new Uint8Array(length);
          for (let i = 0; i < length; i++) {
            uint8Array[i] = bytes.charCodeAt(i);
          }
          const blob = new Blob([uint8Array], { type: "image/png" });
          const blobUrl = URL.createObjectURL(blob);
          return {
            fullBlock,
            blobUrl,
            alt,
          };
        }),
      );
      replacements.forEach(({ fullBlock, blobUrl, alt }) => {
        result = result.replace(fullBlock, `![${alt}](${blobUrl})`);
        blobUrlsRef.current.push(blobUrl);
      });
      if (isMounted) {
        setProcessedMarkdown(result);
      }
      setIsProcessing(false);
    };
    processMarkdown();
    return () => {
      isMounted = false;
    };
  }, [articleMarkdown]);

  const generateImageFromPrompt = async (prompt) => {
    setIsImageLoading(true);
    try {
      const response = await fetch(
        "https://www.magiwriter.com/api/generate/articleImage",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ idea: prompt }),
        },
      );
      const data = await response.json();
      return {
        image: data.image,
      };
    } catch (error) {
      console.error("Error generating image:", error);
      return null;
    } finally {
      setIsImageLoading(false);
    }
  };

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
      setIsDownloadingHtml(true);
      const response = await fetch("https://www.magiwriter.com/api/download/html", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          markdownContent: articleMarkdown,
        }),
      });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = generateHtmlFilename();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading HTML:", error);
    } finally {
      setIsDownloadingHtml(false);
    }
  };

  return (
    <section
      className={`max-w-full w-full min-h-0 flex flex-col items-center border rounded-2xl ${
        isDark
          ? "bg-black/35 border-gray-300/25 text-white"
          : "bg-white/55 border-gray-400/15 text-black"
      } p-[2vw] transition-all duration-200 ease-in-out`}
    >
      {isLoading || isImageLoading ? (
        <Empty className="max-w-full w-full">
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
            urlTransform={(url) => {
              if (url.startsWith("blob:")) return url;
              return url;
            }}
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeHighlight]}
            components={markdownContent}
            class="max-w-full w-full min-h-0 max-h-[50vh] overflow-y-auto flex flex-col items-center transition-all duration-200 ease-in-out "
          >
            {processedMarkdown}
          </ReactMarkDown>
          {(!isLoading || !isProcessing) && (
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
                disabled={isDownloadingHtml}
                onClick={handleDownloadHtml}
                className={`${
                  isDark ? "bg-black text-white" : "bg-white text-black"
                } cursor-pointer`}
              >
                {isDownloadingHtml ? (
                  <>
                    <Spinner />
                    "Downloading HTML"
                  </>
                ) : (
                  "Download HTML"
                )}
              </Button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ArticleOutputWindow;
