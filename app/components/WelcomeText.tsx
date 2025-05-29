"use client";

import { useEffect, useRef } from "react";

type Props = {
  interClassName: string;
};

export default function WelcomeText({ interClassName }: Props) {
  const emojiRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const emoji = emojiRef.current;
      if (!emoji) return;

      // Remove and re-add animation class to restart
      emoji.classList.remove("animate-wave");
      void emoji.offsetWidth; // force reflow
      emoji.classList.add("animate-wave");
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`mt-6 mb-6 text-2xl sm:mt-10 sm:mb-10 sm:text-4xl md:text-5xl text-center dark:text-white ${interClassName}`}
    >
      Hi, Welcome{" "}
      <span
        ref={emojiRef}
        className="inline-block text-gray-500"
      >
        👋🏽
      </span>
      &nbsp;
      <span className="whitespace-nowrap">
        I&apos;m <span className="font-bold">Ezunu Onochie Peter</span>
      </span>
    </p>
  );
}
