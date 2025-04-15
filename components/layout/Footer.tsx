import Link from "next/link"
import Image from "next/image"
import { Youtube, Instagram, Linkedin, ArrowUp } from "lucide-react"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo-white.png" alt="Brevity Technologies" width={90} height={50} className="w-[80%]" />
            </Link>
            <p className="text-white mb-6 max-w-md">
              Brevity Technologies delivers cutting-edge software solutions that transform businesses. Our expertise
              spans web development, mobile apps, and custom software.
            </p>
            <div className="flex space-x-5">
                <a
                  href="https://www.youtube.com/@Quickgick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-primary p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a
                  href="https://www.instagram.com/quickgick/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-primary p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/quick-gick/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-primary p-2.5 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/tech-stack" className="text-white hover:text-white transition-colors">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-white hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-white hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li className="text-white">
                <span className="block font-medium text-white mb-1">Email:</span>
                <a href="mailto:quickgick@gmail.com" className="hover:text-white transition-colors">
                  quickgick@gmail.com
                </a>
              </li>
              <li className="text-white">
                <span className="block font-medium text-white mb-1">Call us at:</span>
                <div>+91 22 6962 1024</div>
                <div>+91 89207 96562</div>
              </li>
              <li className="text-white">
                <span className="block font-medium text-white mb-1">Address:</span>
                Room 411, NSUT IIF, NSUT,
                <br />
                Dwarka Sector 3, Delhi, IN - 110078
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">&copy; {currentYear} Brevity Technologies. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/privacy" className="text-white hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white hover:text-white text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-white hover:text-white text-sm transition-colors">
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-white text-sm transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
