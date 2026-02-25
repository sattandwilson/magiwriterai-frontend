const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-screen flex flex-col items-center gap-[3vw] mt-[2vw] text-white">
      <div className="max-w-3xl mx-auto p-8 rounded-2xl shadow-sm">
        
        <h1 className="text-3xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm mb-8">
          <strong>Effective Date:</strong> 25.02.2026
        </p>

        <section className="space-y-6">
          
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to Magiwriter. This Privacy Policy explains how we collect,
              use, and protect your information when you use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Personal information (such as name and email)</li>
              <li>User-generated content (prompts and generated text)</li>
              <li>Usage data (IP address, browser type, device info)</li>
              <li>Cookies and local storage data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provide and operate the service</li>
              <li>Generate AI-powered content</li>
              <li>Improve performance and user experience</li>
              <li>Monitor and prevent misuse</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. AI Processing</h2>
            <p>
              Your inputs may be processed by third-party AI service providers to
              generate content. We do not guarantee the accuracy or reliability
              of AI-generated outputs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Sharing of Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Third-party AI providers</li>
              <li>Hosting and infrastructure services</li>
              <li>Analytics tools</li>
            </ul>
            <p className="mt-2">We do not sell your personal data.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
            <p>
              We retain data only as long as necessary to provide our services
              and for legitimate business purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
            <p>You may request to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your data</li>
              <li>Delete your account and associated data</li>
            </ul>
            <p className="mt-2">
              Contact us at:{" "}
              <span className="text-blue-600">magiwriterai@gmail.com</span>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Security</h2>
            <p>
              We implement reasonable security measures to protect your
              information, but no system is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Cookies</h2>
            <p>
              We use cookies and similar technologies to maintain sessions and
              improve user experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy. Continued use of the service
              means you accept the changes.
            </p>
          </div>

        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;