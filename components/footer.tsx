import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Digital Marketing", href: "#services" },
    { name: "Influencer Marketing", href: "#services" },
    { name: "Product/Brand Shoots", href: "#services" },
    { name: "Advertisment Shoots", href: "#services" },
    { name: "Celebrity Management", href: "#services" },
    { name: "Social Media Management", href: "#services" },
    { name: "Website Designing", href: "#services" },
    { name: "Brand Designing", href: "#services" },

  ]

  const company = [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#work" },
    { name: "Pricing", href: "#pricing" },
    { name: "Our Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ]

  return (
    <footer className="bg-[#050505] border-t border-white/10">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Creative Media Spark Logo"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="text-lg font-semibold tracking-wide">Creative Media Spark</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Transforming brands through powerful visual storytelling. We capture moments that inspire, engage, and
              elevate your brand to new heights.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="mailto:creativesparkmedia@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>creativesparkmedia@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+918179531973"
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>+91 8179531973</span>
                </Link>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/50">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Hyderabad, Telangana
                    <br />
                    India
                  </span>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              {currentYear} Creative Media Spark. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
