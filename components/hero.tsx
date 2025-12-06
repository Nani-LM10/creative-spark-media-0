"use client"
import Image from "next/image"
import Link from "next/link"
import { Users, Building2, Trophy, Sparkles } from "lucide-react"
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import { Vollkorn } from "next/font/google"

const vollkorn = Vollkorn({ subsets: ["latin"], weight: ["400", "700"] })

function Counter({ value }: { value: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.floor(latest))

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2 })
    }
  }, [isInView, value, count])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export function Hero() {
  return (
    <section className="min-h-screen pt-24 md:pt-20 flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4 md:space-y-6 pt-2 md:pt-2 sm:pt-2 lg:pt-10">

              <p className="text-white/60 text-xs md:text-sm tracking-widest uppercase lg:pl-2">Welcome to</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Creative
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                  Spark
                </span> Media
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/85 font-light">Where Vision Meets Frame</p>
              <p className="text-white/60 text-lg max-w-md leading-relaxed mx-auto lg:mx-0 font-light tracking-wider">
                We transform fleeting moments into timeless stories. Our lens captures the essence of brands, influencers, and unforgettable events with cinematic precision.

              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-10 hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs md:text-sm text-white/90 font-medium">Accepting New Projects</span>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="#work"
                className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors text-center"
              >
                View Our Work
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border border-white/20 text-sm hover:bg-white hover:text-black transition-all text-center"
              >
                Get in touch
              </Link>

            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 border-t border-white/10 mt-8">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-white" />
                  <h3 className="text-3xl font-bold"><Counter value={12} />K+</h3>
                </div>
                <p className="text-sm text-white/60 font-light">Influencers</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <Building2 className="w-5 h-5 text-white" />
                  <h3 className="text-3xl font-bold"><Counter value={100} />+</h3>
                </div>
                <p className="text-sm text-white/60 font-light">Brands</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-white" />
                  <h3 className="text-3xl font-bold"><Counter value={50} />+</h3>
                </div>
                <p className="text-sm text-white/60 font-light">Awards</p>
              </div>
            </div>



          </div>

          <div className="relative order-first lg:order-last">
            <div className="aspect-[4/5] md:aspect-[4/5] relative overflow-hidden max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/tharun-hero-image.jpeg"
                alt="Professional photographer with camera"
                fill
                className="object-cover grayscale"
                priority
              />

              {/* Glass Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden lg:flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className={vollkorn.className}>
                  <h3 className="text-white font-bold text-lg leading-tight">Tharun Sai</h3>
                  <p className="text-white/70 text-xs font-medium">CEO & Founder @Creative Spark Media</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
