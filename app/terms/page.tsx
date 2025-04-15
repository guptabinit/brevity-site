"use client"

import { motion } from "framer-motion"
import PageHeader from "@/components/layout/PageHeader"
import ContactCTA from "@/sections/home/ContactCTA"

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader title="Terms of Service" subtitle="Last updated: April 14, 2024" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <p>
              These Terms of Service ("Terms") govern your access to and use of the Brevity Technologies website and
              services. Please read these Terms carefully before using our services.
            </p>

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
              Terms, you may not access or use our services.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. If we make changes to these Terms, we will provide notice of such
              changes, such as by sending an email notification, providing notice through our services, or updating the
              "Last Updated" date at the beginning of these Terms. Your continued use of our services following
              notification of changes will constitute your acceptance of such changes.
            </p>

            <h2>Services</h2>
            <p>
              Brevity Technologies provides web and mobile application development, design, and consulting services. Our
              services may include, but are not limited to, custom software development, UI/UX design, product strategy,
              and technical consulting.
            </p>

            <h2>User Accounts</h2>
            <p>
              To access certain features of our services, you may be required to create an account. You are responsible
              for maintaining the confidentiality of your account credentials and for all activities that occur under
              your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2>User Content</h2>
            <p>
              Our services may allow you to submit, upload, publish, or otherwise make available content, including but
              not limited to text, photographs, videos, and other materials. You retain all rights in, and are solely
              responsible for, the content you post to our services.
            </p>

            <h2>Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the Website is our proprietary property and all source code, databases,
              functionality, software, website designs, audio, video, text, photographs, and graphics on the Website
              (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks")
              are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and
              various other intellectual property rights.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Certain services may require payment. By using our paid services, you agree to pay all fees and charges
              associated with your account on a timely basis and in the currency specified. All payments are
              non-refundable unless otherwise specified in a separate agreement.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall Brevity Technologies, its directors, employees, partners, agents, suppliers, or
              affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i)
              your access to or use of or inability to access or use the services; (ii) any conduct or content of any
              third party on the services; (iii) any content obtained from the services; and (iv) unauthorized access,
              use or alteration of your transmissions or content, whether based on warranty, contract, tort (including
              negligence) or any other legal theory, whether or not we have been informed of the possibility of such
              damage.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to defend, indemnify and hold harmless Brevity Technologies and its licensee and licensors, and
              their employees, contractors, agents, officers and directors, from and against any and all claims,
              damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to
              attorney's fees), resulting from or arising out of a) your use and access of the services, by you or any
              person using your account and password; b) a breach of these Terms, or c) content posted on the services.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of California, United States,
              without regard to its conflict of law provisions.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising out of or relating to these Terms or the services will be resolved through binding
              arbitration in accordance with the American Arbitration Association's rules. The arbitration will be
              conducted in San Francisco, California, unless we agree otherwise.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Brevity Technologies
              <br />
              Room 411, NSUT IIF, NSUT,
                <br />
              Dwarka Sector 3, Delhi, IN - 110078
              <br />
              Email: quickgick@gmail.com
              <br />
              Phone: +91 22-6962-1024 , +91 89207-96562
            </p>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
