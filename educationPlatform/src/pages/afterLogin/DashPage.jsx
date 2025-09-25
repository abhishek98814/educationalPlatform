import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch logged-in user data
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // token saved after login
        const res = await axios.get("http://localhost:8080/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">EduPlatform</h2>
        <nav className="space-y-3">
          <a href="/dashboard" className="block text-gray-700 hover:text-blue-600 font-medium">Dashboard</a>
          <a href="/courses" className="block text-gray-700 hover:text-blue-600 font-medium">Courses</a>
          <a href="/subscriptions" className="block text-gray-700 hover:text-blue-600 font-medium">My Subscriptions</a>
          <a href="/settings" className="block text-gray-700 hover:text-blue-600 font-medium">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Topbar */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* User Info Card */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome, {user?.userName || "User"} 👋</h2>
          <p className="text-gray-600">Role: {user?.userRole}</p>
          <p className="text-gray-600">Subscription: {user?.userSubscriptionType}</p>
          <p className="text-gray-600">Email: {user?.userEmail}</p>
        </div>

        {/* My Subscriptions */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">My Courses</h2>
          {user?.userCourses && user.userCourses.length > 0 ? (
            <ul className="space-y-2">
              {user.userCourses.map((course, idx) => (
                <li key={idx} className="p-3 bg-gray-50 rounded-lg shadow-sm">
                  {course.title || "Course"} – {course.status || "Active"}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No courses subscribed yet.</p>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-xl text-center hover:shadow-lg cursor-pointer">
            <h3 className="text-lg font-semibold text-blue-700">Browse Courses</h3>
          </div>
          <div className="bg-green-100 p-6 rounded-xl text-center hover:shadow-lg cursor-pointer">
            <h3 className="text-lg font-semibold text-green-700">Upgrade Plan</h3>
          </div>
          <div className="bg-purple-100 p-6 rounded-xl text-center hover:shadow-lg cursor-pointer">
            <h3 className="text-lg font-semibold text-purple-700">Settings</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
