"use client";

import React from "react";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import WhatsAppButton from "./components/WhatsAppButton";
import LoadingSpinner from "./components/LoadingSpinner";

const Header = dynamic(() => import("./components/layout/Header"), { ssr: true });
const Footer = dynamic(() => import("./components/layout/Footer"), { ssr: true });
const Hero = dynamic(() => import("./components/sections/Hero"), { ssr: true });
const About = dynamic(() => import("./components/sections/About"), { ssr: true });
const Classes = dynamic(() => import("./components/sections/Classes"), { ssr: true });
const Contact = dynamic(() => import("./components/sections/Contact"), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <Classes />
        <Contact />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
