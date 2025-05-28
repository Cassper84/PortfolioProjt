import { Inter } from 'next/font/google'
import ParticlesBackground from './components/ParticlesBackground'
import RotatingText from './components/RotatingText'
import MyProfilePic from './components/MyProfilePic'

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const revalidate = 86400

export default function Home() {

  return (
    <>
      <ParticlesBackground />
      <main className="px-6 mx-auto">
      <MyProfilePic />
        <p
          className={`mt-6 mb-6 text-2xl sm:mt-10 sm:mb-10 sm:text-4xl md:text-5xl text-center dark:text-white ${inter.className}`}
        >
          Hi, Welcome 👋&nbsp;
          <span className="whitespace-nowrap">
            I&apos;m <span className="font-bold">Cassper</span>
          </span>
        </p>
        <RotatingText />
      </main>
    </>
  )
}
