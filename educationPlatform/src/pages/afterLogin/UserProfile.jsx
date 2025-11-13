import { User, Calendar, Star, Trophy, Mail, Phone, Flame, Award, Clock, BookOpen } from "lucide-react";

export default function UserProfilePage() {
  const user = {
    name: "John Doe",
    role: "Frontend Developer",
    email: "john@example.com",
    phone: "+977 9812345678",
    joined: "2023-06-12",
    coursesCompleted: 8,
    achievements: 5,
    profilePicture:
      "https://images.unsplash.com/photo-1603415526960-f5e4b0d01f37?crop=faces&fit=crop&w=100&h=100",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
            <User className="w-10 h-10 mr-3" />
            User Profile
          </h1>
        </header>

        {/* Profile Card */}
        <section className="bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg p-8 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="relative group">
              <img
                src={user.profilePicture}
                alt={user.name}
                className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex-1 space-y-5 text-center md:text-left">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-lg text-gray-600">{user.role}</p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-5 text-sm text-gray-600">
                <a href={`mailto:${user.email}`} className="flex items-center gap-1 hover:text-blue-600 transition">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </a>
                <a href={`tel:${user.phone}`} className="flex items-center gap-1 hover:text-green-600 transition">
                  <Phone className="w-4 h-4" />
                  {user.phone}
                </a>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  Joined {new Date(user.joined).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-2xl text-center transition-transform hover:-translate-y-1">
                  <BookOpen className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-blue-600">{user.coursesCompleted}</h3>
                  <p className="text-sm text-gray-600">Courses Completed</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-5 rounded-2xl text-center transition-transform hover:-translate-y-1">
                  <Trophy className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-yellow-600">{user.achievements}</h3>
                  <p className="text-sm text-gray-600">Achievements</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-2xl text-center transition-transform hover:-translate-y-1">
                  <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-green-600">127</h3>
                  <p className="text-sm text-gray-600">Hours Spent</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-5 rounded-2xl text-center transition-transform hover:-translate-y-1">
                  <Flame className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold text-orange-600">14</h3>
                  <p className="text-sm text-gray-600">Day Streak</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-3xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5 flex items-center">
            <Award className="w-6 h-6 mr-2 text-yellow-500" />
            Recent Activity
          </h2>
          <ul className="space-y-3">
            {[
              'Completed "React.js Fundamentals" course',
              'Earned "JavaScript Mastery" badge',
              'Posted a question in the Community',
              'Started "Machine Learning Intro" course',
              'Reviewed "Advanced CSS" lesson',
            ].map((act, i) => (
              <li key={i} className="flex items-center space-x-3 py-2 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                <span className="text-gray-700">{act}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          Built with love using React, Tailwind & Lucide
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}