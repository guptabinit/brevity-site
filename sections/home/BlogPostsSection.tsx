"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"
import perf from "@/public/perfBlog.png"
import startUp from "@/public/startUp.jpg"
import ui from "@/public/UI.png"

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

export default function BlogPostsSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Latest Insights"
          subtitle="Stay updated with our latest articles, tutorials, and industry insights."
          centered={true}
          tag="From Our Blog"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-card overflow-hidden border border-gray-100 group"
            >
              <Link href={`/blog/${post.id}`} className="block relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-0 right-0 m-3">
                  <span className="inline-block px-2 py-1 bg-primary-600 text-white text-xs rounded-md">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{post.date}</span>
                </div>
                <Link href={`/blog/${post.id}`}>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-primary-600 text-sm font-medium hover:underline"
                >
                  Read More <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/blog" variant="outline" >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
