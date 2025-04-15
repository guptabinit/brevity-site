"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Check, BarChart, Shield, Zap } from "lucide-react"
import Button from "@/components/ui/Button"
import SectionHeading from "@/components/ui/SectionHeading"
import ContactCTA from "@/sections/home/ContactCTA"
import erp from "@/public/ERP.jpg"
import d1 from "@/public/d1.png"
import f1 from "@/public/financial-mgmt.png"
import i1 from "@/public/i1.jpg"
import tv from "@/public/modern-digital-display-network.png"
import tvDashboard from "@/public/dashBoardTv.webp"
import controlPanel from "@/public/controlPanel.jpg"
import contentScheduler from "@/public/contentScheduler.png"
import uikit from "@/public/UI-kit.webp"
import homepage from "@/public/homepage.png"
import foodmenu from "@/public/food-menu.webp"
import reservation from "@/public/Reservation.png"

// Product data
const products = [
  {
    id: "erp",
    name: "ERP for Startups",
    description: "A comprehensive ERP solution designed specifically for startups and small businesses.",
    longDescription:
      "Our ERP for Startups is a comprehensive business management solution that integrates all core processes needed to run a company: finance, HR, manufacturing, supply chain, services, procurement, and more. Unlike traditional ERP systems that are complex and expensive, our solution is designed specifically for startups and small businesses, offering affordability, ease of use, and scalability.",
    image: erp,
    features: [
      {
        title: "Financial Management",
        description:
          "Complete accounting functionality including general ledger, accounts receivable, accounts payable, and financial reporting.",
        icon: <BarChart className="h-6 w-6" />,
      },
      {
        title: "Human Resources",
        description: "Employee management, time tracking, payroll processing, and performance evaluation tools.",
        icon: <Shield className="h-6 w-6" />,
      },
      {
        title: "Inventory Control",
        description: "Real-time inventory tracking, automated reordering, and warehouse management capabilities.",
        icon: <Zap className="h-6 w-6" />,
      },
    ],
    benefits: [
      "Streamline operations and reduce costs",
      "Make data-driven decisions with real-time insights",
      "Scale your business with a flexible solution",
      "Improve team collaboration and productivity",
      "Reduce manual data entry and errors",
      "Enhance customer service and satisfaction",
    ],
    pricing: [
      {
        name: "Starter",
        price: "Rs.7,000",
        period: "per year",
        features: ["Up to 5 users", "Financial management", "Basic reporting", "Email support"],
      },
      {
        name: "Professional",
        price: "Rs.18,000",
        period: "per year",
        popular: true,
        features: [
          "Up to 20 users",
          "All Starter features",
          "Inventory management",
          "HR & payroll",
          "Advanced reporting",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        price: "Rs.40,000",
        period: "per year",
        features: [
          "Unlimited users",
          "All Professional features",
          "Custom integrations",
          "Dedicated account manager",
          "On-site training",
          "24/7 support",
        ],
      },
    ],
    screenshots: [
      {
        title: "Dashboard",
        image: d1,
      },
      {
        title: "Financial Reports",
        image: f1,
      },
      {
        title: "Inventory Management",
        image: i1,
      },
    ],
  },
  {
    id: "tv-ad",
    name: "TV Ad Display",
    description: "A digital signage solution for managing and displaying advertisements on multiple screens.",
    longDescription:
      "TV Ad Display is a powerful digital signage solution that enables businesses to manage and display advertisements across multiple screens from a centralized platform. Whether you're running a retail store, restaurant, corporate office, or entertainment venue, our system makes it easy to create, schedule, and display engaging content that captures your audience's attention.",
    image: tv,
    features: [
      {
        title: "Centralized Management",
        description: "Control all your displays from a single, intuitive dashboard, regardless of their location.",
        icon: <BarChart className="h-6 w-6" />,
      },
      {
        title: "Content Scheduling",
        description: "Create playlists and schedule content to display at specific times or on specific days.",
        icon: <Shield className="h-6 w-6" />,
      },
      {
        title: "Real-time Analytics",
        description: "Track viewer engagement and measure the effectiveness of your content with detailed analytics.",
        icon: <Zap className="h-6 w-6" />,
      },
    ],
    benefits: [
      "Increase advertising effectiveness",
      "Reduce operational costs",
      "Easily update content across multiple locations",
      "Track performance with detailed analytics",
      "Engage customers with dynamic content",
      "Boost sales with targeted promotions",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$149",
        period: "per month",
        features: ["Up to 5 displays", "Basic content management", "Simple scheduling", "Email support"],
      },
      {
        name: "Standard",
        price: "$299",
        period: "per month",
        popular: true,
        features: [
          "Up to 20 displays",
          "Advanced content management",
          "Complex scheduling",
          "Basic analytics",
          "Priority support",
        ],
      },
      {
        name: "Premium",
        price: "$599",
        period: "per month",
        features: [
          "Unlimited displays",
          "Interactive content",
          "Advanced analytics",
          "API access",
          "Dedicated account manager",
          "24/7 support",
        ],
      },
    ],
    screenshots: [
      {
        title: "Control Panel",
        image: controlPanel,
      },
      {
        title: "Content Scheduler",
        image: contentScheduler,
      },
      {
        title: "Analytics Dashboard",
        image: tvDashboard,
      },
    ],
  },
  {
    id: "ui-kit",
    name: "Restaurant UI Kit",
    description: "A comprehensive UI kit for building restaurant websites and mobile applications.",
    longDescription:
      "Our Restaurant UI Kit is a comprehensive collection of design components and templates specifically created for restaurant websites and mobile applications. It includes everything from menu displays and reservation systems to online ordering functionality and customer review management. With our UI Kit, you can quickly build a beautiful, functional digital presence for your restaurant without starting from scratch.",
    image: uikit,
    features: [
      {
        title: "Responsive Components",
        description:
          "All UI components are fully responsive and work seamlessly across desktop, tablet, and mobile devices.",
        icon: <BarChart className="h-6 w-6" />,
      },
      {
        title: "Menu Templates",
        description:
          "Beautiful, customizable menu templates that make it easy to showcase your food and beverage offerings.",
        icon: <Shield className="h-6 w-6" />,
      },
      {
        title: "Reservation System",
        description:
          "Integrated reservation system that allows customers to book tables directly through your website.",
        icon: <Zap className="h-6 w-6" />,
      },
    ],
    benefits: [
      "Launch your restaurant website quickly",
      "Provide a seamless user experience",
      "Increase online orders and reservations",
      "Build brand recognition and loyalty",
      "Save on design and development costs",
      "Stand out from competitors with a professional online presence",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$499",
        period: "one-time",
        features: ["Core UI components", "Basic menu templates", "Responsive design", "3 months support"],
      },
      {
        name: "Standard",
        price: "$999",
        period: "one-time",
        popular: true,
        features: [
          "All Basic components",
          "Advanced menu templates",
          "Reservation system",
          "Online ordering",
          "6 months support",
        ],
      },
      {
        name: "Premium",
        price: "$1,999",
        period: "one-time",
        features: [
          "All Standard components",
          "Custom branding",
          "Mobile app templates",
          "Integration services",
          "1 year support",
          "Free updates",
        ],
      },
    ],
    screenshots: [
      {
        title: "Homepage Template",
        image: homepage,
      },
      {
        title: "Menu Display",
        image: foodmenu,
      },
      {
        title: "Reservation System",
        image: reservation,
      },
    ],
  },
]

