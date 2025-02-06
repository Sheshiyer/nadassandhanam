"use client";

import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading max-w-2xl mx-auto"
          >
            Have questions? We&apos;re here to help you on your spiritual journey.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2"
        >
          {/* WhatsApp Contact */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-8">
            <div className="flex items-center space-x-4 mb-6">
              <ChatBubbleLeftRightIcon className="h-8 w-8 text-saffron" />
              <h3 className="text-xl font-semibold">WhatsApp</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Connect with us on WhatsApp for quick responses and personalized guidance.
            </p>
            <a
              href="https://wa.me/919611265066"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full justify-center"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Direct Contact */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-8">
            <div className="flex items-center space-x-4 mb-6">
              <PhoneIcon className="h-8 w-8 text-saffron" />
              <h3 className="text-xl font-semibold">Direct Contact</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong>Phone:</strong> +91 9611265066
              </p>
              <p>
                <strong>Email:</strong> your-email@example.com
              </p>
              <p>
                <strong>Location:</strong> Your location details
              </p>
            </div>
          </div>
        </motion.div>

        {/* Schedule Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Ready to Start Learning?</h3>
          <p className="text-gray-600 mb-6">
            Schedule your first class or get in touch to learn more about our programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#classes" className="btn btn-primary">
              View Schedule
            </a>
            <a href="#booking" className="btn bg-white text-gray-900 border-gray-200 hover:bg-gray-50">
              Book a Class
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
