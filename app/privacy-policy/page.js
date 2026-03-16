import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | DigitalSolution 360",
  description:
    "Read the privacy policy of DigitalSolution 360 to understand how we collect, use, and protect your personal information.",
  keywords:
    "privacy policy digitalsolution360, data protection policy, website privacy policy",
  alternates: {
    canonical: "https://www.digitalsolution360.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "1 March 2026";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-linear-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg">
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 space-y-8 text-gray-700 leading-relaxed">
            {/* Introduction */}
            <div>
              <p>
                Digital Solution 360 (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website{" "}
                <Link
                  href="https://www.digitalsolution360.in"
                  className="text-blue-600 hover:underline"
                >
                  www.digitalsolution360.in
                </Link>
                . This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services. Please read this policy carefully. By using our website,
                you agree to the collection and use of information in accordance
                with this policy.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect personal information that you voluntarily provide
                when you:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Fill out a contact form or request a free consultation</li>
                <li>Subscribe to our newsletter or blog updates</li>
                <li>Communicate with us via email, phone, or WhatsApp</li>
                <li>Apply for a job through our careers page</li>
              </ul>
              <p className="mt-3">
                <strong>Personal Information</strong> may include your name, email
                address, phone number, company name, and any message you provide.
              </p>
              <p className="mt-3">
                <strong>Automatically Collected Information:</strong> When you
                visit our website, we may collect certain information
                automatically, including your IP address, browser type, operating
                system, referring URL, pages visited, time spent on pages, and
                other usage data through cookies and similar technologies.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">We use the collected information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Respond to your inquiries and provide requested services</li>
                <li>
                  Send you relevant information about our digital marketing, SEO,
                  and web development services
                </li>
                <li>Improve our website, content, and user experience</li>
                <li>
                  Analyze website traffic and usage patterns through tools like
                  Google Analytics
                </li>
                <li>
                  Comply with legal obligations and protect against fraudulent
                  activity
                </li>
                <li>Process job applications submitted through our website</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                3. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies, web beacons, and similar tracking technologies to
                enhance your browsing experience. Cookies help us understand how
                you interact with our website and allow us to remember your
                preferences. You can control cookie settings through your browser.
                Disabling cookies may affect certain features of our website.
              </p>
              <p className="mt-3">We may use:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to
                  function properly.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand visitor
                  behavior (e.g., Google Analytics).
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver relevant
                  advertisements and track campaign performance.
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                4. Third-Party Services
              </h2>
              <p>
                We may share your information with trusted third-party service
                providers who assist us in operating our website and delivering our
                services. These include:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Google Analytics (website analytics)</li>
                <li>Google Ads and Facebook Ads (advertising platforms)</li>
                <li>FormSubmit (form handling and email notifications)</li>
                <li>Hosting providers</li>
              </ul>
              <p className="mt-3">
                These third parties have their own privacy policies and we
                encourage you to review them. We do not sell your personal
                information to any third party.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security
                measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method
                of transmission over the Internet or electronic storage is 100%
                secure, and we cannot guarantee its absolute security.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                6. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary
                to fulfill the purposes for which it was collected, including
                meeting any legal, accounting, or reporting requirements. Contact
                form submissions and inquiry data are retained for a reasonable
                period to follow up on your requests.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                7. Your Rights
              </h2>
              <p className="mb-3">
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Access:</strong> Request a copy of the personal data we
                  hold about you.
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of any
                  inaccurate or incomplete data.
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data, subject to legal obligations.
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing
                  communications at any time.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:info@digitalsolution360.in"
                  className="text-blue-600 hover:underline"
                >
                  info@digitalsolution360.in
                </a>
                .
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                8. Children&apos;s Privacy
              </h2>
              <p>
                Our website and services are not intended for children under 13
                years of age. We do not knowingly collect personal information from
                children. If you believe we have collected information from a
                child, please contact us immediately and we will take steps to
                remove that information.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                9. External Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices or content of those external
                sites. We encourage you to review the privacy policies of any
                third-party sites you visit.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with a revised &quot;Last updated&quot; date. We
                encourage you to review this policy periodically to stay informed
                about how we are protecting your information.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us:
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <strong>Company:</strong> Digital Solution 360
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@digitalsolution360.in"
                    className="text-blue-600 hover:underline"
                  >
                    info@digitalsolution360.in
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a
                    href="tel:+919990556217"
                    className="text-blue-600 hover:underline"
                  >
                    +91 9990556217
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <Link
                    href="/"
                    className="text-blue-600 hover:underline"
                  >
                    www.digitalsolution360.in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
