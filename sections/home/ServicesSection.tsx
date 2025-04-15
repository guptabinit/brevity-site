"use client"

import { Code, Palette, Rocket } from "lucide-react"
import SectionHeading from "@/components/ui/SectionHeading"
import ServiceCard from "@/components/ui/ServiceCard"
import Button from "@/components/ui/Button"
import BackgroundElements from "@/components/ui/BackgroundElements"

const services = [
  {
    id: "launchpad",
    title: "LaunchPad™",
    description: "Zero to MVP in 4 weeks. Our rapid development program for startups and new initiatives.",
    icon: <Rocket className="h-8 w-8" />,
    link: "/services#launchpad",
    features: [
      "Requirements workshop",
      "UI/UX design",
      "Frontend & backend development",
      "Deployment & analytics setup",
    ],
  },
  {
    id: "design360",
    title: "Design360™",
    description: "Comprehensive design systems that scale. From brand identity to product interfaces.",
    icon: <Palette className="h-8 w-8" />,
    link: "/services#design360",
    features: ["Brand identity", "UI component library", "Design system documentation", "Figma templates & assets"],
  },
  {
    id: "quickscale",
    title: "QuickScale™",
    description: "Dedicated development teams that integrate seamlessly with your existing workflow.",
    icon: <Code className="h-8 w-8" />,
    link: "/services#quickscale",
    features: [
      "Vetted senior developers",
      "Flexible team composition",
      "Agile workflow integration",
      "Weekly progress reports",
    ],
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 relative">
      <BackgroundElements variant="light" density="low" />
      <div className="container-custom">
        <SectionHeading
          title="Productized Services"
          subtitle="Our signature offerings designed to deliver predictable results with transparent pricing."
          centered={true}
          tag="Core Offerings"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              features={service.features}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services" variant="outline" icon={<Code size={16} />}>
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
