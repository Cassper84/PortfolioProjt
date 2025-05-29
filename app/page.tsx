import { Inter } from 'next/font/google';
import ParticlesBackground from './components/ParticlesBackground';
import RotatingText from './components/RotatingText';
import MyProfilePic from './components/MyProfilePic';
import WelcomeText from './components/WelcomeText'; 

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <main className="px-6 mx-auto">
        <MyProfilePic />
        <WelcomeText interClassName={inter.className} /> 
        <RotatingText />
      </main>
    </>
  );
}
