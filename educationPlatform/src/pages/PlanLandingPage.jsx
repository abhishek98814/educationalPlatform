import { Link } from "react-router-dom";
import { 
  Star, Zap, Check, Crown, Rocket, Users, Award, 
  Shield, Headphones, Globe, TrendingUp, Sparkles,
  ChevronRight, ArrowRight, Clock, Play, Download
} from "lucide-react";

export default function PlansLandingPage({ isLoggedIn }) {
  const plans = [
    {
      id: 1,
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for beginners to explore and learn at your own pace",
      features: [
        "Access to 12+ beginner courses",
        "Community forum access",
        "Weekly email tips",
        "Basic progress tracking",
        "Mobile app access"
      ],
      cta: isLoggedIn ? "Continue Free" : "Start Free",
      gradient: "from-gray-100 to-gray-200",
      textColor: "text-gray-700",
      borderColor: "border-gray-300",
      popular: false
    },
    {
      id: 2,
      name: "Premium",
      price: "$29",
      period: "per month",
      description: "Ideal for serious learners ready to accelerate their career",
      features: [
        "Unlimited access to 150+ courses",
        "Official certificates (PDF + LinkedIn)",
        "Priority email & chat support",
        "Download courses for offline",
        "Monthly live Q&A sessions",
        "Ad-free experience"
      ],
      savings: "Save $120/year vs monthly",
      cta: isLoggedIn ? "Upgrade to Premium" : "Start Premium",
      gradient: "from-purple-500 to-pink-500",
      textColor: "text-white",
      borderColor: "border-purple-400",
      popular: true,
      badge: "Most Popular"
    },
    {
      id: 3,
      name: "Pro",
      price: "$79",
      period: "per month",
      description: "For ambitious developers who want mentorship and job placement",
      features: [
        "Everything in Premium",
        "Weekly 1-on-1 mentor calls",
        "Portfolio project reviews",
        "Exclusive job board access",
        "Resume & interview prep",
        "Guaranteed internship placement*"
      ],
      savings: "Best value — 40% off annual",
      cta: isLoggedIn ? "Go Pro Now" : "Launch Pro",
      gradient: "from-emerald-500 to-teal-600",
      textColor: "text-white",
      borderColor: "border-emerald-400",
      popular: false,
      badge: "Career Accelerator"
    },
  ];

  return (
    <>
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Hero */}
      <section className="pt-20 pb-16 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg mb-8">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-semibold text-purple-700">Join 120,000+ learners worldwide</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight font-display">
            Choose Your <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-600 bg-clip-text text-transparent">Learning Path</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            From free exploration to career-launching mentorship — we have a plan for every goal.
          </p>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, value: "120K+", label: "Active Learners" },
              { icon: Award, value: "4.97", label: "Avg. Rating" },
              { icon: Globe, value: "190+", label: "Countries" },
              { icon: TrendingUp, value: "96%", label: "Job Placement" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 mb-2">
                  <stat.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="text-sm font-medium text-gray-600">Monthly</span>
            <button className="relative w-14 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1 shadow-lg">
              <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-md"></div>
            </button>
            <span className="text-sm font-medium text-purple-600">Annual <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Save 40%</span></span>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative group rounded-3xl p-1 transition-all duration-500 hover:scale-[1.02] ${
                  plan.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
                }`}
                style={{ animation: `fadeInUp 0.6s ease-out forwards`, animationDelay: `${index * 0.15}s`, opacity: 0 }}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                {/* Card */}
                <div className={`relative h-full bg-white rounded-3xl p-8 shadow-xl border ${plan.borderColor} flex flex-col justify-between`}>
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className={`px-5 py-2 text-xs font-bold rounded-full text-white shadow-xl flex items-center gap-1.5 ${
                        plan.badge === "Most Popular" 
                          ? "bg-gradient-to-r from-purple-600 to-pink-600" 
                          : "bg-gradient-to-r from-emerald-500 to-teal-600"
                      }`}>
                        <Crown className="w-4 h-4" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Plan Name */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{plan.name}</h2>
                    
                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl md:text-5xl font-extrabold text-gray-900">{plan.price}</span>
                      <span className="text-lg text-gray-500 ml-1">/{plan.period}</span>
                    </div>

                    {/* Savings */}
                    {plan.savings && (
                      <div className="mb-5 inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                        <Sparkles className="w-4 h-4" />
                        {plan.savings}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-gray-600 mb-8 leading-relaxed">{plan.description}</p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`p-1 rounded-lg ${plan.popular ? 'bg-purple-100' : plan.id === 3 ? 'bg-emerald-100' : 'bg-gray-100'}`}>
                            <Check className={`w-4 h-4 ${plan.popular ? 'text-purple-600' : plan.id === 3 ? 'text-emerald-600' : 'text-gray-600'}`} />
                          </div>
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div>
                    {isLoggedIn ? (
                      <Link
                        to={`/subscribe/${plan.id}`}
                        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                            : plan.id === 3
                            ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
                            : "bg-gray-900 text-white hover:bg-gray-800"
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    ) : (
                      <div className="flex gap-3">
                        <Link
                          to="/login"
                          className="flex-1 px-5 py-3 bg-white text-gray-700 font-semibold rounded-full border border-gray-300 hover:bg-gray-50 transition text-center"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className={`flex-1 px-5 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2 ${
                            plan.popular
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                              : plan.id === 3
                              ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700"
                              : "bg-gray-900 text-white hover:bg-gray-800"
                          }`}
                        >
                          {plan.id === 1 ? "Start Free" : "Sign Up"}
                          {plan.id !== 1 && <Zap className="w-4 h-4" />}
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 px-8 py-4 rounded-full shadow-lg">
              <Shield className="w-6 h-6 text-emerald-600" />
              <span className="font-semibold text-emerald-800">30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-display">Loved by Developers Worldwide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Chen", role: "Frontend Engineer @ Google", text: "Landed my dream job 3 months after Pro mentorship.", rating: 5 },
              { name: "Alex Rivera", role: "Fullstack Dev @ Meta", text: "The project reviews were better than my college CS program.", rating: 5 },
              { name: "Priya Patel", role: "Junior Dev → Senior in 18 months", text: "From zero to $120k salary. Worth every penny.", rating: 5 },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-display">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Can I switch plans later?", a: "Yes! Upgrade or downgrade anytime. No fees." },
              { q: "Is there a free trial?", a: "Premium & Pro include a 7-day free trial. Cancel anytime." },
              { q: "Are certificates recognized?", a: "Yes — verified by top tech companies and accepted on LinkedIn." },
              { q: "What if I don't get a job?", a: "Pro plan includes job placement assistance with guaranteed internship." },
            ].map((faq, i) => (
              <details key={i} className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none py-4 px-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <span className="font-semibold text-gray-800">{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 120,000+ developers who’ve transformed their future.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/signup"
              className="px-12 py-5 bg-white text-purple-600 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-12 py-5 bg-white/20 backdrop-blur-xl text-white text-xl font-bold rounded-full border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .font-display {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
      `}</style>
    </>
  );
}