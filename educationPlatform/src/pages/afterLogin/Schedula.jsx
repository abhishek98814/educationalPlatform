import { Calendar, Clock, MapPin, Users } from "lucide-react";

export default function SchedulePage() {
  // Sample data – you can later fetch this from API
  const schedule = [
    {
      id: 1,
      title: "React.js Fundamentals",
      date: "2025-09-28",
      time: "10:00 AM - 12:00 PM",
      location: "Room 101",
      participants: 25,
    },
    {
      id: 2,
      title: "Data Structures in Java",
      date: "2025-09-29",
      time: "2:00 PM - 4:00 PM",
      location: "Lab 202",
      participants: 18,
    },
    {
      id: 3,
      title: "Machine Learning Intro",
      date: "2025-10-01",
      time: "11:00 AM - 1:00 PM",
      location: "Room 305",
      participants: 30,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">My Schedule</h1>
      <p className="text-gray-600">Upcoming classes and sessions</p>

      <div className="grid gap-6 md:grid-cols-2">
        {schedule.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-blue-600">{item.title}</h2>
            <div className="mt-3 space-y-2 text-gray-700">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span>{item.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-500" />
                <span>{item.time}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-green-500" />
                <span>{item.participants} participants</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
