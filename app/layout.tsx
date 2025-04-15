import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Brevity Technologies | Build Better. Faster. Smarter.",
  description: "Global product development, made modular. We build digital products that drive business growth.",
  keywords: [
    "web development",
    "mobile app development",
    "software development",
    "tech solutions",
    "digital transformation",
  ],
  authors: [{ name: "Brevity Technologies" }],
  creator: "Brevity Technologies",
  publisher: "Brevity Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brevity.tech",
    siteName: "Brevity Technologies",
    title: "Brevity Technologies | Build Better. Faster. Smarter.",
    description: "Global product development, made modular. We build digital products that drive business growth.",
    images: [
      {
        url: "https://brevity.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brevity Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brevity Technologies | Build Better. Faster. Smarter.",
    description: "Global product development, made modular. We build digital products that drive business growth.",
    images: ["https://brevity.tech/twitter-image.jpg"],
    creator: "@brevitytech",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://brevity.tech/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`scroll-smooth ${inter.variable} ${manrope.variable}`}>
      <body className="font-sans bg-white">
        <Header />
        <main suppressHydrationWarning className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


import './globals.css'