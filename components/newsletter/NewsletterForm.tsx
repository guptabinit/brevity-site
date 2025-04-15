"use client"

import type React from "react"

import { useState } from "react"
import  Button  from "@/components/ui/Button"

type SubscriptionStatus = "idle" | "submitting" | "success" | "error"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<SubscriptionStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to subscribe")
      }

      setStatus("success")
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Error subscribing:", error)
      setStatus("error")
      setErrorMessage("Failed to subscribe. Please try again later.")

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle")
        setErrorMessage("")
      }, 5000)
    }
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
      <p className="text-blue-100 mb-6">
        Subscribe to our newsletter for the latest tech insights and company updates.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
          <Button
            type="submit"
            disabled={status === "submitting"}
            className="whitespace-nowrap bg-white text-blue-600 hover:bg-blue-50"
          >
            {status === "submitting" ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>

        {status === "success" && (
          <div className="p-3 bg-blue-500 bg-opacity-20 border border-blue-200 rounded-lg text-white">
            Thank you for subscribing to our newsletter!
          </div>
        )}

        {status === "error" && (
          <div className="p-3 bg-red-500 bg-opacity-20 border border-red-200 rounded-lg text-white">{errorMessage}</div>
        )}
      </form>
    </div>
  )
}
