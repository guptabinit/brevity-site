"use client"

import Link from "next/link"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Check, ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"
import SectionHeading from "@/components/ui/SectionHeading"
import qg from "@/public/quickgick1.png"

// Case study data
const caseStudies = [
  {
    id: "quickgick",
    title: "Quickgick",
    client: "Hospitality Staffing Solutions",
    category: "SaaS",
    tags: ["Web App", "Mobile App", "Hospitality"],
    image: qg,
    description: "On-demand staffing platform for hospitality businesses.",
    challenge:
      "Hospitality Staffing Solutions needed a platform to connect hospitality businesses with qualified staff on short notice. The existing manual process was inefficient and often resulted in unfilled positions or unqualified staff.",
    solution:
      "We developed Quickgick, an on-demand staffing platform that uses AI matching algorithms to connect hospitality businesses with qualified staff based on skills, experience, and availability. The platform includes features such as real-time availability updates, in-app messaging, shift management, automated payments, and performance ratings.",
    approach: [
      "Conducted extensive research with hospitality businesses and staff",
      "Developed a custom matching algorithm based on multiple criteria",
      "Created both web and mobile interfaces for maximum accessibility",
      "Implemented secure payment processing and automated tax documentation",
      "Built a comprehensive rating and verification system",
      "Conducted beta testing with select businesses and staff",
    ],
    results: [
      "90% of shifts filled within 24 hours of posting",
      "35% reduction in staffing costs for businesses",
      "4.8/5 average rating from both businesses and staff",
      "15,000+ registered staff members within first year",
      "500+ hospitality businesses actively using the platform",
      "95% retention rate for businesses",
    ],
    testimonial: {
      quote:
        "Quickgick has revolutionized how we staff our events. We can now find qualified staff at a moment's notice, and the quality of workers has exceeded our expectations.",
      author: "James Wilson",
      position: "Operations Manager, Grand Hotel Group",
    },
    screenshots: [
      {
        title: "Business Dashboard",
        image: "/placeholder.svg?height=400&width=600&query=staffing platform business dashboard",
      },
      {
        title: "Staff Profile",
        image: "/placeholder.svg?height=400&width=600&query=staffing platform staff profile",
      },
      {
        title: "Shift Management",
        image: "/placeholder.svg?height=400&width=600&query=staffing platform shift management",
      },
    ],
    relatedCaseStudies: ["bitecart", "restaurant-app"],
  },
  {
    id: "bitecart",
    title: "BiteCart",
    client: "Luxury Hotels International",
    category: "SaaS",
    tags: ["Web App", "Mobile App", "Hospitality"],
    image: "/modern-hotel-room-service-app.png",
    description: "In-room ordering system for hotels and resorts.",
    challenge:
      "Luxury Hotels International wanted to modernize their room service experience and provide guests with a convenient way to order food and services from their rooms. Their existing phone-based system was inefficient, prone to errors, and didn't provide the luxury experience their guests expected.",
    solution:
      "We developed BiteCart, a comprehensive in-room ordering system available on multiple platforms including mobile app, web, and in-room tablets. The system includes features such as full menu browsing with high-quality images, customization options, real-time order tracking, multilingual support, dietary preference filtering, scheduled deliveries, and integration with the hotel's PMS and kitchen management systems.",
    approach: [
      "Conducted user research with hotel guests to understand preferences",
      "Created a visually appealing interface that aligns with luxury brand standards",
      "Developed a flexible backend that integrates with various hotel systems",
      "Implemented multiple language support for international guests",
      "Created a kitchen dashboard for efficient order management",
      "Conducted pilot testing at select properties before full rollout",
    ],
    results: [
      "40% increase in room service orders",
      "28% increase in average order value",
      "65% reduction in order errors",
      "15% improvement in kitchen efficiency",
      "98% guest satisfaction rating",
      "Successful implementation across 25+ properties",
    ],
    testimonial: {
      quote:
        "BiteCart has transformed our room service operations and significantly enhanced our guest experience. The intuitive interface and seamless integration with our existing systems have made implementation smooth across all our properties.",
      author: "Maria Rodriguez",
      position: "VP of Guest Experience, Luxury Hotels International",
    },
    screenshots: [
      {
        title: "Menu Browsing",
        image: "/placeholder.svg?height=400&width=600&query=hotel app menu browsing",
      },
      {
        title: "Order Customization",
        image: "/placeholder.svg?height=400&width=600&query=hotel app order customization",
      },
      {
        title: "Order Tracking",
        image: "/placeholder.svg?height=400&width=600&query=hotel app order tracking",
      },
    ],
    relatedCaseStudies: ["quickgick", "restaurant-app"],
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    client: "Global Investments Inc.",
    category: "FinTech",
    tags: ["Web App", "Dashboard", "Analytics"],
    image: "/financial-dashboard-overview.png",
    description: "Financial analytics platform for investment professionals.",
    challenge:
      "Global Investments Inc. needed a comprehensive analytics platform that would provide their investment professionals with real-time market data, portfolio performance metrics, and predictive analytics. Their existing tools were fragmented, requiring analysts to switch between multiple systems and manually compile data.",
    solution:
      "We developed a unified financial analytics dashboard that aggregates data from multiple sources and presents it in an intuitive, customizable interface. The platform includes features such as real-time market data visualization, portfolio performance tracking, risk assessment tools, scenario modeling, automated reporting, and AI-powered investment recommendations.",
    approach: [
      "Collaborated closely with investment professionals to understand workflow",
      "Developed a modular architecture for customizable dashboard components",
      "Implemented secure API integrations with financial data providers",
      "Created advanced data visualization tools for complex financial metrics",
      "Developed machine learning models for predictive analytics",
      "Conducted extensive testing with actual market data",
    ],
    results: [
      "60% reduction in time spent on data analysis",
      "25% improvement in investment decision accuracy",
      "35% increase in client portfolio performance",
      "40% reduction in reporting time",
      "Successful identification of investment opportunities that were previously overlooked",
      "Expanded user base from 50 to 200+ investment professionals",
    ],
    testimonial: {
      quote:
        "The FinTech Dashboard has transformed how our investment team analyzes data and makes decisions. The comprehensive view of market trends and portfolio performance has given us a significant competitive advantage.",
      author: "Jonathan Chen",
      position: "Chief Investment Officer, Global Investments Inc.",
    },
    screenshots: [
      {
        title: "Portfolio Overview",
        image: "/placeholder.svg?height=400&width=600&query=financial dashboard portfolio overview",
      },
      {
        title: "Market Analysis",
        image: "/placeholder.svg?height=400&width=600&query=financial dashboard market analysis",
      },
      {
        title: "Risk Assessment",
        image: "/placeholder.svg?height=400&width=600&query=financial dashboard risk assessment",
      },
    ],
    relatedCaseStudies: ["health-tracker", "e-commerce"],
  },
]

