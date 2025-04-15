"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"
import comp1 from "@/public/comp1.png"
import comp2 from "@/public/comp2.png"
import comp3 from "@/public/comp3.png"
import comp4 from "@/public/comp4.png"
import comp6 from "@/public/comp6.png"

const clients = [
  {
    name: "TechCorp",
    logo: comp6,
    industry: "Technology",
  },
  {
    name: "FinanceHub",
    logo: "/abstract-finance-mark.png",
    industry: "Finance",
  },
  {
    name: "HealthPlus",
    logo: comp1,
    industry: "Healthcare",
  },
  {
    name: "RetailGiant",
    logo: comp2,
    industry: "Retail",
  },
  {
    name: "EduLearn",
    logo: comp3,
    industry: "Education",
  },
  {
    name: "TravelWise",
    logo: comp4,
    industry: "Travel",
  },
]

export default function ClientsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Trusted by Industry Leaders"
          subtitle="We've partnered with companies across various industries to deliver exceptional digital solutions."
          centered={true}
          tag="Our Clients"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
