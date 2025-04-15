"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react"
import PageHeader from "@/components/layout/PageHeader"
import SectionHeading from "@/components/ui/SectionHeading"
import NewsletterForm from "@/components/newsletter/NewsletterForm"
import ts from "@/public/typescript.jpeg"
import devOps from "@/public/devops.png"

// Blog post data
const blogPosts = [
  {
    id: "web-development-trends-2025",
    title: "Web Development Trends to Watch in 2025",
    excerpt:
      "Explore the cutting-edge technologies and methodologies that will shape the web development landscape in 2025.",
    date: "April 10, 2025",
    author: "Alex Johnson",
    category: "Web Development",
    tags: ["React", "Next.js", "Web3", "AI"],
    image: "/holographic-code-city.png",
    featured: true,
  },
  {
    id: "mobile-app-development-guide",
    title: "The Ultimate Guide to Mobile App Development in 2025",
    excerpt:
      "A comprehensive guide to building successful mobile applications using the latest frameworks and best practices.",
    date: "April 5, 2025",
    author: "Emily Carter",
    category: "Mobile Development",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    image: "/app-development-workflow.png",
  },
  {
    id: "ai-in-software-development",
    title: "How AI is Transforming Software Development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way we build, test, and deploy software applications.",
    date: "March 28, 2025",
    author: "David Lee",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Automation", "DevOps"],
    image: "/coding-with-ai.png",
  }
]

// Categories for filtering
const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Artificial Intelligence",
  "Cloud Computing",
  "UX Design",
  "Programming",
  "DevOps",
  "Architecture",
]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter blog posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = activeCategory === "All" || post.category === activeCategory

    return matchesSearch && matchesCategory
  })

  // Get featured post
  const featuredPost = blogPosts.find((post) => post.featured)

  return (
    <>
      <PageHeader
        title="Our Blog"
        subtitle="Insights, tutorials, and news from the Brevity Technologies team."
        tag="Knowledge Hub"
        bg="blue-100"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-gray-50 to-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                    Featured Post
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <SectionHeading title="Latest Articles" subtitle="Browse our latest content" alignment="left" />
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="flex flex-wrap justify-start gap-2 mb-8 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col"
                  >
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <div key={tag} className="flex items-center text-xs text-gray-500">
                            <Tag className="h-3 w-3 mr-1" />
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors mt-auto"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-bold mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
