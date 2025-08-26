// pages/about.tsx
import { motion } from "framer-motion";
import { Users, Target, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-center text-gray-900"
        >
          About <span className="text-gray-600">Eastwell Indonesia</span>
        </motion.h1>
      </section>

      {/* Company Story */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-gray-700 leading-relaxed"
        >
          <h2 className="text-2xl font-semibold text-gray-900">Our Story</h2>
          <p>
            Eastwell Indonesia is a forward-thinking property company committed
            to building spaces that inspire and empower communities. With a
            dedication to quality and innovation, we have been shaping the real
            estate landscape with modern designs and sustainable practices.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start"
          >
            <Target className="h-10 w-10 text-gray-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To provide modern, affordable, and sustainable property solutions
              that enrich lives and strengthen communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start"
          >
            <Eye className="h-10 w-10 text-gray-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To be a leading property developer in Indonesia recognized for
              excellence, integrity, and sustainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-gray-900 mb-10 text-center"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { name: "Ikna Abdul Kholik", role: "CEO" },
            { name: "Dadang Suhendar", role: "Head of Operation" },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <Users className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h4>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
