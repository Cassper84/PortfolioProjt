'use client'

import { useTheme } from 'next-themes'

export default function ThemeDebugger() {
    const { theme } = useTheme()
    return (
      <div className="fixed bottom-4 left-4 p-2 bg-black text-white text-xs z-50">
        Current theme: {theme}
      </div>
    )
  }

