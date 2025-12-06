"use client"

import type React from "react"

import { Mail, Phone, MapPin, Clock, Send, Instagram, Facebook, Twitter, Youtube, Linkedin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-12 md:py-24 bg-[#0a0a0a] overflow-x-hidden">
      <div className="container mx-auto px-3 md:px-6 max-w-full">
        <div className="border-t border-white/10 pt-12 md:pt-24">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16">
            <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">Get In Touch</span>
            <h2 className="text-2xl md:text-5xl font-bold mb-4">Let's Create Together</h2>
            <p className="text-white/50 text-xs md:text-base max-w-2xl mx-auto px-2">
              Ready to elevate your brand with stunning visuals? We'd love to hear about your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Contact Info - Left Side */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Cards - Smaller padding and icon size on mobile */}
              <div className="space-y-3">
                <Link
                  href="mailto:creativesparkmedia@gmail.com"
                  className="flex items-start gap-3 p-3 md:p-4 bg-[#111] border border-white/10 rounded-lg hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email Us</p>
                    <p className="text-xs md:text-sm font-medium truncate">creativesparkmedia@gmail.com</p>
                  </div>
                </Link>

                <Link
                  href="tel:+1234567890"
                  className="flex items-start gap-3 p-3 md:p-4 bg-[#111] border border-white/10 rounded-lg hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Call Us</p>
                    <p className="text-xs md:text-sm font-medium">+91 8179531973</p>
                  </div>
                </Link>

                <div className="flex items-start gap-3 p-3 md:p-4 bg-[#111] border border-white/10 rounded-lg">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Visit Studio</p>
                    <p className="text-xs md:text-sm font-medium">
                      Hyderabad, Telangana
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 md:p-4 bg-[#111] border border-white/10 rounded-lg">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Working Hours</p>
                    <p className="text-xs md:text-sm font-medium">
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      <span className="text-white/80">For Weekend Contact Us</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex items-center gap-2">
                  <Link
                    href="https://www.linkedin.com/company/creative-spark-media/about/" target="_blank"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </Link>

                </div>
              </div>

              {/* Quick Response Badge */}
              <div className="p-3 md:p-4 bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                  <p className="text-xs md:text-sm text-white/70">
                    <span className="text-white font-medium">Quick Response</span> - We reply within 2 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-[#111] border border-white/10 rounded-lg p-4 md:p-8 space-y-4 md:space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/60 text-xs md:text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/60 text-xs md:text-sm mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white/60 text-xs md:text-sm mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-white/60 text-xs md:text-sm mb-2">
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label htmlFor="service" className="block text-white/60 text-xs md:text-sm mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="influencer-marketing">Influencer Marketing</option>
                      <option value="full-package">Full Package</option>
                      <option value="brand-shoots">Brand Shoots</option>
                      <option value="product-shoots">Product Shoots</option>
                      <option value="advertising-shoots">Advertising Shoots</option>
                      <option value="celebrity-management">Celebrity Management</option>
                      <option value="social-media-management">Social Media Management</option>
                      <option value="content-creation">Content Creation</option>
                      <option value="website-designing">Website Designing</option>
                      <option value="complete-brand-designing">Complete Brand Designing</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-white/60 text-xs md:text-sm mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm focus:outline-none focus:border-white/30 transition-colors appearance-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1l">Under ₹1 Lakh</option>
                      <option value="1l-5l">₹1 Lakh - ₹5 Lakh</option>
                      <option value="5l-10l">₹5 Lakh - ₹10 Lakh</option>
                      <option value="10l-plus">₹10 Lakh+</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/60 text-xs md:text-sm mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-3 py-2.5 md:px-4 md:py-3 text-xs md:text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 md:py-4 bg-white text-black text-xs md:text-sm font-medium hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
