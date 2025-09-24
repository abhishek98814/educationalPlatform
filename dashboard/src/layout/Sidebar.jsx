// layout/Layout.jsx
import { Link, useMatch } from "react-router-dom";
import { Home, BookOpen, Users, Video, Settings } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <Home className="h-5 w-5" />, path: "/" },
  { name: "Courses", icon: <BookOpen className="h-5 w-5" />, path: "/courses" },
  { name: "Students", icon: <Users className="h-5 w-5" />, path: "/user-form" },
  { name: "Live Classes", icon: <Video className="h-5 w-5" />, path: "/video-form" },
  { name: "Settings", icon: <Settings className="h-5 w-5" />, path: "/settings" },
  { name: "Subscriptions", icon: <Users className="h-5 w-5" />, path: "/user-subscription" },
];

export default function Layout({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`bg-white w-64 h-screen shadow-lg fixed top-0 left-0 transform 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      transition-transform duration-300 ease-in-out sm:translate-x-0`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <div className="text-2xl font-bold text-blue-600">EduPlatform</div>
        <button
          className="sm:hidden text-gray-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      <nav className="mt-6">
        {menuItems.map((item, idx) => {
          const match = useMatch({ path: item.path, end: true }); // exact match
          return (
            <Link
              key={idx}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all 
                ${match ? "bg-blue-100 text-blue-600 font-semibold" : ""}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
