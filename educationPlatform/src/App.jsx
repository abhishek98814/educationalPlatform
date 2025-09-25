import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import SubscriptionLandingPage from "./pages/LandingPage";
import SignupPage from "./auth/SignUp";
import Login from "./auth/Login";
import DashboardPage from "./pages/afterLogin/DashPage";
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
        <Route path="/" element={<SubscriptionLandingPage />} />
        <Route path="/courses" element={<CourseLandingPage />} />
        <Route path="/plans" element={<PlansLandingPage />} />
        <Route path="/about" element={<AboutLandingPage />} />
        <Route path="/contact" element={<ContactLandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
