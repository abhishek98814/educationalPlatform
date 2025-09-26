import { Bell, Award, BookOpen, MessageCircle, CheckCircle } from "lucide-react";

export default function NotificationsPage() {
  // Sample notifications (later connect with API)
  const notifications = [
    {
      id: 1,
      type: "course",
      icon: BookOpen,
      text: "New lesson added in *React Advanced* course.",
      time: "5m ago",
      read: false,
    },
    {
      id: 2,
      type: "achievement",
      icon: Award,
      text: "Congrats! You earned the *JavaScript Mastery* badge 🏆.",
      time: "1h ago",
      read: false,
    },
    {
      id: 3,
      type: "message",
      icon: MessageCircle,
      text: "Rahul sent you a new message.",
      time: "3h ago",
      read: true,
    },
    {
      id: 4,
      type: "system",
      icon: CheckCircle,
      text: "Your subscription has been renewed successfully.",
      time: "1d ago",
      read: true,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 flex items-center">
        <Bell className="w-8 h-8 mr-2 text-blue-600" />
        Notifications
      </h1>
      <p className="text-gray-600">Stay updated with the latest activity</p>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y">
        {notifications.map((note) => (
          <div
            key={note.id}
            className={`flex items-start space-x-4 p-4 transition ${
              note.read ? "bg-gray-50" : "bg-blue-50"
            }`}
          >
            {/* Icon */}
            <div
              className={`p-2 rounded-xl ${
                note.type === "course"
                  ? "bg-green-100 text-green-600"
                  : note.type === "achievement"
                  ? "bg-yellow-100 text-yellow-600"
                  : note.type === "message"
                  ? "bg-purple-100 text-purple-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              <note.icon className="w-6 h-6" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <p className="text-gray-800">{note.text}</p>
              <span className="text-sm text-gray-500">{note.time}</span>
            </div>

            {/* Status dot */}
            {!note.read && (
              <span className="w-3 h-3 rounded-full bg-blue-500 mt-2"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
