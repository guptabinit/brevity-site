"use client"

import { motion } from "framer-motion"
import { Users, Clock, Globe, Award } from "lucide-react"

export default function StatsSection() {
  const stats = [
    { value: "150+", label: "Projects Completed", icon: <Award className="h-5 w-5" /> },
    { value: "24/7", label: "Support Available", icon: <Clock className="h-5 w-5" /> },
    { value: "15+", label: "Countries Served", icon: <Globe className="h-5 w-5" /> },
    { value: "98%", label: "Client Satisfaction", icon: <Users className="h-5 w-5" /> },
  ]

  return (
    <section className="py-8 bg-white border-y border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
