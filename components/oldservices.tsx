"use client"

import { Camera, Video, CalendarDays, ShoppingBag, Sparkles, Scissors } from "lucide-react"

const services = [
  {
    title: "Photography",
    description: "Professional photography that captures your brand's essence with stunning clarity and creativity.",
    icon: Camera,
    size: "large",
  },
  {
    title: "Videography",
    description: "Cinematic video production that tells your story in motion.",
    icon: Video,
    size: "medium",
  },
  {
    title: "Event Coverage",
    description: "Complete documentation of your special moments and corporate events.",
    icon: CalendarDays,
    size: "medium",
  },
  {
    title: "Brand Shoots",
    description: "Elevate your brand identity with professional product and lifestyle photography.",
    icon: ShoppingBag,
    size: "small",
  },
  {
    title: "Content Creation",
    description: "Social media ready content that engages and converts your audience.",
    icon: Sparkles,
    size: "small",
  },
  {
    title: "Editing",
    description: "Expert post-production that transforms raw footage into polished masterpieces.",
    icon: Scissors,
    size: "small",
  },
]

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">Services</span></h2>
            <div className="hidden md:block w-24 h-px bg-white/20"></div>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base">
            Comprehensive creative solutions tailored to bring your vision to life.
          </p>
        </div>

        {/* Bento Grid - Improved responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {services.map((service, index) => {
            const Icon = service.icon
            const gridClass =
              index === 0 ? "sm:col-span-2 sm:row-span-2" : index === 1 || index === 2 ? "lg:col-span-2" : ""

            return (
              <div
                key={index}
                className={`group relative bg-[#1a1a1a] p-4 md:p-6 overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#222] ${gridClass}`}
              >
                {/* Icon with micro-interaction */}
                <div className="relative z-10 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#2a2a2a] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:rotate-6">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white/80 transition-all duration-300 group-hover:text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 transition-transform duration-300 group-hover:translate-x-2">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm leading-relaxed transition-all duration-300 group-hover:text-white/80">
                    {service.description}
                  </p>
                </div>

                {/* Hover effect background */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
