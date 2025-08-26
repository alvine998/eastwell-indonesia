import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <motion.nav
      className="bg-gray-100 border-b border-gray-200 sticky top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Eastwell Indonesia
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/articles">Article</Link>
        </div>

        {/* Mobile Menu (hamburger) */}
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-200">
          <Menu className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </motion.nav>
  );
}
