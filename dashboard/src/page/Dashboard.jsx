import { useEffect, useState } from "react";
import axios from "axios";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({
    courses: 0,
    subscriptions: 0,
    videos: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:8080/api/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data.user);

        // Example stats
        setStats({
          courses: res.data.user.userCourses.length || 0,
          subscriptions: res.data.user.userSubscriptionType !== "free" ? 1 : 0,
          videos: res.data.user.userCourses.reduce(
            (acc, course) => acc + (course.videos?.length || 0),
            0
          ),
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Welcome, {user?.userName || "User"} 👋
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-700">Courses</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">{stats.courses}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-700">Subscriptions</h3>
          <p className="text-2xl font-bold text-green-600 mt-2">{stats.subscriptions}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
          <h3 className="text-lg font-semibold text-gray-700">Videos</h3>
          <p className="text-2xl font-bold text-purple-600 mt-2">{stats.videos}</p>
        </div>
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
    </div>
  );
}
