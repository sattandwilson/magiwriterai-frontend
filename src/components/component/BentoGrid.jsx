import { MessageCircle } from "lucide-react";
import { MousePointerClick } from "lucide-react";
import { MessageCircleQuestion } from "lucide-react";
import { CheckCheck } from "lucide-react";
import { UserCircle } from "lucide-react";
import { Image } from "lucide-react";
import { ListTree } from "lucide-react";
import { Shuffle } from "lucide-react";
import { Glasses } from "lucide-react";
import { MessageSquareMore } from "lucide-react";
import { Search } from "lucide-react";
import { Tags } from "lucide-react";
import { Sparkles } from "lucide-react";
import { ListCheck } from "lucide-react";
import { Type } from "lucide-react";
import { AudioLines } from "lucide-react";
import { Bird } from "lucide-react";
import { BentoCard, BentoGrid } from "../ui/bento-grid";

const features = [
  {
    Icon: MessageCircle,
    IconColor: "text-pink-300",
    name: "AI Caption Generator",
    description:
      "Generate Instagram captions with trending hashtags for maximum reach.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-2 row-span-1",
    cscolor:
      "bg-pink-500/70 hover:bg-pink-500/80 transition-color duration-200",
  },
  {
    Icon: MousePointerClick,
    IconColor: "text-zinc-300",
    name: "AI CTA Generator",
    description:
      "Design high-converting call-to-action buttons that drive sales and signups.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-1 row-span-2",
    cscolor:
      "bg-zinc-500/75 hover:bg-zinc-500/80 transition-color duration-200",
  },
  {
    Icon: MessageCircleQuestion,
    IconColor: "text-amber-400",
    name: "AI FAQ Generator",
    description:
      "Create schema-ready FAQ sections that earn rich snippets in Google search.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-1 row-span-1",
    cscolor:
      "bg-amber-600/70 hover:bg-amber-600/75 transition-color duration-200",
  },
  {
    Icon: CheckCheck,
    IconColor: "text-lime-400",
    name: "AI Grammar Corrector",
    description:
      "Fix grammar, spelling, and punctuation errors instantly with 99% accuracy.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-2 row-span-1",
    cscolor:
      "bg-lime-500/70 hover:bg-lime-500/75 transition-color duration-200",
  },
  {
    Icon: UserCircle,
    IconColor: "text-slate-300",
    name: "AI Humanizer",
    description:
      "Transform AI content into undetectable human-written text that passes all checks.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-1 row-span-2",
    cscolor:
      "bg-slate-400/70 hover:bg-slate-400/75 transition-color duration-200",
  },
  {
    Icon: Image,
    IconColor: "text-orange-300",
    name: "AI Image Generator",
    description:
      "Create custom image with the help of Magiwriter AI Image Generator.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-1 row-span-2",
    cscolor:
      "bg-linear-to-r from-pink-400/65 via-orange-500/65 via-yellow-300/65 to-sky-300/40 hover:from-pink-400/70 hover:via-orange-500/70 hover:via-yellow-300/70 hover:to-sky-300/75 transition-color duration-200",
  },
  {
    Icon: ListTree,
    IconColor: "text-sky-300",
    name: "AI Outline Generator",
    description:
      "Build SEO-friendly content outlines with H1-H3 structure and keyword placement.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-2 row-span-1",
    cscolor: "bg-sky-500/70 hover:bg-sky-500/75 transition-color duration-200",
  },
  {
    Icon: Shuffle,
    IconColor: "text-rose-200",
    name: "AI Paraphraser",
    description:
      "Rewrite content in fresh words while preserving original meaning and SEO value.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-1 row-span-1",
    cscolor:
      "bg-rose-400/75 hover:bg-rose-400/80 transition-color duration-200",
  },
  {
    Icon: Glasses,
    IconColor: "text-lime-200",
    name: "AI Readability Improver",
    description:
      "Boost Flesch scores and simplify text for better audience engagement.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-2 row-span-1",
    cscolor:
      "bg-lime-500/70 hover:bg-lime-500/75 transition-color duration-200",
  },
  {
    Icon: MessageSquareMore,
    IconColor: "text-gray-300",
    name: "AI Reply Generator",
    description:
      "Generate relevant social media comments and replies that build community.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-1 row-span-2",
    cscolor:
      "bg-gray-400/75 hover:bg-gray-400/80 transition-color duration-200",
  },
  {
    Icon: Search,
    IconColor: "text-teal-300",
    name: "AI SEO Meta Description Generator",
    description:
      "Write compelling 160-character meta descriptions with optimal CTR.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-2 row-span-1",
    cscolor:
      "bg-teal-400/70 hover:bg-teal-400/75 transition-color duration-200",
  },
  {
    Icon: Tags,
    IconColor: "text-amber-300",
    name: "AI SEO Tag Generator",
    description:
      "Create keyword-rich meta tags that improve search engine rankings.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-1 row-span-1",
    cscolor:
      "bg-amber-400/70 hover:bg-amber-400/75 transition-color duration-200",
  },
  {
    Icon: Sparkles,
    IconColor: "text-neutral-300",
    name: "AI Slogan Generator",
    description:
      "Build memorable brand slogans that stick in customers' minds.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-2 row-span-1",
    cscolor:
      "bg-neutral-400/75 hover:bg-neutral-400/80 transition-color duration-200",
  },
  {
    Icon: ListCheck,
    IconColor: "text-violet-300",
    name: "AI Summariser",
    description:
      "Extract key points from long articles into concise, scannable summaries.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-1 row-span-2",
    cscolor:
      "bg-violet-400/75 hover:bg-violet-400/80 transition-color duration-200",
  },
  {
    Icon: Type,
    IconColor: "text-purple-300",
    name: "AI Title Generator",
    description:
      "Craft click-worthy headlines that boost CTR and time-on-page metrics.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-2 row-span-1",
    cscolor:
      "bg-purple-400/75 hover:bg-purple-400/80 transition-color duration-200",
  },
  {
    Icon: AudioLines,
    IconColor: "text-emerald-300",
    name: "AI Tone Shifter",
    description:
      "Adjust content tone for different audiences while maintaining SEO signals.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-1 row-span-1",
    cscolor:
      "bg-emerald-400/75 hover:bg-emerald-400/80 transition-color duration-200",
  },
  {
    Icon: Bird,
    IconColor: "text-sky-300",
    name: "AI Tweet Generator",
    description:
      "Create viral Twitter threads and tweets that drive engagement and followers.",
    href: "http://localhost:5001/auth/google",
    cta: "Take a quick trial",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    gridspan: "col-span-2 row-span-1",
    cscolor: "bg-sky-400/75 hover:bg-sky-400/80 transition-color duration-200",
  },
];

export function Bentogrid() {
  return (
    <BentoGrid className="w-full px-2 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(180px,1fr)] md:auto-rows-[minmax(220px,1fr)] lg:auto-rows-[minmax(260px,1fr)] gap-4">
      {features.map((feature, idx) => (
        <BentoCard
          key={idx}
          {...feature}
          className={`relative flex flex-col justify-between rounded-xl overflow-hidden shadow-md ${feature.gridspan} ${feature.cscolor}`}
        />
      ))}
    </BentoGrid>
  );
}
