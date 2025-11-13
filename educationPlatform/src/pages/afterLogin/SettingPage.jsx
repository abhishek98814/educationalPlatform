import { useState } from "react";
import { User, Lock, Bell, Save, Moon, Sun } from "lucide-react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    password: "",
    notifications: true,
    darkMode: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    console.log("Saved Settings:", formData);
    alert("Settings saved successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
            <User className="w-10 h-10 mr-3" />
            Settings
          </h1>
        </header>

        <p className="text-lg text-gray-600 max-w-2xl">
          Manage your account, security, and preferences with ease.
        </p>

        {/* Profile Settings */}
        <section className="bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg p-8 rounded-3xl space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <User className="w-6 h-6 mr-2 text-blue-500" /> Profile Settings
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>
        </section>

        {/* Security Settings */}
        <section className="bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg p-8 rounded-3xl space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <Lock className="w-6 h-6 mr-2 text-red-500" /> Security
          </h2>

          <div className="max-w-md space-y-2">
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              name="password"
              placeholder="Leave blank to keep current"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all outline-none placeholder:text-gray-400"
            />
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
          </div>
        </section>

        {/* Preferences */}
        <section className="bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg p-8 rounded-3xl space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
            <Bell className="w-6 h-6 mr-2 text-yellow-500" /> Preferences
          </h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:shadow-md transition-all">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-800">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive updates about courses & achievements</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={formData.notifications}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:shadow-md transition-all">
              <div className="flex items-center space-x-3">
                {formData.darkMode ? (
                  <Moon className="w-5 h-5 text-purple-600" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-600" />
                )}
                <div>
                  <p className="font-medium text-gray-800">Dark Mode</p>
                  <p className="text-sm text-gray-600">Toggle between light and dark themes</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="darkMode"
                  checked={formData.darkMode}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </label>
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <Save className="w-6 h-6 group-hover:animate-spin-once" />
            Save Changes
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500">
          Your data is secure and encrypted
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-once {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-once {
          animation: spin-once 0.6s ease-in-out;
        }
      `}</style>
    </div>
  );
}