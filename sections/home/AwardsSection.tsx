"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"

const awards = [
  {
    title: "Best Web Development Agency 2023",
    organization: "Digital Excellence Awards",
    year: "2023",
    logo: "/placeholder.svg?height=80&width=80&query=award medal icon",
  },
  {
    title: "Top UX Design Studio",
    organization: "UX Design Awards",
    year: "2022",
    logo: "/placeholder.svg?height=80&width=80&query=design award icon",
  },
  {
    title: "Innovation in Mobile Development",
    organization: "Tech Innovators",
    year: "2023",
    logo: "/placeholder.svg?height=80&width=80&query=innovation award icon",
  },
  {
    title: "Best SaaS Solution",
    organization: "SaaS Awards",
    year: "2022",
    logo: "/placeholder.svg?height=80&width=80&query=software award icon",
  },
]

export default function AwardsSection() {
  return (
    <section className="py-16 md:py-20 bg-primary-900 text-white">
      <div className="container-custom">
        <SectionHeading
          title="Awards & Recognition"
          subtitle="Our commitment to excellence has been recognized by leading industry organizations."
          centered={true}
          className="text-white [&_.section-subtitle]:text-blue-100"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-primary-800/50 p-6 rounded-xl border border-primary-700/50 backdrop-blur-sm text-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={award.logo || "/placeholder.svg"}
                  alt={award.title}
                  width={60}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-lg font-bold mb-2">{award.title}</h3>
              <p className="text-blue-100 text-sm mb-1">{award.organization}</p>
              <p className="text-blue-200 text-xs">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
