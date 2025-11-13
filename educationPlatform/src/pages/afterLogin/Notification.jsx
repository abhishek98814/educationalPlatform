import { Bell, Award, BookOpen, MessageCircle, CheckCircle, Clock, Sparkles, TrendingUp, X } from "lucide-react";
import { useState } from "react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "course",
      icon: BookOpen,
      title: "New Lesson Available",
      text: "New lesson added in *React Advanced* course.",
      time: "5m ago",
      read: false,
      action: "View Lesson",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      type: "achievement",
      icon: Award,
      title: "Achievement Unlocked!",
      text: "You earned the *JavaScript Mastery* badge.",
      time: "1h ago",
      read: false,
      action: "View Badge",
      color: "from-yellow-500 to-amber-500",
    },
    {
      id: 3,
      type: "message",
      icon: MessageCircle,
      title: "New Message",
      text: "Rahul sent you a message about the project.",
      time: "3h ago",
      read: false,
      action: "Reply",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      type: "system",
      icon: CheckCircle,
      title: "Subscription Updated",
      text: "Your premium plan has been renewed successfully.",
      time: "1d ago",
      read: true,
      action: "View Plan",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      type: "streak",
      icon: Sparkles,
      title: "7-Day Streak!",
      text: "Keep it up! You're on fire.",
      time: "2d ago",
      read: true,
      action: "View Progress",
      color: "from-orange-500 to-red-500",
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const clearAll = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const dismissNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-7 h-7 text-purple-600" />
              {unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
                  {unreadCount}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
              <p className="text-sm text-gray-600">Stay in the loop with your learning journey</p>
            </div>
          </div>
          {unreadCount > 0 && (
            <button
              onClick={clearAll}
              className="text-sm font-medium text-purple-600 hover:text-purple-700 transition"
            >
              Mark all as read
            </button>
          )}
        </header>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center shadow-sm border border-white/30">
            <div className="text-2xl font-bold text-gray-800">{unreadCount}</div>
            <p className="text-xs text-gray-600 mt-1">Unread</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center shadow-sm border border-white/30">
            <div className="text-2xl font-bold text-gray-800">{notifications.length}</div>
            <p className="text-xs text-gray-600 mt-1">Total</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-xl p-4 text-center shadow-sm border border-white/30">
            <div className="text-2xl font-bold text-gray-800">
              {notifications.filter(n => n.type === "achievement").length}
            </div>
            <p className="text-xs text-gray-600 mt-1">Achievements</p>
          </div>
        </div>

        {/* Notification List */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-white/40 overflow-hidden">
          {notifications.length === 0 ? (
            <div className="p-12 text-center">
              <Bell className="w-16 h-16 mx-auto text-gray-300 mb-3" />
              <p className="text-base font-medium text-gray-500">All caught up!</p>
              <p className="text-sm text-gray-400 mt-1">No new notifications</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {notifications.map((note, index) => {
                const Icon = note.icon;
                return (
                  <div
                    key={note.id}
                    className={`p-5 transition-all hover:bg-gray-50/50 ${
                      !note.read ? "bg-gradient-to-r from-purple-50 to-pink-50" : ""
                    }`}
                    style={{
                      animation: `fadeInUp 0.4s ease-out forwards`,
                      animationDelay: `${index * 0.05}s`,
                      opacity: 0,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon with gradient */}
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${note.color} text-white shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <p className="font-medium text-gray-800 text-base">{note.title}</p>
                            <p
                              className="text-sm text-gray-600 mt-1"
                              dangerouslySetInnerHTML={{ __html: note.text }}
                            />
                            <div className="flex items-center gap-3 mt-2">
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {note.time}
                              </span>
                              {!note.read && (
                                <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                              )}
                            </div>
                          </div>
                          <button
                            onClick={() => dismissNotification(note.id)}
                            className="p-1.5 hover:bg-gray-200 rounded-lg transition opacity-0 group-hover:opacity-100"
                          >
                            <X className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>

                        {/* Action Button */}
                        <div className="mt-3">
                          <button
                            onClick={() => markAsRead(note.id)}
                            className={`text-xs font-medium px-3 py-1.5 rounded-lg transition ${
                              !note.read
                                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                            }`}
                          >
                            {note.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 space-y-1">
          <p>Real-time updates • Auto-refresh every 30s</p>
          <p className="text-xs">© 2025 Learning Platform • You're all caught up!</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .font-sans {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>
    </div>
  );
}