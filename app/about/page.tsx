import React from 'react';
import AchievementTimeline from "./Achievements";
import GitHubContributions from './GitHubContributions';
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
       <AchievementTimeline />
       <GitHubContributions username="Cassper84" />
    </div>
  );
}
