import { MessageCircle, Heart, Share2, UserCircle } from "lucide-react";

export default function CommunityPage() {
  // Sample posts – replace with API later
  const posts = [
    {
      id: 1,
      author: "Priya Sharma",
      role: "Frontend Developer",
      content: "Just finished the React course 🚀🔥 Loved the hands-on projects!",
      likes: 24,
      comments: 5,
      time: "2h ago",
    },
    {
      id: 2,
      author: "Rahul Verma",
      role: "Data Science Enthusiast",
      content:
        "Any tips for mastering DSA in Java? I'm struggling with recursion problems.",
      likes: 15,
      comments: 8,
      time: "5h ago",
    },
    {
      id: 3,
      author: "Anjali Gupta",
      role: "UI/UX Designer",
      content:
        "Started the Machine Learning course today 🤖 Super excited to dive in!",
      likes: 12,
      comments: 3,
      time: "1d ago",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Community</h1>
      <p className="text-gray-600">Connect, share, and grow with peers</p>

      {/* Create Post Box */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex space-x-3">
          <UserCircle className="w-10 h-10 text-gray-400" />
          <input
            type="text"
            placeholder="Share your thoughts..."
            className="w-full p-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-end mt-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
            Post
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
          >
            {/* Author Info */}
            <div className="flex items-center space-x-3">
              <UserCircle className="w-10 h-10 text-gray-400" />
              <div>
                <h2 className="font-semibold text-gray-800">{post.author}</h2>
                <p className="text-sm text-gray-500">
                  {post.role} · {post.time}
                </p>
              </div>
            </div>

            {/* Post Content */}
            <p className="mt-4 text-gray-700">{post.content}</p>

            {/* Post Actions */}
            <div className="flex items-center space-x-6 mt-4 text-gray-500">
              <button className="flex items-center space-x-1 hover:text-red-500">
                <Heart className="w-5 h-5" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-500">
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-green-500">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
