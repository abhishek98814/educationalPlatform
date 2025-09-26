import { useState } from "react";
import { User, Lock, Bell, Save } from "lucide-react";

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
    alert("Settings saved successfully ✅");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 flex items-center">
        <User className="w-8 h-8 mr-2 text-blue-600" />
        Settings
      </h1>
      <p className="text-gray-600">Manage your account and preferences</p>

      {/* Profile Settings */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <User className="w-5 h-5 mr-2 text-blue-500" /> Profile Settings
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <Lock className="w-5 h-5 mr-2 text-red-500" /> Security
        </h2>

        <div>
          <label className="block text-gray-600">New Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-red-400"
          />
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <Bell className="w-5 h-5 mr-2 text-yellow-500" /> Preferences
        </h2>

        <div className="flex items-center justify-between">
          <label className="text-gray-700">Email Notifications</label>
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-gray-700">Dark Mode</label>
          <input
            type="checkbox"
            name="darkMode"
            checked={formData.darkMode}
            onChange={handleChange}
            className="w-5 h-5"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
        >
          <Save className="w-5 h-5 mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
}
