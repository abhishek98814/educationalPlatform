import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Lyout';
import CourseForm from './page/course/courseForm';
import UserForm from "./page/user/UserForm";
import UserSubscription from "./page/user/UserSubscriptionForm";
import VideoForm from './page/video/VideoForm';
import LoginPage from "./auth/LoginPage";
import SignupPage from "./auth/SignUpPage";
import PrivateRoute from "./utils/PrivateRoute";
import DashboardPage from "./page/Dashboard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <div className="flex">
                <Layout isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
                <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen transition-all duration-300">
                  <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="courses" element={<CourseForm />} />
                    <Route path="user-form" element={<UserForm />} />
                    <Route path="user-subscription" element={<UserSubscription />} />
                    <Route path="video-form" element={<VideoForm />} />
                  </Routes>
                </div>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
