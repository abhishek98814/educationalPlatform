import { Bell, User, Menu, GraduationCap } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white font-bold text-xl">
          <GraduationCap className="h-7 w-7" />
          <span>EduPlatform</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-full hover:bg-white/10 transition">
            <Bell className="h-5 w-5 text-white" />
            <span className="absolute top-1 right-1 inline-flex h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <button className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition">
            <User className="h-5 w-5 text-white" />
            <span className="hidden sm:block text-white text-sm font-medium">Profile</span>
          </button>

          {/* Mobile Sidebar Toggle */}
          <button
            className="sm:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
