"use client"

import { motion } from "framer-motion"
import PageHeader from "@/components/layout/PageHeader"
import ContactCTA from "@/sections/home/ContactCTA"

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="Last updated: April 14, 2024" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <p>
              At Brevity Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the Website
              includes:
            </p>

            <h3>Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, and other
              information that you voluntarily give to us when you register with the Website or when you choose to
              participate in various activities related to the Website, such as online chat and message boards. You are
              under no obligation to provide us with personal information of any kind, however your refusal to do so may
              prevent you from using certain features of the Website.
            </p>

            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the Website, such as your IP address, your
              browser type, your operating system, your access times, and the pages you have viewed directly before and
              after accessing the Website.
            </p>

            <h3>Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method (e.g., valid credit card number, card
              brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
              information about our services from the Website. We store only very limited, if any, financial information
              that we collect. Otherwise, all financial information is stored by our payment processor and you are
              encouraged to review their privacy policy and contact them directly for responses to your questions.
            </p>

            <h2>Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the Website to:
            </p>

            <ul>
              <li>Create and manage your account.</li>
              <li>Process your transactions.</li>
              <li>Send you email newsletters, if you have opted in to receive them.</li>
              <li>Respond to your inquiries and customer service requests.</li>
              <li>
                Deliver targeted advertising, newsletters, and other information regarding promotions and the Website to
                you.
              </li>
              <li>Administer sweepstakes, promotions, and contests.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>Increase the efficiency and operation of the Website.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Website.</li>
              <li>Notify you of updates to the Website.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>

            <h3>By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to
              investigate or remedy potential violations of our policies, or to protect the rights, property, and safety
              of others, we may share your information as permitted or required by any applicable law, rule, or
              regulation.
            </p>

            <h3>Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including
              payment processing, data analysis, email delivery, hosting services, customer service, and marketing
              assistance.
            </p>

            <h3>Marketing Communications</h3>
            <p>
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with
              third parties for marketing purposes, as permitted by law.
            </p>

            <h3>Interactions with Other Users</h3>
            <p>
              If you interact with other users of the Website, those users may see your name, profile photo, and
              descriptions of your activity.
            </p>

            <h3>Online Postings</h3>
            <p>
              When you post comments, contributions or other content to the Website, your posts may be viewed by all
              users and may be publicly distributed outside the Website in perpetuity.
            </p>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>

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
