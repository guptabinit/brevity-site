"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { QrCode, Receipt, FileSpreadsheet } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"

const tools = [
  {
    id: "qr-generator",
    title: "QR Code Generator",
    description: "Create custom QR codes for your business, products, or events. Free and no sign-up required.",
    icon: <QrCode className="h-8 w-8 text-primary-600" />,
    image: "/placeholder.svg?height=300&width=500&query=QR code generator tool interface",
    link: "https://qr.quickgick.com/",
  },
  {
    id: "payslip-builder",
    title: "Payslip Builder",
    description: "Generate professional payslips for your employees in seconds. Customizable and easy to use.",
    icon: <Receipt className="h-8 w-8 text-primary-600" />,
    image: "/placeholder.svg?height=300&width=500&query=payslip generator tool interface",
    link: "https://payslip.quickgick.com/",
  },
  {
    id: "invoice-builder",
    title: "Invoice Builder",
    description: "Create and download professional invoices for your clients. Multiple templates available.",
    icon: <FileSpreadsheet className="h-8 w-8 text-primary-600" />,
    image: "/placeholder.svg?height=300&width=500&query=invoice generator tool interface",
    link: "#",
  },
]

export default function FreeTools() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Free Tools"
          subtitle="Useful tools we've built to help businesses streamline their operations. No strings attached."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
              </div>
              <div className="relative h-48 w-full">
                <Image src={tool.image || "/placeholder.svg"} alt={tool.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <Button href={tool.link} variant="primary" className="w-full">
                  Try It Free
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
