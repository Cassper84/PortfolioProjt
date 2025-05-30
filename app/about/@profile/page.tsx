'use client';

import MyProfilePic from "@/app/components/MyProfilePic";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaGithub, FaFacebook, FaTelegram, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

export default function ProfileSection() {
  console.log("ProfileSection rendered");
  return (
    <Card className="bg-white text-black border border-gray-200 dark:bg-[#1e293b] dark:text-[#f1f5f9] dark:border-[#334155]">
      <div>
        <MyProfilePic />
      </div>
      <CardHeader>
        <CardTitle className="text-3xl text-center">Who I am</CardTitle>
        <CardDescription className="text-xl text-center">Full-stack Developer</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Hi, I am{" "}
          <a
            href="https://www.linkedin.com/in/peter-ono-49aa56178/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 hover:underline"
          >
            Onochie Peter
          </a>
          . I&apos;m a dedicated and detail-oriented full-stack developer with a strong passion for building intuitive, scalable, and performant web applications. I specialize in modern technologies like <span className="text-blue-400 font-bold">React</span>, <span className="text-orange-400 font-bold">Next.js</span>, <span className="text-purple-400 font-bold">TypeScript</span>, and <span className="text-green-400 font-bold">Node.js</span> to craft seamless user experiences from front to back.
        </p>
        <p className="mt-2 text-muted-foreground">
          With a keen eye for clean design and a love for solving complex problems, I thrive in collaborative environments where innovation meets functionality.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.buymeacoffee.com/cassper84"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/white-button.webp"
              alt="Buy me a Coffee Widget"
              width={256}  // specify image width
              height={75}  // specify image height
              priority      // optional: preloads the image for faster display
            />
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 pt-4 text-xl text-slate-800 dark:text-gray-200">
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
          <Link href="https://www.linkedin.com/in/peter-ono-49aa56178/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
            <FaLinkedin />
          </Link>
          <Link href="https://www.instagram.com/onochiepeter2022/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
            <FaInstagram />
          </Link>
          <Link href="https://www.tiktok.com/@cassper700" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
            <FaTiktok />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
