export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-cream-500 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white border-4 border-black comic-shadow-lg p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-12">Last updated: January 2026</p>
          
          <div className="space-y-8 text-gray-900">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="leading-relaxed">
              AutoMitra AI (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, products, and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="leading-relaxed mb-3">We may collect the following information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal details</strong> such as name, email address, phone number, and company name when you:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Book a demo</li>
                  <li>Contact our team</li>
                  <li>Request pricing or information</li>
                </ul>
              </li>
              <li>
                <strong>Usage data</strong> such as:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Pages visited</li>
                  <li>Time spent on the site</li>
                  <li>Device and browser information</li>
                </ul>
              </li>
              <li>
                <strong>Communication data</strong> from forms, emails, or WhatsApp interactions initiated by you.
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information?</h2>
            <p className="leading-relaxed mb-3">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries and demo requests</li>
              <li>Provide product updates and service communication</li>
              <li>Improve our platform and website experience</li>
              <li>Maintain security and prevent misuse</li>
            </ul>
            <p className="leading-relaxed mt-3">We do not sell your personal data.</p>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
            <p className="leading-relaxed mb-3">We may share your data only with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trusted service providers (hosting, analytics, CRM)</li>
              <li>Legal authorities if required by law</li>
            </ul>
            <p className="leading-relaxed mt-3">All partners are bound by confidentiality and data protection obligations.</p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your data. While no system is 100% secure, we take reasonable steps to safeguard your information.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="leading-relaxed mb-3">We may use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve site functionality</li>
              <li>Analyze traffic</li>
              <li>Enhance user experience</li>
            </ul>
            <p className="leading-relaxed mt-3">You can control cookies through your browser settings.</p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="leading-relaxed mt-3">
              To exercise these rights, contact us at:{' '}
              <a href="mailto:contact@automitra.ai" className="text-blue-600 hover:underline">
                contact@automitra.ai
              </a>
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            </p>
          </section>

          {/* Updates to This Policy */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy, contact us at:{' '}
              <a href="mailto:contact@automitra.ai" className="text-blue-600 hover:underline">
                contact@automitra.ai
              </a>
            </p>
          </section>
        </div>
        </div>
      </div>
    </main>
  );
}
