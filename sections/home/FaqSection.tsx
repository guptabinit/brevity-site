"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Our project timelines vary based on scope and complexity. A typical MVP can be delivered in 4-8 weeks, while larger enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "How do you handle project management and communication?",
    answer:
      "We use agile methodologies with weekly sprints and regular check-ins. Our clients have access to project management tools where they can track progress in real-time. We communicate via Slack, email, and scheduled video calls.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web and mobile technologies including React, Next.js, Node.js, React Native, and Flutter. For backend systems, we work with Node.js, Python, and Go, along with various database solutions like PostgreSQL, MongoDB, and Firebase.",
  },
  {
    question: "Do you offer maintenance and support after launch?",
    answer:
      "Yes, we offer various maintenance and support packages to ensure your product continues to run smoothly after launch. These include bug fixes, security updates, performance monitoring, and feature enhancements.",
  },
  {
    question: "What makes Brevity Technologies different from other agencies?",
    answer:
      "We combine technical excellence with business acumen to deliver solutions that drive growth. Our modular approach allows for flexibility and scalability, while our global team brings diverse perspectives to every project. We focus on long-term partnerships rather than one-off projects.",
  },
  {
    question: "How do you price your services?",
    answer:
      "We offer transparent pricing models including fixed-price projects, time and materials, and retainer arrangements. Our productized services have standardized pricing, while custom solutions are quoted based on requirements. We provide detailed proposals with no hidden costs.",
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom max-w-4xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services, process, and pricing."
          centered={true}
          tag="FAQs"
        />

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-5 text-left"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-primary-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
