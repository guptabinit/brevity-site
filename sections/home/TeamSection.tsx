"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "15+ years of experience in product development and technology leadership.",
    image: "/placeholder.svg?height=300&width=300&query=professional female CEO portrait",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:sarah@brevity.tech",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Former tech lead at Google with expertise in scalable architecture and AI.",
    image: "/placeholder.svg?height=300&width=300&query=professional male CTO portrait",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:michael@brevity.tech",
    },
  },
  {
    name: "Alex Rivera",
    role: "Design Director",
    bio: "Award-winning designer with a passion for creating intuitive user experiences.",
    image: "/placeholder.svg?height=300&width=300&query=professional design director portrait",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:alex@brevity.tech",
    },
  },
  {
    name: "Lisa Wong",
    role: "Head of Operations",
    bio: "Streamlines processes to ensure projects are delivered on time and within budget.",
    image: "/placeholder.svg?height=300&width=300&query=professional female operations director portrait",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "mailto:lisa@brevity.tech",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Meet Our Leadership Team"
          subtitle="The talented people behind our success story."
          centered={true}
          tag="Our Team"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-card overflow-hidden border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href={member.social.email}
                    className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
