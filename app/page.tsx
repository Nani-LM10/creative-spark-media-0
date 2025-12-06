import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { OurWork } from "@/components/our-work"
import { Services } from "@/components/oldservices" //not using anymore
import { Journey } from "@/components/journey"
import { Pricing } from "@/components/pricing"
import { AboutMe } from "@/components/about-me"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ServicesBentoGrid } from "@/components/servicesnew"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      <Hero />
      <OurWork />
      <div className="w-full min-h-screen bg-black">
        <ServicesBentoGrid />
      </div>
      <Journey />
      <Pricing />
      <AboutMe />
      <Contact />
      <Footer />
    </main>
  )
}
