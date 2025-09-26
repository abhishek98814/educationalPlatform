import { BookOpen, TrendingUp, Clock } from "lucide-react";

export default function ProgressPage() {
  // Sample data – replace with API later
  const progressData = [
    {
      id: 1,
      course: "React.js Fundamentals",
      completed: 75,
      hoursSpent: 12,
    },
    {
      id: 2,
      course: "Data Structures in Java",
      completed: 50,
      hoursSpent: 8,
    },
    {
      id: 3,
      course: "Machine Learning Intro",
      completed: 20,
      hoursSpent: 3,
    },
  ];

  // Calculate overall progress
  const totalCourses = progressData.length;
  const avgProgress =
    progressData.reduce((sum, item) => sum + item.completed, 0) / totalCourses;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Progress</h1>
      <p className="text-gray-600">Track your learning journey</p>

      {/* Overall Summary */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <TrendingUp className="w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold text-gray-700">Avg Completion</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {avgProgress.toFixed(0)}%
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg font-semibold text-gray-700">Courses Enrolled</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">{totalCourses}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-green-500" />
            <h2 className="text-lg font-semibold text-gray-700">Hours Spent</h2>
          </div>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {progressData.reduce((sum, item) => sum + item.hoursSpent, 0)}
          </p>
        </div>
      </div>

      {/* Course-wise Progress */}
      <div className="grid gap-6">
        {progressData.map((course) => (
          <div
            key={course.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            <h2 className="text-lg font-semibold text-gray-800">{course.course}</h2>
            <p className="text-sm text-gray-500 mb-3">
              {course.completed}% completed · {course.hoursSpent} hours
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full bg-blue-500 transition-all"
                style={{ width: `${course.completed}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
