'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const rotatingTexts = [
  'Software Engineer',
  'Open Source Contributor',
  'Problem Solver',
  'Tech Enthusiast',
  'Full Stack Developer',
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % rotatingTexts.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-8 text-center">
      {/* Rotating line */}
      <div
        className={`
          mt-6 sm:mt-16 md:mt-20
          h-8 sm:h-10 md:h-12
          text-xl sm:text-4xl md:text-5xl
          relative flex justify-center items-center
          font-medium
        `}        
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={rotatingTexts[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="absolute text-current"
          >
            {rotatingTexts[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Subtext */}
      <p className="mt-6 sm:mt-14 text-sm sm:text-xl font-medium">
  Passionate about building web applications and exploring new technologies.
  <br />
  ReactJs | NodeJs | NextJs | AWS
</p>


      {/* Button */}
      <div className="mt-6 sm:mt-8 flex justify-center">
        <Link href="/about">
          <button
            className={`
              w-40 sm:w-48 md:w-56
              border border-gray-400 bg-transparent
              text-current hover:text-current
              hover:border-gray-600
              rounded-md px-4 py-2
              flex items-center justify-center gap-2
              text-sm sm:text-base md:text-lg
              cursor-pointer transition-all
            `}
          >
            Know more
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
}
