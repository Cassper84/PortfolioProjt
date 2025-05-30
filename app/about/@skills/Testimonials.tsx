'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Jane Doe",
    position: "CTO, TechCorp",
    photo: "/images/jane.jpg",
    text: "An exceptional developer with a keen eye for detail. Delivered beyond expectations!",
  },
  {
    name: "John Smith",
    position: "Founder, InnovateX",
    photo: "/images/james.png",
    text: "Professional, proactive, and extremely talented. Highly recommended.",
  },
  {
    name: "Mary Johnson",
    position: "Product Manager, Creatives Inc.",
    photo: "/images/mary.jpg",
    text: "Great communication and stellar results. A pleasure to work with!",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(next, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current, isPaused]);

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    trackMouse: true,
  });

  return (
    <div className="space-y-6 px-4 sm:px-0 w-full">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100 transition-colors duration-500">
        Testimonials
      </h2>

      <div
        {...handlers}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className={`relative w-full p-8 border rounded-2xl shadow-lg 
          bg-white dark:bg-gray-800 
          flex flex-col items-center text-center
          transition-colors duration-500
          hover:shadow-2xl
          cursor-default
          ${fade ? "opacity-100" : "opacity-0"}
          transition-opacity duration-300 ease-in-out
        `}
      >
        <div className="w-20 h-20 relative">
          <Image
            src={testimonials[current].photo}
            alt={testimonials[current].name}
            fill
            className="rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400 transition-all duration-300"
          />
        </div>
        <p className="mt-6 text-gray-700 dark:text-gray-300 italic text-lg leading-relaxed max-w-3xl transition-colors duration-500">
          &quot;{testimonials[current].text}&quot;
        </p>
        <p className="mt-4 font-semibold text-indigo-600 dark:text-indigo-400 text-xl transition-colors duration-500">
          {testimonials[current].name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-500">
          {testimonials[current].position}
        </p>

        <div className="flex justify-center mt-8 gap-6">
          <button
            onClick={prev}
            className="flex items-center text-sm px-4 py-2 border border-indigo-500 rounded-md 
              text-indigo-600 dark:text-indigo-400 
              hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900
              transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Prev
          </button>

          <button
            onClick={next}
            className="flex items-center text-sm px-4 py-2 border border-indigo-500 rounded-md 
              text-indigo-600 dark:text-indigo-400 
              hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900
              transition-colors duration-300"
            aria-label="Next testimonial"
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrent(idx);
                  setFade(true);
                }, 300);
              }}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`
                w-3 h-3 rounded-full transition-colors duration-300
                ${current === idx
                  ? "bg-indigo-600 dark:bg-indigo-400"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-indigo-400 dark:hover:bg-indigo-500"}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
