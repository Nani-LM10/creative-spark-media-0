"use client"

import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Influencers Colaboration",
    price: "1Lakh",
    description: "Perfect for Instagram Content Creations",
    features: [
      "10 Reels Colaboration",
      "Full team + advanced lighting",
      "Reels + story promotions and colabs",
      "Instagram Post Colabs",
      "Script & caption support",
      "Hashtag strategy",
      "Campaign reporting",
    ],
  },
  {
    name: "Full Package",
    price: "2Lakh",
    description: "Complete Package Digital Marketing & Brand Growth Solution",
    features: [
      "Product & Advertisement Shoot",
      "30 Product Shoots",
      "Social Media Content Creation",
      "Up to 3 locations",
      "Brand strategy & audience targeting",
      "Advanced retouching",
      "Priority support & Quick Response",
    ],
    popular: true,
  },
  {
    name: "For Brands",
    price: "70,000",
    description: "Perfect for Brand & Product Shoots",
    features: [
      "Full team + advanced lighting",
      "Full-day professional shoot",
      "Product Shoot",
      "Advertisement Shoot",
      "Up to 30 Product Shoots",
      "Concepts, scripting, props, models",
      "Option to Extend Shoot [Extra Costs]",
    ],
  },
  {
    name: "Social Media Handling",
    price: "20,000",
    description: "End-to-end social media management for brand growth",
    features: [
      "12 posts + 4 reels per month",
      "Creative design & captions",
      "Hashtag & growth strategy",
      "Monthly analytics report",
      "Community & DM management",
      "Brand theme maintenance",
      "Content calendar planning",
    ],
  },
  {
    name: "Website Designing",
    price: "40,000",
    description: "Custom, responsive website built for high performance",
    features: [
      "4–6 page website",
      "Responsive modern UI/UX",
      "Custom animations",
      "Basic SEO setup",
      "Contact forms & integrations",
      "Speed optimization",
      "Final design files included",
    ],
  },
  {
    name: "Web Designing + Branding",
    price: "60,000",
    description: "Complete brand identity design, high-performing website",
    features: [
      "Custom brand identity creation",
      "Logo, color palette & typography",
      "4–6 page responsive website",
      "Custom UI/UX design",
      "Brand-consistent graphics & icons",
      "Basic SEO & speed optimization",
      "Final brand kit & website delivery",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">Pricing</span> Plans</h2>
          <p className="text-white/60 max-w-md mx-auto text-sm md:text-base">
            Transparent pricing tailored to your creative needs. Choose a plan that works for you.
          </p>
        </div>

        {/* Pricing Cards - Improved responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-10 md:mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative p-6 md:p-8 bg-[#1a1a1a] transition-all duration-300 group hover:bg-[#222]
                ${plan.popular ? "ring-1 ring-white/20" : ""}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-5 md:mb-6">
                <h3 className="text-center text-lg md:text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-center text-white/50 text-xs md:text-sm">{plan.description}</p>
              </div>

              <div className="mb-6 md:mb-8">
                <span className="text-3xl md:text-4xl font-bold">₹{plan.price}</span>
                <span className="text-white/50 text-xs md:text-sm ml-2">/ Month</span>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/70 text-xs md:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`
                  block w-full py-3 text-center text-sm font-medium transition-all duration-300
                  ${plan.popular
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/20 hover:bg-white hover:text-black"
                  }
                `}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Custom Quote Button */}
        <div className="text-center">
          <p className="text-white/50 text-xs md:text-sm lg:text-md mb-4">Need something custom?</p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-sm md:text-md font-medium hover:opacity-90 transition-opacity border border-white/30"
          >
            Request Custom Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
