import type { Metadata } from "next"

export const defaultMetadata: Metadata = {
  title: {
    default: "Brevity Technologies | Web & Mobile Development",
    template: "%s | Brevity Technologies",
  },
  description:
    "Brevity Technologies specializes in web development, mobile app development, and custom software solutions for businesses of all sizes.",
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
    url: "https://brevity.com",
    siteName: "Brevity Technologies",
    title: "Brevity Technologies | Web & Mobile Development",
    description:
      "Brevity Technologies specializes in web development, mobile app development, and custom software solutions for businesses of all sizes.",
    images: [
      {
        url: "https://brevity.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brevity Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brevity Technologies | Web & Mobile Development",
    description:
      "Brevity Technologies specializes in web development, mobile app development, and custom software solutions for businesses of all sizes.",
    images: ["https://brevity.com/twitter-image.jpg"],
    creator: "@brevitytech",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://brevity.com/site.webmanifest",
}

export function generateMetadata({
  title,
  description,
  images = ["/og-image.jpg"],
}: {
  title?: string
  description?: string
  images?: string[]
} = {}): Metadata {
  return {
    ...defaultMetadata,
    ...(title && {
      title,
      openGraph: {
        ...defaultMetadata.openGraph,
        title,
      },
      twitter: {
        ...defaultMetadata.twitter,
        title,
      },
    }),
    ...(description && {
      description,
      openGraph: {
        ...defaultMetadata.openGraph,
        description,
      },
      twitter: {
        ...defaultMetadata.twitter,
        description,
      },
    }),
    ...(images && {
      openGraph: {
        ...defaultMetadata.openGraph,
        images: images.map((url) => ({
          url,
          width: 1200,
          height: 630,
          alt: title || "Brevity Technologies",
        })),
      },
      twitter: {
        ...defaultMetadata.twitter,
        images,
      },
    }),
  }
}