export default function CaseStudyPage() {
  const router = useRouter()
  const { id } = useParams()
  const [caseStudy, setCaseStudy] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [relatedStudies, setRelatedStudies] = useState<any[]>([])

  useEffect(() => {
    if (id) {
      const foundCaseStudy = caseStudies.find((study) => study.id === id)
      if (foundCaseStudy) {
        setCaseStudy(foundCaseStudy)

        // Get related case studies
        if (foundCaseStudy.relatedCaseStudies && foundCaseStudy.relatedCaseStudies.length > 0) {
          const related = caseStudies.filter((study) => foundCaseStudy.relatedCaseStudies.includes(study.id))
          setRelatedStudies(related)
        }
      } else {
        router.push("/work")
      }
    }
    setLoading(false)
  }, [id, router])

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!caseStudy) {
    return null
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100 rounded-tr-full opacity-30 -z-10"></div>

        <div className="container-custom">
          <div className="mb-8">
            <Button href="/work" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                {caseStudy.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{caseStudy.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudy.tags.map((tag: string) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 font-medium">
                Client: <span className="text-primary-600">{caseStudy.client}</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionHeading title="The Challenge" subtitle={caseStudy.challenge} />
            </div>
            <div>
              <SectionHeading title="Our Solution" subtitle={caseStudy.solution} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Approach"
            subtitle="How we tackled the project from start to finish."
            centered={true}
          />

          <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {caseStudy.approach.map((step: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start"
              >
                <div className="bg-primary-100 text-primary-600 p-2 rounded-full mr-3 mt-1">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-lg">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Results"
            subtitle="The impact our solution had on the client's business."
            centered={true}
          />

          <div className="mt-12 grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
            {caseStudy.results.map((result: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <p className="text-lg font-medium">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {caseStudy.testimonial && (
        <section className="py-16 md:py-24 bg-primary-900 text-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-8">
              <svg
                className="h-12 w-12 text-primary-300 mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-2xl text-white font-light italic mb-6">"{caseStudy.testimonial.quote}"</p>
              <div>
                <p className="text-white font-bold text-lg">{caseStudy.testimonial.author}</p>
                <p className="text-primary-300">{caseStudy.testimonial.position}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {relatedStudies.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <SectionHeading title="Related Case Studies" subtitle="Explore more of our work." centered={true} />

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <Link
                      href={`/work/${study.id}`}
                      className="text-primary-500 font-medium hover:text-primary-600 transition-colors flex items-center"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 md:p-12 text-white text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your project?</h2>
              <p className="text-lg mb-8 opacity-90">Let's discuss how we can help bring your vision to life.</p>
              <Button href="/contact" className="bg-white text-primary-700 hover:bg-gray-100" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
