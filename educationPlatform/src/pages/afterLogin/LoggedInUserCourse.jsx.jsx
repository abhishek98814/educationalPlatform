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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-semibold text-gray-900 tracking-tight">My Courses</h1>
          <p className="text-gray-600 mt-2">Manage and explore your learning journey</p>
        </div>

        {/* Subscribed Courses */}
        <section className="mb-16">
          <h2 className="text-xl font-medium text-gray-900 mb-6 border-b border-gray-200 pb-3">
            Enrolled Courses
          </h2>
          {subscribedCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {subscribedCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                    <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded">
                      Enrolled
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 mb-5 leading-relaxed">{course.description}</p>
                  <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Continue Learning
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-500">No enrolled courses yet. Explore courses below to get started.</p>
            </div>
          )}
        </section>

        {/* All Courses */}
        <section>
          <h2 className="text-xl font-medium text-gray-900 mb-6 border-b border-gray-200 pb-3">
            Available Courses
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
              >
                <BookOpen className="h-6 w-6 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">{course.description}</p>
                <button className="w-full py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}