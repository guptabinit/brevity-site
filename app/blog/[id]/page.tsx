"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, User, Tag, Facebook, Twitter, Linkedin, Copy, Check, ArrowRight } from "lucide-react"
import Button from "@/components/ui/Button"
import SectionHeading from "@/components/ui/SectionHeading"
import av1 from "@/public/av1.avif"
import av2 from "@/public/av2.avif"
import av3 from "@/public/av3.avif"

// Blog post data
const blogPosts = [
  {
    id: "web-development-trends-2025",
    title: "Web Development Trends to Watch in 2025",
    excerpt:
      "Explore the cutting-edge technologies and methodologies that will shape the web development landscape in 2025.",
    content: `
      <p>The web development landscape is constantly evolving, with new technologies, frameworks, and methodologies emerging at a rapid pace. As we look ahead to 2025, several trends are poised to reshape how we build and interact with web applications.</p>
      
      <h2>1. AI-Driven Development</h2>
      <p>Artificial intelligence is increasingly being integrated into the development process itself. AI-powered tools can now generate code, optimize performance, identify bugs, and even design user interfaces. By 2025, we expect to see AI assistants becoming standard in development environments, helping developers work more efficiently and focus on higher-level problems.</p>
      
      <h2>2. WebAssembly Goes Mainstream</h2>
      <p>WebAssembly (Wasm) has been gaining traction as a way to run high-performance code in the browser. In 2025, we anticipate WebAssembly will become a mainstream technology, enabling more complex applications to run in the browser with near-native performance. This will blur the line between web and desktop applications even further.</p>
      
      <h2>3. Edge Computing</h2>
      <p>Edge computing moves processing closer to the data source, reducing latency and improving performance. With frameworks like Next.js already supporting edge functions, we expect to see more applications leveraging edge computing to deliver faster, more responsive user experiences.</p>
      
      <h2>4. Web3 and Decentralized Applications</h2>
      <p>While the initial hype around Web3 has settled, the underlying technologies continue to mature. By 2025, we expect to see more practical applications of blockchain technology and decentralized architectures in mainstream web development, particularly for applications requiring transparency, security, and user ownership of data.</p>
      
      <h2>5. Micro-Frontends Architecture</h2>
      <p>As applications grow in complexity, micro-frontends are emerging as a way to manage large-scale web applications. This architectural approach allows teams to work independently on different parts of an application, using their preferred technologies and frameworks, while still delivering a cohesive user experience.</p>
      
      <h2>6. Serverless Architecture Evolution</h2>
      <p>Serverless architecture will continue to evolve, with more sophisticated tools and services making it easier to build, deploy, and manage serverless applications. This will further reduce the operational overhead for developers and allow them to focus more on building features rather than managing infrastructure.</p>
      
      <h2>7. Real-Time Everything</h2>
      <p>Users increasingly expect real-time experiences, from collaborative editing to live updates. Technologies like WebSockets, Server-Sent Events, and WebRTC will become even more important, and frameworks will continue to evolve to make implementing real-time features simpler.</p>
      
      <h2>8. Accessibility as a Priority</h2>
      <p>Accessibility is no longer an afterthought but a fundamental aspect of web development. By 2025, we expect to see more tools, frameworks, and standards that make building accessible websites easier and more integrated into the development workflow.</p>
      
      <h2>9. Low-Code/No-Code Integration</h2>
      <p>While low-code and no-code platforms won't replace traditional development, they will become more integrated with it. Developers will leverage these tools to accelerate certain aspects of development, particularly for internal tools and prototypes.</p>
      
      <h2>10. Sustainability in Web Development</h2>
      <p>As awareness of the environmental impact of technology grows, we expect to see more focus on building energy-efficient websites and applications. This includes optimizing code, reducing unnecessary data transfer, and choosing hosting providers that use renewable energy.</p>
      
      <h2>Conclusion</h2>
      <p>The web development landscape in 2025 will be characterized by a focus on performance, user experience, and developer productivity. By staying informed about these trends and continuously learning, developers can position themselves to build the next generation of web applications that are faster, more accessible, and more sustainable.</p>
    `,
    date: "April 10, 2025",
    author: "Alex Johnson",
    authorTitle: "Web Developer",
    authorBio:
      "Alex has over 15 years of experience in web development and software engineering. He specializes in frontend architecture and emerging web technologies.",
    authorImage: av1,
    category: "Web Development",
    tags: ["React", "Next.js", "Web3", "AI"],
    image: "/holographic-code-city.png",
    relatedPosts: ["mobile-app-development-guide", "typescript-best-practices", "ai-in-software-development"],
  },
  {
    id: "mobile-app-development-guide",
    title: "The Ultimate Guide to Mobile App Development in 2025",
    excerpt:
      "A comprehensive guide to building successful mobile applications using the latest frameworks and best practices.",
    content: `
      <p>Mobile app development continues to evolve at a rapid pace, with new frameworks, tools, and best practices emerging regularly. This guide provides a comprehensive overview of the mobile app development landscape in 2025, helping you make informed decisions for your next project.</p>
      
      <h2>Choosing the Right Approach</h2>
      <p>When starting a mobile app project, one of the first decisions is choosing between native, cross-platform, or hybrid development. Each approach has its advantages and trade-offs:</p>
      
      <h3>Native Development</h3>
      <p>Native development involves building separate apps for each platform using platform-specific languages and tools:</p>
      <ul>
        <li><strong>iOS:</strong> Swift or Objective-C with Xcode</li>
        <li><strong>Android:</strong> Kotlin or Java with Android Studio</li>
      </ul>
      <p><strong>Pros:</strong> Best performance, full access to platform features, best user experience</p>
      <p><strong>Cons:</strong> Higher development cost, separate codebases to maintain</p>
      
      <h3>Cross-Platform Development</h3>
      <p>Cross-platform frameworks allow you to write code once and deploy to multiple platforms:</p>
      <ul>
        <li><strong>React Native:</strong> Uses JavaScript/TypeScript and React</li>
        <li><strong>Flutter:</strong> Uses Dart language</li>
        <li><strong>Kotlin Multiplatform Mobile:</strong> Shares code between Android and iOS</li>
      </ul>
      <p><strong>Pros:</strong> Faster development, shared codebase, cost-effective</p>
      <p><strong>Cons:</strong> Potential performance limitations, occasional platform-specific issues</p>
      
      <h3>Hybrid Development</h3>
      <p>Hybrid apps are essentially web apps packaged in a native container:</p>
      <ul>
        <li><strong>Ionic:</strong> Uses web technologies with Angular, React, or Vue</li>
        <li><strong>Capacitor:</strong> Modern alternative to Cordova</li>
      </ul>
      <p><strong>Pros:</strong> Simplest development process, web developers can build mobile apps</p>
      <p><strong>Cons:</strong> Limited performance, less native feel</p>
      
      <h2>Key Considerations for Mobile App Development</h2>
      
      <h3>User Experience Design</h3>
      <p>Mobile app success heavily depends on user experience. In 2025, users expect intuitive, responsive, and visually appealing interfaces. Consider these UX best practices:</p>
      <ul>
        <li><strong>Platform-specific design guidelines:</strong> Follow Apple's Human Interface Guidelines for iOS and Material Design for Android</li>
        <li><strong>Minimalist design:</strong> Focus on essential features and reduce cognitive load</li>
        <li><strong>Accessibility:</strong> Design for users with disabilities (color contrast, screen readers, etc.)</li>
        <li><strong>Personalization:</strong> Leverage user data to create tailored experiences</li>
      </ul>
      
      <h3>Performance Optimization</h3>
      <p>Performance remains critical for user retention. Optimize your app by:</p>
      <ul>
        <li>Minimizing app size and startup time</li>
        <li>Implementing efficient data loading and caching strategies</li>
        <li>Optimizing battery usage</li>
        <li>Supporting offline functionality</li>
      </ul>
      
      <h3>Security Considerations</h3>
      <p>With increasing privacy concerns and regulations, security is non-negotiable:</p>
      <ul>
        <li>Implement secure authentication (biometrics, multi-factor authentication)</li>
        <li>Encrypt sensitive data at rest and in transit</li>
        <li>Follow platform security best practices</li>
        <li>Regularly update dependencies to patch vulnerabilities</li>
      </ul>
      
      <h2>Emerging Trends in Mobile Development</h2>
      
      <h3>AI and Machine Learning Integration</h3>
      <p>AI capabilities are becoming more accessible to mobile developers through on-device ML frameworks like Core ML (iOS) and ML Kit (Android). These enable features like image recognition, natural language processing, and predictive text without requiring cloud connectivity.</p>
      
      <h3>Augmented Reality</h3>
      <p>AR frameworks like ARKit and ARCore have matured significantly, enabling immersive experiences across various domains from gaming to e-commerce, education, and navigation.</p>
      
      <h3>Super Apps</h3>
      <p>The concept of super apps—platforms that offer multiple services within a single application—is gaining traction globally, following the success of apps like WeChat in Asia.</p>
      
      <h2>Testing and Quality Assurance</h2>
      <p>Comprehensive testing is essential for delivering a high-quality mobile app:</p>
      <ul>
        <li><strong>Automated testing:</strong> Unit tests, integration tests, and UI tests</li>
        <li><strong>Device testing:</strong> Test on various device models, screen sizes, and OS versions</li>
        <li><strong>Performance testing:</strong> Evaluate app performance under different conditions</li>
        <li><strong>User testing:</strong> Gather feedback from real users before launch</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Mobile app development in 2025 requires balancing technical considerations with user needs and business goals. By choosing the right development approach, focusing on user experience, and staying current with emerging trends, you can create successful mobile applications that stand out in an increasingly competitive market.</p>
    `,
    date: "April 5, 2025",
    author: "Emily Carter",
    authorTitle: "Mobile Development Lead",
    authorBio:
      "Emily specializes in cross-platform mobile development with extensive experience in React Native and Flutter. She has led the development of several award-winning mobile applications.",
    authorImage: av3,
    category: "Mobile Development",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    image: "/app-development-workflow.png",
    relatedPosts: ["web-development-trends-2025", "ux-design-principles", "ai-in-software-development"],
  },
  {
    id: "ai-in-software-development",
    title: "How AI is Transforming Software Development",
    excerpt:
      "Discover how artificial intelligence is revolutionizing the way we build, test, and deploy software applications.",
    content: `
      <p>Artificial Intelligence (AI) is no longer just a buzzword in the tech industry—it's actively transforming how software is developed, tested, and maintained. In this article, we'll explore the various ways AI is revolutionizing software development and what this means for developers, businesses, and users.</p>
      
      <h2>Code Generation and Assistance</h2>
      <p>One of the most visible impacts of AI in software development is in code generation and assistance. Tools like GitHub Copilot, powered by large language models, can suggest code snippets, complete functions, and even generate entire components based on natural language descriptions or existing code patterns.</p>
      
      <p>These AI assistants are becoming increasingly sophisticated, understanding context, following coding conventions, and adapting to individual coding styles. While they won't replace human developers, they significantly boost productivity by handling routine coding tasks and allowing developers to focus on more complex problems.</p>
      
      <h2>Automated Testing and Quality Assurance</h2>
      <p>AI is transforming testing and quality assurance by making it more efficient and comprehensive. AI-powered testing tools can:</p>
      
      <ul>
        <li>Automatically generate test cases based on code changes</li>
        <li>Identify potential bugs before they reach production</li>
        <li>Optimize test suites by prioritizing tests most likely to catch issues</li>
        <li>Perform visual regression testing by identifying unintended UI changes</li>
        <li>Analyze user behavior to focus testing on the most critical paths</li>
      </ul>
      
      <p>These capabilities not only save time but also improve software quality by catching issues that might be missed in manual testing.</p>
      
      <h2>Intelligent Debugging</h2>
      <p>Debugging is often one of the most time-consuming aspects of software development. AI is making this process more efficient by:</p>
      
      <ul>
        <li>Analyzing patterns in code and execution logs to identify the root causes of bugs</li>
        <li>Suggesting potential fixes based on similar issues resolved in the past</li>
        <li>Predicting which parts of the codebase are most likely to contain bugs</li>
        <li>Automatically fixing certain types of common errors</li>
      </ul>
      
      <p>These tools can significantly reduce the time developers spend tracking down and fixing bugs, allowing for faster development cycles.</p>
      
      <h2>Predictive Analytics for Project Management</h2>
      <p>AI is also transforming how software projects are managed. AI-powered project management tools can:</p>
      
      <ul>
        <li>Predict potential delays based on historical data and current progress</li>
        <li>Identify bottlenecks in the development process</li>
        <li>Optimize resource allocation</li>
        <li>Estimate more accurate timelines for features and releases</li>
      </ul>
      
      <p>These capabilities help teams plan more effectively and deliver software on time and within budget.</p>
      
      <h2>Code Review and Quality Analysis</h2>
      <p>AI is enhancing code review processes by automatically analyzing code for:</p>
      
      <ul>
        <li>Potential bugs and security vulnerabilities</li>
        <li>Performance issues</li>
        <li>Adherence to coding standards and best practices</li>
        <li>Technical debt</li>
      </ul>
      
      <p>These tools provide immediate feedback to developers, helping them improve code quality before it even reaches human reviewers.</p>
      
      <h2>Natural Language Requirements Processing</h2>
      <p>Understanding and translating business requirements into technical specifications is a critical but often challenging part of software development. AI systems can now analyze natural language requirements to:</p>
      
      <ul>
        <li>Identify ambiguities and inconsistencies</li>
        <li>Suggest clarifications</li>
        <li>Generate initial technical specifications</li>
        <li>Create test cases directly from requirements</li>
      </ul>
      
      <p>This helps bridge the gap between business stakeholders and development teams, reducing misunderstandings and ensuring the final product meets actual business needs.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>While AI offers tremendous benefits for software development, there are important challenges and considerations:</p>
      
      <h3>Quality and Reliability</h3>
      <p>AI-generated code may contain errors or security vulnerabilities if not properly reviewed. Human oversight remains essential.</p>
      
      <h3>Skill Evolution</h3>
      <p>As AI handles more routine coding tasks, developers need to evolve their skills to focus on system architecture, problem-solving, and working effectively with AI tools.</p>
      
      <h3>Ethical Considerations</h3>
      <p>Issues around intellectual property, bias in AI systems, and the impact on employment need careful consideration.</p>
      
      <h2>The Future of AI in Software Development</h2>
      <p>Looking ahead, we can expect AI to become even more deeply integrated into the software development lifecycle. Future developments may include:</p>
      
      <ul>
        <li>More sophisticated code generation that can create entire applications from high-level descriptions</li>
        <li>AI systems that can maintain and evolve existing codebases with minimal human intervention</li>
        <li>Deeper integration between business strategy and software development through AI intermediaries</li>
        <li>More personalized development environments that adapt to individual developer preferences and strengths</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>AI is not replacing software developers but transforming how they work. By automating routine tasks, providing intelligent assistance, and enhancing quality assurance, AI allows developers to focus on more creative and complex aspects of software development. Organizations that effectively integrate AI into their development processes will likely see significant improvements in productivity, quality, and time-to-market.</p>
      
      <p>As with any technological shift, the key to success lies in understanding both the capabilities and limitations of AI tools and finding the right balance between automation and human expertise.</p>
    `,
    date: "March 28, 2025",
    author: "David Lee",
    authorTitle: "AI Research Lead",
    authorBio:
      "David specializes in the application of artificial intelligence in software development. He has published numerous papers on AI-assisted programming and leads research initiatives on next-generation development tools.",
    authorImage: av2,
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Automation", "DevOps"],
    image: "/coding-with-ai.png",
    relatedPosts: ["web-development-trends-2025", "mobile-app-development-guide", "devops-continuous-deployment"],
  },
]

