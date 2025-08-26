import { NextPage } from "next";
import { motion } from "framer-motion";
import { Building2, CheckCircle2, PhoneCall } from "lucide-react";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-gray-100 to-gray-50">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold mb-6"
        >
          Welcome to <span className="text-gray-700">Eastwell Indonesia</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-xl text-lg text-gray-600 mb-8"
        >
          Your trusted partner in finding and managing properties with
          integrity, transparency, and innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="flex gap-4"
        >
          <Link href="/about">
            <button className="px-6 py-3 bg-gray-800 text-white rounded-2xl shadow hover:bg-gray-900 transition">
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-2xl shadow hover:bg-gray-100 transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Property {item}</h3>
                <p className="text-gray-600 mb-4">
                  Modern and elegant property perfect for families and
                  investors.
                </p>
                <button className="text-gray-800 font-medium hover:underline">
                  View Details →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Building2 className="w-10 h-10 text-gray-700" />,
              title: "Trusted Developer",
              desc: "Years of experience in property development.",
            },
            {
              icon: <CheckCircle2 className="w-10 h-10 text-gray-700" />,
              title: "Quality Assurance",
              desc: "We guarantee high-quality standards in every project.",
            },
            {
              icon: <PhoneCall className="w-10 h-10 text-gray-700" />,
              title: "24/7 Support",
              desc: "Always here to assist with your property needs.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gray-800 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to find your dream property?
        </motion.h2>
        <Link href="/contact">
          <button className="px-8 py-4 bg-white text-gray-900 rounded-2xl shadow hover:bg-gray-100 transition">
            Get in Touch
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
