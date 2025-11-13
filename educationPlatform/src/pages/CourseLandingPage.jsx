import { Link } from "react-router-dom";
import { 
  Star, Play, Clock, Users, Award, Zap, ChevronRight, Check, 
  Sparkles, Trophy, Headphones, Code, Rocket, Globe, 
  TrendingUp, Shield, ArrowRight
} from "lucide-react";

export default function CourseLandingPage({ isLoggedIn }) {
  const courses = [
    {
      id: 1,
      title: "React Masterclass",
      description: "Build production-ready apps with React 19, TypeScript, and modern patterns.",
      level: "Beginner to Pro",
      rating: 4.98,
      reviews: 4281,
      lessons: 48,
      duration: "18h 20m",
      price: "Free",
      instructor: "Emma Watson",
      instructorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      badge: "Most Enrolled",
      gradient: "from-emerald-500 to-teal-600",
      students: "28.4k",
      highlight: true
    },
    {
      id: 2,
      title: "Fullstack Next.js 15",
      description: "Master server actions, app router, and deploy with Vercel.",
      level: "Intermediate",
      rating: 4.97,
      reviews: 3129,
      lessons: 72,
      duration: "38h 10m",
      price: "$59",
      instructor: "David Kim",
      instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      badge: "Top Rated",
      gradient: "from-purple-600 to-pink-600",
      students: "15.7k"
    },
    {
      id: 3,
      title: "TypeScript Enterprise",
      description: "Advanced patterns for large-scale apps and monorepos.",
      level: "Advanced",
      rating: 4.92,
      reviews: 1893,
      lessons: 52,
      duration: "22h 45m",
      price: "$49",
      instructor: "Lisa Chen",
      instructorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      badge: "New",
      gradient: "from-indigo-600 to-blue-600",
      students: "6.8k"
    },
  ];

  return (
    <>
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg mb-8">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-semibold text-purple-700">Rated #1 Coding Platform 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight font-display">
            Learn <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">Code</span> That
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Changes Lives</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 120,000+ developers learning with project-based courses, real mentors, and job-ready portfolios.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to={isLoggedIn ? "/_dashboard" : "/signup"}
              className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Rocket className="w-6 h-6" />
              {isLoggedIn ? "Go to Dashboard" : "Start Learning Free"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="/courses"
              className="px-10 py-5 bg-white text-purple-600 text-lg font-bold rounded-full border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300"
            >
              Explore Courses
            </Link>
          </div>

          {/* Trust Logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-60">
            {["Google", "Microsoft", "Amazon", "Meta", "Netflix"].map((company) => (
              <div key={company} className="text-2xl font-medium text-gray-500">{company}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: "120K+", label: "Active Learners" },
              { icon: Trophy, value: "4.97", label: "Average Rating" },
              { icon: Globe, value: "190+", label: "Countries" },
              { icon: TrendingUp, value: "96%", label: "Job Placement" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-purple-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-800">{stat.value}</div>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-display">Courses That Get You Hired</h2>
            <p className="text-lg text-gray-600">Built with input from FAANG engineers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  course.highlight ? 'ring-4 ring-purple-500 ring-opacity-40' : ''
                }`}
              >
                {/* Gradient Border */}
                <div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, ${course.gradient.split(' ')[1]}, ${course.gradient.split(' ')[3]})` 
                  }}
                ></div>

                <div className="relative p-8">
                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-6 left-6 z-10">
                      <span className={`px-4 py-1.5 text-xs font-bold rounded-full text-white shadow-lg ${
                        course.badge === "Most Enrolled" ? "bg-gradient-to-r from-emerald-500 to-teal-500" :
                        course.badge === "Top Rated" ? "bg-gradient-to-r from-orange-500 to-red-500" :
                        "bg-gradient-to-r from-indigo-500 to-purple-500"
                      }`}>
                        {course.badge}
                      </span>
                    </div>
                  )}

                  {/* Instructor */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="w-14 h-14 rounded-full ring-4 ring-white shadow-md"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{course.instructor}</p>
                      <p className="text-sm text-gray-500">Senior Engineer @ Meta</p>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 leading-tight">{course.title}</h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(course.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                      ))}
                    </div>
                    <span className="font-bold text-gray-700">{course.rating}</span>
                    <span className="text-sm text-gray-500">({course.reviews.toLocaleString()})</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{course.description}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-purple-600" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Play className="w-4 h-4 text-emerald-600" />
                        {course.lessons} lessons
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-pink-600" />
                      {course.students}
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      {course.price === "Free" ? (
                        <div className="flex items-center gap-2">
                          <span className="text-3xl font-bold text-emerald-600">Free</span>
                          <Sparkles className="w-6 h-6 text-emerald-500" />
                        </div>
                      ) : (
                        <div>
                          <span className="text-3xl font-bold text-gray-800">{course.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">$199</span>
                        </div>
                      )}
                    </div>

                    {isLoggedIn ? (
                      <Link
                        to={`/dashboard/courses/${course.id}`}
                        className={`px-6 py-3 bg-gradient-to-r ${course.gradient} text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm`}
                      >
                        <Play className="w-5 h-5" />
                        Start Now
                      </Link>
                    ) : (
                      <div className="flex gap-3">
                        <Link
                          to="/login"
                          className="px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-full border border-gray-300 hover:bg-gray-50 transition text-sm"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className={`px-5 py-2.5 bg-gradient-to-r ${course.gradient} text-white font-semibold rounded-full shadow hover:shadow-lg transition text-sm`}
                        >
                          Enroll
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/courses"
              className="inline-flex items-center gap-3 text-purple-600 font-semibold text-lg hover:text-purple-700 transition"
            >
              View all 150+ courses
              <ChevronRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-display">Why Top Developers Choose Us</h2>
            <p className="text-lg text-gray-600">Everything you need to go from zero to hired</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Shield,
                title: "Job-Ready Certificates",
                desc: "Verified by top companies. Add to LinkedIn & resume.",
                color: "from-yellow-400 to-amber-500"
              },
              {
                icon: Headphones,
                title: "1-on-1 Mentorship",
                desc: "Weekly calls with senior engineers from FAANG.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Rocket,
                title: "Portfolio Projects",
                desc: "Build 10+ real apps. Get code reviews & deploy.",
                color: "from-emerald-500 to-teal-500"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className={`inline-flex p-5 rounded-3xl bg-gradient-to-br ${feature.color} text-white shadow-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-xl px-6 py-3 rounded-full shadow-xl mb-8">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="text-lg font-semibold text-white">Limited Time: 7-Day Free Trial</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Start Your Journey Today
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join 120,000+ developers who’ve landed jobs at Google, Meta, Amazon, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/signup"
              className="px-12 py-5 bg-white text-purple-600 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/courses"
              className="px-12 py-5 bg-white/20 backdrop-blur-xl text-white text-xl font-bold rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        /* Font Comfort & Beauty */
        .font-display {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        
        * {
          font-feature-settings: 'liga' 1, 'kern' 1;
        }
        
        body {
          line-height: 1.65;
        }
      `}</style>
    </>
  );
}