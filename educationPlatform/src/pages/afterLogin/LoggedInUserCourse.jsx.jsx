import { useEffect, useState } from "react";
import { BookOpen, PlayCircle } from "lucide-react";

// Dummy data (replace with API call later)
const allCourses = [
  { id: 1, title: "JavaScript Essentials", description: "Learn JS basics", subscribed: true },
  { id: 2, title: "React Mastery", description: "Advanced React techniques", subscribed: true },
  { id: 3, title: "Node.js for Beginners", description: "Server-side with Node.js", subscribed: false },
  { id: 4, title: "MongoDB Deep Dive", description: "Learn NoSQL databases", subscribed: false },
  { id: 5, title: "Python for Data Science", description: "Intro to ML & Data Science", subscribed: false },
];

export default function DashboardCoursesPage() {
  const [subscribedCourses, setSubscribedCourses] = useState([]);
  const [otherCourses, setOtherCourses] = useState([]);

  useEffect(() => {
    // In real app: fetch courses by user
    setSubscribedCourses(allCourses.filter((c) => c.subscribed));
    setOtherCourses(allCourses.filter((c) => !c.subscribed));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Courses</h1>

      {/* Subscribed Courses */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Subscribed Courses</h2>
        {subscribedCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subscribedCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
              >
                <BookOpen className="h-10 w-10 text-indigo-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Start Course
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">You haven’t subscribed to any courses yet.</p>
        )}
      </section>

      {/* All Courses */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Explore More Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <BookOpen className="h-10 w-10 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <button className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition">
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
