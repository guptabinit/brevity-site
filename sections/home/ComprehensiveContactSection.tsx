"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"

const offices = [
  {
    city: "San Francisco",
    country: "United States",
    address: "123 Market Street, Suite 456, San Francisco, CA 94105",
    phone: "+1 (415) 555-1234",
    email: "sf@brevity.tech",
    image: "/san-francisco-bay-bridge-view.png",
    hours: "Mon-Fri: 9AM-6PM PST",
    mapUrl: "https://maps.google.com",
  },
  {
    city: "Berlin",
    country: "Germany",
    address: "Friedrichstraße 123, 10117 Berlin, Germany",
    phone: "+49 30 1234567",
    email: "berlin@brevity.tech",
    image: "/berlin-cityscape.png",
    hours: "Mon-Fri: 9AM-6PM CET",
    mapUrl: "https://maps.google.com",
  },
  {
    city: "Bangalore",
    country: "India",
    address: "123 MG Road, Bangalore, Karnataka 560001, India",
    phone: "+91 80 1234 5678",
    email: "bangalore@brevity.tech",
    image: "/bangalore-urban-vista.png",
    hours: "Mon-Fri: 9AM-6PM IST",
    mapUrl: "https://maps.google.com",
  },
]

export default function ComprehensiveContactSection() {
  const [activeOffice, setActiveOffice] = useState(0)
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary-50 rounded-bl-full opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/5 h-1/5 bg-accent-50 rounded-tr-full opacity-70 -z-10"></div>

      <div className="container-custom">
        <SectionHeading
          title="Get in Touch"
          subtitle="Let's discuss how we can help bring your vision to life."
          centered={true}
          tag="Contact Us"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 relative z-10"
          >
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            {formStatus === "success" ? (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Request">Project Request</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Career">Career Opportunity</option>
                      <option value="Support">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="/privacy" className="text-primary-600 hover:underline">
                      privacy policy
                    </a>
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full"
                  icon={formStatus === "submitting" ? undefined : <Send size={16} />}
                  iconPosition="right"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 mb-8 relative z-10"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a
                      href="mailto:hello@brevity.tech"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      hello@brevity.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <a href="tel:+18005551234" className="text-gray-600 hover:text-primary-600 transition-colors">
                      +1 (800) 555-1234
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri from 9am to 6pm EST</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Our Offices</h3>

              <div className="flex flex-wrap gap-3 mb-6">
                {offices.map((office, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveOffice(index)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      activeOffice === index
                        ? "bg-primary-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {office.city}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 relative z-10">
                <div className="relative h-48">
                  <Image
                    src={offices[activeOffice].image || "/placeholder.svg"}
                    alt={offices[activeOffice].city}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h4 className="text-xl font-bold">{offices[activeOffice].city}</h4>
                    <p>{offices[activeOffice].country}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{offices[activeOffice].address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <a
                        href={`tel:${offices[activeOffice].phone}`}
                        className="text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        {offices[activeOffice].phone}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <a
                        href={`mailto:${offices[activeOffice].email}`}
                        className="text-gray-700 hover:text-primary-600 transition-colors"
                      >
                        {offices[activeOffice].email}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{offices[activeOffice].hours}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={offices[activeOffice].mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 font-medium hover:underline"
                    >
                      View on Google Maps
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
