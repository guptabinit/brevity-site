"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle?: string
  tag?: string
  bg?: string
  bgImage?: any
}

export default function PageHeader({bgImage,bg ,title, subtitle, tag }: PageHeaderProps) {
  return (
    <section className={`bg-${bg ? bg : 'white'} pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100 rounded-tr-full opacity-30 -z-10"></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {tag && (
            <div className="border-2 border-blue-200 bg-blue-200 inline-block px-3 py-1 text-primary-700 rounded-full text-sm font-medium mb-4">
              {tag}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
          {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}
