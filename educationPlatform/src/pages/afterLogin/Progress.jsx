import { BookOpen, TrendingUp, Clock, Target, Flame, Award, ChevronRight, Sparkles, Zap, Timer, Trophy } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProgressPage() {
  const [celebration, setCelebration] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerCelebration = (id) => {
    setCelebration(id);
    setTimeout(() => setCelebration(null), 3000);
  };

  const progressData = [
    {
      id: 1,
      course: "React.js Fundamentals",
      completed: 78,
      hoursSpent: 14.5,
      totalHours: 20,
      lessons: 18,
      totalLessons: 24,
      streak: 5,
      lastActive: "2 hours ago",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
      icon: BookOpen,
      badge: "On Fire",
      badgeColor: "from-orange-500 to-red-500",
      isTopPerformer: true,
    },
    {
      id: 2,
      course: "Data Structures in Java",
      completed: 62,
      hoursSpent: 11.2,
      totalHours: 18,
      lessons: 15,
      totalLessons: 25,
      streak: 3,
      lastActive: "Yesterday",
      color: "from-purple-500 to-pink-500",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50",
      icon: Target,
      badge: "Consistent",
      badgeColor: "from-green-500 to-emerald-500",
      isTopPerformer: false,
    },
    {
      id: 3,
      course: "Machine Learning Intro",
      completed: 35,
      hoursSpent: 5.8,
      totalHours: 25,
      lessons: 7,
      totalLessons: 20,
      streak: 1,
      lastActive: "3 days ago",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
      icon: Zap,
      badge: "Newbie",
      badgeColor: "from-gray-400 to-gray-600",
      isTopPerformer: false,
    },
    {
      id: 4,
      course: "Advanced CSS Mastery",
      completed: 100,
      hoursSpent: 22,
      totalHours: 22,
      lessons: 30,
      totalLessons: 30,
      streak: 0,
      lastActive: "1 week ago",
      color: "from-yellow-500 to-amber-500",
      bg: "bg-gradient-to-br from-yellow-50 to-amber-50",
      icon: Award,
      badge: "Completed",
      badgeColor: "from-green-500 to-emerald-500",
      isTopPerformer: true,
    },
  ];

  const totalCourses = progressData.length;
  const avgProgress = progressData.reduce((sum, item) => sum + item.completed, 0) / totalCourses;
  const totalHours = progressData.reduce((sum, item) => sum + item.hoursSpent, 0);
  const activeCourses = progressData.filter(c => c.completed > 0 && c.completed < 100).length;
  const completedCourses = progressData.filter(c => c.completed === 100).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + i * 4}s`,
              }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400 opacity-30" />
            </div>
          ))}
        </div>

        {/* Hero Header */}
        <header className="text-center relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl mb-6 border border-white/50">
            <TrendingUp className="w-6 h-6 text-green-500 animate-pulse" />
            <span className="text-sm font-bold text-gray-700">Weekly Goal: 85% • You're at {avgProgress.toFixed(0)}%</span>
            <TrendingUp className="w-6 h-6 text-green-500 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
            Learning Progress
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Track every step of your <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">educational journey</span>
          </p>
        </header>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Avg Progress", value: `${avgProgress.toFixed(0)}%`, icon: TrendingUp, color: "from-blue-500 to-cyan-500", trend: "+12%" },
            { label: "Active Courses", value: activeCourses, icon: BookOpen, color: "from-purple-500 to-pink-500", trend: null },
            { label: "Total Hours", value: totalHours.toFixed(1), icon: Clock, color: "from-emerald-500 to-teal-500", trend: "+3.2h" },
            { label: "Completed", value: completedCourses, icon: Award, color: "from-yellow-500 to-amber-500", trend: null },
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
                {stat.trend && (
                  <p className="text-xs font-semibold text-green-600 mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend} this week
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Course Progress Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {progressData.map((course, index) => {
            const Icon = course.icon;
            const lessonProgress = (course.lessons / course.totalLessons) * 100;
            const timeProgress = (course.hoursSpent / course.totalHours) * 100;
            const showCelebration = celebration === course.id;

            return (
              <div
                key={course.id}
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

                {/* Course Card */}
                <div className={`relative h-full bg-white/90 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl hover:-translate-y-3 border-2 border-transparent ${course.bg}`}>
                  {/* Gradient Top Bar */}
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />

                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 text-xs font-bold text-white rounded-full bg-gradient-to-r ${course.badgeColor} shadow-lg flex items-center gap-1`}>
                      {course.badge === "On Fire" && <Flame className="w-3 h-3" />}
                      {course.badge === "Consistent" && <Timer className="w-3 h-3" />}
                      {course.badge === "Completed" && <Award className="w-3 h-3" />}
                      {course.badge}
                    </div>
                  </div>

                  <div className="p-7 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-xl transition-all duration-500 group-hover:scale-110`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      {course.isTopPerformer && (
                        <div className="flex items-center gap-1 text-xs font-bold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                          <Trophy className="w-3 h-3" />
                          Top 10%
                        </div>
                      )}
                    </div>

                    {/* Title & Meta */}
                    <div>
                      <h3 className={`text-2xl font-bold transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${course.color}`}>
                        {course.course}
                      </h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.lastActive}
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="w-4 h-4 text-orange-500" />
                          {course.streak} day streak
                        </span>
                      </div>
                    </div>

                    {/* Progress Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-gray-700">Lessons</span>
                          <span className="font-bold text-blue-600">{lessonProgress.toFixed(0)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${course.color} transition-all duration-1000 ease-out rounded-full`}
                            style={{ width: `${lessonProgress}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500">{course.lessons} / {course.totalLessons} completed</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-gray-700">Time</span>
                          <span className="font-bold text-purple-600">{timeProgress.toFixed(0)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${course.color} transition-all duration-1000 ease-out rounded-full`}
                            style={{ width: `${timeProgress}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500">{course.hoursSpent}h / {course.totalHours}h</p>
                      </div>
                    </div>

                    {/* Overall Progress */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-800">Overall Progress</span>
                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                          {course.completed}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                        <div
                          className={`h-full bg-gradient-to-r ${course.color} transition-all duration-1500 ease-out rounded-full relative overflow-hidden`}
                          style={{ width: `${course.completed}%` }}
                        >
                          <div className="absolute inset-0 bg-white/30 animate-shimmer" />
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => course.completed < 100 && triggerCelebration(course.id)}
                      className={`w-full py-4 font-bold text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 transform group-hover:scale-105 shadow-xl ${
                        course.completed === 100
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 cursor-default"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      }`}
                      disabled={course.completed === 100}
                    >
                      {course.completed === 100 ? (
                        <>
                          <Award className="w-5 h-5" />
                          Course Completed!
                        </>
                      ) : (
                        <>
                          Continue Learning
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

        {/* Weekly Goal Section */}
        <div className="mt-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 text-center">
          <Timer className="w-16 h-16 text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">This Week's Goal</h3>
          <p className="text-gray-600 mt-2">Complete 3 more lessons to hit 85% average</p>
          <div className="mt-6 max-w-md mx-auto">
            <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
              <span>Progress</span>
              <span>{avgProgress.toFixed(0)}% / 85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out rounded-full"
                style={{ width: `${Math.min(avgProgress, 85)}%` }}
              />
            </div>
          </div>
          <button className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
            View Weekly Plan
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 space-y-1">
          <p>Real-time sync • Last updated {currentTime.toLocaleTimeString()}</p>
          <p className="text-xs">© 2025 Learning Platform • Track. Learn. Succeed.</p>
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