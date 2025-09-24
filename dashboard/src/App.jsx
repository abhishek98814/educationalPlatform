import { useState } from "react";
import Layout from './layout/Lyout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CourseForm from './page/course/courseForm';
import CreateUser from "./page/user/UserForm";
import UserSubscription from "./page/user/UserSubscriptionForm"
import UserForm from './page/user/UserForm';
import VideoForm from './page/video/VideoForm'

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <>
   
      <BrowserRouter>
      <div className="flex">
        <Layout isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen transition-all duration-300">
          <Routes>
            <Route path="/courses" element={<CourseForm />} />
            <Route path="/user-form" element={<UserForm />} />
            <Route path="/user-subscription" element={<UserSubscription />} />
            <Route path="/video-form" element={<VideoForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
     {/* <CourseForm /> */}
    </>
  )
}

export default App
