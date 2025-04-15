"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, Bell, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      className="bg-primary-900 text-white relative z-50"
    >
      <div className="container-custom py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Bell size={14} className="mr-2 text-primary-300" />
            <span className="text-sm font-medium mr-2">Special Offer:</span>
            <span className="text-sm">Get 20% off on our LaunchPad™ program for startups. Valid until June 30th.</span>
          </div>
          <div className="flex items-center">
            <Link
              href="/contact?promo=launchpad20"
              className="text-primary-300 hover:text-white text-sm flex items-center mr-4 transition-colors"
            >
              <span>Learn More</span>
              <ExternalLink size={12} className="ml-1" />
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label="Close announcement"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
