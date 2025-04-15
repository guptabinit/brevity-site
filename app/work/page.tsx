"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import PageHeader from "@/components/layout/PageHeader"
import Button from "@/components/ui/Button"
import SectionHeading from "@/components/ui/SectionHeading"
import ContactCTA from "@/sections/home/ContactCTA"

const projects = [
  {
    id: "quickgick",
    title: "Quickgick",
    category: "Mobile App",
    description: "On-demand staffing platform for hospitality businesses.",
    image: "/hospitality-staffing-dashboard.png",
    link: "/work/quickgick",
  },
  {
    id: "bitecart",
    title: "BiteCart",
    category: "Web Application",
    description: "In-room ordering system for hotels and resorts.",
    image: "/modern-hotel-room-service-app.png",
    link: "/work/bitecart",
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    category: "Dashboard",
    description: "Financial analytics platform for investment professionals.",
    image: "/financial-dashboard-overview.png",
    link: "/work/fintech-dashboard",
  },
]

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <>
      <PageHeader
        title="Our Work"
        subtitle="Explore our portfolio of successful projects and see how we've helped businesses achieve their goals."
        tag="Case Studies"
        bg="blue-100"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button href={project.link} variant="link" className="group/btn">
                    View Case Study{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
