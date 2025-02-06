"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Vedic Learning Background"
          fill
          className="object-cover brightness-75"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32 sm:py-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Unlock the Sacred Sound
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-100 max-w-2xl mx-auto"
          >
            Learn Vedic chanting and Sahasranamam with proper intonations and modulations. Join our
            expert-led classes to master the ancient art of sacred chanting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="#booking"
              className="btn btn-primary text-lg animate-float shadow-lg hover:shadow-xl"
            >
              Enroll Now
            </a>
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-white hover:text-gold transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-2"
          >
            <motion.div className="w-1 h-1 bg-white rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
