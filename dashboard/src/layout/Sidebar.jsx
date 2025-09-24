import { Home, BookOpen, Users, Video, Settings } from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <Home className="h-5 w-5" /> },
  { name: "Courses", icon: <BookOpen className="h-5 w-5" /> },
  { name: "Students", icon: <Users className="h-5 w-5" /> },
  { name: "Live Classes", icon: <Video className="h-5 w-5" /> },
  { name: "Settings", icon: <Settings className="h-5 w-5" /> },
];

export default function Sidebar({ isOpen }) {
  return (
    <aside
      className={`bg-white w-64 h-screen shadow-lg fixed top-0 left-0 transform 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      transition-transform duration-300 ease-in-out sm:translate-x-0`}
    >
      <div className="p-4 text-2xl font-bold text-blue-600">EduPlatform</div>
      <nav className="mt-6">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
