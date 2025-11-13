import { useState } from "react";
import { Menu, X, Crown, Star, Zap, Code, Rocket, BookOpen, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Bootcamps", href: "/bootcamps", icon: Rocket },
    { name: "Plans", href: "/plans", special: true, icon: Award },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full p-2 shadow-xl">
                  <Crown className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  Sanchi Gyan
                </span>
                <div className="text-xs font-bold text-purple-600 tracking-widest">
                  PREMIUM LEARNING
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative flex items-center gap-1.5 font-semibold text-gray-700 transition-all duration-300 group hover:text-purple-600
                    ${link.special ? "text-purple-600" : ""}
                  `}
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.name}
                  {link.special && (
                    <Star className="inline-block h-4 w-4 ml-1 text-yellow-500 animate-pulse" />
                  )}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r transition-all duration-300 group-hover:w-full ${
                      link.special
                        ? "from-purple-600 to-pink-600 w-0"
                        : "from-indigo-500 to-purple-500 w-0"
                    }`}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="px-6 py-3 bg-white text-purple-600 rounded-full font-bold shadow-lg hover:scale-105 transform transition-all duration-200 border border-purple-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center space-x-2"
              >
                <Zap className="h-4 w-4" />
                <span>Start Free</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-purple-700 p-2 rounded-lg hover:bg-purple-50 transition"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white/90 backdrop-blur-xl border-t border-purple-100 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 block font-semibold text-gray-700 py-2 transition-all duration-300 hover:text-purple-600
                  ${link.special ? "text-purple-600" : ""}
                `}
              >
                {link.icon && <link.icon className="w-5 h-5" />}
                {link.name}
                {link.special && <Star className="inline-block h-4 w-4 text-yellow-500 animate-pulse" />}
              </Link>
            ))}
            <div className="pt-4 border-t border-purple-100 space-y-3">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3 bg-white text-purple-600 rounded-full font-bold text-center shadow hover:scale-105 transform transition-all duration-200 border border-purple-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-center shadow hover:scale-105 transform transition-all duration-200"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.75; }
          50% { opacity: 1; }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .font-sans {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>
    </>
  );
}