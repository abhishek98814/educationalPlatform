import { Trophy, Star, Award, Medal, Sparkles, Flame, Target, Zap, Lock, CheckCircle, Clock, Users, BookOpen, ChevronRight  } from "lucide-react";
import { useState, useEffect } from "react";

export default function AchievementsPage() {
  const [unlocked, setUnlocked] = useState([]);
  const [celebration, setCelebration] = useState(null);

  useEffect(() => {
    // Simulate unlocking animation on mount
    const timer = setTimeout(() => {
      setUnlocked([1, 3]);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const triggerCelebration = (id) => {
    setCelebration(id);
    setTimeout(() => setCelebration(null), 3000);
  };

  const achievements = [
    {
      id: 1,
      title: "First Course Completed",
      description: "Successfully finished your very first course!",
      icon: Trophy,
      progress: 100,
      earned: true,
      rarity: "common",
      color: "from-yellow-400 to-amber-500",
      bg: "bg-gradient-to-br from-yellow-50 to-amber-50",
      points: 100,
      unlockedAt: "2025-09-15",
    },
    {
      id: 2,
      title: "7-Day Learning Streak",
      description: "Studied consistently for a full week",
      icon: Flame,
      progress: 71,
      earned: false,
      rarity: "rare",
      color: "from-orange-500 to-red-500",
      bg: "bg-gradient-to-br from-orange-50 to-red-50",
      points: 250,
      requirement: "Login daily for 7 days",
    },
    {
      id: 3,
      title: "Quiz Master",
      description: "Scored 95%+ on 5 quizzes",
      icon: Target,
      progress: 100,
      earned: true,
      rarity: "epic",
      color: "from-purple-500 to-pink-500",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50",
      points: 500,
      unlockedAt: "2025-09-20",
    },
    {
      id: 4,
      title: "Community Mentor",
      description: "Helped 25 learners in the forum",
      icon: Users,
      progress: 48,
      earned: false,
      rarity: "legendary",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
      points: 750,
      requirement: "Answer questions with upvote",
    },
    {
      id: 5,
      title: "Speed Runner",
      description: "Complete a course in under 3 days",
      icon: Zap,
      progress: 0,
      earned: false,
      rarity: "common",
      color: "from-cyan-500 to-blue-500",
      bg: "bg-gradient-to-br from-cyan-50 to-blue-50",
      points: 150,
      requirement: "Finish any course quickly",
    },
    {
      id: 6,
      title: "Perfectionist",
      description: "100% completion on 3 courses",
      icon: Star,
      progress: 67,
      earned: false,
      rarity: "epic",
      color: "from-indigo-500 to-purple-500",
      bg: "bg-gradient-to-br from-indigo-50 to-purple-50",
      points: 600,
      requirement: "Complete all lessons & quizzes",
    },
  ];

  const totalPoints = achievements
    .filter(a => a.earned)
    .reduce((sum, a) => sum + a.points, 0);

  const getRarityBadge = (rarity) => {
    const styles = {
      common: "bg-gray-100 text-gray-700 border-gray-300",
      rare: "bg-blue-100 text-blue-700 border-blue-300",
      epic: "bg-purple-100 text-purple-700 border-purple-300",
      legendary: "bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 border-orange-300",
    };
    return `px-3 py-1 text-xs font-bold rounded-full border ${styles[rarity] || styles.common}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative">
        {/* Floating Sparkles Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.6}s`,
                animationDuration: `${12 + i * 3}s`,
              }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400 opacity-30" />
            </div>
          ))}
        </div>

        {/* Hero Header */}
        <header className="text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl mb-6 border border-white/50">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <span className="text-sm font-bold text-gray-700">Level 7 • {totalPoints} Points</span>
            <Trophy className="w-6 h-6 text-yellow-500" />
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-500 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
            Achievements
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock badges, earn points, and showcase your <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">learning mastery</span>
          </p>
        </header>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Badges", value: achievements.filter(a => a.earned).length, icon: Medal, color: "from-yellow-500 to-amber-500" },
            { label: "Points Earned", value: totalPoints, icon: Star, color: "from-purple-500 to-pink-500" },
            { label: "In Progress", value: achievements.filter(a => !a.earned && a.progress > 0).length, icon: Clock, color: "from-blue-500 to-cyan-500" },
            { label: "Perfect Score", value: "3", icon: Target, color: "from-emerald-500 to-teal-500" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
              style={{ animation: `fadeInUp 0.6s ease-out forwards`, animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`} />
              <div className="relative z-10">
                <div className={`p-3 w-fit rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-3 shadow-lg`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-gray-800">{stat.value}</div>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((ach, index) => {
            const Icon = ach.icon;
            const isUnlocked = unlocked.includes(ach.id);
            const showCelebration = celebration === ach.id;

            return (
              <div
                key={ach.id}
                className="group relative"
                style={{
                  animation: `slideIn 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                }}
              >
                {/* Celebration Overlay */}
                {showCelebration && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="text-6xl animate-bounce">
                      <Sparkles className="text-yellow-400" />
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl hover:-translate-y-3 border-2 ${
                    ach.earned
                      ? `border-transparent ${ach.bg}`
                      : "bg-white/80 backdrop-blur-xl border-white/50"
                  }`}
                >
                  {/* Gradient Top Bar */}
                  {ach.earned && (
                    <div className={`h-2 bg-gradient-to-r ${ach.color}`} />
                  )}

                  {/* Lock Overlay for Locked */}
                  {!ach.earned && ach.progress === 0 && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 flex items-center justify-center">
                      <Lock className="w-12 h-12 text-white/70" />
                    </div>
                  )}

                  <div className="p-7 space-y-5 relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className={`p-4 rounded-2xl ${ach.earned ? `bg-gradient-to-br ${ach.color} text-white shadow-xl` : "bg-gray-200 text-gray-500"} transition-all duration-500 group-hover:scale-110`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="text-right">
                        <div className={getRarityBadge(ach.rarity)}>
                          {ach.rarity.charAt(0).toUpperCase() + ach.rarity.slice(1)}
                        </div>
                        <p className="text-2xl font-bold text-gray-800 mt-2">+{ach.points}</p>
                        <p className="text-xs text-gray-500">points</p>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className={`text-xl font-bold transition-all duration-500 ${
                        ach.earned
                          ? "text-transparent bg-clip-text bg-gradient-to-r " + ach.color
                          : "text-gray-800"
                      } group-hover:scale-105`}>
                        {ach.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{ach.description}</p>
                      {ach.unlockedAt && (
                        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          Unlocked on {new Date(ach.unlockedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </p>
                      )}
                      {ach.requirement && !ach.earned && (
                        <p className="text-xs text-gray-500 mt-2 italic">{ach.requirement}</p>
                      )}
                    </div>

                    {/* Progress Section */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-700">Progress</span>
                        <span className={`font-bold ${ach.progress === 100 ? "text-green-600" : "text-blue-600"}`}>
                          {ach.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                        <div
                          className={`h-full bg-gradient-to-r ${ach.color} transition-all duration-1000 ease-out rounded-full relative overflow-hidden ${
                            ach.earned ? "animate-pulse" : ""
                          }`}
                          style={{ width: `${ach.progress}%` }}
                        >
                          {ach.earned && (
                            <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => ach.progress < 100 && triggerCelebration(ach.id)}
                      className={`w-full py-3 font-bold text-white rounded-2xl flex items-center justify-center gap-2 transition-all duration-500 transform group-hover:scale-105 shadow-xl ${
                        ach.earned
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 cursor-default"
                          : ach.progress === 0
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      }`}
                      disabled={ach.earned || ach.progress === 0}
                    >
                      {ach.earned ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Unlocked!
                        </>
                      ) : ach.progress === 0 ? (
                        "Locked"
                      ) : (
                        <>
                          Continue
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Leaderboard Teaser */}
        <div className="mt-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 text-center">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">You're in the Top 5%!</h3>
          <p className="text-gray-600 mt-2">Keep earning points to climb the global leaderboard</p>
          <button className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            View Leaderboard
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 space-y-1">
          <p>New achievements unlock every week • Share your progress with friends</p>
          <p className="text-xs">© 2025 Learning Platform • Made with passion and code</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}