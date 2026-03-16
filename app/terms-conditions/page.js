import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | DigitalSolution 360",
  description:
    "Review the terms and conditions for using DigitalSolution 360 services, website, and digital marketing solutions.",
  keywords:
    "terms and conditions digitalsolution360, website terms policy",
  alternates: {
    canonical: "https://www.digitalsolution360.in/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  const lastUpdated = "1 March 2026";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-linear-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Terms &amp; Conditions
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
                Welcome to Digital Solution 360. These Terms and Conditions
                (&quot;Terms&quot;) govern your use of our website{" "}
                <Link
                  href="https://www.digitalsolution360.in"
                  className="text-blue-600 hover:underline"
                >
                  www.digitalsolution360.in
                </Link>{" "}
                and the digital marketing, SEO, web development, and related
                services we provide. By accessing or using our website and
                services, you agree to be bound by these Terms. If you do not
                agree, please do not use our website or services.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                1. Definitions
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;</strong> refers to Digital
                  Solution 360.
                </li>
                <li>
                  <strong>&quot;Client,&quot; &quot;you,&quot; &quot;your&quot;</strong> refers to any individual
                  or entity that uses our website or engages our services.
                </li>
                <li>
                  <strong>&quot;Services&quot;</strong> refers to digital marketing, SEO, web
                  development, branding, social media marketing, automation, and
                  any other services offered by Digital Solution 360.
                </li>
                <li>
                  <strong>&quot;Website&quot;</strong> refers to{" "}
                  <Link href="/" className="text-blue-600 hover:underline">
                    www.digitalsolution360.in
                  </Link>{" "}
                  and all associated pages.
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                2. Use of Website
              </h2>
              <p className="mb-3">By using our website, you agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use the website only for lawful purposes</li>
                <li>
                  Not attempt to gain unauthorized access to any part of the
                  website, server, or database
                </li>
                <li>
                  Not use the website to transmit any harmful, offensive, or
                  unlawful content
                </li>
                <li>
                  Not reproduce, duplicate, copy, sell, or exploit any part of
                  the website without our express written permission
                </li>
                <li>
                  Provide accurate and complete information when submitting forms
                  or contacting us
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                3. Services &amp; Engagement
              </h2>
              <p>
                All services provided by Digital Solution 360 are subject to a
                separate service agreement or proposal shared with the client
                before project commencement. The scope, deliverables, timelines,
                and pricing will be detailed in the respective proposal or
                contract.
              </p>
              <p className="mt-3">
                We reserve the right to modify, suspend, or discontinue any
                service at any time with reasonable notice to the client.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                4. Payment Terms
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Payment terms are outlined in the individual service agreement
                  or invoice.
                </li>
                <li>
                  All payments are to be made in Indian Rupees (INR) unless
                  otherwise agreed upon.
                </li>
                <li>
                  Late payments may incur additional charges as specified in the
                  service agreement.
                </li>
                <li>
                  Non-payment may result in suspension or termination of
                  services.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                5. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, graphics, logos,
                images, videos, icons, and software — is the property of Digital
                Solution 360 or its content suppliers and is protected by
                applicable intellectual property laws.
              </p>
              <p className="mt-3">
                Upon full payment, the client receives ownership of the final
                deliverables as specified in the service agreement. However, we
                retain the right to showcase the work in our portfolio and case
                studies unless otherwise agreed in writing.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                6. Client Responsibilities
              </h2>
              <p className="mb-3">The client agrees to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Provide timely access to necessary materials, content,
                  credentials, and feedback
                </li>
                <li>
                  Review and approve deliverables within the agreed timelines
                </li>
                <li>
                  Ensure that any content provided to us does not infringe on
                  third-party intellectual property rights
                </li>
                <li>
                  Communicate project requirements and changes clearly and
                  promptly
                </li>
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                Digital Solution 360 shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising
                from your use of our website or services. Our total liability for
                any claim shall not exceed the amount paid by the client for the
                specific service giving rise to the claim.
              </p>
              <p className="mt-3">
                We do not guarantee specific results from our digital marketing,
                SEO, or advertising services, as outcomes depend on various
                factors including market conditions, competition, and client
                cooperation.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                8. Disclaimer of Warranties
              </h2>
              <p>
                Our website and services are provided on an &quot;as is&quot; and &quot;as
                available&quot; basis. We make no warranties, expressed or implied,
                regarding the operation of our website, the accuracy of
                information provided, or the results of our services. We disclaim
                all warranties, including implied warranties of merchantability,
                fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                9. Cancellation &amp; Refund Policy
              </h2>
              <p>
                Cancellation and refund terms are governed by the individual
                service agreement. Generally:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>
                  Work already completed and delivered is non-refundable.
                </li>
                <li>
                  Advance payments for unstarted work may be refundable, subject
                  to the terms of the agreement.
                </li>
                <li>
                  Monthly retainer services may be cancelled with 30 days&apos;
                  written notice.
                </li>
              </ul>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                10. Confidentiality
              </h2>
              <p>
                Both parties agree to keep confidential any proprietary
                information shared during the course of the engagement. This
                includes, but is not limited to, business strategies, login
                credentials, client data, and project details. This obligation
                survives the termination of the service agreement.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                11. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites and
                services. We are not responsible for the content, privacy
                policies, or practices of any third-party sites. Accessing these
                links is at your own risk.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                12. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless Digital Solution 360, its
                directors, employees, and agents from any claims, damages, losses,
                or expenses arising from your use of our website, violation of
                these Terms, or infringement of any third-party rights.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                13. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with
                the laws of India. Any disputes arising out of or in connection
                with these Terms shall be subject to the exclusive jurisdiction of
                the courts in New Delhi, India.
              </p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                14. Changes to These Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms at any time
                without prior notice. Any changes will be effective immediately
                upon posting on this page. Your continued use of our website after
                any modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* 15 */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                15. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms and Conditions, please
                contact us:
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
                  <Link href="/" className="text-blue-600 hover:underline">
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
