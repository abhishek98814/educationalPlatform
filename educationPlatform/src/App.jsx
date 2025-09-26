import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import SubscriptionLandingPage from "./pages/LandingPage";
import SignupPage from "./auth/SignUp";
import Login from "./auth/Login";
import DashboardLayout from "./pages/afterLogin/DashboardLayout";
import DashboardPage from "./pages/afterLogin/DashPage";
import SubscriptionLandingPagee from "./pages/afterLogin/SubscriptionPage.jsx";
import LoggedinUserCourse from "./pages/afterLogin/LoggedInUserCourse.jsx";
import PrivateRoute from "./utils/ProtectedRoute";
import CourseLandingPage from "./pages/CourseLandingPage";
import PlansLandingPage from "./pages/PlanLandingPage";
import AboutLandingPage from "./pages/AboutLanding";
import ContactLandingPage from "./pages/ContactPage";
import SchedulePage from "./pages/afterLogin/Schedula.jsx"
import AchievementPage from "./pages/afterLogin/Achievement.jsx"
import ProgressPage from './pages/afterLogin/Progress.jsx';
import Community from './pages/afterLogin/Community.jsx';
import Message from './pages/afterLogin/Message.jsx';
import Notification from './pages/afterLogin/Notification.jsx';
import SettingsPage from "./pages/afterLogin/SettingPage.jsx";
import UserProfilePage from "./pages/afterLogin/UserProfile.jsx";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SubscriptionLandingPage />} />
        <Route path="/courses" element={<CourseLandingPage />} />
        <Route path="/plans" element={<PlansLandingPage />} />
        <Route path="/about" element={<AboutLandingPage />} />
        <Route path="/contact" element={<ContactLandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Dashboard Routes with Layout */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
             <Route path="courses" element={<LoggedinUserCourse />} />
        <Route path="schedule" element={<SchedulePage />} />
        <Route path="achievements" element={<AchievementPage />} />
        <Route path="progress" element={<ProgressPage/>} />
        <Route path="community" element={<Community/>} />
        <Route path="messages" element={< Message/>} />
        <Route path="notifications" element={<Notification />} />
        <Route path="settings" element={< SettingsPage/>} />
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="subscriptions" element={<SubscriptionLandingPagee />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
