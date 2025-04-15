"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Code, Palette, Rocket, Server, Database, Layout, Smartphone, Globe } from "lucide-react"
import PageHeader from "@/components/layout/PageHeader"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"
import ContactCTA from "@/sections/home/ContactCTA"
import BackgroundElements from "@/components/ui/BackgroundElements"
import handshake from "@/public/handshake.jpg"

const services = [
  {
    id: "launchpad",
    title: "LaunchPad™",
    description: "Zero to MVP in 4 weeks. Our rapid development program for startups and new initiatives.",
    icon: <Rocket className="h-8 w-8" />,
    image: "/interconnected-web-dev.png",
    features: [
      "Requirements workshop and product strategy",
      "UI/UX design with interactive prototypes",
      "Frontend & backend development",
      "Deployment & analytics setup",
      "Post-launch support and iteration",
    ],
    benefits: [
      "Get to market quickly and validate your idea",
      "Reduce development costs and risks",
      "Professional quality without enterprise budgets",
      "Flexible architecture that can scale",
    ],
    process: [
      {
        title: "Discovery",
        description: "We start with a deep dive into your business goals, target audience, and project requirements.",
      },
      {
        title: "Design",
        description: "Our designers create intuitive interfaces that align with your brand and meet user needs.",
      },
      {
        title: "Development",
        description: "Our developers build your solution using modern technologies and best practices.",
      },
      {
        title: "Deployment",
        description: "We launch your product and ensure everything runs smoothly in production.",
      },
    ],
  },
  {
    id: "design360",
    title: "Design360™",
    description: "Comprehensive design systems that scale. From brand identity to product interfaces.",
    icon: <Palette className="h-8 w-8" />,
    image: "/ui-ux-process-flow.png",
    features: [
      "Brand identity development",
      "UI component library creation",
      "Design system documentation",
      "Figma templates & assets",
      "User testing and iteration",
    ],
    benefits: [
      "Consistent user experience across all touchpoints",
      "Faster development with reusable components",
      "Easier onboarding for new team members",
      "Future-proof design that scales with your business",
    ],
    process: [
      {
        title: "Research",
        description: "We analyze your brand, competitors, and target audience to inform our design strategy.",
      },
      {
        title: "Foundation",
        description: "We establish design principles, color palettes, typography, and other foundational elements.",
      },
      {
        title: "Components",
        description: "We design and document reusable UI components that form the building blocks of your interfaces.",
      },
      {
        title: "Implementation",
        description: "We create templates and assets that your team can use to build consistent interfaces.",
      },
    ],
  },
  {
    id: "quickscale",
    title: "QuickScale™",
    description: "Dedicated development teams that integrate seamlessly with your existing workflow.",
    icon: <Code className="h-8 w-8" />,
    image: "/interconnected-saas-growth.png",
    features: [
      "Vetted senior developers",
      "Flexible team composition",
      "Agile workflow integration",
      "Weekly progress reports",
      "Transparent pricing",
    ],
    benefits: [
      "Scale your development capacity on demand",
      "Reduce recruitment and onboarding costs",
      "Access specialized skills when you need them",
      "Maintain quality and velocity as you grow",
    ],
    process: [
      {
        title: "Assessment",
        description: "We evaluate your project needs and assemble the right team with the necessary skills.",
      },
      {
        title: "Integration",
        description: "We integrate our team with your existing workflow, tools, and processes.",
      },
      {
        title: "Execution",
        description: "Our team works collaboratively with yours to deliver high-quality code and meet deadlines.",
      },
      {
        title: "Optimization",
        description: "We continuously improve our processes and adapt to your changing needs.",
      },
    ],
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable, secure, and cost-effective cloud infrastructure for your applications.",
    icon: <Server className="h-8 w-8" />,
    image: "/cloud-infrastructure-overview.png",
    features: [
      "Cloud architecture design",
      "Migration from legacy systems",
      "DevOps implementation",
      "Security hardening",
      "Performance optimization",
    ],
    benefits: [
      "Reduce infrastructure costs and maintenance",
      "Improve scalability and reliability",
      "Enhance security and compliance",
      "Accelerate deployment and time-to-market",
    ],
    process: [
      {
        title: "Assessment",
        description: "We evaluate your current infrastructure and identify opportunities for improvement.",
      },
      {
        title: "Architecture",
        description: "We design a cloud architecture that meets your performance, security, and cost requirements.",
      },
      {
        title: "Migration",
        description: "We migrate your applications and data to the cloud with minimal disruption.",
      },
      {
        title: "Optimization",
        description: "We continuously monitor and optimize your cloud infrastructure for performance and cost.",
      },
    ],
  },
  {
    id: "data-solutions",
    title: "Data Solutions",
    description: "Turn your data into actionable insights with our comprehensive data services.",
    icon: <Database className="h-8 w-8" />,
    image: "/data-dashboard-overview.png",
    features: [
      "Data strategy consulting",
      "Database design and optimization",
      "Data pipeline development",
      "Business intelligence dashboards",
      "Machine learning integration",
    ],
    benefits: [
      "Make data-driven decisions with confidence",
      "Uncover hidden patterns and opportunities",
      "Automate reporting and analysis",
      "Predict trends and customer behavior",
    ],
    process: [
      {
        title: "Discovery",
        description: "We identify your data sources, requirements, and key performance indicators.",
      },
      {
        title: "Architecture",
        description: "We design a data architecture that enables efficient storage, processing, and analysis.",
      },
      {
        title: "Implementation",
        description: "We build data pipelines, dashboards, and analytics tools tailored to your needs.",
      },
      {
        title: "Insights",
        description: "We help you interpret the data and derive actionable insights for your business.",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description: "Custom e-commerce platforms that drive sales and deliver exceptional customer experiences.",
    icon: <Layout className="h-8 w-8" />,
    image: "/modern-ecommerce-interface.png",
    features: [
      "Custom storefront development",
      "Payment gateway integration",
      "Inventory management",
      "Customer relationship management",
      "Analytics and reporting",
    ],
    benefits: [
      "Increase conversion rates and average order value",
      "Streamline operations and reduce costs",
      "Deliver personalized shopping experiences",
      "Scale your online business with confidence",
    ],
    process: [
      {
        title: "Strategy",
        description: "We develop an e-commerce strategy aligned with your business goals and target audience.",
      },
      {
        title: "Design",
        description: "We create a user-friendly storefront that showcases your products and drives conversions.",
      },
      {
        title: "Development",
        description: "We build a robust e-commerce platform with all the features you need to succeed.",
      },
      {
        title: "Optimization",
        description: "We continuously improve your platform based on user behavior and sales data.",
      },
    ],
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that engage users and drive business growth.",
    icon: <Smartphone className="h-8 w-8" />,
    image: "/mobile-app-development-flow.png",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design for mobile",
      "API integration",
      "App Store optimization",
    ],
    benefits: [
      "Reach users on their preferred devices",
      "Deliver seamless experiences across platforms",
      "Leverage device features for enhanced functionality",
      "Increase engagement and retention",
    ],
    process: [
      {
        title: "Strategy",
        description: "We define your mobile strategy based on user needs, business goals, and technical constraints.",
      },
      {
        title: "Design",
        description: "We create intuitive and engaging mobile interfaces that follow platform guidelines.",
      },
      {
        title: "Development",
        description: "We build your mobile application using the most appropriate technologies for your needs.",
      },
      {
        title: "Launch",
        description: "We help you launch your app on the App Store and Google Play and drive initial adoption.",
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
    icon: <Globe className="h-8 w-8" />,
    image: "/interconnected-web-dev.png",
    features: [
      "Responsive website development",
      "Progressive web applications",
      "Content management systems",
      "E-commerce integration",
      "Performance optimization",
    ],
    benefits: [
      "Establish a professional online presence",
      "Reach users across all devices and browsers",
      "Improve search engine rankings",
      "Drive conversions and business growth",
    ],
    process: [
      {
        title: "Planning",
        description: "We define your website structure, content strategy, and technical requirements.",
      },
      {
        title: "Design",
        description: "We create visually appealing and user-friendly interfaces that align with your brand.",
      },
      {
        title: "Development",
        description: "We build your website using modern technologies and best practices for performance and SEO.",
      },
      {
        title: "Launch",
        description: "We deploy your website and ensure everything works perfectly in production.",
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive solutions to help your business thrive in the digital landscape."
        tag="What We Do"
        bg="blue-100"
        bgImage={handshake}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Productized Services"
            subtitle="Our signature offerings designed to deliver predictable results with transparent pricing."
            centered={true}
          />

          <div className="mt-16 space-y-16">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg text-primary-600 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-primary-600 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-accent-600 mr-2 mt-0.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                </div>

                <div
                  className={`relative rounded-xl overflow-hidden shadow-lg ${index % 2 === 1 ? "md:col-start-1" : ""}`}
                >
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 relative">
        <BackgroundElements variant="light" density="low" />
        <div className="container-custom">
          <SectionHeading
            title="Additional Services"
            subtitle="Specialized solutions tailored to your specific business needs."
            centered={true}
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg text-primary-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start">
                          <svg
                            className="h-4 w-4 text-primary-600 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Our Process"
            subtitle="How we deliver exceptional results for our clients."
            centered={true}
          />

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-100"></div>

              {[
                {
                  title: "Discovery",
                  description:
                    "We start by understanding your business goals, target audience, and project requirements through in-depth consultations and research.",
                  icon: "🔍",
                },
                {
                  title: "Planning",
                  description:
                    "Our team creates a detailed project plan, including timelines, milestones, and resource allocation to ensure smooth execution.",
                  icon: "📝",
                },
                {
                  title: "Design",
                  description:
                    "We design intuitive user interfaces and experiences that align with your brand identity and meet user needs.",
                  icon: "🎨",
                },
                {
                  title: "Development",
                  description:
                    "Our developers build your solution using the latest technologies and best practices, with regular code reviews and testing.",
                  icon: "💻",
                },
                {
                  title: "Testing",
                  description:
                    "We conduct thorough testing to ensure your solution is bug-free, secure, and performs optimally across all devices.",
                  icon: "🧪",
                },
                {
                  title: "Deployment",
                  description:
                    "We deploy your solution to production, ensuring a smooth transition and minimal disruption to your business.",
                  icon: "🚀",
                },
                {
                  title: "Support",
                  description:
                    "Our team provides ongoing support and maintenance to keep your solution running smoothly and up-to-date.",
                  icon: "🛠️",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative mb-12 ${
                    index % 2 === 0
                      ? "pr-12 md:pr-0 md:mr-auto md:ml-0 md:text-right"
                      : "pl-12 md:pl-0 md:ml-auto md:mr-0"
                  } md:w-5/12`}
                >
                  <div
                    className={`absolute top-0 ${
                      index % 2 === 0 ? "right-0 md:left-full" : "md:left-[-21px] left-0"
                    } md:transform ${index % 2 === 0 ? "md:translate-x-1/2" : "md:-translate-x-1/2"}`}
                  >
                    <div className=" bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md">
                      {step.icon}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
