import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiSend } from "react-icons/fi";

const gradientTextClass =
  "bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400";

const Contact: React.FC = () => {
  return (
    <motion.div
      className="text-center py-16 md:py-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-2">
        Let's talk
      </h2>
      <p className={`text-lg md:text-xl font-medium mb-6 ${gradientTextClass}`}>
        Contact
      </p>
      <p className="max-w-xl mx-auto text-gray-300 mb-10">
        Have a question or a project in mind? Feel free to reach out.
      </p>

      {/* Contact Form */}
      <form
        className="max-w-xl mx-auto text-left flex flex-col gap-5"
        // You can add a form handling service like Formspree or Netlify Forms here
        // action="YOUR_FORMSPREE_ENDPOINT"
        // method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 placeholder-gray-400"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-300 placeholder-gray-400"
        ></textarea>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 w-full md:w-auto md:self-end px-8 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
        >
          Send Message
          <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </form>

      {/* Location */}
      <div className="flex items-center justify-center gap-2 text-gray-400 mt-16">
        <FiMapPin />
        <span>Chennai, India</span>
      </div>
    </motion.div>
  );
};

export default Contact;