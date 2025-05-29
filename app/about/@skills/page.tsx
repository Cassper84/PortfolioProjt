'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Code,
  Server,
  Database,
  Settings,
  Palette,
  GitBranch,
  UserCheck,
  MessageSquare,
  Workflow,
  BookOpenCheck,
  Lightbulb
} from "lucide-react";

import TestimonialCarousel from "./Testimonials";

const cardClass = `
  group shadow-md border rounded-2xl p-4
  bg-white text-black border-gray-200
  dark:bg-[#1e293b] dark:text-[#f1f5f9] dark:border-[#334155]
  transition-all duration-300 ease-in-out 
  hover:shadow-xl hover:scale-[1.02] hover:ring-1 hover:ring-blue-300
  h-full flex flex-col
`;

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-center font-bold text-3xl mb-8">About Me</h1>
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6">
          I'm a <span className="font-semibold text-foreground">full-stack developer</span> skilled in building responsive and scalable web applications using technologies like
          <span className="font-medium"> JavaScript, React, Next.js, Node.js, Express,</span> and <span className="font-medium">MongoDB</span>. I also work confidently with
          <span className="font-medium"> TypeScript, Tailwind CSS,</span> and <span className="font-medium">HTML</span>.
          <br className="hidden sm:block" />
          <br />
          I'm open to <span className="italic">full-time roles, freelance projects,</span> and <span className="italic">collaborative or open-source opportunities</span>. Below are the core technologies and tools I use to craft high-performance applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <Card className={cardClass} data-aos="zoom-in" data-aos-delay="100">
          <CardHeader>
            <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors duration-300">
              Skills & Tools <span className="text-yellow-500">🛠️</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="grid grid-cols-1 gap-4 text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              <li className="flex items-start gap-2">
                <Code size={18} className="text-blue-500 mt-1" />
                <span><span className="font-medium text-foreground">Frontend:</span> React, Next.js, TypeScript</span>
              </li>
              <li className="flex items-start gap-2">
                <Server size={18} className="text-green-500 mt-1" />
                <span><span className="font-medium text-foreground">Backend:</span> Node.js, Express.js</span>
              </li>
              <li className="flex items-start gap-2">
                <Database size={18} className="text-purple-500 mt-1" />
                <span><span className="font-medium text-foreground">Databases:</span> MongoDB, PostgreSQL</span>
              </li>
              <li className="flex items-start gap-2">
                <Settings size={18} className="text-pink-500 mt-1" />
                <span><span className="font-medium text-foreground">State Management:</span> Redux, Zustand</span>
              </li>
              <li className="flex items-start gap-2">
                <Palette size={18} className="text-orange-500 mt-1" />
                <span><span className="font-medium text-foreground">Styling:</span> Tailwind CSS, Bootstrap</span>
              </li>
              <li className="flex items-start gap-2">
                <GitBranch size={18} className="text-red-500 mt-1" />
                <span><span className="font-medium text-foreground">Tools:</span> Git, GitHub, CI/CD</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {[{
          icon: <UserCheck size={20} className="text-blue-500" />,
          title: "Soft Skills",
          items: [
            "Strong communication & team collaboration",
            "Problem-solving mindset & attention to detail",
            "Self-motivated, adaptive & reliable",
            "Time management & client-oriented approach"
          ]
        }, {
          icon: <Workflow size={20} className="text-green-600" />,
          title: "Workflow & Best Practices",
          items: [
            "Agile/Scrum development",
            "Version control with Git & GitHub",
            "Code reviews, clean architecture",
            "CI/CD & deployment with Vercel/Docker"
          ]
        }, {
          icon: <BookOpenCheck size={20} className="text-yellow-500" />,
          title: "Learning & Growth",
          items: [
            "Continuously exploring new frameworks & tools",
            "Learning cloud platforms: AWS & Firebase",
            "Contributing to open-source projects",
            "Investing in UI/UX skills & accessibility"
          ]
        }, {
          icon: <Lightbulb size={20} className="text-purple-500" />,
          title: "Work Preferences",
          items: [
            "Remote or hybrid work environments",
            "Flexible hours with async communication",
            "Project-based and client-driven delivery",
            "Startup or product-focused teams preferred"
          ]
        }, {
          icon: <MessageSquare size={20} className="text-cyan-600" />,
          title: "Project Experience",
          items: [
            "Developed full-stack web apps with user auth & dashboards",
            "Built RESTful APIs with Express & MongoDB",
            "Integrated third-party APIs (Stripe, OpenAI, etc.)",
            "Responsive design using Tailwind CSS & accessibility best practices"
          ]
        }].map(({ icon, title, items }, i) => (
          <Card key={i} className={cardClass} data-aos="zoom-in" data-aos-delay="100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 group-hover:text-blue-600 transition-colors duration-300">
                {icon} {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm sm:text-base group-hover:text-foreground transition-colors duration-300">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonial full width and outside the grid */}
      <div className="w-full mt-10" data-aos="fade-up" data-aos-delay="100">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
