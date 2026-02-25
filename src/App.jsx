import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Loading from "./components/view/Loading";
import EmailTestingPage from "./pages/testingEmailPage";
import LetterTestingPage from "./pages/testingLetterPage";
import ParagraphTestingPage from "./pages/testingParagraph";
import NoticeTestingPage from "./pages/testingNoticePage";
import ReportTestingPage from "./pages/testingReportPage";
import EssayTestingPage from "./pages/testingEssayPage";
import StoryTestingPage from "./pages/testingStoryPage";
import ArticleTestingPage from "./pages/testingArticlePage";
import BlogTestingPage from "./pages/testingBlogPage";
import CtaGeneratorPage from "./pages/CtaGeneratorPage";
import CaptionGeneratorPage from "./pages/CaptionGeneratorPage";
import FaqGeneratorPage from "./pages/FaqGeneratorPage";
import GrammarcorrectorPage from "./pages/GrammarcorrectorPage";
import HumanizerPage from "./pages/HumanizerPage";
import ImageGeneratorPage from "./pages/ImageGeneratorPage";
import OutlineGeneratorPage from "./pages/OutlineGeneratorPage";
import ParaphraserPage from "./pages/ParaphraserPage";
import ReadabilityImproverPage from "./pages/ReadabilityImproverPage";
import ReplyGeneratorPage from "./pages/ReplyGeneratorPage";
import SeometadescriptionGeneratorPage from "./pages/SeometadescriptionGeneratorPage";
import SeotagGeneratorPage from "./pages/SeotagGeneratorPage";
import SloganGeneratorPage from "./pages/SloganGeneratorPage";
import SummariserPage from "./pages/SummariserPage";
import TitleGeneratorPage from "./pages/TitleGeneratorPage";
import ToneShifterPage from "./pages/ToneshifterPage";
import TweetGeneratorPage from "./pages/TweetGeneratorPage";
import Navbar from "./components/component/Navbar";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TestingLandingPage from "./pages/TestingLandingPage";
import DetectorPage from "./pages/DetectorPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div
      className={`max-w-full flex justify-center font-nunito relative ${
        isDark ? "text-white bg-black" : "text-black bg-white"
      }`}
    >
      <div
        className={`w-[90vw] h-[70vw] xl:w-[50vw] xl:h-[50vw] ${
          isDark ? "bg-blue-500/60" : "bg-blue-500/40"
        } fixed -left-[20vw] -bottom-[15vw] rounded-full blur-[14vw] xl:blur-[10vw]`}
      ></div>
      <div className="max-w-full min-h-screen z-10 flex flex-col items-center">
        <Navbar />
        <div className="max-w-full flex items-start">
          <Routes>
            <Route path="/" element={<TestingLandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/article" element={<ArticleTestingPage />} />
            <Route path="/blog" element={<BlogTestingPage />} />
            <Route path="/email" element={<EmailTestingPage />} />
            <Route path="/paragraph" element={<ParagraphTestingPage />} />
            <Route path="/essay" element={<EssayTestingPage />} />
            <Route path="/letter" element={<LetterTestingPage />} />
            <Route path="/report" element={<ReportTestingPage />} />
            <Route path="/notice" element={<NoticeTestingPage />} />
            <Route path="/story" element={<StoryTestingPage />} />
            <Route path="/caption" element={<CaptionGeneratorPage />} />
            <Route path="/cta" element={<CtaGeneratorPage />} />
            <Route path="/faq" element={<FaqGeneratorPage />} />
            <Route
              path="/grammar/corrector"
              element={<GrammarcorrectorPage />}
            />
            <Route path="/humanizer" element={<HumanizerPage />} />
            <Route path="/image" element={<ImageGeneratorPage />} />
            <Route path="/outline" element={<OutlineGeneratorPage />} />
            <Route path="/paraphraser" element={<ParaphraserPage />} />
            <Route
              path="/readability/improver"
              element={<ReadabilityImproverPage />}
            />
            <Route path="/reply" element={<ReplyGeneratorPage />} />
            <Route
              path="/seometadescription"
              element={<SeometadescriptionGeneratorPage />}
            />
            <Route path="/seotag" element={<SeotagGeneratorPage />} />
            <Route path="/slogan" element={<SloganGeneratorPage />} />
            <Route path="/summarise" element={<SummariserPage />} />
            <Route path="/title" element={<TitleGeneratorPage />} />
            <Route path="/toneshift" element={<ToneShifterPage />} />
            <Route path="/tweet" element={<TweetGeneratorPage />} />
            <Route path="/terms/use" element={<TermsOfUsePage />} />
            <Route path="/privacy/policy" element={<PrivacyPolicyPage />} />
            <Route path="/about/us" element={<AboutUsPage />} />
            <Route path="/detector" element={<DetectorPage />} />
          </Routes>
        </div>
        {pathname === "/" ? null : (
          <footer className="max-w-screen w-full flex justify-center items-start mt-[10vw] pb-[2vw]">
            <div className="max-w-full w-full flex lg:flex-row flex-col justify-around items-start mt-[15vw] pb-[2vw] lg:gap-0 gap-[5vw]">
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
              <div className="lg:max-w-[80%] max-w-[95%] flex justify-center items-center">
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
                      <td onClick={()=> navigate("/article")} className="py-1 cursor-pointer hover:text-blue-400">AI Article Writer</td>
                      <td onClick={()=> navigate("/about/us")} className="py-1 cursor-pointer hover:text-blue-400">About Us</td>
                      <td onClick={()=> navigate("/terms/use")} className="py-1 cursor-pointer hover:text-blue-400">Terms of use</td>
                    </tr>

                    <tr>
                      <td onClick={()=> navigate("/email")} className="py-1 cursor-pointer hover:text-blue-400">AI Email Writer</td>
                      <td className="py-1"></td>
                      <td onClick={()=> navigate("/privacy/policy")} className="py-1 cursor-pointer hover:text-blue-400">Privacy Policy</td>
                    </tr>

                    <tr>
                      <td onClick={()=> navigate("/letter")} className="py-1 cursor-pointer hover:text-blue-400">AI Letter Writer</td>
                      <td className="py-1"></td>
                      <td className="py-1"></td>
                    </tr>

                    <tr>
                      <td onClick={()=> navigate("/blog")} className="py-1 cursor-pointer hover:text-blue-400">AI Blog Writer</td>
                      <td className="py-1"></td>
                      <td className="py-1"></td>
                    </tr>

                    <tr>
                      <td onClick={()=> navigate("/report")} className="py-1 cursor-pointer hover:text-blue-400">AI Report Writer</td>
                      <td className="py-1"></td>
                      <td className="py-1 "></td>
                    </tr>

                    <tr>
                      <td onClick={()=> navigate("/essay")} className="py-1 cursor-pointer hover:text-blue-400">AI Essay Writer</td>
                      <td className="py-1"></td>
                      <td className="py-1"></td>
                    </tr>
                    <tr>
                      <td onClick={()=> navigate("/paragraph")} className="py-1 cursor-pointer hover:text-blue-400">AI Paragraph Writer</td>
                      <td className="py-1"></td>
                      <td className="py-1"></td>
                    </tr>
                    <tr>
                      <td onClick={()=> navigate("/notice")} className="py-1 cursor-pointer hover:text-blue-400">AI Notice Writer</td>
                      <td className="py-1"></td>
                      <td className="py-1"></td>
                    </tr>
                    <tr>
                      <td onClick={()=> navigate("/story")} className="py-1 cursor-pointer hover:text-blue-400">AI Story Writer</td>
                      <td className="py-1"></td>
                      <td className="py-1"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </footer>
        )}
      </div>
      <div
        className={`w-[50vw] h-[50vw] ${
          isDark ? "bg-pink-400/70" : "bg-pink-400/40"
        } fixed -right-[10vw] -top-[15vw] rounded-full blur-[15vw]`}
      ></div>
    </div>
  );
}

export default App;
