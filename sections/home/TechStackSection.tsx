"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Globe, Smartphone, Database, Server, Code, Cloud, Shield } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"
import auth0 from "@/public/tech/auth.png"

// Define all technology categories and their stacks
const techCategories = [
  {
    id: "web",
    name: "Web Development",
    icon: <Globe className="h-5 w-5" />,
    description: "Modern, responsive web applications with cutting-edge frameworks",
    technologies: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Frontend library for building user interfaces",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        description: "React framework for production",
      },
      {
        name: "Vue.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        description: "Progressive JavaScript framework",
      },
      {
        name: "Angular",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        description: "Platform for building mobile & desktop web apps",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        description: "Typed superset of JavaScript",
      },
      {
        name: "Tailwind CSS",
        logo: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
        description: "Utility-first CSS framework",
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: <Smartphone className="h-5 w-5" />,
    description: "Native and cross-platform mobile applications for iOS and Android",
    technologies: [
      {
        name: "React Native",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        description: "Build native apps using React",
      },
      {
        name: "Flutter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        description: "Google's UI toolkit for mobile, web, and desktop",
      },
      {
        name: "Swift",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        description: "Apple's language for iOS development",
      },
      {
        name: "Kotlin",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        description: "Modern language for Android development",
      },
      {
        name: "Ionic",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg",
        description: "Framework for hybrid mobile app development",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: <Server className="h-5 w-5" />,
    description: "Robust server-side solutions that power your applications",
    technologies: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        description: "JavaScript runtime built on Chrome's V8 engine",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        description: "Versatile programming language",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        description: "Object-oriented programming language",
      },
      {
        name: "Go",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        description: "Open source programming language by Google",
      },
      {
        name: "Ruby",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
        description: "Dynamic, open source programming language",
      },
      {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        description: "Popular general-purpose scripting language",
      },
    ],
  },
  {
    id: "database",
    name: "Database Solutions",
    icon: <Database className="h-5 w-5" />,
    description: "Scalable data storage and management systems",
    technologies: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        description: "NoSQL document database",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        description: "Advanced open source relational database",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        description: "Popular open source relational database",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        description: "Google's platform for mobile and web apps",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        description: "In-memory data structure store",
      },
      {
        name: "Elasticsearch",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
        description: "Distributed search and analytics engine",
      },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Cloud",
    icon: <Cloud className="h-5 w-5" />,
    description: "Continuous integration, delivery, and cloud infrastructure",
    technologies: [
      {
        name: "AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/768px-Amazon_Web_Services_Logo.svg.png",
        description: "Amazon Web Services cloud platform",
      },
      {
        name: "Azure",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        description: "Microsoft's cloud computing service",
      },
      {
        name: "Google Cloud",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        description: "Google's suite of cloud computing services",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        description: "Platform for developing, shipping, and running apps",
      },
      {
        name: "Kubernetes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        description: "Container orchestration system",
      },
      {
        name: "GitHub Actions",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        description: "CI/CD platform integrated with GitHub",
      },
    ],
  },
  {
    id: "cms",
    name: "CMS & E-commerce",
    icon: <Code className="h-5 w-5" />,
    description: "Content management and e-commerce platforms",
    technologies: [
      {
        name: "WordPress",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
        description: "Popular content management system",
      },
      {
        name: "Shopify",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/768px-Shopify_logo_2018.svg.png",
        description: "E-commerce platform for online stores",
      },
      {
        name: "Contentful",
        logo: "https://images.ctfassets.net/jtqsy5pye0zd/5v7bGp7jqCgAYcyMPDl6tG/de3845e74fa4a39c7eb00dc4b89bbfb2/Type_Logotype__Filled___True__Style___Default.svg?w=16&q=100",
        description: "Headless content management system",
      },
      {
        name: "Strapi",
        logo:"https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/32f3a89c-99c4-466f-8536-dd75f65fa320/Strapi-Monogram/w=256,quality=90,fit=scale-down",
        description: "Open source headless CMS",
      },
      {
        name: "WooCommerce",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
        description: "E-commerce plugin for WordPress",
      },
    ],
  },
  {
    id: "security",
    name: "Security & Testing",
    icon: <Shield className="h-5 w-5" />,
    description: "Ensuring your applications are secure and reliable",
    technologies: [
      {
        name: "Jest",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        description: "JavaScript testing framework",
      },
      {
        name: "Cypress",
        logo: "https://www.cypress.io/_astro/cypress-logo.D87396b0.svg",
        description: "End-to-end testing framework",
      },
      {
        name: "Auth0",
        logo: auth0,
        description: "Authentication and authorization platform",
      },
      {
        name: "OAuth",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg",
        description: "Open standard for access delegation",
      },
      {
        name: "Selenium",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
        description: "Automated testing framework",
      },
    ],
  },
];

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("web")

  // Find the active category
  const currentCategory = techCategories.find((cat) => cat.id === activeCategory) || techCategories[0]

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-8">
          <SectionHeading
            title="Our Technology Stack"
            subtitle="We use cutting-edge technologies to build scalable, robust, and high-performance applications."
            centered={true}
            tag="Tech Expertise"
          />
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="p-4 bg-primary-600 text-white">
                <h3 className="font-bold text-lg">Technology Categories</h3>
              </div>
              <div>
                {techCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-4 flex items-center transition-colors border-b border-gray-100 ${
                      activeCategory === category.id
                        ? "bg-primary-50 text-primary-700 border-l-4 border-primary-600"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span className={`mr-3 ${activeCategory === category.id ? "text-primary-600" : "text-gray-500"}`}>
                      {category.icon}
                    </span>
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Display */}
          <div className="w-full lg:w-3/4">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-lg mr-4 text-primary-600">{currentCategory.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{currentCategory.name}</h3>
                  <p className="text-gray-600">{currentCategory.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {currentCategory.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
                  >
                    <div className="p-8 flex items-center justify-center">
                      <div className="relative h-16 w-16">
                        <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                      </div>
                    </div>
                    <div className="w-full p-4 border-t border-gray-100 bg-gray-50">
                      <h4 className="font-bold">{tech.name}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
