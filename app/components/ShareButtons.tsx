'use client'

import { usePathname } from 'next/navigation'
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

type Props = {
  title: string
}

export default function ShareButtons({ title }: Props) {
  const pathname = usePathname()
  const fullUrl = `http://localhost:3000${pathname}`

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`

  return (
    <div className="mt-20 text-center">
      <h3 className="text-2xl font-semibold mb-6">📤 Share this post:</h3>
      <div className="flex justify-center gap-6 text-4xl">
        <a
          href={twitterShare}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition duration-200"
          aria-label="Share on Twitter"
        >
          <FaTwitter />
        </a>
        <a
          href={linkedInShare}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-800 transition duration-200"
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href={facebookShare}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition duration-200"
          aria-label="Share on Facebook"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  )
}
