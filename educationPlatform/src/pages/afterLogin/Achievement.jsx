import { Trophy, Star, Award, Medal } from "lucide-react";

export default function AchievementsPage() {
  // Sample achievements – you can fetch from API later
  const achievements = [
    {
      id: 1,
      title: "First Course Completed",
      description: "Successfully finished your very first course!",
      icon: Trophy,
      progress: 100,
      earned: true,
    },
    {
      id: 2,
      title: "Learning Streak",
      description: "Logged in and studied 7 days in a row.",
      icon: Star,
      progress: 70,
      earned: false,
    },
    {
      id: 3,
      title: "Top Performer",
      description: "Scored 90% or higher in a quiz.",
      icon: Award,
      progress: 100,
      earned: true,
    },
    {
      id: 4,
      title: "Community Helper",
      description: "Answered 10 questions in the community.",
      icon: Medal,
      progress: 40,
      earned: false,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Achievements</h1>
      <p className="text-gray-600">Track your progress and milestones</p>

      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className={`p-6 rounded-2xl border shadow-sm transition ${
              ach.earned
                ? "bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200"
                : "bg-white border-gray-100"
            }`}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`p-3 rounded-xl ${
                  ach.earned ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                <ach.icon className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{ach.title}</h2>
                <p className="text-sm text-gray-600">{ach.description}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    ach.progress === 100 ? "bg-green-500" : "bg-blue-500"
                  }`}
                  style={{ width: `${ach.progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {ach.progress}% {ach.progress === 100 ? "Completed" : "In Progress"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
