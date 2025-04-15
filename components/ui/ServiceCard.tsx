"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  link?: string
  className?: string
  features?: string[]
}

export default function ServiceCard({ title, description, icon, link, className = "", features }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl shadow-card hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 ${className}`}
    >
      <div className="text-primary-600 mb-4 p-3 bg-primary-50 inline-block rounded-lg">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-base">{description}</p>

      {features && features.length > 0 && (
        <ul className="mb-5 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {link && (
        <Link href={link} className="inline-flex items-center text-primary-600 font-medium hover:underline text-sm">
          Learn more <ArrowRight size={14} className="ml-1" />
        </Link>
      )}
    </motion.div>
  )
}
