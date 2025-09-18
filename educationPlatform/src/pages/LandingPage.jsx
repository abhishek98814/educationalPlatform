import { useState, useEffect } from "react"
import { Menu, X, User, Crown, Star, Zap, Play, CheckCircle, Calendar, BookOpen, Users, ChevronLeft, ChevronRight, TrendingUp, ArrowRight, Clock, Award, Sparkles } from "lucide-react"


export default function SubscriptionLandingPage() {
  const [isOpen, setIsOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Plans", href: "/plans", special: true },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]


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



  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-yellow-400" />,
      title: "New Course Every Month",
      description: "Fresh, cutting-edge content delivered monthly. Stay ahead with the latest industry trends and skills."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-400" />,
      title: "Premium Content Library",
      description: "Access our entire collection of high-quality courses, tutorials, and exclusive materials."
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: "Expert Instructors",
      description: "Learn from industry leaders and professionals with years of real-world experience."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-400" />,
      title: "Certification Ready",
      description: "Complete courses and earn certificates to boost your professional credentials."
    }
  ]

  const upcomingCourses = [
    {
      month: "October 2025",
      title: "Advanced AI & Machine Learning",
      description: "Deep dive into neural networks, LLMs, and practical AI applications",
      level: "Advanced",
      duration: "8 weeks",
      status: "Coming Soon"
    },
    {
      month: "November 2025", 
      title: "Full-Stack Web Development",
      description: "Modern React, Node.js, and database management techniques",
      level: "Intermediate",
      duration: "10 weeks",
      status: "Early Access"
    },
    {
      month: "December 2025",
      title: "Digital Marketing Mastery",
      description: "SEO, social media, and conversion optimization strategies",
      level: "Beginner",
      duration: "6 weeks",
      status: "Planned"
    }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content: "The monthly course releases keep me constantly learning. Each course is perfectly timed with industry needs!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Marketing Manager", 
      content: "Outstanding quality and practical content. The subscription model is perfect for continuous professional growth.",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "Freelancer",
      content: "Best investment I've made in my career. New skills every month have doubled my income!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
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
      </nav>

      {/* Hero Section */}
      {/* <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-6 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold text-sm">New Course Released Every Month</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Master New Skills
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              Every Month
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join thousands of learners who advance their careers with our premium monthly course releases. 
            Fresh content, expert instructors, and cutting-edge skills delivered to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-10 py-5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl text-white font-bold text-lg shadow-2xl hover:scale-105 transform transition-all duration-200 flex items-center space-x-3">
                <Zap className="h-6 w-6" />
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </button>
            
            <button className="flex items-center space-x-3 px-8 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white font-semibold hover:bg-white/20 transition-all duration-300">
              <Play className="h-6 w-6" />
              <span>Watch Preview</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">12+</div>
              <div className="text-white/70">Courses Per Year</div>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">50,000+</div>
              <div className="text-white/70">Active Learners</div>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/70">Success Rate</div>
            </div>
          </div>
        </div>
      </section> */}

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

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Premium Platform</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the future of online learning with our carefully curated monthly course releases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Courses */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Upcoming</span> Course Releases
            </h2>
            <p className="text-xl text-white/70">Get ready for these exciting courses coming your way</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingCourses.map((course, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-semibold">
                    {course.month}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    course.status === 'Coming Soon' ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30' :
                    course.status === 'Early Access' ? 'bg-green-400/20 text-green-400 border border-green-400/30' :
                    'bg-gray-400/20 text-gray-400 border border-gray-400/30'
                  }`}>
                    {course.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                <p className="text-white/70 mb-6 leading-relaxed">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-white/60">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Students Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-indigo-600/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Join thousands of professionals who are already advancing their skills with our monthly course releases
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-12 py-6 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl text-white font-bold text-xl shadow-2xl hover:scale-105 transform transition-all duration-200 flex items-center space-x-3">
                <Crown className="h-6 w-6" />
                <span>Get Premium Access</span>
              </div>
            </button>
            
            <div className="text-white/70 text-sm">
              <div>Starting at ₹499/month</div>
              <div>Cancel anytime • 7-day free trial</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full p-2">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
              Sanchi Gyan
            </span>
          </div>
          <p className="text-white/60 mb-8">Premium Learning Platform • Fresh Courses Every Month</p>
          <div className="flex items-center justify-center space-x-8 text-white/60 text-sm">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
            <a href="/support" className="hover:text-white transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}