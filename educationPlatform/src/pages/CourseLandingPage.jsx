import { Link } from "react-router-dom";
import { Star, Play } from "lucide-react";

export default function CourseLandingPage({ isLoggedIn }) {
  // Example course data
  const courses = [
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn React from scratch and build dynamic web apps.",
      level: "Beginner",
      rating: 4.8,
      lessons: 25,
      duration: "10h 30m",
      price: "Free",
    },
    {
      id: 2,
      title: "Fullstack MERN Bootcamp",
      description: "Become a fullstack developer using MongoDB, Express, React & Node.js",
      level: "Intermediate",
      rating: 4.9,
      lessons: 50,
      duration: "30h 00m",
      price: "$49",
    },
    {
      id: 3,
      title: "Advanced JavaScript",
      description: "Master JavaScript concepts and ES6+ features.",
      level: "Advanced",
      rating: 4.7,
      lessons: 35,
      duration: "15h 45m",
      price: "$29",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Explore Our Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-800">{course.title}</h2>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-semibold text-gray-600">{course.rating}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-4">{course.description}</p>

            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <span>Level: {course.level}</span>
              <span>{course.duration}</span>
            </div>

            {isLoggedIn ? (
              <Link
                to={`/dashboard/courses/${course.id}`}
                className="w-full inline-block px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transform transition-all duration-200 text-center"
              >
                Start Course
              </Link>
            ) : (
              <div className="space-x-2 flex">
                <Link
                  to="/login"
                  className="w-1/2 inline-block px-4 py-2 bg-white text-gray-900 rounded-full font-semibold shadow hover:scale-105 transform transition-all duration-200 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="w-1/2 inline-block px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold shadow hover:scale-105 transform transition-all duration-200 text-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
