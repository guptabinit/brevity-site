"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import PageHeader from "@/components/layout/PageHeader"
import ContactForm from "@/components/contact/ContactForm"
import SectionHeading from "@/components/ui/SectionHeading"
import NewsletterForm from "@/components/newsletter/NewsletterForm"

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your project or ask any questions."
        tag="Let's Talk"
        bg="blue-100"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="bg-primary-100 text-primary-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Our team is here to help with any questions.</p>
              <a
                href="mailto:quickgick@gmail.com"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                quickgick@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="bg-primary-100 text-primary-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team.</p>
              <a
                href="tel:+18005551234"
                className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
              >
                +91 22-6962-1024 <br/> 
                +91 89207-96562
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="bg-primary-100 text-primary-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-600 mb-4">We're available during these hours.</p>
              <p className="text-gray-700">
                Monday - Friday: 9AM - 6PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
                alignment="left"
              />

              <div className="mt-8">
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <SectionHeading
                  title="Our Locations"
                  subtitle="Visit us at one of our offices."
                  alignment="left"
                />

                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-600 p-2 rounded-full mr-4 mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Delhi (HQ)</h4>
                      <p className="text-gray-600">
                        Room 411, NSUT IIF, NSUT
                        <br />
                        Dwarka Sector 3
                        <br />
                        Delhi, IN - 110078
                      </p>
                    </div>
                  </div>  
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about working with us."
            centered={true}
          />

          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                question: "What is your typical project process?",
                answer:
                  "Our process typically includes discovery, planning, design, development, testing, and deployment phases. We work collaboratively with clients throughout each stage to ensure the final product meets all requirements and expectations.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
              },
              {
                question: "Do you offer maintenance and support after launch?",
                answer:
                  "Yes, we offer various maintenance and support packages to ensure your product continues to run smoothly after launch. These can include regular updates, security patches, performance monitoring, and technical support.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We specialize in modern web and mobile technologies including React, Next.js, Node.js, React Native, Flutter, and various backend frameworks. Visit our Tech Stack page for a comprehensive list of technologies we work with.",
              },
              {
                question: "How do you handle project pricing?",
                answer:
                  "We offer flexible pricing models including fixed-price quotes for well-defined projects and time-and-materials billing for projects with evolving requirements. We'll recommend the most appropriate model based on your project's nature and scope.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
