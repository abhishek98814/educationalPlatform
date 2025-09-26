import { MessageCircle, Send, UserCircle } from "lucide-react";
import { useState } from "react";

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState("");

  // Dummy chat list
  const chats = [
    { id: 1, name: "Priya Sharma", lastMessage: "See you tomorrow!", time: "2m ago" },
    { id: 2, name: "Rahul Verma", lastMessage: "Thanks for your help 🙌", time: "1h ago" },
    { id: 3, name: "Anjali Gupta", lastMessage: "How’s the project going?", time: "3h ago" },
  ];

  // Dummy messages per chat
  const messages = {
    1: [
      { id: 1, sender: "Priya Sharma", text: "Hey, are we meeting at 5?", me: false },
      { id: 2, sender: "Me", text: "Yes, see you at the cafe!", me: true },
      { id: 3, sender: "Priya Sharma", text: "See you tomorrow!", me: false },
    ],
    2: [
      { id: 1, sender: "Rahul Verma", text: "Thanks for your help 🙌", me: false },
      { id: 2, sender: "Me", text: "Anytime bro!", me: true },
    ],
    3: [
      { id: 1, sender: "Anjali Gupta", text: "How’s the project going?", me: false },
      { id: 2, sender: "Me", text: "Pretty good, working on UI now.", me: true },
    ],
  };

  const handleSend = () => {
    if (message.trim() === "") return;
    // Add message to dummy chat
    messages[activeChat].push({ id: Date.now(), sender: "Me", text: message, me: true });
    setMessage("");
  };

  return (
    <div className="flex h-[80vh] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Left Sidebar - Chat List */}
      <div className="w-1/3 border-r border-gray-200 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Messages</h2>
        <div className="space-y-3">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition ${
                activeChat === chat.id ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              <UserCircle className="w-10 h-10 text-gray-400" />
              <div className="flex-1">
                <h3 className="font-medium text-gray-800">{chat.name}</h3>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
              <span className="text-xs text-gray-400">{chat.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Chat Window */}
      <div className="flex-1 flex flex-col">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center space-x-3">
              <UserCircle className="w-10 h-10 text-gray-400" />
              <h2 className="font-semibold text-gray-800">
                {chats.find((c) => c.id === activeChat)?.name}
              </h2>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
              {messages[activeChat].map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.me ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`px-4 py-2 rounded-xl max-w-xs ${
                      msg.me
                        ? "bg-blue-500 text-white rounded-br-none"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 flex items-center space-x-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <MessageCircle className="w-10 h-10 mr-2" />
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
}
