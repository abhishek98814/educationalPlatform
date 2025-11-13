import { Calendar, Clock, MapPin, Users, ChevronRight, Video, BookOpen, Timer, CheckCircle, AlertCircle, Sparkles, Star, Zap, Trophy } from "lucide-react";
import { useState, useEffect } from "react";

export default function SchedulePage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const schedule = [
    {
      id: 1,
      title: "React.js Fundamentals",
      type: "Live Class",
      instructor: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      date: "2025-09-28",
      day: "Today",
      time: "10:00 AM - 12:00 PM",
      duration: "2h",
      location: "Room 101",
      participants: 25,
      maxParticipants: 30,
      status: "live",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
      icon: Video,
      tags: ["Beginner", "Frontend"],
      rating: 4.8,
      isLive: true,
    },
    {
      id: 2,
      title: "Data Structures in Java",
      type: "Workshop",
      instructor: "Michael Park",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2025-09-29",
      day: "Tomorrow",
      time: "2:00 PM - 4:00 PM",
      duration: "2h",
      location: "Lab 202",
      participants: 18,
      maxParticipants: 20,
      status: "upcoming",
      color: "from-purple-500 to-pink-500",
      bg: "bg-gradient-to-br from-purple-50 to-pink-50",
      icon: BookOpen,
      tags: ["Intermediate", "Backend"],
      rating: 4.9,
      isLive: false,
    },
    {
      id: 3,
      title: "Machine Learning Intro",
      type: "Lecture",
      instructor: "Dr. Emily Watson",
      avatar: "https://images.unsplash.com/photo-1580489944680-05a0b4a5852d?w=100&h=100&fit=crop&crop=face",
      date: "2025-10-01",
      day: "Wednesday",
      time: "11:00 AM - 1:00 PM",
      duration: "2h",
      location: "Room 305",
      participants: 30,
      maxParticipants: 35,
      status: "upcoming",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-gradient-to-br from-emerald-50 to-teal-50",
      icon: Timer,
      tags: ["Advanced", "AI/ML"],
      rating: 5.0,
      isLive: false,
    },
    {
      id: 4,
      title: "CSS Grid & Flexbox Masterclass",
      type: "Live Session",
      instructor: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2025-09-27",
      day: "Yesterday",
      time: "3:00 PM - 5:00 PM",
      duration: "2h",
      location: "Online",
      participants: 42,
      maxParticipants: 50,
      status: "completed",
      color: "from-green-500 to-emerald-500",
      bg: "bg-gradient-to-br from-green-50 to-emerald-50",
      icon: CheckCircle,
      tags: ["Design", "CSS"],
      rating: 4.7,
      isLive: false,
    },
    {
      id: 5,
      title: "TypeScript Deep Dive",
      type: "Bootcamp",
      instructor: "James Liu",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
      date: "2025-09-30",
      day: "Tuesday",
      time: "9:00 AM - 1:00 PM",
      duration: "4h",
      location: "Auditorium A",
      participants: 38,
      maxParticipants: 40,
      status: "almost-full",
      color: "from-orange-500 to-red-500",
      bg: "bg-gradient-to-br from-orange-50 to-red-50",
      icon: AlertCircle,
      tags: ["Advanced", "TypeScript"],
      rating: 4.9,
      isLive: false,
    },
  ];

  const formatTime = (dateStr, timeStr) => {
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":");
    const date = new Date(dateStr);
    date.setHours(period === "PM" ? parseInt(hours) + 12 : parseInt(hours), parseInt(minutes));
    return date;
  };

  const getLiveStatus = (item) => {
    if (item.status === "live") {
      return (
        <div className="absolute top-4 left-4 flex items-center gap-2 animate-pulse">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
          <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">LIVE NOW</span>
        </div>
      );
    }
    if (item.status === "almost-full") {
      return (
        <div className="absolute top-4 left-4">
          <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Almost Full
          </span>
        </div>
      );
    }
    return null;
  };

  const getCountdown = (item) => {
    const sessionTime = formatTime(item.date, item.time.split(" - ")[0]);
    const diff = sessionTime - currentTime;
    if (diff > 0 && diff < 3600000 && item.status === "upcoming") {
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      return (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
          <Timer className="w-3 h-3" />
          {minutes}m {seconds}s
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative">
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${15 + i * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Header */}
        <header className="text-center relative">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl mb-6 border border-white/50">
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
            <span className="text-sm font-bold text-gray-700">Your Learning Journey Starts Here</span>
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
            My Schedule
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Master your craft with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-bold">live sessions</span> taught by industry experts
          </p>
        </header>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "This Week", value: "5", icon: Calendar, color: "from-blue-500 to-cyan-500", delay: 0 },
            { label: "Live Now", value: "1", icon: Video, color: "from-red-500 to-pink-500", delay: 0.1 },
            { label: "Total Hours", value: "18", icon: Clock, color: "from-purple-500 to-indigo-500", delay: 0.2 },
            { label: "Streak", value: "14", icon: Trophy, color: "from-yellow-500 to-orange-500", delay: 0.3 },
          ].map((stat, i) => (
            <div
              key={i}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
              style={{ animation: `fadeInUp 0.6s ease-out forwards`, animationDelay: `${stat.delay}s`, opacity: 0 }}
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

        {/* Schedule Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {schedule.map((item, index) => {
            const progress = (item.participants / item.maxParticipants) * 100;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group relative"
                style={{
                  animation: `slideIn 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                }}
              >
                {/* Card Container */}
                <div className={`relative h-full bg-white/90 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-3xl hover:-translate-y-3 border border-white/50 ${item.bg}`}>
                  {/* Live Indicator */}
                  {item.isLive && (
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-pink-500 animate-pulse" />
                  )}

                  {/* Floating Elements */}
                  {getLiveStatus(item)}
                  {getCountdown(item)}

                  {/* Card Content */}
                  <div className="p-7 space-y-5">
                    {/* Instructor */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={item.avatar}
                            alt={item.instructor}
                            className="w-12 h-12 rounded-full ring-4 ring-white shadow-lg"
                          />
                          {item.isLive && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-500 rounded-full animate-ping" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{item.instructor}</p>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-gray-600">{item.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Title & Type */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full">
                          {item.type}
                        </span>
                        <span className="text-xs text-gray-500">• {item.day}</span>
                      </div>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-white/70 rounded-2xl backdrop-blur">
                        <div className="p-2 bg-blue-100 rounded-xl">
                          <Clock className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Time</p>
                          <p className="font-semibold text-gray-800">{item.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/70 rounded-2xl backdrop-blur">
                        <div className="p-2 bg-red-100 rounded-xl">
                          <MapPin className="w-4 h-4 text-red-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Location</p>
                          <p className="font-semibold text-gray-800">{item.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Participants Progress */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-gray-700 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {item.participants} / {item.maxParticipants}
                        </span>
                        <span className="text-gray-500">{Math.round(progress)}% full</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out rounded-full shadow-lg`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <button
                      className={`w-full py-4 font-bold text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 transform group-hover:scale-105 shadow-xl ${
                        item.status === "completed"
                          ? "bg-gradient-to-r from-gray-400 to-gray-600 cursor-not-allowed"
                          : item.isLive
                          ? "bg-gradient-to-r from-red-500 to-pink-600 animate-pulse"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      }`}
                      disabled={item.status === "completed"}
                    >
                      {item.status === "completed" ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Session Completed
                        </>
                      ) : item.isLive ? (
                        <>
                          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                          Join Live Now
                        </>
                      ) : (
                        <>
                          {item.status === "almost-full" && <AlertCircle className="w-5 h-5" />}
                          Join Session
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

        {/* CTA Section */}
        <div className="text-center py-12">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50">
            <Trophy className="w-16 h-16 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-800">Never Miss a Session</h3>
            <p className="text-gray-600 max-w-md">
              Enable notifications and get reminded 15 minutes before every class
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Enable Notifications
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 space-y-1">
          <p>Times displayed in your local timezone • Auto-sync every 30 seconds</p>
          <p className="text-xs">© 2025 Learning Platform • Made with passion</p>
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
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>
    </div>
  );
}