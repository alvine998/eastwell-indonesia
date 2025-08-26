import { motion } from "framer-motion";

const jobs = [
  {
    title: "Marketing Executive",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    description:
      "Drive brand growth and engage clients through creative marketing strategies.",
  },
  {
    title: "Property Consultant",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    description:
      "Guide customers in finding their dream property with expert advice.",
  },
  {
    title: "Finance Analyst",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    description:
      "Analyze financial data and support business decisions with insights.",
  },
];

export default function Career() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Join Our Team
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          At Eastwell Indonesia, we believe in innovation, teamwork, and growth.
          Explore exciting career opportunities and become part of our journey.
        </motion.p>
      </section>

      {/* Company Values */}
      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Why Work With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">Growth</h3>
            <p className="text-gray-600">
              We invest in our people with training and career development
              programs.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              Work with passionate professionals who value teamwork and respect.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-2xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">Impact</h3>
            <p className="text-gray-600">
              Be part of projects that make a difference in communities across
              Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 text-center">
          Current Openings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
              <p className="text-gray-600 mt-2">{job.description}</p>
              <p className="mt-4 text-sm text-gray-500">
                📍 {job.location} · {job.type}
              </p>
              <button className="mt-6 px-5 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-700 transition-colors">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
