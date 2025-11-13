import { MessageCircle, Send, UserCircle, Search, MoreVertical, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Dummy chat list with avatars and online status
  const chats = [
    { 
      id: 1, 
      name: "Priya Sharma", 
      role: "Frontend Dev", 
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
      lastMessage: "See you tomorrow!", 
      time: "2m ago",
      online: true,
      unread: 1
    },
    { 
      id: 2, 
      name: "Rahul Verma", 
      role: "Data Science", 
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      lastMessage: "Thanks for your help", 
      time: "1h ago",
      online: false,
      unread: 0
    },
    { 
      id: 3, 
      name: "Anjali Gupta", 
      role: "UI/UX Designer", 
      avatar: "https://images.unsplash.com/photo-1580489944680-05a0b4a5852d?w=80&h=80&fit=crop&crop=face",
      lastMessage: "How’s the project going?", 
      time: "3h ago",
      online: true,
      unread: 2
    },
  ];

  // Messages per chat
  const messages = {
    1: [
      { id: 1, sender: "Priya Sharma", text: "Hey, are we meeting at 5?", me: false, time: "2:30 PM" },
      { id: 2, sender: "Me", text: "Yes, see you at the cafe!", me: true, time: "2:32 PM" },
      { id: 3, sender: "Priya Sharma", text: "See you tomorrow!", me: false, time: "2:35 PM" },
    ],
    2: [
      { id: 1, sender: "Rahul Verma", text: "Thanks for your help", me: false, time: "1:15 PM" },
      { id: 2, sender: "Me", text: "Anytime bro!", me: true, time: "1:16 PM" },
    ],
    3: [
      { id: 1, sender: "Anjali Gupta", text: "How’s the project going?", me: false, time: "11:42 AM" },
      { id: 2, sender: "Me", text: "Pretty good, working on UI now.", me: true, time: "11:45 AM" },
    ],
  };

  const handleSend = () => {
    if (message.trim() === "" || !activeChat) return;
    const newMsg = {
      id: Date.now(),
      sender: "Me",
      text: message,
      me: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    messages[activeChat].push(newMsg);
    setMessage("");
  };

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentChat = chats.find(c => c.id === activeChat);

  return (
    <div className="h-[82vh] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden font-sans flex flex-col">
      {/* Header */}
      <div className="p-5 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">Messages</h1>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>{chats.filter(c => c.online).length} online</span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Chat List */}
        <div className="w-full md:w-80 border-r border-gray-200 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chats..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-2 space-y-1">
              {filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChat(chat.id)}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all hover:bg-gray-50 ${
                    activeChat === chat.id ? "bg-purple-50 border border-purple-200" : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="w-12 h-12 rounded-full ring-2 ring-white"
                    />
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-800 text-base truncate">{chat.name}</h3>
                      <span className="text-xs text-gray-400 ml-2">{chat.time}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="w-5 h-5 bg-purple-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {chat.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Chat Window */}
        <div className="hidden md:flex flex-1 flex-col">
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={currentChat.avatar}
                    alt={currentChat.name}
                    className="w-10 h-10 rounded-full ring-2 ring-white"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800 text-base">{currentChat.name}</h2>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      {currentChat.online ? (
                        <>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Active now
                        </>
                      ) : (
                        "Last seen recently"
                      )}
                    </p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-xl transition">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white space-y-4">
                {messages[activeChat].map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.me ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex max-w-xs ${msg.me ? "flex-row-reverse" : "flex-row"} items-end gap-2`}>
                      {!msg.me && (
                        <img
                          src={currentChat.avatar}
                          alt={msg.sender}
                          className="w-7 h-7 rounded-full"
                        />
                      )}
                      <div
                        className={`px-4 py-2.5 rounded-2xl text-sm ${
                          msg.me
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-none"
                            : "bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.me ? "text-purple-100" : "text-gray-400"}`}>
                          {msg.time}
                        </p>
                      </div>
                      {msg.me && (
                        <div className="text-xs text-gray-400 self-end mb-1">
                          <CheckCircle className="w-3.5 h-3.5 text-purple-600" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                  />
                  <button
                    onClick={handleSend}
                    className="p-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition transform hover:scale-105"
                  >
                    <Send className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-400 bg-gray-50">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 mx-auto mb-3 text-gray-300" />
                <p className="text-base font-medium text-gray-500">Select a chat to start messaging</p>
                <p className="text-sm text-gray-400 mt-1">Your conversations appear here</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Hint */}
      <div className="md:hidden p-4 bg-purple-50 text-center text-sm text-purple-700">
        Tap a chat to open conversation
      </div>

      <style jsx>{`
        .font-sans {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }
      `}</style>
    </div>
  );
}