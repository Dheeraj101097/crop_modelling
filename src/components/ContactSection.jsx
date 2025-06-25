import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Github, FileText, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-6">
            Get In Touch
          </h2>
          {/* <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Interested in our research or want to collaborate? We'd love to hear from you.
          </p> */}
        </motion.div>

        {/* <div className="grid grid-cols-2  lg:grid-cols-2 gap-12"> */}
        {/* <motion.div
            className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-green-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-green-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-green-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your interest in our research..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div> */}

        {/* Contact Info & Links */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-green-800 font-medium">Email</p>
                  <a
                    className="text-green-600"
                    href="mailto:dheerajap6@gmail.com"
                  >
                    dheerajap6@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <a
                    className="text-green-800 font-medium"
                    href="tel:7606072474"
                  >
                    Phone
                  </a>
                  {/* <p className="text-green-600"></p> */}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-green-800 font-medium">Location</p>
                  <p className="text-green-600">Roorkee, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Links */}
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold text-green-800 mb-6">
              Project Resources
            </h3>
            <div className="space-y-4">
              <motion.a
                href="#"
                className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-green-800 font-medium">
                    GitHub Repository
                  </p>
                  <p className="text-green-600 text-sm">
                    View source code and data
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="#"
                className="flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-green-800 font-medium">Research Paper</p>
                  <p className="text-green-600 text-sm">Download full report</p>
                </div>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* </div> */}

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-green-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-green-600">
              © 2025 Soybean Yield Prediction Research Project. Built with
              passion for sustainable agriculture.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
