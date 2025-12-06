"use client"

import { useState } from "react"
import { UserPlus, ClipboardList, Camera, Package, Waypoints } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Onboarding",
    description:
      "This step focuses on understanding the client’s business, goals, target audience, and current digital presence.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Based on the insights collected, a customized service related strategy is created. Channels, creatives, content, and tracking systems are prepared to ensure campaigns are ready for launch.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Execution",
    description:
      "We deliver all planned services SEO, social media, ads, content, and morewhile continuously monitoring and optimizing each task to ensure quality and performance.",
    icon: Waypoints,
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "A clear performance report is prepared, showing KPIs, insights, and outcomes of the campaigns. Final deliverables are shared.",
    icon: Package,
  },
]

export function Journey() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="journey" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">Journey</span></h2>
            <div className="hidden md:block w-24 h-px bg-white/20"></div>
          </div>
          <p className="text-white/60 max-w-md text-sm md:text-base">
            A seamless process designed to bring your creative vision to life.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Progress Line */}
            <div className="absolute top-24 left-0 right-0 h-px bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 transition-all duration-700"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-4 gap-6 xl:gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = index === activeStep
                const isPast = index < activeStep

                return (
                  <div
                    key={index}
                    className="relative cursor-pointer group"
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-center mb-8">
                      <div
                        className={`
                        w-14 h-14 xl:w-16 xl:h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-500
                        ${isActive
                            ? "bg-white scale-110"
                            : isPast
                              ? "bg-white/20"
                              : "bg-[#1a1a1a] group-hover:bg-[#2a2a2a]"
                          }
                      `}
                      >
                        <Icon
                          className={`w-6 h-6 xl:w-7 xl:h-7 transition-colors duration-300 ${isActive ? "text-black" : "text-white/80"}`}
                        />
                      </div>

                      {/* Dot on timeline */}
                      <div
                        className={`
                        w-4 h-4 rounded-full border-2 transition-all duration-300
                        ${isActive
                            ? "bg-white border-white scale-125"
                            : isPast
                              ? "bg-white/50 border-white/50"
                              : "bg-[#0a0a0a] border-white/20 group-hover:border-white/40"
                          }
                      `}
                      />
                    </div>

                    {/* Content */}
                    <div
                      className={`text-center transition-all duration-300 ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-80"}`}
                    >
                      <span className="text-xs text-white/40 tracking-widest">{step.number}</span>
                      <h3
                        className={`text-lg xl:text-xl font-semibold mt-1 mb-3 transition-colors ${isActive ? "text-white" : "text-white/80"}`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-xs xl:text-sm leading-relaxed transition-all duration-500 ${isActive ? "text-white/70 max-h-40" : "text-white/50 max-h-0 overflow-hidden lg:max-h-40"}`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6 md:space-y-8 px-16"> {/* Added for mobile padding px-16 */}
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = index === activeStep

              return (
                <div
                  key={index}
                  className={`
                    relative pl-14 md:pl-16 pb-6 md:pb-8 border-l-2 transition-all duration-300 cursor-pointer
                    ${index === steps.length - 1 ? "border-transparent" : "border-white/10"}
                    ${isActive ? "border-white/50" : ""}
                  `}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Icon */}
                  <div
                    className={`
                    absolute left-0 -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300
                    ${isActive ? "bg-white scale-110" : "bg-[#1a1a1a]"}
                  `}
                  >
                    <Icon className={`w-4 h-4 md:w-5 md:h-5 ${isActive ? "text-black" : "text-white/80"}`} />
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-xs text-white/40 tracking-widest">{step.number}</span>
                    <h3 className="text-base md:text-lg font-semibold mt-1 mb-2">{step.title}</h3>
                    <p
                      className={`text-xs md:text-sm text-white/60 leading-relaxed transition-all duration-300 ${isActive ? "opacity-100" : "opacity-70"}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
