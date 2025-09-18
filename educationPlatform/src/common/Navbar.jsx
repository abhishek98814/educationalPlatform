import { useState } from "react"
import { Menu, X, User, Crown, Star, Zap } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Plans", href: "/plans", special: true },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 group"
          >
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
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
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
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r transition-all duration-300 group-hover:w-full ${
                  link.special
                    ? "from-yellow-400 to-orange-500 w-0"
                    : "from-blue-400 to-indigo-400 w-0"
                }`}></span>
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-bold shadow-2xl hover:scale-105 transform transition-all duration-200 flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Get Premium</span>
              </div>
            </button>
            
            <div className="relative group">
              <button className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <User className="h-5 w-5 text-white" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                <div className="p-4 space-y-2">
                  <a href="/profile" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition">
                    Profile
                  </a>
                  <a href="/dashboard" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition">
                    Dashboard
                  </a>
                  <a href="/settings" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition">
                    Settings
                  </a>
                  <hr className="border-white/10 my-2" />
                  <a href="/logout" className="block px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition">
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
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
            <a
              key={link.name}
              href={link.href}
              className={`flex items-center space-x-3 font-semibold transition-all duration-300 py-2 ${
                link.special
                  ? "text-yellow-400 hover:text-yellow-300"
                  : "text-white/90 hover:text-white"
              }`}
            >
              <span>{link.name}</span>
              {link.special && (
                <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
              )}
            </a>
          ))}
          
          <div className="pt-4 border-t border-white/10">
            <button className="w-full relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl text-white font-bold shadow-2xl hover:scale-105 transform transition-all duration-200 flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Get Premium Access</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}