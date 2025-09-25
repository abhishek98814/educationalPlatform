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
          <Route index element={<DashboardPage />} />
          <Route path="courses" element={<LoggedinUserCourse />} />
          <Route path="subscriptions" element={<SubscriptionLandingPagee /> } />
          <Route path="settings" element={<div>Settings Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
