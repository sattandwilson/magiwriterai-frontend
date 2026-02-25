import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Download } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const ImageView = ({ base64String, isLoading, isDark }) => {
  const [blobUrl, setBlobUrl] = useState("");
  const mime_type = "image/png";
  useEffect(() => {
    if (!base64String) return;
    const byteChars = atob(base64String);
    const byteArr = new Uint8Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
      byteArr[i] = byteChars.charCodeAt(i);
    }
    const blob = new Blob([byteArr], { type: mime_type });
    const url = URL.createObjectURL(blob);
    setBlobUrl(url);
  }, [base64String]);

  useEffect(() => {
    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [blobUrl]);

  const handleImageDownload = () => {
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = `magiwriter_image.${mime_type.split("/")[1]}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
          <div className="w-full flex justify-between items-center mb-[1vw]">
            <p>Your image</p>
            <Button onClick={handleImageDownload}>
              <Download />
            </Button>
          </div>
          <img
            className={`w-full rounded-xl`}
            src={blobUrl}
            alt="magiwriter-ai-image-generator-generated-image"
          />
        </div>
      )}
    </section>
  );
};

export default ImageView;
