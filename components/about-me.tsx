"use client"

import dynamic from "next/dynamic"

const MagicBento = dynamic(() => import("./magic-bento"), { ssr: false })

const aboutCards = [
  {
    color: "#0a0a0a",
    title: "Our Story",
    description:
      "Founded with a passion for visual storytelling, we transform brands through powerful imagery that captivates audiences.",
    label: "Who We Are",
  },
  {
    color: "#0a0a0a",
    title: "50+ Projects",
    description: "Successfully delivered creative campaigns for brands and influencers across diverse industries.",
    label: "Experience",
  },
  {
    color: "#0a0a0a",
    title: "Creative Excellence",
    description:
      "Our team of photographers, videographers, and creative directors brings decades of combined expertise to every project we undertake.",
    label: "Our Team",
    image: "/images/gemini-generated-image-9gejoh9gejoh9gej.jpeg",
  },
  {
    color: "#0a0a0a",
    title: "Our Mission",
    description:
      "To capture authentic stories that resonate with audiences and elevate brands to new heights through visual innovation and creative excellence.",
    label: "Vision",
  },
  {
    color: "#0a0a0a",
    title: "Los Angeles, CA",
    description: "Based in the heart of LA's creative scene with global reach and availability.",
    label: "Location",
  },
  {
    color: "#0a0a0a",
    title: "24/7 Support",
    description: "Dedicated team ready to bring your vision to life, anytime, anywhere.",
    label: "Availability",
  },
]

export function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">About</span> Us</h2>
          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            Get to know the team behind Creative Media Spark and our commitment to excellence.
          </p>
        </div>

        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={50}
          particleCount={20}
          glowColor="255, 255, 255"
          cards={aboutCards}
        />
      </div>
    </section>
  )
}
