import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  BookOpen,
  Calendar,
  Trophy,
  TrendingUp,
  Users,
  MessageSquare,
  Bell,
  Settings,
  User,
  LogOut,
} from "lucide-react";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
    { id: "courses", label: "My Courses", icon: BookOpen, path: "/dashboard/courses" },
    { id: "schedule", label: "Schedule", icon: Calendar, path: "/dashboard/schedule", badge: 2 },
    { id: "achievements", label: "Achievements", icon: Trophy, path: "/dashboard/achievements", badge: 1 },
    { id: "progress", label: "Progress", icon: TrendingUp, path: "/dashboard/progress" },
    { id: "community", label: "Community", icon: Users, path: "/dashboard/community", badge: 5 },
    { id: "messages", label: "Messages", icon: MessageSquare, path: "/dashboard/messages", badge: 3 },
    { id: "notifications", label: "Notifications", icon: Bell, path: "/dashboard/notifications", badge: 4 },
    { id: "settings", label: "Settings", icon: Settings, path: "/dashboard/settings" },
    { id: "Subscription", label: "Subscription", icon: Settings, path: "/dashboard/subscriptions" },
    { id: "profile", label: "Profile", icon: User, path: "/dashboard/profile" },
  ];
{/* <Route path="subscriptions" element={<SubscriptionLandingPagee />} /> */}
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 backdrop-blur-xl border-r border-gray-200 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-blue-600 p-6">EduPlatform</h2>
          <nav className="px-4 space-y-2">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                end
                className={({ isActive }) =>
                  `w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-blue-500 text-white shadow-md shadow-blue-300/30 scale-[1.02]"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`
                }
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Logout at bottom */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>
    </div>
  );
}
