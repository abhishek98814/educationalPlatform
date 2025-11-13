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
  CreditCard,
  GraduationCap,
} from "lucide-react";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, path: "/dashboard" },
    { id: "courses", label: "Courses", icon: BookOpen, path: "/dashboard/courses" },
    { id: "schedule", label: "Schedule", icon: Calendar, path: "/dashboard/schedule", badge: 2 },
    { id: "achievements", label: "Achievements", icon: Trophy, path: "/dashboard/achievements", badge: 1 },
    { id: "progress", label: "Progress", icon: TrendingUp, path: "/dashboard/progress" },
    { id: "community", label: "Community", icon: Users, path: "/dashboard/community", badge: 5 },
    { id: "messages", label: "Messages", icon: MessageSquare, path: "/dashboard/messages", badge: 3 },
    { id: "notifications", label: "Notifications", icon: Bell, path: "/dashboard/notifications", badge: 4 },
  ];

  const bottomItems = [
    { id: "subscription", label: "Subscription", icon: CreditCard, path: "/dashboard/subscriptions" },
    { id: "settings", label: "Settings", icon: Settings, path: "/dashboard/settings" },
    { id: "profile", label: "Profile", icon: User, path: "/dashboard/profile" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col shadow-2xl fixed h-screen">
        {/* Logo & Brand */}
        <div className="px-6 py-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-tight">EduPlatform</h1>
              <p className="text-xs text-slate-400">Learning Portal</p>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-3">
            Main Menu
          </div>
          {sidebarItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end
              className={({ isActive }) =>
                `group flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`min-w-[22px] h-5 flex items-center justify-center px-2 text-xs font-bold rounded-full ${
                      isActive 
                        ? "bg-white/20 text-white" 
                        : "bg-blue-500 text-white"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50">
          <nav className="px-4 py-4 space-y-1.5">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 mb-3">
              Account
            </div>
            {bottomItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`} />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* User Info & Logout */}
          <div className="px-4 pb-4">
            <div className="bg-slate-800/50 rounded-lg p-3 mb-3 border border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  JD
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">John Doe</p>
                  <p className="text-xs text-slate-400 truncate">john@example.com</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium text-red-400 hover:text-white hover:bg-red-600/20 rounded-lg transition-all duration-200 border border-red-600/20 hover:border-red-600/40"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto my-8 ml-72">
        <Outlet />
      </main>
    </div>
  );
}