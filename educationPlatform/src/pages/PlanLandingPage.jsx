import { Link } from "react-router-dom";
import { Star, Zap } from "lucide-react";

export default function PlansLandingPage({ isLoggedIn }) {
  const plans = [
    {
      id: 1,
      name: "Free",
      price: "$0",
      description: "Access limited courses and basic features",
      features: ["Access to 5 courses", "Community support", "Basic tutorials"],
    },
    {
      id: 2,
      name: "Premium",
      price: "$29/mo",
      description: "Unlock more courses and advanced features",
      features: [
        "Access to all courses",
        "Certificate of completion",
        "Premium support",
        "Advanced tutorials",
      ],
    },
    {
      id: 3,
      name: "Pro",
      price: "$49/mo",
      description: "Full access with personalized mentoring",
      features: [
        "Everything in Premium",
        "1-on-1 Mentoring",
        "Exclusive webinars",
        "Project reviews",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Choose Your Plan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <div className="text-3xl font-extrabold text-gray-900 mb-6">{plan.price}</div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-600">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {isLoggedIn ? (
              <Link
                to={`/subscribe/${plan.id}`}
                className="w-full inline-block px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transform transition-all duration-200 text-center"
              >
                Subscribe
              </Link>
            ) : (
              <div className="space-x-2 flex">
                <Link
                  to="/login"
                  className="w-1/2 inline-block px-4 py-2 bg-white text-gray-900 rounded-full font-semibold shadow hover:scale-105 transform transition-all duration-200 text-center"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="w-1/2 inline-block px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold shadow hover:scale-105 transform transition-all duration-200 text-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
