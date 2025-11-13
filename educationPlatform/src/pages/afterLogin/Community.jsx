import { MessageCircle, Heart, Share2, UserCircle, Send, Sparkles, TrendingUp, Users, Award, Clock, ChevronRight, Flame, Zap, Search, Filter, MoreVertical } from "lucide-react";
import { useState } from "react";

export default function CommunityPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Priya Sharma",
      role: "Frontend Developer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      content: "Just completed the React course! The hands-on projects were game-changing. Feeling ready to build real apps now!",
      likes: 124,
      comments: 18,
      shares: 5,
      time: "2h ago",
      trending: true,
      badge: "Top Contributor",
      badgeColor: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      author: "Rahul Verma",
      role: "Data Science Enthusiast",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Struggling with recursion in DSA. Can someone explain the call stack with a simple example? Feeling stuck on the Tower of Hanoi problem.",
      likes: 89,
      comments: 32,
      shares: 12,
      time: "5h ago",
      trending: false,
      badge: "Help Seeker",
      badgeColor: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      author: "Anjali Gupta",
      role: "UI/UX Designer",
      avatar: "https://images.unsplash.com/photo-1580489944680-05a0b4a5852d?w=100&h=100&fit=crop&crop=face",
      content: "Started Machine Learning today! The neural network visualization blew my mind. Anyone else in the cohort?",
      likes: 156,
      comments: 24,
      shares: 8,
      time: "1d ago",
      trending: true,
      badge: "New Learner",
      badgeColor: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      author: "Vikram Singh",
      role: "Full Stack Engineer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Pro tip: Use React Query for data fetching. Saved me 200+ lines of useEffect hell. Here's a quick thread with code snippets.",
      likes: 201,
      comments: 45,
      shares: 38,
      time: "3d ago",
      trending: true,
      badge: "Expert",
      badgeColor: "from-yellow-500 to-orange-500",
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("trending");

  const handlePost = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        author: "You",
        role: "Learner",
        avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
        content: newPost,
        likes: 0,
        comments: 0,
        shares: 0,
        time: "Just now",
        trending: false,
        badge: "New Post",
        badgeColor: "from-green-500 to-emerald-500",
      };
      setPosts([post, ...posts]);
      setNewPost("");
    }
  };

  const handleLike = (id) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
        setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes - 1 } : p));
      } else {
        newSet.add(id);
        setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
      }
      return newSet;
    });
  };

  const filteredPosts = posts
    .filter(post => 
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "trending") return b.likes - a.likes;
      if (filter === "recent") return new Date(b.time) - new Date(a.time);
      return 0;
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Hero Header */}
        <header className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/80 backdrop-blur rounded-full shadow-md mb-5 border border-white/50">
            <Users className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">12,847 Active Learners</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Community Hub</h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Connect, share knowledge, and grow with fellow learners
          </p>
        </header>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Posts", value: "8.2K", icon: MessageCircle, color: "text-blue-600" },
            { label: "Active Today", value: "1.2K", icon: Users, color: "text-purple-600" },
            { label: "Help Given", value: "94%", icon: Heart, color: "text-red-600" },
            { label: "Top Answerers", value: "48", icon: Award, color: "text-yellow-600" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur rounded-2xl p-5 text-center shadow-sm border border-white/30"
            >
              <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${stat.color.replace('text-', 'from-').replace('-600', '-100')} to-white mb-2`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Create Post Section */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-white/40 p-5">
          <div className="flex items-start gap-3">
            <img
              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face"
              alt="You"
              className="w-11 h-11 rounded-full ring-2 ring-white"
            />
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your thoughts, ask questions, or celebrate wins..."
                className="w-full p-3 bg-gray-50 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
                rows={2}
              />
              <div className="flex justify-end mt-3">
                <button
                  onClick={handlePost}
                  className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all text-sm"
                >
                  <Send className="w-4 h-4" />
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts..."
              className="w-full pl-10 pr-3 py-2 bg-white/80 backdrop-blur rounded-xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
            />
          </div>
          <div className="flex gap-2">
            {["trending", "recent", "my posts"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl font-medium text-sm transition-all ${
                  filter === f
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-white/80 text-gray-700 hover:shadow-sm"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-white/40 p-5 hover:shadow-md transition-all"
              style={{
                animation: `fadeInUp 0.5s ease-out forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Author Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-12 h-12 rounded-full ring-2 ring-white"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-800 text-base">{post.author}</h3>
                      <span className={`px-2 py-0.5 text-xs font-medium text-white rounded-full bg-gradient-to-r ${post.badgeColor}`}>
                        {post.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.time}
                    </p>
                  </div>
                </div>
                {post.trending && (
                  <div className="flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                    <Flame className="w-3 h-3" />
                    Trending
                  </div>
                )}
              </div>

              {/* Post Content */}
              <p className="text-gray-700 mb-4 leading-relaxed text-base">{post.content}</p>

              {/* Engagement */}
              <div className="flex items-center gap-5 text-sm text-gray-600">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-1.5 transition-all ${
                    likedPosts.has(post.id)
                      ? "text-red-600"
                      : "hover:text-red-600"
                  }`}
                >
                  <Heart className={`w-4.5 h-4.5 ${likedPosts.has(post.id) ? "fill-current" : ""}`} />
                  <span className="font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-blue-600 transition">
                  <MessageCircle className="w-4.5 h-4.5" />
                  <span className="font-medium">{post.comments}</span>
                </button>
                <button className="flex items-center gap-1.5 hover:text-green-600 transition">
                  <Share2 className="w-4.5 h-4.5" />
                  <span className="font-medium">{post.shares}</span>
                </button>
              </div>

              {/* Quick Reply */}
              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=60&h=60&fit=crop&crop=face"
                  alt="You"
                  className="w-8 h-8 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="flex-1 px-3 py-1.5 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
                />
                <button className="p-1.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center py-6">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur border border-white/40 rounded-xl text-gray-700 font-medium text-sm hover:shadow transition">
            Load More
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500">
          <p>Real-time updates • Community guidelines apply</p>
          <p className="mt-1">© 2025 Learning Platform • Built for learners</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .font-sans {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>
    </div>
  );
}