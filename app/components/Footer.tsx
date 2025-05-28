'use client';

import Link from "next/link";
import { FaTwitter, FaGithub, FaFacebook, FaTelegram, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-16 py-6 backdrop-blur-md bg-slate-200/20 border-t border-black/10 shadow-inner text-sm text-muted-foreground">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Left: Copyright */}
                <p className="mb-4 md:mb-0">
                    © Copyright - {new Date().getFullYear()} Onochie Peter Ezunu . All rights reserved.
                </p>

                {/* Right: Social Icons */}
                <div className="flex space-x-4 text-2xl text-gray-500">
                    <Link href="https://www.facebook.com/onochie.peter.948" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
                        <FaFacebook />
                    </Link>
                    <Link href="https://t.me/cassper84" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
                        <FaTelegram />
                    </Link>
                    <Link href="https://github.com/Cassper84" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
                        <FaGithub />
                    </Link>
                    <Link href="https://x.com/itzcassper" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
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
            </div>
        </footer>
    );
}
