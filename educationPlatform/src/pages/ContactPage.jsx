import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactLandingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Have questions or need help? Reach out to us and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <div className="text-pink-600 mt-1">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Email</h3>
            <p className="text-gray-600">support@sanchigyan.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <div className="text-pink-600 mt-1">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Phone</h3>
            <p className="text-gray-600">+977 98XXXXXXXX</p>
          </div>
        </div>

        <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
          <div className="text-pink-600 mt-1">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">Address</h3>
            <p className="text-gray-600">Kathmandu, Nepal</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-2">Message</label>
            <textarea
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              rows={5}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-full font-bold shadow-lg hover:scale-105 transform transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
