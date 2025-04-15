"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { QrCode, Receipt, FileSpreadsheet, ExternalLink } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"
import payslip from "@/public/payslip.png"
import qr from "@/public/qr.png"
import invoice from "@/public/invoice.webp"

const tools = [
  {
    id: "qr-generator",
    title: "QR Code Generator",
    description: "Create custom QR codes for your business, products, or events. Free and no sign-up required.",
    icon: <QrCode className="h-6 w-6 text-primary-600" />,
    image: qr,
    link: "https://v0-qr-code-generator-sand.vercel.app/",
  },
  {
    id: "payslip-builder",
    title: "Payslip Builder",
    description: "Generate professional payslips for your employees in seconds. Customizable and easy to use.",
    icon: <Receipt className="h-6 w-6 text-primary-600" />,
    image: payslip,
    link: "https://payslip.quickgick.com/",
  },
  {
    id: "invoice-builder",
    title: "Invoice Builder",
    description: "Create and download professional invoices for your clients. Multiple templates available.",
    icon: <FileSpreadsheet className="h-6 w-6 text-primary-600" />,
    image: invoice,
    link: "http://invoice.quickgick.com/",
  },
]

export default function FreeToolsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Free Business Tools"
          subtitle="Useful tools we've built to help businesses streamline their operations. No strings attached."
          centered={true}
          tag="Resources"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-card overflow-hidden border border-gray-100 group"
            >
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary-50 rounded-lg mr-3">{tool.icon}</div>
                  <h3 className="text-lg font-bold">{tool.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
              </div>
              <div className="relative h-40 w-full">
                <Image src={tool.image || "/placeholder.svg"} alt={tool.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="primary"
                    size="sm"
                  >
                    <a href={tool.link} target="_blank">Try It Free</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
