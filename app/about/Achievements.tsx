// AchievementsTimeline.tsx
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const achievements = [
  {
    title: "Best Developer Award",
    date: "March 2024",
    description: "Awarded for outstanding performance in web development projects.",
    icon: <Trophy className="w-5 h-5 text-yellow-500" />,
  },
  {
    title: "Open Source Contributor",
    date: "December 2023",
    description: "Recognized for valuable contributions to open source projects on GitHub.",
    icon: <Briefcase className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "Frontend Mastery Certification",
    date: "July 2023",
    description: "Completed advanced certification in frontend development.",
    icon: <GraduationCap className="w-5 h-5 text-green-500" />,
  },
];

export default function AchievementsTimeline() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Achievements</h2>
      <div className="border-l-2 border-gray-300 ml-4">
        {achievements.map((item, index) => (
          <div key={index} className="ml-4 mb-6">
            <div className="flex items-center gap-2">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
