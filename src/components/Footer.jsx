import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Doctors", href: "#doctors" },
    { label: "Services", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];
const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#", hoverClass: "hover:bg-blue-600" },
    { icon: Twitter, label: "Twitter", href: "#", hoverClass: "hover:bg-sky-500" },
    { icon: Instagram, label: "Instagram", href: "#", hoverClass: "hover:bg-pink-600" },
    { icon: Youtube, label: "YouTube", href: "#", hoverClass: "hover:bg-red-600" },
];
export default function Footer() {
    const scrollTo = (id) => {
        const el = document.querySelector(id);
        if (el)
            el.scrollIntoView({ behavior: "smooth" });
    };
    return (<footer className="bg-gray-950 text-gray-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand — wider */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-md">
                <Heart className="w-5 h-5 text-white fill-white"/>
              </div>
              <div>
                <p className="font-bold text-white text-base">Navjivan Hospital</p>
                <p className="text-xs text-green-400 font-medium">Your Health, Our Priority</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              A premier multi-speciality hospital in Bharuch, Gujarat, committed to delivering exceptional healthcare with compassion, innovation, and clinical excellence.
            </p>

            {/* Emergency CTA */}
            <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-4 mb-5">
              <p className="text-red-400 font-semibold text-sm mb-1">Emergency Helpline</p>
              <a href="tel:+911800999000" className="text-white font-bold text-xl hover:text-red-400 transition-colors">
                1800-999-000
              </a>
              <p className="text-gray-500 text-xs mt-1">Available 24 hours, 7 days a week</p>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, label, href, hoverClass }) => (<motion.a key={label} href={href} aria-label={label} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className={`w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white ${hoverClass} hover:border-transparent transition-all`} data-testid={`social-${label.toLowerCase()}`}>
                  <Icon className="w-4 h-4"/>
                </motion.a>))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (<li key={label}>
                  <button onClick={() => scrollTo(href)} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" data-testid={`footer-link-${label.toLowerCase().replace(/\s+/g, "-")}`}>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all"/>
                    {label}
                  </button>
                </li>))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-5">
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-blue-400"/>
                </div>
                <span className="text-sm text-gray-400 leading-relaxed">SECOND FLOOR, Skyline Business Hub, Old Relief
Cinema Complex, Panchbatti, Station Road Bharuch, Gujarat, 892001</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-600/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-green-400"/>
                </div>
                <div>
                  <p className="text-sm text-gray-400">+91 1800-123-456 (General)</p>
                  <p className="text-sm text-gray-400">+91 1800-999-000 (Emergency)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-600/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-orange-400"/>
                </div>
                <div>
                  <p className="text-sm text-gray-400">info@navjivanhospital.in</p>
                  <p className="text-sm text-gray-400">appointments@navjivanhospital.in</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 Navjivan Hospital. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400 mx-0.5"/> for better healthcare in Gujarat
          </p>
        </div>
      </div>
    </footer>);
}
