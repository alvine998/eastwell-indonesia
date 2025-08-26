import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-100 border-t border-gray-200 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold">Eastwell Indonesia</h2>
          <p className="mt-2 text-sm">
            Bringing innovation and quality to the Indonesian property market.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-gray-900">
                Gallery
              </a>
            </li>
            <li>
              <a href="/career" className="hover:text-gray-900">
                Career
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-gray-900">
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-900">
              <Instagram />
            </a>
            <a href="#" className="hover:text-gray-900">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Eastwell Indonesia. All rights reserved.
      </div>
    </motion.footer>
  );
}
