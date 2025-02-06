"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserGroupIcon, AcademicCapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const benefits = [
  {
    name: "Qualified Instructors",
    description: "Learn from experienced teachers who maintain the authenticity of Vedic traditions.",
    icon: AcademicCapIcon,
  },
  {
    name: "Perfect Intonations",
    description: "Master the correct pronunciation, rhythm, and modulation of sacred chants.",
    icon: UserGroupIcon,
  },
  {
    name: "Flexible Learning",
    description: "Choose between online and offline classes to fit your schedule and preferences.",
    icon: GlobeAltIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-bg.png"
          alt="Vedic Symbols Background"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="container relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading"
          >
            About Nadassandhanam
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading max-w-2xl mx-auto"
          >
            Discover the transformative power of Vedic chanting through our comprehensive learning programs.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.name}
              variants={itemVariants}
              className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="absolute -top-4 left-4">
                <span className="inline-flex items-center justify-center rounded-xl bg-saffron/10 p-2">
                  <benefit.icon className="h-6 w-6 text-saffron" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {benefit.name}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a href="#classes" className="btn btn-primary">
            View Our Classes
          </a>
        </motion.div>
      </div>
    </section>
  );
}
