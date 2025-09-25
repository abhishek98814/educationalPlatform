import { useState } from "react";
import { Menu, X, Crown, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Plans", href: "/plans", special: true },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full p-2">
                <Crown className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Sanchi Gyan
              </span>
              <div className="text-xs font-semibold text-yellow-400 tracking-widest">
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
                className={`relative font-semibold transition-all duration-300 group ${
                  link.special
                    ? "text-yellow-400 hover:text-yellow-300"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                {link.special && (
                  <Star className="inline-block h-4 w-4 ml-1 text-yellow-400 animate-pulse" />
                )}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r transition-all duration-300 group-hover:w-full ${
                    link.special
                      ? "from-yellow-400 to-orange-500 w-0"
                      : "from-blue-400 to-indigo-400 w-0"
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-gray-900 rounded-full font-bold shadow-lg hover:scale-105 transform transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transform transition-all duration-200 flex items-center space-x-2"
            >
              <Zap className="h-4 w-4" />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`block font-semibold transition-all duration-300 py-2 ${
                link.special
                  ? "text-yellow-400 hover:text-yellow-300"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <Link
              to="/login"
              className="block w-full px-6 py-3 bg-white text-gray-900 rounded-full font-bold text-center hover:scale-105 transform transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold text-center hover:scale-105 transform transition-all duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
