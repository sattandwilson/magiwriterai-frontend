const AboutUsPage = () => {
  return (
    <div className="max-w-screen flex flex-col items-center gap-[3vw] mt-[2vw] text-white">
      <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-sm">
        <h1 className="text-3xl font-bold mb-4">
          About Magiwriter AI
        </h1>

        <p className="mb-8">
          Magiwriter AI is an experimental AI-powered writing platform currently
          in its early testing phase. We are actively exploring the potential of
          AI to simplify and enhance the writing experience.
        </p>

        <section className="space-y-6">

          <div>
            <h2 className="text-xl font-semibold mb-2">What We Are Building</h2>
            <p>
              Magiwriter AI combines a growing suite of 27 AI writing tools,
              designed to assist with different types of content creation. While
              these tools are not fully polished yet, they represent our ongoing
              effort to understand what truly makes writing faster, easier, and
              more effective.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Our Current Stage</h2>
            <p>
              We are currently in a testing and experimentation phase. This means
              the platform is not finalized, and many features are still being
              improved. We are using this stage to evaluate performance, refine
              ideas, and identify what actually delivers value to users.
            </p>
            <p className="mt-2">
              Simply put — we are not fully satisfied yet, and that is exactly
              why we are still building.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p>
              Our goal is to build one of the most effective AI writing platforms
              on the internet — a place where writing becomes effortless, fast,
              and accessible to everyone.
            </p>
            <p className="mt-2">
              We plan to introduce more tools, smarter workflows, and advanced AI
              capabilities to continuously improve the experience. We are aiming
              to reach a strong, mature version of the platform by 2026.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">The People Behind It</h2>
            
            <div className="space-y-4">
              
              <div>
                <p className="font-semibold">Amit Giri</p>
                <p className="text-sm">
                  Idea & Direction
                </p>
                <p className="mt-1">
                  Amit is a teacher who works with students in schools and
                  coaching environments. With experience guiding hundreds of
                  aspiring learners, he brings practical insight into how people
                  think, learn, and express ideas — which shapes the vision of
                  Magiwriter AI.
                </p>
              </div>

              <div>
                <p className="font-semibold">Satwik Bera</p>
                <p className="text-sm">
                  Development & Maintenance
                </p>
                <p className="mt-1">
                  Satwik is responsible for building and maintaining the
                  platform. From implementing features to handling technical
                  challenges, he focuses on turning ideas into a working product.
                </p>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Looking Ahead</h2>
            <p>
              This is just the beginning. As we continue testing and improving,
              our focus remains on building something genuinely useful — not just
              another AI tool, but a platform that people can rely on for real
              writing needs.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;