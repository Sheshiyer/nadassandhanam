"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDaysIcon, VideoCameraIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import BookingButton from "../BookingButton";

const classes = [
  {
    name: "Veda Mantras",
    schedule: "Monday & Tuesday",
    time: "7:00 AM - 8:00 AM",
    mode: "Online & Offline",
    instructor: "Guru Ji",
    icon: CalendarDaysIcon,
    calLink: "meetshesh/30min",
  },
  {
    name: "Sahasranamam",
    schedule: "Monday & Tuesday",
    time: "6:00 PM - 7:00 PM",
    mode: "Online",
    instructor: "Guru Ji",
    icon: VideoCameraIcon,
    calLink: "meetshesh/30min",
  },
  {
    name: "Youth Special Batch",
    schedule: "Friday & Saturday",
    time: "5:00 PM - 6:00 PM",
    mode: "Online & Offline",
    instructor: "Guru Ji",
    icon: UserGroupIcon,
    calLink: "meetshesh/30min",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="section">
      <div className="container">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            Class Schedule
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading max-w-2xl mx-auto"
          >
            Choose from our flexible schedule of online and offline classes.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{classItem.name}</h3>
                  <classItem.icon className="h-6 w-6 text-saffron" aria-hidden="true" />
                </div>
                <dl className="mt-4 space-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Schedule</dt>
                    <dd className="text-sm text-gray-900">{classItem.schedule}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Time</dt>
                    <dd className="text-sm text-gray-900">{classItem.time}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Mode</dt>
                    <dd className="text-sm text-gray-900">{classItem.mode}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Instructor</dt>
                    <dd className="text-sm text-gray-900">{classItem.instructor}</dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <BookingButton
                    calLink={classItem.calLink}
                    className="btn btn-primary w-full justify-center"
                  >
                    Book Now
                  </BookingButton>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Can't find a suitable time? Contact us on WhatsApp for custom arrangements.
          </p>
          <a
            href="https://wa.me/919611265066"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Contact on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
