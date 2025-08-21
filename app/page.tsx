import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeaturedProducts from "@/components/FeaturedProducts"
import Contact from "@/components/Contact"
import About from "@/components/About"
import Footer from "@/components/Footer"
import AllProducts from "@/components/AllProducts"

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col scroll-smooth font-body text-foreground">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <AllProducts/>
      <Contact />
      <About />
      <Footer />
    </main>
  )
}
