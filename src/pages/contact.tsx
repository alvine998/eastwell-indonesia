import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Get In Touch
            </h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-400 outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-400 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-400 outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gray-700" />
              <span className="text-gray-600">info@eastwell.co.id</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-gray-700" />
              <span className="text-gray-600">+62 812 3456 7890</span>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-gray-700" />
              <span className="text-gray-600">
                Eastwell Tower, Jakarta, Indonesia
              </span>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5123.261101562672!2d106.8959108!3d-6.2114297999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f53e68ce2c67%3A0x57389cb99426078a!2sEastwell%20Avenue!5e1!3m2!1sid!2sid!4v1756196851719!5m2!1sid!2sid"
              className="w-full h-72 rounded-2xl shadow-lg"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
