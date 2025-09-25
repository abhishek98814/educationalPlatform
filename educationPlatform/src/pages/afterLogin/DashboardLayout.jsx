import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
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
  Play,
  Award,
  Target,
  Clock,
  Star,
  ChevronRight,
  Plus,
  Route,
  CalendarPlus,
  UserPlus,
  Eye,
  HelpCircle,
  CheckCircle,
  MessageCircle,
  Zap,
  Heart
} from 'lucide-react';

export default function DashboardLayout() {
     const [activeTab, setActiveTab] = useState('dashboard');
  const navigate = useNavigate();
    const sidebarItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home, badge: null, active: true },
      { id: 'courses', label: 'My Courses', icon: BookOpen, badge: null },
      { id: 'schedule', label: 'Schedule', icon: Calendar, badge: 2 },
      { id: 'achievements', label: 'Achievements', icon: Trophy, badge: 1 },
      { id: 'progress', label: 'Progress', icon: TrendingUp, badge: null },
      { id: 'community', label: 'Community', icon: Users, badge: 5 },
      { id: 'messages', label: 'Messages', icon: MessageSquare, badge: 3 },
      { id: 'notifications', label: 'Notifications', icon: Bell, badge: 4 },
      { id: 'settings', label: 'Settings', icon: Settings, badge: null },
      { id: 'profile', label: 'Profile', icon: User, badge: null },
      { id: 'logout', label: 'Sign Out', icon: LogOut, badge: null }
    ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">EduPlatform</h2>
       <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeTab === item.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              }`}
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
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Here nested dashboard pages will render */}
        <Outlet />
      </main>
    </div>
  );
}
