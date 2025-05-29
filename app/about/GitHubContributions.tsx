"use client";

import React from "react";

type Props = {
  username: string;
};

const GitHubContributions: React.FC<Props> = ({ username }) => {
  const chartUrl = `https://ghchart.rshah.org/${username}`;

  return (
    <div className="my-10 text-center">
      <h3 className="text-2xl font-semibold mb-4">GitHub Contributions</h3>
      <img
        src={chartUrl}
        alt={`${username}'s GitHub contribution chart`}
        className="w-full max-w-3xl mx-auto"
      />
    </div>
  );
};

export default GitHubContributions;