export default function BlogPostPage() {
  const router = useRouter()
  const { id } = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (id) {
      const foundPost = blogPosts.find((post) => post.id === id)
      if (foundPost) {
        setPost(foundPost)

        // Get related posts
        if (foundPost.relatedPosts && foundPost.relatedPosts.length > 0) {
          const related = blogPosts.filter((post) => foundPost.relatedPosts.includes(post.id))
          setRelatedPosts(related)
        }
      } else {
        router.push("/blog")
      }
    }
    setLoading(false)
  }, [id, router])

  const copyToClipboard = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (!post) {
    return null
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 rounded-bl-full opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-100 rounded-tr-full opacity-30 -z-10"></div>

        <div className="container-custom">
          <div className="mb-8">
            <Button href="/blog" variant="text" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center text-gray-500 mb-8">
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>

                <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

                <div className="border-t border-gray-200 pt-8 mt-12">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-3">Share this article:</span>
                      <div className="flex space-x-2">
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            typeof window !== "undefined" ? window.location.href : "",
                          )}&text=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            typeof window !== "undefined" ? window.location.href : "",
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                        >
                          <Facebook className="h-4 w-4" />
                        </a>
                        <a
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                            typeof window !== "undefined" ? window.location.href : "",
                          )}&title=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <button
                          onClick={copyToClipboard}
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                        >
                          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-gray-500">Tags:</span>
                      <div className="flex flex-wrap ml-2">
                        {post.tags.map((tag: string, index: number) => (
                          <span key={tag} className="text-primary-600 hover:text-primary-700 transition-colors">
                            {tag}
                            {index < post.tags.length - 1 && <span className="mx-1">,</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8"
                >
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={post.authorImage || "/placeholder.svg"}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{post.author}</h3>
                      <p className="text-gray-500 text-sm">{post.authorTitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{post.authorBio}</p>
                </motion.div>

                {relatedPosts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                  >
                    <h3 className="font-bold text-lg mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="flex items-start">
                          <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0 mr-3">
                            <Image
                              src={relatedPost.image || "/placeholder.svg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <Link
                              href={`/blog/${relatedPost.id}`}
                              className="font-medium hover:text-primary-600 transition-colors line-clamp-2"
                            >
                              {relatedPost.title}
                            </Link>
                            <p className="text-gray-500 text-sm mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="You Might Also Like" subtitle="Explore more articles from our blog" centered={true} />

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 3)
              .map((post, index) => (
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
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
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
        </div>
      </section>
    </>
  )
}
