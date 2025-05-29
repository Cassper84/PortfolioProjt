'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LoadingSpinnerOnRouteChange() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [pathname])

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 animate-pulse z-50" />
  ) : null
}
