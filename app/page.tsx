import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Interests } from "@/components/portfolio/interests"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left column - sticky header on desktop */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <Hero />
          </header>

          {/* Right column - scrollable content */}
          <main className="lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Interests />
            <Footer />
          </main>
        </div>
      </div>

      {/* Background gradient effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px at 50% 100px, rgba(56, 189, 248, 0.05), transparent 80%)",
        }}
      />
    </div>
  )
}
