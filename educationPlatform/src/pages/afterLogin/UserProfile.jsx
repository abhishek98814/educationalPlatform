import { User, Calendar, Star, Trophy, Mail, Phone } from "lucide-react";

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
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 flex items-center">
        <User className="w-8 h-8 mr-2 text-blue-600" />
        User Profile
      </h1>
      <p className="text-gray-600">View your profile details</p>

      {/* Profile Card */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        {/* Profile Picture */}
        <img
          src={user.profilePicture}
          alt={user.name}
          className="w-28 h-28 rounded-full border-2 border-blue-500 object-cover"
        />

        {/* User Info */}
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.role}</p>

          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-green-500" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span>Joined {user.joined}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <h3 className="text-lg font-bold text-blue-600">{user.coursesCompleted}</h3>
              <p className="text-gray-600 text-sm">Courses Completed</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl text-center">
              <h3 className="text-lg font-bold text-yellow-600">{user.achievements}</h3>
              <p className="text-gray-600 text-sm">Achievements</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <h3 className="text-lg font-bold text-green-600">12</h3>
              <p className="text-gray-600 text-sm">Hours Spent</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <h3 className="text-lg font-bold text-purple-600">4</h3>
              <p className="text-gray-600 text-sm">Active Courses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-gray-700">
          <li>Completed "React.js Fundamentals" course</li>
          <li>Earned "JavaScript Mastery" badge</li>
          <li>Posted a question in the Community</li>
          <li>Started "Machine Learning Intro" course</li>
        </ul>
      </div>
    </div>
  );
}