export default function ProductPage() {
  const router = useRouter()
  const { id } = useParams()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === id)
      if (foundProduct) {
        setProduct(foundProduct)
      } else {
        router.push("/products")
      }
    }
    setLoading(false)
  }, [id, router])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!product) {
    return null
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100 rounded-tr-full opacity-30 -z-10"></div>

        <div className="container-custom">
          <div className="mb-8">
            <Button href="/products" variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Product
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-8">{product.longDescription}</p>
              <div className="flex flex-wrap gap-4">
                <Button href={`/contact?product=${product.id}`} variant="primary" size="lg">
                  Request Demo
                </Button>
                <Button href="#pricing" variant="outline" size="lg">
                  View Pricing
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Key Features"
            subtitle="Discover what makes our solution stand out from the competition."
            centered={true}
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {product.features.map((feature: any, index: number) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="bg-primary-100 text-primary-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Benefits"
            subtitle="Here's how our product can help your business succeed."
            centered={true}
          />

          <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {product.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start"
              >
                <div className="bg-accent-100 text-accent-600 p-2 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Screenshots"
            subtitle="See our product in action with these screenshots."
            centered={true}
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {product.screenshots.map((screenshot: any, index: number) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative aspect-video">
                  <Image
                    src={screenshot.image || "/placeholder.svg"}
                    alt={screenshot.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{screenshot.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Pricing Plans"
            subtitle="Choose the plan that works best for your business needs."
            centered={true}
          />

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {product.pricing.map((plan: any, index: number) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl overflow-hidden shadow-sm border ${
                  plan.popular ? "border-primary-600 shadow-lg relative" : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 bg-primary-600 text-white text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-6 ${plan.popular ? "pt-8" : ""}`}>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature: string) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={`/contact?product=${product.id}&plan=${plan.name}`}
                    variant={plan.popular ? "primary" : "outline"}
                    fullWidth
                    size="lg"
                  >
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need a custom plan? Contact us for a tailored solution.</p>
            <Button href="/contact" variant="secondary">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
