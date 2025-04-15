"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Zap } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"
import BackgroundElements from "@/components/ui/BackgroundElements"

const reasons = [
  {
    id: "professional",
    title: "Professional",
    description:
      "We bring enterprise-grade processes to businesses of all sizes. Our team has worked with Fortune 500 companies and funded startups alike.",
    icon: <Users className="h-8 w-8 text-white" />,
  },
  {
    id: "creative",
    title: "Creative",
    description:
      "We blend technical expertise with creative problem-solving. Our solutions are not just functional but delightful to use.",
    icon: <Lightbulb className="h-8 w-8 text-white" />,
  },
  {
    id: "agile",
    title: "Agile",
    description:
      "We move fast without breaking things. Our modular approach allows us to deliver value incrementally and adapt to changing requirements.",
    icon: <Zap className="h-8 w-8 text-white" />,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-primary-900 text-white relative">
      <BackgroundElements variant="dark" density="medium" />
      <div className="container-custom">
        <SectionHeading
          title="Why Choose Brevity"
          subtitle="We combine technical excellence with business acumen to deliver solutions that drive growth."
          centered={true}
          color="white"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 relative">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-primary-800/50 p-6 rounded-xl border border-primary-700/50 backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-700 rounded-lg mr-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-white">{reason.title}</h3>
              </div>
              <p className="text-blue-100 text-base">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
