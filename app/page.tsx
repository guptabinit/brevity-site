import HeroSection from "@/sections/home/HeroSection"
import StatsSection from "@/sections/home/StatsSection"
import ServicesSection from "@/sections/home/ServicesSection"
import ProductsSection from "@/sections/home/ProductsSection"
import RecentProjectsSection from "@/sections/home/RecentProjectsSection"
import ClientsSection from "@/sections/home/ClientsSection"
import TestimonialsSection from "@/sections/home/TestimonialsSection"
import TeamSection from "@/sections/home/TeamSection"
import BlogPostsSection from "@/sections/home/BlogPostsSection"
import FreeToolsSection from "@/sections/home/FreeToolsSection"
import ContactCTA from "@/sections/home/ContactCTA"
import WhyChooseUs from "@/sections/home/WhyChooseUs"
import TechStackSection from "@/sections/home/TechStackSection"
import ContactForm from "@/components/contact/ContactForm"

export default function HomePage() {
  return (
    <>
      <HeroSection />{/*Done*/}
      <StatsSection />{/*Done*/}
      <ServicesSection />{/*Done*/}
      <ProductsSection />{/*Done*/}
      <WhyChooseUs />{/*Done*/}
      <RecentProjectsSection />{/*Done*/}
      <ClientsSection />{/*Done*/}
      <TestimonialsSection />{/*Done*/}
      <TechStackSection />{/*Done*/}
      <BlogPostsSection />{/*Done*/}
      <FreeToolsSection />{/*Needs Link*/}
      <ContactCTA />{/*Done*/}
    </>
  )
}
