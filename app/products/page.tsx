"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import PageHeader from "@/components/layout/PageHeader"
import Button from "@/components/ui/Button"
import SectionHeading from "@/components/ui/SectionHeading"
import ContactCTA from "@/sections/home/ContactCTA"
import erp from "@/public/ERP.jpg"
import tv from "@/public/modern-digital-display-network.png"
import uikit from "@/public/UI-kit.webp"
import homepage from "@/public/homepage.png"

const products = [
  {
    id: "erp",
    name: "ERP for Startups",
    description: "A comprehensive ERP solution designed specifically for startups and small businesses.",
    image: erp,
    features: [
      "Financial management and reporting",
      "Inventory and supply chain management",
      "Human resources and payroll",
      "Customer relationship management",
      "Project management and collaboration",
      "Customizable dashboards and analytics",
    ],
    benefits: [
      "Streamline operations and reduce costs",
      "Make data-driven decisions with real-time insights",
      "Scale your business with a flexible solution",
      "Improve team collaboration and productivity",
    ],
  },
  {
    id: "tv-ad",
    name: "TV Ad Display",
    description: "A digital signage solution for managing and displaying advertisements on multiple screens.",
    image: tv,
    features: [
      "Centralized content management",
      "Remote display control",
      "Scheduling and playlist creation",
      "Real-time analytics and reporting",
      "Multi-screen synchronization",
      "Interactive content support",
    ],
    benefits: [
      "Increase advertising effectiveness",
      "Reduce operational costs",
      "Easily update content across multiple locations",
      "Track performance with detailed analytics",
    ],
  },
  {
    id: "ui-kit",
    name: "Restaurant UI Kit",
    description: "A comprehensive UI kit for building restaurant websites and mobile applications.",
    image: uikit,
    features: [
      "Responsive design components",
      "Menu display templates",
      "Reservation system integration",
      "Online ordering functionality",
      "Customer review management",
      "Social media integration",
    ],
    benefits: [
      "Launch your restaurant website quickly",
      "Provide a seamless user experience",
      "Increase online orders and reservations",
      "Build brand recognition and loyalty",
    ],
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Innovative solutions designed to solve real business problems and drive growth."
        tag="Solutions"
        bg="blue-100"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Ready-to-Use Solutions"
            subtitle="Our products are built with years of industry expertise and designed to address specific business challenges."
            centered={true}
          />

          <div className="mt-16 space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>

                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">Benefits</h3>
                  <ul className="space-y-2 mb-8">
                    {product.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start">
                        <Check className="h-5 w-5 text-accent-600 mr-2 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <Button href={`/products/${product.id}`} variant="outline" size="lg">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div
                  className={`relative rounded-xl overflow-hidden shadow-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Custom Solutions"
            subtitle="Need something tailored to your specific business needs? We can build custom solutions from scratch."
            centered={true}
          />

          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Our team of experienced developers and designers can work with you to create custom software solutions
              that address your unique business challenges. From concept to deployment, we'll be with you every step of
              the way.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
