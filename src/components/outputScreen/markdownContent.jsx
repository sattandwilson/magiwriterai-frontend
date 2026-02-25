import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

const base64ToBlobUrl = ({ base64, mimeType }) => {
  const binary = atob(base64);
  const length = binary.length;
  const bytes = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    bytes[i] = binary[i];
  }
  const blob = new Blob([bytes], { type: mimeType });
  const url = URL.createObjectURL(blob);
  return url;
};

const MarkdownToImage = ({ node, ...props }) => {
  // const [imageSrc, setImageSrc] = useState(src);
  // console.log("MarkdownToImage props: ", props);

  // useEffect(() => {
  //   if (!src?.startsWith("data:image/")) return;
  //   const [meta, base64] = src.split(",");
  //   // const mimeType = meta.match(/data:(image\/[a-zA-Z+]+);base64/)?.[1];
  //   if (!base64) return;
  //   const blobUrl = base64ToBlobUrl({ base64, mimeType: "image/png" });
  //   setImageSrc(blobUrl);
  //   return () => URL.revokeObjectURL(blobUrl);
  // }, [src]);

  const downloadImage = () => {
    try {
      const a = document.createElement("a");
      a.href = props.src;
      a.download = props.alt ? `${props.alt}.png` : "image.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <>
      <img
        {...props}
        loading="lazy"
        referrerPolicy="no-referrer"
        className="mx-auto rounded-lg shadow-lg max-w-full h-auto max-h-96"
      />
      <Button onClick={downloadImage}>
        <Download />
      </Button>
      {props.alt && (
        <span className="mt-2 text-base md:text-xl lg:text-sm text-muted-foreground italic font-nunito">
          {props.alt}
        </span>
      )}
    </>
  );
};

export const markdownContent = {
  // === HEADINGS (complete h1-h6) ===
  h1: ({ children }) => (
    <div className="w-full flex justify-center items-center mt-8 mb-6">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl font-nunito">
        {children}
      </h1>
    </div>
  ),
  h2: ({ children }) => (
    <div className="w-full flex justify-start items-center mt-4 mb-2">
      <h2
        className="font-bold text-xl md:text-3xl lg:text-xl
 font-nunito"
      >
        {children}
      </h2>
    </div>
  ),
  h3: ({ children }) => (
    <div className="w-full flex justify-start items-center mt-4 mb-2">
      <h3
        className="font-bold text-lg md:text-2xl lg:text-lg
 font-nunito"
      >
        {children}
      </h3>
    </div>
  ),
  h4: ({ children }) => (
    <div className="w-full flex justify-start items-center mt-4 mb-2">
      <h4
        className="font-bold text-base md:text-xl lg:text-base
 font-nunito"
      >
        {children}
      </h4>
    </div>
  ),
  h5: ({ children }) => (
    <div className="w-full flex justify-start items-center mt-4 mb-2">
      <h5
        className="font-bold text-sm md:text-lg lg:text-sm
 font-nunito"
      >
        {children}
      </h5>
    </div>
  ),
  h6: ({ children }) => (
    <div className="w-full flex justify-start items-center mt-4 mb-2">
      <h6
        className="font-bold text-sm md:text-base lg:text-sm
 font-nunito"
      >
        {children}
      </h6>
    </div>
  ),

  // === TEXT ELEMENTS ===
  p: ({ children, node }) => {
    const firstChild = node?.children?.[0];
    const firstText =
      firstChild?.children?.[0]?.value || firstChild?.value || "";

    const isQuestion = /^\sQ:/g.test(firstText);

    const onlyImage =
      node?.children?.filter((child) => child.type !== "text").length === 1 &&
      node.children.find((child) => child.type !== "text")?.type === "image";

    if (onlyImage) {
      return <>{children}</>;
    }

    if (isQuestion) {
      return (
        <p className="w-full my-4 p-4 font-bold font-nunito leading-relaxed text-xl md:text-3xl lg:text-base">
          {children}
        </p>
      );
    }

    return (
      <p className="w-full my-2 font-nunito leading-relaxed text-xl md:text-3xl lg:text-base">
        {children}
      </p>
    );
  },

  // === LISTS (complete) ===
  ul: ({ children }) => (
    <ul className="w-full my-6 ml-6 list-disc [&>li]:mt-2 font-nunito text-xl md:text-3xl lg:text-base">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="w-full my-6 ml-6 list-decimal [&>li]:mt-2 font-nunito text-xl md:text-3xl lg:text-base">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="font-nunito">{children}</li>,

  // === TABLES (GFM - complete) ===
  table: ({ children }) => (
    <div className="max-w-full w-full overflow-x-auto my-6">
      <Table className="border-2">{children}</Table>
    </div>
  ),
  thead: ({ children }) => <TableHeader>{children}</TableHeader>,
  tbody: ({ children }) => <TableBody>{children}</TableBody>,
  tfoot: ({ children }) => (
    <TableBody className="font-medium">{children}</TableBody>
  ),
  tr: ({ children }) => <TableRow>{children}</TableRow>,
  th: ({ children }) => (
    <TableHead className="text-white font-bold bg-primary/90 text-xl md:text-3xl lg:text-base">
      {children}
    </TableHead>
  ),
  td: ({ children }) => (
    <TableCell className="font-nunito text-xl md:text-3xl lg:text-base">
      {children}
    </TableCell>
  ),

  // === INLINE ELEMENTS ===
  strong: ({ children }) => (
    <strong className="font-bold font-nunito">{children}</strong>
  ),
  em: ({ children }) => <em className="italic font-nunito">{children}</em>,
  code({ inline, className, children, ...props }) {
    const isBlock = !inline && className?.includes("language-");
    if (!isBlock) {
      return (
        <code className="font-mono" {...props}>
          {children}
        </code>
      );
    }
    return (
      <ScrollArea className="w-full my-6 p-4 bg-muted/10 rounded-lg border">
        <pre className="text-base md:text-lg lg:text-sm font-mono overflow-x-auto whitespace-pre-wrap">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </ScrollArea>
    );
  },
  del: ({ children }) => (
    <del className="opacity-75 line-through font-nunito">{children}</del>
  ),

  // === MEDIA ===
  img: MarkdownToImage,

  // === LINKS ===
  a: ({ children, href }) => (
    <a
      href={href}
      className="font-nunito text-blue-500 hover:text-blue-500/80 underline decoration-2 underline-offset-2 transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ),

  // === BLOCK ELEMENTS ===
  blockquote: ({ children }) => (
    <div className="w-full flex justify-center items-center my-6">
      <blockquote className="border-l-4 border-primary bg-muted/30 pl-6 italic font-nunito py-4 px-4 rounded-r-lg max-w-3xl">
        {children}
      </blockquote>
    </div>
  ),

  hr: () => (
    <div className="w-full flex justify-center items-center my-8">
      <hr className="w-full max-w-md border-muted border-2 rounded-full" />
    </div>
  ),

  // === FORMS (GFM task lists) ===
  input: ({ type, checked, ...props }) => (
    <input
      type={type || "checkbox"}
      checked={checked || false}
      className="mr-2 h-4 w-4 rounded border-muted bg-background text-primary focus:ring-primary"
      {...props}
    />
  ),

  // === SEMANTIC HTML5 ===
  article: ({ children }) => (
    <article className="w-full prose prose-primary font-nunito max-w-none my-6">
      {children}
    </article>
  ),
  section: ({ children }) => (
    <section className="w-full my-8 font-nunito">{children}</section>
  ),
  aside: ({ children }) => (
    <aside className="w-full bg-muted/30 p-6 rounded-lg my-6 font-nunito">
      {children}
    </aside>
  ),
  header: ({ children }) => (
    <header className="w-full border-b border-muted pb-4 mb-6 font-nunito">
      {children}
    </header>
  ),
  main: ({ children }) => (
    <main className="max-w-full w-full font-nunito">{children}</main>
  ),
  nav: ({ children }) => (
    <nav className="w-full bg-muted/50 p-4 rounded-lg my-4 font-nunito">
      {children}
    </nav>
  ),
  footer: ({ children }) => (
    <footer className="w-full border-t border-muted pt-4 mt-6 font-nunito">
      {children}
    </footer>
  ),

  // === INTERACTIVE ===
  details: ({ children, open }) => (
    <details
      open={open}
      className="w-full my-4 p-2 bg-muted/20 rounded-lg font-nunito"
    >
      {children}
    </details>
  ),
  summary: ({ children }) => (
    <summary className="font-semibold cursor-pointer text-primary hover:text-primary/80 font-nunito p-3 rounded list-none">
      {children}
    </summary>
  ),

  // === MEDIA ===
  figure: ({ children }) => (
    <figure className="w-full flex flex-col items-center my-6 font-nunito">
      {children}
    </figure>
  ),
  figcaption: ({ children }) => (
    <figcaption className="mt-2 text-sm md:text-base lg:text-sm text-muted-foreground italic font-nunito text-center">
      {children}
    </figcaption>
  ),

  // === UTILITIES ===
  pre: ({ children }) => (
    <pre className="w-full my-6 p-4 bg-muted/50 rounded-lg border text-base md:text-lg lg:text-sm overflow-x-auto font-nunito whitespace-pre-wrap">
      {children}
    </pre>
  ),
  br: () => <br />,
  span: ({ children }) => <span className="font-nunito">{children}</span>,
  div: ({ children }) => <div className="w-full font-nunito">{children}</div>,

  // === FALLBACK ===
  root: ({ children }) => (
    <div className="w-full prose prose-primary font-nunito max-w-none">
      {children}
    </div>
  ),
};
