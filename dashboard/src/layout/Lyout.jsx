import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} />
      
      <div className="flex-1 sm:ml-64">
        <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
        <main className=" p-6 bg-gray-50 min-h-screen">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}
