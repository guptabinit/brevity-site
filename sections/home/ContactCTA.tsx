"use client"

import { motion } from "framer-motion"
import Button from "@/components/ui/Button"
import { ArrowRight, Phone } from "lucide-react"

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-gradient rounded-xl p-8 md:p-10 text-white text-center relative overflow-hidden shadow-lg"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to build something amazing?</h2>
            <p className="text-lg text-white mb-8 opacity-90">
              Let's discuss how Brevity Technologies can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                href="/contact"
                className="bg-white text-primary-700 hover:bg-gray-100"
                icon={<ArrowRight size={16} />}
                iconPosition="right"
              >
                Schedule a Consultation
              </Button>
              <Button
                href="tel:+918920796562"
                className="bg-transparent border-2 border-white hover:bg-white/10"
                icon={<Phone size={16} />}
              >
                Call Us Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
