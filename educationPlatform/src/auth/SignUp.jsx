import { useState } from "react";
import axios from "axios";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userRole: "student", // default role
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/v1/signup", formData);

      setMessage("✅ Signup successful! Please login.");
      console.log("User Created:", res.data);

      // Reset form
      setFormData({
        userName: "",
        userEmail: "",
        userPassword: "",
        userRole: "student",
      });
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        {message && (
          <p className="mb-4 text-center text-sm text-red-500">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 text-sm mb-2">Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm mb-2">Password</label>
            <input
              type="password"
              name="userPassword"
              value={formData.userPassword}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              minLength="6"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 text-sm mb-2">Role</label>
            <select
              name="userRole"
              value={formData.userRole}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
