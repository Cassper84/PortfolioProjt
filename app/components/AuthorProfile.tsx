'use client';

import MyProfilePic from "@/app/components/MyProfilePic";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaTelegram,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

export default function AuthorProfile() {
  return (
    <Card className="bg-white text-black border border-gray-200 dark:bg-[#1e293b] dark:text-[#f1f5f9] dark:border-[#334155] w-72 stick-top-12">
      <div className="flex justify-center mt-6">
        <MyProfilePic />
      </div>

      <CardHeader className="text-center">
        <CardTitle className="text-xl">Who I am</CardTitle>
        <CardDescription className="text-base">Full-stack Developer</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 text-sm text-muted-foreground">
        <p>
          Hi, I am{" "}
          <a
            href="https://www.linkedin.com/in/peter-ono-49aa56178/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:underline"
          >
            Onochie Peter
          </a>
          , a passionate full-stack developer using{" "}
          <span className="font-semibold text-blue-500">React</span>,{" "}
          <span className="font-semibold text-orange-500">Next.js</span>,{" "}
          <span className="font-semibold text-purple-500">TypeScript</span>, and{" "}
          <span className="font-semibold text-green-500">Node.js</span>.
        </p>

        <p>
          I love solving complex problems, creating clean UIs, and building performant applications.
        </p>

        <div className="pt-4 flex justify-center">
          <a
            href="https://www.buymeacoffee.com/cassper84"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/white-button.webp"
              alt="Buy me a coffee"
              width={180}
              height={55}
              priority
            />
          </a>
        </div>

        <div className="flex justify-center gap-3 pt-4 text-lg text-slate-800 dark:text-gray-200">
          <Link href="https://www.facebook.com/onochie.peter.948" target="_blank" className="hover:text-cyan-600"><FaFacebook /></Link>
          <Link href="https://t.me/cassper84" target="_blank" className="hover:text-cyan-600"><FaTelegram /></Link>
          <Link href="https://github.com/Cassper84" target="_blank" className="hover:text-cyan-600"><FaGithub /></Link>
          <Link href="https://x.com/itzcassper" target="_blank" className="hover:text-cyan-600"><FaTwitter /></Link>
          <Link href="https://www.linkedin.com/in/peter-ono-49aa56178/" target="_blank" className="hover:text-cyan-600"><FaLinkedin /></Link>
          <Link href="https://www.instagram.com/onochiepeter2022/" target="_blank" className="hover:text-cyan-600"><FaInstagram /></Link>
          <Link href="https://www.tiktok.com/@cassper700" target="_blank" className="hover:text-cyan-600"><FaTiktok /></Link>
        </div>
      </CardContent>
    </Card>
  );
}
