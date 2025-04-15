"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"
import BackgroundElements from "@/components/ui/BackgroundElements"

const products = [
  {
    id: "erp",
    title: "ERP for Startups",
    description: "Streamlined operations management designed specifically for early-stage companies.",
    image: "/streamlined-erp-overview.png",
    link: "/products#erp",
    features: ["Financial management", "Inventory tracking", "HR & payroll", "Customer relationship management"],
  },
  {
    id: "tv-ad",
    title: "TV Ad Display Software",
    description: "Digital signage solution for managing advertisements across multiple displays.",
    image: "/modern-digital-display-network.png",
    link: "/products#tv-ad",
    features: ["Centralized content management", "Scheduled displays", "Remote monitoring", "Analytics & reporting"],
  },
]

export default function ProductsSection() {
  return (
    <section className="py-16 md:py-20 bg-white relative">
      <BackgroundElements variant="primary" density="low" />
      <div className="container-custom">
        <SectionHeading
          title="Product Showcase"
          subtitle="Our suite of ready-to-deploy products that accelerate your digital transformation."
          centered={true}
          tag="Featured Products"
        />

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-5">{product.description}</p>

                  <div className="mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    href={product.link}
                    variant="primary"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                    size="sm"
                    className="self-start"
                  >
                    Learn More
                  </Button>
                </div>

                <div className="relative h-full min-h-[300px]">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/products" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
