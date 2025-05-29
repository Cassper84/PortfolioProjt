"use client";

import Link from "next/link";
import { FaTwitter, FaGithub, FaFacebook, FaTelegram } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-200/10 border-b border-black/10 shadow-md sm:h-[100px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4 flex justify-between items-center overflow-x-hidden">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center font-bold text-2xl">
            <img
              src="/favicon.ico"
              alt="Cassper logo"
              className="w-8 h-8 rounded-sm"
            />
            <span className="ml-2">Cassper</span>
          </Link>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex flex-wrap items-center space-x-6 sm:space-x-10 md:space-x-12 py-4 text-sm sm:text-base font-medium">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors whitespace-nowrap ${isActive ? "text-sky-600" : "hover:text-sky-600"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Socials + Blog */}
        <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
          {/* Social Icons */}
          <div className="flex space-x-4 text-3xl">
            <Link
              href="https://www.facebook.com/onochie.peter.948"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://t.me/cassper84"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600"
            >
              <FaTelegram />
            </Link>
            <Link
              href="https://github.com/Cassper84"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://x.com/itzcassper"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600"
            >
              <FaTwitter />
            </Link>
          </div>

          {/* Blog Button */}
          <Link
            href="/blog"
            className="bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-700 transition"
          >
            Read Blog
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-200text-slate-800 dark:text-gray-200">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`block py-1 transition-colors ${isActive
                  ? "text-cyan-600 dark:text-sky-600"
                  : "hover:text-sky-600 dark:hover:text-sky-600"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            );
          })}

          {/* Social links */}
          <div className="flex justify-center gap-4 pt-4 text-xl text-slate-800 dark:text-gray-200">
            <Link
              href="https://www.facebook.com/onochie.peter.948"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://t.me/cassper84"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </Link>
            <Link
              href="https://github.com/Cassper84"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://x.com/itzcassper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </Link>
          </div>

          {/* Blog Button */}
          <Link
            href="/blog"
            className="block mt-4 text-center bg-slate-800 dark:bg-gray-700 text-white dark:text-gray-200 py-2 rounded-md font-semibold"
          >
            Read Blog
          </Link>
        </div>
      )}
    </nav>
  );
}
