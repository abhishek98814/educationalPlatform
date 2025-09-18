import { useState, useEffect } from "react"
import { Menu, X, User, Crown, Star, Zap, Play, ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

export default function HeroWithSlider() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Plans", href: "/plans", special: true },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  // Placeholder images - replace with your actual course images
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "AI & Machine Learning Mastery",
      subtitle: "October 2025 Release",
      description: "Deep dive into neural networks, GPT models, and practical AI applications"
    },
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Full-Stack Development Pro",
      subtitle: "November 2025 Release", 
      description: "Modern React, Node.js, and cloud deployment strategies"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Digital Marketing Revolution",
      subtitle: "December 2025 Release",
      description: "SEO mastery, social media automation, and conversion optimization"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Data Science Excellence",
      subtitle: "January 2026 Release",
      description: "Python, R, machine learning, and big data analytics"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse"></div>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center space-x-3 group">
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

            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-semibold transition-all duration-300 group ${
                    link.special ? "text-yellow-400 hover:text-yellow-300" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.special && <Star className="inline-block h-4 w-4 ml-1 text-yellow-400 animate-pulse" />}
                  <span className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r transition-all duration-300 group-hover:w-full ${
                    link.special ? "from-yellow-400 to-orange-500 w-0" : "from-blue-400 to-indigo-400 w-0"
                  }`}></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-white font-bold shadow-2xl hover:scale-105 transform transition-all duration-200 flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>Get Premium</span>
                </div>
              </button>
              <button className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <User className="h-5 w-5 text-white" />
              </button>
            </div>

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

        {/* Mobile Menu */}
        <div className={`md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="px-6 py-6 space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-3 font-semibold transition-all duration-300 py-2 ${
                  link.special ? "text-yellow-400 hover:text-yellow-300" : "text-white/90 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {link.special && <Star className="h-4 w-4 text-yellow-400 animate-pulse" />}
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

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-6 py-2">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">New Course Released Every Month</span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                  Master New
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Skills Monthly
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8">
                Join thousands of professionals who advance their careers with our premium monthly course releases. 
                Fresh content, expert instructors, cutting-edge skills.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl text-white font-bold text-lg shadow-2xl hover:scale-105 transform transition-all duration-200 flex items-center space-x-3">
                  <Zap className="h-6 w-6" />
                  <span>Start Learning Today</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </button>
              
              <button className="flex items-center space-x-3 px-8 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/20 transition-all duration-300">
                <Play className="h-6 w-6" />
                <span>Watch Preview</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">12+</div>
                <div className="text-white/70 text-sm">Courses/Year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-white/70 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              {/* Slider Container */}
              <div className="relative h-96 md:h-[500px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400/90 to-orange-500/90 rounded-full text-black text-sm font-bold mb-3">
                          {slide.subtitle}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {slide.title}
                        </h3>
                        <p className="text-white/90 text-sm md:text-base">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
              >
                <ChevronLeft className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 group"
              >
                <ChevronRight className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white scale-125"
                        : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </section>
    </div>
  )
}