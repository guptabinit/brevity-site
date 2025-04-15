"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import Button from "@/components/ui/Button"
import banner from "@/public/heroPic2.png"

export default function HeroSection() {
  return (
    <section className="pt-36 pb-24 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100 rounded-tr-full opacity-70 -z-10"></div>

      {/* Animated dots */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="h-4 w-4 rounded-full bg-primary-200"
          ></motion.div>
        </div>
        <div className="absolute top-40 right-20">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="h-6 w-6 rounded-full bg-accent-200"
          ></motion.div>
        </div>
        <div className="absolute bottom-20 left-1/4">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="h-5 w-5 rounded-full bg-secondary-200"
          ></motion.div>
        </div>
      </div>

      <div className="container-custom w-full bg-blue-100 p-12 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Global Product Development
            </div>
            <h1 className="mb-6 text-5xl md:text-6xl font-bold leading-tight">
              Build Better.
              <br />
              <span className="text-primary-600">Faster.</span> Smarter.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              We transform ideas into exceptional digital experiences that drive business growth.
            </p>

            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {["Enterprise-grade quality", "Agile methodology", "Dedicated support", "Transparent pricing"].map(
                  (feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle size={16} className="text-primary-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center justify-center" href="/services" variant="primary" >
                Explore Services
                <ArrowRight className="mt-[5px] ml-[3px]" size={16} />
              </Button>
              <Button href="/contact" variant="outline">
                Talk to Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10">
              <Image
                src={banner}
                alt="Brevity Technologies"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg shadow-xl"
              />

              {/* Floating elements around the image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg"
              >
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium">99.9% Uptime</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg"
              >
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-primary-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium">150+ Projects Delivered</span>
                </div>
              </motion.div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-100 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
