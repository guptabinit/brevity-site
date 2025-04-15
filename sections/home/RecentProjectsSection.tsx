"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"

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

export default function RecentProjectsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Recent Projects"
          subtitle="Explore our latest work and see how we've helped businesses achieve their goals."
          centered={true}
          tag="Featured Work"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-card overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block px-2 py-1 bg-primary-600 text-white text-xs rounded-md">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-primary-600 text-sm font-medium hover:underline"
                >
                  View Case Study <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/work" variant="outline" icon={<ArrowRight size={16} />} iconPosition="right">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
