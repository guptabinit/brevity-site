"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import PageHeader from "@/components/layout/PageHeader"
import ContactCTA from "@/sections/home/ContactCTA"

// Define the site structure
const siteStructure = [
  {
    title: "Main Pages",
    pages: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Products", path: "/products" },
      { name: "Work", path: "/work" },
      { name: "Tech Stack", path: "/tech-stack" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Service Pages",
    pages: [
      { name: "LaunchPad™", path: "/services#launchpad" },
      { name: "Design360™", path: "/services#design360" },
      { name: "QuickScale™", path: "/services#quickscale" },
      { name: "Cloud Solutions", path: "/services#cloud-solutions" },
      { name: "Data Solutions", path: "/services#data-solutions" },
      { name: "E-Commerce Solutions", path: "/services#ecommerce" },
      { name: "Mobile Development", path: "/services#mobile-development" },
      { name: "Web Development", path: "/services#web-development" },
    ],
  },
  {
    title: "Product Pages",
    pages: [
      { name: "ERP for Startups", path: "/products#erp" },
      { name: "TV Ad Display", path: "/products#tv-ad" },
      { name: "Restaurant UI Kit", path: "/products#ui-kit" },
    ],
  },
  {
    title: "Case Studies",
    pages: [
      { name: "Quickgick", path: "/work/quickgick" },
      { name: "BiteCart", path: "/work/bitecart" },
      { name: "FinTech Dashboard", path: "/work/fintech-dashboard" },
    ],
  },
  {
    title: "Blog",
    pages: [
      { name: "Blog Home", path: "/blog" },
      { name: "Web Development Trends", path: "/blog/web-development-trends-2025" },
      { name: "Mobile App Development Guide", path: "/blog/mobile-app-development-guide" },
      { name: "AI in Software Development", path: "/blog/ai-in-software-development" },
    ],
  },
  {
    title: "Legal & Info",
    pages: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Sitemap", path: "/sitemap" },
    ],
  },
]

export default function SitemapPage() {
  return (
    <>
      <PageHeader title="Sitemap" subtitle="A complete overview of our website structure" />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid md:grid-cols-2 gap-12">
              {siteStructure.map((section, sectionIndex) => (
                <div key={section.title} className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 text-primary-600">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.pages.map((page, pageIndex) => (
                      <motion.li
                        key={page.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: pageIndex * 0.05 + sectionIndex * 0.1 }}
                      >
                        <Link
                          href={page.path}
                          className="text-gray-700 hover:text-primary-600 transition-colors flex items-center"
                        >
                          <svg
                            className="h-4 w-4 text-primary-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {page.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
