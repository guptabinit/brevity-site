"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"

const startups = [
  {
    id: "quickgick",
    name: "Quickgick",
    description: "On-demand staffing platform for hospitality businesses. Find qualified staff within minutes.",
    logo: "/quickgick-minimalist-logo.png",
    image: "/placeholder.svg?height=300&width=500&query=hospitality staffing app interface",
    link: "/work/quickgick",
    features: ["Instant matching", "Background verification", "Shift management", "Automated payments"],
  },
  {
    id: "bitecart",
    name: "BiteCart",
    description: "In-room ordering system for hotels. Seamless food delivery and hotel services at your fingertips.",
    logo: "/placeholder.svg?height=80&width=200&query=modern minimalist logo for BiteCart",
    image: "/placeholder.svg?height=300&width=500&query=hotel room service ordering app interface",
    link: "/work/bitecart",
    features: ["Room service ordering", "Real-time tracking", "Multiple payment options", "Multilingual support"],
  },
]

export default function StartupShowcase() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Startup Showcase"
          subtitle="Innovative ventures we've helped build from the ground up."
          centered={true}
          highlightText={true}
        />

        <div className="space-y-16">
          {startups.map((startup, index) => (
            <motion.div
              key={startup.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={startup.image || "/placeholder.svg"}
                    alt={startup.name}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                {index % 2 === 0 ? (
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-full -z-10"></div>
                ) : (
                  <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary-100 rounded-full -z-10"></div>
                )}
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src={startup.logo || "/placeholder.svg"}
                  alt={startup.name}
                  width={200}
                  height={80}
                  className="h-12 w-auto mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">{startup.name}</h3>
                <p className="text-gray-600 mb-6 text-lg">{startup.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {startup.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-primary-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button href={startup.link} variant="primary">
                  View Case Study
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
