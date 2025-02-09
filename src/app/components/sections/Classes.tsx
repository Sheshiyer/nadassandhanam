"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDaysIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import BookingButton from "../BookingButton";

const classes = [
  {
    name: "Veda Mantras & Sahasranamam",
    schedule: "Monday & Tuesday",
    time: "12:30 PM - 1:30 PM / 7:00 PM - 8:00 PM",
    mode: "Online & Offline",
    instructor: "Shri Natesh Aiyer",
    icon: CalendarDaysIcon,
    calLink: "nadassandhanam/1hour",
  },
  {
    name: "Youth Special Batch",
    schedule: "Friday & Saturday",
    time: "7:00 PM - 8:00 PM",
    mode: "Online & Offline",
    instructor: "Shri Natesh Aiyer",
    icon: UserGroupIcon,
    calLink: "nadassandhanam/1hour",
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="subheading max-w-2xl mx-auto">
              Choose from our flexible schedule of online and offline classes.
            </p>
            <p className="text-lg font-semibold text-saffron">
              Fees: Rs.1000/- per month (8 sessions)
            </p>
          </motion.div>
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
            Can&apos;t find a suitable time? Contact us on WhatsApp for custom arrangements.
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
