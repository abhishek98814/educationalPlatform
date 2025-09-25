import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // for redirect

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/v1/login", formData);

      // Assuming API returns a JWT token
      const token = res.data.token;
      localStorage.setItem("token", token); // save token

      setMessage("✅ Login successful! Redirecting...");
      console.log("Login Response:", res.data);

      // Reset form
      setFormData({
        userEmail: "",
        userPassword: "",
      });

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Something went wrong.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        {message && (
          <p className="mb-4 text-center text-sm text-red-500">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
