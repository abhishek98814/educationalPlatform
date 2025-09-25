import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import SubscriptionLandingPage from "./pages/LandingPage";
import SignupPage from "./auth/SignUp";
import Login from "./auth/Login";
import DashboardPage from "./pages/afterLogin/DashPage";
import PrivateRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<SubscriptionLandingPage />} />
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
