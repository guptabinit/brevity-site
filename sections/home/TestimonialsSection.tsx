"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star, Quote } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"
import comp2 from "@/public/comp2.png"
import comp3 from "@/public/comp3.png"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TriSolutions",
    content:
      "Brevity Technologies transformed our concept into a fully functional product in record time. Their LaunchPad program was exactly what we needed to get to market quickly.",
    avatar: "/confident-short-hair.png",
    rating: 5,
    company: "TechStart",
    companyLogo: comp2,
  },
  {
    id: 2,
    name: "Michael Jack",
    role: "Product Director, Madison's",
    content:
      "The Restaurant UI Kit saved us months of design work. The components were thoughtfully created and easy to customize to our brand.",
    avatar: "/confident-latino-professional.png",
    rating: 5,
    company: "FoodTech Inc",
    companyLogo: comp3,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
          centered={true}
          tag="Testimonials"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-card overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute top-0 left-0 h-8 w-8 text-primary-100 -translate-x-2 -translate-y-1" />
                  <p className="text-gray-700 italic h-[70px] relative z-10 pl-4">{testimonial.content}</p>
                </div>

                <div className="flex items-center justify-between md:mt-0 mt-20">
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <Image
                    src={testimonial.companyLogo || "/placeholder.svg"}
                    alt={testimonial.company}
                    width={80}
                    height={30}
                    className="h-8 w-auto"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
