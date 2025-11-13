import { useEffect, useState } from "react";
import { 
  CheckCircle, 
  Clock, 
  Calendar, 
  CreditCard, 
  Shield, 
  Zap, 
  Star, 
  Trophy, 
  Flame,
  Download,
  Headphones,
  Users,
  Award,
  RefreshCw,
  ChevronRight,
  Sparkles
} from "lucide-react";

export default function MySubscriptionsPage() {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      setLoading(true);
      await new Promise(r => setTimeout(r, 700));

      setSubscription({
        planName: "Pro Plan",
        status: "Active",
        startDate: "2025-09-01",
        endDate: "2026-09-01",
        price: 99,
        billingCycle: "yearly",
        nextBillingDate: "2026-09-01",
        paymentMethod: "Visa ending in 4242",
        planLevel: "Pro",
        savings: 240,
        usage: {
          coursesCompleted: 28,
          hoursLearned: 142,
          achievements: 18,
          streak: 14,
          downloads: 12,
          mentorSessions: 5,
          communityPosts: 32,
          quizScore: 94
        },
        features: [
          "Unlimited courses & projects",
          "Offline downloads",
          "Official certificates",
          "1-on-1 mentor sessions",
          "Priority support",
          "Ad-free experience"
        ],
        upcoming: [
          { title: "Next mentor call", date: "Nov 18", icon: Headphones, color: "text-purple-600" },
          { title: "Certificate ready", date: "Nov 20", icon: Award, color: "text-yellow-600" },
          { title: "New course drop", date: "Nov 22", icon: Sparkles, color: "text-pink-600" }
        ]
      });
    } catch (err) {
      setSubscription(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen my-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl text-white">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">My Subscription</h1>
              <p className="text-sm text-gray-600">You're on the Pro journey</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchSubscription}
              className="p-2.5 rounded-xl hover:bg-gray-100 transition"
            >
              <RefreshCw className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
              className="px-5 py-2.5 bg-red-500 text-white font-medium rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
        {loading ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="animate-pulse space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-xl"></div>
                <div>
                  <div className="h-8 bg-gray-200 rounded w-48"></div>
                  <div className="h-5 bg-gray-200 rounded w-64 mt-2"></div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-24 bg-gray-100 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        ) : subscription ? (
          <>
            {/* Hero Plan Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl text-white">
                    <Zap className="w-10 h-10" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{subscription.planName}</h2>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="px-4 py-1.5 text-sm font-bold rounded-full bg-green-100 text-green-700">
                        {subscription.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Next billing: <strong className="font-medium">{new Date(subscription.nextBillingDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</strong>
                      {' '}·{' '}
                      <span className="text-green-600 font-medium">You save ${subscription.savings} per year</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-gray-800">${subscription.price}</p>
                  <p className="text-sm text-gray-500">per year</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { label: "Courses Completed", value: subscription.usage.coursesCompleted, icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
                { label: "Hours Learned", value: subscription.usage.hoursLearned, icon: Clock, color: "text-blue-600", bg: "bg-blue-50", suffix: "h" },
                { label: "Achievements", value: subscription.usage.achievements, icon: Trophy, color: "text-yellow-600", bg: "bg-yellow-50" },
                { label: "Current Streak", value: subscription.usage.streak, icon: Flame, color: "text-orange-600", bg: "bg-orange-50", suffix: " days" },
                { label: "Downloads", value: subscription.usage.downloads, icon: Download, color: "text-purple-600", bg: "bg-purple-50" },
                { label: "Mentor Sessions", value: subscription.usage.mentorSessions, icon: Headphones, color: "text-indigo-600", bg: "bg-indigo-50" },
                { label: "Community Posts", value: subscription.usage.communityPosts, icon: Users, color: "text-pink-600", bg: "bg-pink-50" },
                { label: "Quiz Accuracy", value: `${subscription.usage.quizScore}%`, icon: Star, color: "text-cyan-600", bg: "bg-cyan-50" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className={`p-2.5 w-fit rounded-lg ${stat.bg} mb-3`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">{stat.value}{stat.suffix || ""}</div>
                  <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                What's Next
              </h3>
              <div className="space-y-3">
                {subscription.upcoming.map((event, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <event.icon className={`w-5 h-5 ${event.color}`} />
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{event.title}</p>
                        <p className="text-xs text-gray-500">{event.date}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Billing */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                  Billing Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method</span>
                    <span className="font-medium text-gray-800">{subscription.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Billing Cycle</span>
                    <span className="font-medium text-gray-800 capitalize">{subscription.billingCycle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Started</span>
                    <span className="font-medium text-gray-800">
                      {new Date(subscription.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  Plan Includes
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {subscription.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition">
                Upgrade Plan
              </button>
              <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition">
                Manage Billing
              </button>
              <button className="px-8 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition">
                Download Invoice
              </button>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-gray-100">
            <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">No Active Plan</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Unlock unlimited learning, mentorship, and certificates with Pro.
            </p>
            <button className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition text-lg">
              Start Free Trial
            </button>
          </div>
        )}
      </main>
    </div>
  );
}