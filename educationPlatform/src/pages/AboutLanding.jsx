export default function AboutLandingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About Sanchi Gyan
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Sanchi Gyan is a premium online learning platform offering curated courses
          for learners of all levels. Our mission is to make learning accessible,
          engaging, and empowering for everyone.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower students and professionals with high-quality courses,
            hands-on learning, and real-world skills to succeed in their careers.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the leading platform for online learning, bridging knowledge gaps
            and fostering continuous growth for learners worldwide.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Abhishek Jha", role: "Founder & CEO" },
            { name: "Sushil Sharma", role: "Lead Instructor" },
            { name: "Anjali Verma", role: "Product Designer" },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="h-24 w-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">
                {member.name[0]}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Started Today!</h2>
        <p className="text-gray-600 mb-6">
          Join Sanchi Gyan and explore our premium courses to advance your skills.
        </p>
        <a
          href="/signup"
          className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold shadow-lg hover:scale-105 transform transition-all duration-200"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
}
