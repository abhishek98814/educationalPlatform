import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  Calendar, 
  Trophy, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Bell, 
  Settings, 
  User, 
  LogOut,
  Play,
  Award,
  Target,
  Clock,
  Star,
  ChevronRight,
  Plus,
  Route,
  CalendarPlus,
  UserPlus,
  Eye,
  HelpCircle,
  CheckCircle,
  MessageCircle,
  Zap,
  Heart
} from 'lucide-react';

const LearnHubDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Courses Completed', value: '12/18', detail: '66.67% complete', icon: BookOpen, color: 'from-blue-400 to-blue-600' },
    { label: 'Learning Hours', value: '142', detail: '+12 this week', icon: Clock, color: 'from-green-400 to-green-600' },
    { label: 'Achievement Points', value: '2840', detail: 'Level 8 Expert', icon: Trophy, color: 'from-yellow-400 to-yellow-600' },
    { label: 'Study Streak', value: '28', detail: 'days in a row', icon: Target, color: 'from-red-400 to-red-600' },
    { label: 'Community Rank', value: '#42', detail: 'out of 1,247', icon: Users, color: 'from-purple-400 to-purple-600' },
    { label: 'Monthly Goal', value: '75/100', detail: '75% complete', icon: TrendingUp, color: 'from-indigo-400 to-indigo-600' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Advanced React Development',
      instructor: 'Sarah Johnson',
      duration: '12 hours',
      rating: 4.9,
      students: '15,420',
      status: 'In Progress',
      level: 'Advanced',
      progress: 85,
      lessons: { completed: 20, total: 24 },
      nextLesson: 'State Management with Zustand',
      icon: '🚀',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'TypeScript Fundamentals',
      instructor: 'Mike Chen',
      duration: '8 hours',
      rating: 4.8,
      students: '23,100',
      status: 'Completed',
      level: 'Intermediate',
      progress: 100,
      lessons: { completed: 18, total: 18 },
      nextLesson: 'Course completed!',
      icon: '📘',
      color: 'from-green-500 to-teal-600',
      certificate: true
    },
    {
      id: 3,
      title: 'Node.js Backend Mastery',
      instructor: 'Alex Rivera',
      duration: '16 hours',
      rating: 4.7,
      students: '9,850',
      status: 'In Progress',
      level: 'Advanced',
      progress: 45,
      lessons: { completed: 14, total: 32 },
      nextLesson: 'Database Integration with Prisma',
      icon: '⚡',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 4,
      title: 'UI/UX Design Principles',
      instructor: 'Emma Davis',
      duration: '10 hours',
      rating: 4.9,
      students: '18,700',
      status: 'In Progress',
      level: 'Beginner',
      progress: 20,
      lessons: { completed: 3, total: 15 },
      nextLesson: 'Color Theory and Psychology',
      icon: '🎨',
      color: 'from-pink-500 to-rose-600'
    }
  ];

  const quickActions = [
    { title: 'Enroll New Course', description: 'Browse 500+ courses', icon: Plus, color: 'bg-gradient-to-br from-blue-500 to-blue-600' },
    { title: 'Find Learning Path', description: 'Personalized recommendations', icon: Route, color: 'bg-gradient-to-br from-green-500 to-green-600' },
    { title: 'Schedule Study Session', description: 'Block time for learning', icon: CalendarPlus, color: 'bg-gradient-to-br from-purple-500 to-purple-600' },
    { title: 'Join Study Group', description: 'Learn with peers', icon: UserPlus, color: 'bg-gradient-to-br from-pink-500 to-pink-600' },
    { title: 'View Achievements', description: 'Track your progress', icon: Eye, color: 'bg-gradient-to-br from-yellow-500 to-yellow-600' },
    { title: 'Ask Question', description: 'Get help from community', icon: HelpCircle, color: 'bg-gradient-to-br from-indigo-500 to-indigo-600' }
  ];

  const activities = [
    {
      id: 1,
      title: 'Completed Advanced React Patterns',
      type: 'Course Complete',
      description: 'Mastered higher-order components and render props',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Earned React Master Badge',
      type: 'Achievement',
      description: 'Achieved 95% average on all React assessments',
      time: '1 day ago',
      icon: Trophy,
      color: 'bg-yellow-500'
    },
    {
      id: 3,
      title: 'Joined TypeScript Best Practices discussion',
      type: 'Discussion',
      description: 'Added insights on interface vs type declarations',
      time: '2 days ago',
      icon: MessageCircle,
      color: 'bg-blue-500'
    },
    {
      id: 4,
      title: 'Reached 100 Learning Hours',
      type: 'Milestone',
      description: 'Congratulations on your dedication to continuous learning!',
      time: '3 days ago',
      icon: Zap,
      color: 'bg-purple-500'
    },
    {
      id: 5,
      title: 'Connected with 5 new learning partners',
      type: 'Community',
      description: 'Expanded your professional network in web development',
      time: '5 days ago',
      icon: Users,
      color: 'bg-indigo-500'
    },
    {
      id: 6,
      title: 'Gave 5-star review to JavaScript Fundamentals',
      type: 'Review',
      description: '"Excellent course structure and practical examples"',
      time: '1 week ago',
      icon: Heart,
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="flex my-16 h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    

      {/* Main Content */}
      <div className="flex-1 py- overflow-y-auto p-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Alex Chen! 👋
            </h1>
            <p className="text-gray-600 mb-6">Ready to continue your learning journey?</p>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Continue Your Learning Adventure</h3>
              <p className="mb-4 opacity-90">
                You're making excellent progress! You've completed 67% of your monthly learning goal. 
                Keep up the momentum and unlock new achievements.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2">
                  <Play className="w-4 h-4" />
                  <span>Resume Last Course</span>
                </button>
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Browse All Courses</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 font-medium mb-1">{stat.label}</p>
              <p className="text-sm text-gray-500">{stat.detail}</p>
            </div>
          ))}
        </div>

        {/* My Learning Path */}
        <div className="mb-8">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Learning Path</h2>
            <div className="space-y-6">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{course.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{course.title}</h3>
                          <p className="text-gray-600 mb-2">by {course.instructor}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{course.duration}</span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span>{course.rating}</span>
                            </div>
                            <span>{course.students} students</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              course.status === 'Completed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {course.status}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                            {course.level}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {course.lessons.completed}/{course.lessons.total} lessons • {course.progress}%
                          </span>
                          <button
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                              course.status === 'Completed'
                                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            }`}
                          >
                            {course.status === 'Completed' ? (
                              <>
                                <Award className="w-4 h-4 inline mr-1" />
                                View Certificate
                              </>
                            ) : (
                              <>
                                <Play className="w-4 h-4 inline mr-1" />
                                Continue
                              </>
                            )}
                          </button>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${course.color} transition-all duration-500`}
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">Next: {course.nextLesson}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left group"
                >
                  <div className={`w-12 h-12 rounded-xl ${action.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-xl ${activity.color} flex items-center justify-center shadow-lg`}>
                      <activity.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{activity.title}</h4>
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-2">
                            {activity.type}
                          </span>
                          <p className="text-gray-600 text-sm">{activity.description}</p>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap">{activity.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Upgrade Card */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 shadow-2xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Premium Upgrade</h3>
                <p className="opacity-90 mb-4">Unlock advanced features, priority support, and exclusive courses</p>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Unlimited course access</li>
                  <li>• 1-on-1 mentoring</li>
                  <li>• Certificate priority</li>
                </ul>
                <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                  Upgrade Now
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnHubDashboard;