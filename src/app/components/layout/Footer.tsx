"use client";

import React from "react";
import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Classes", href: "#classes" },
    { name: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-indigo">
              <span className="font-cinzel text-2xl font-bold">Nadassandhanam</span>
            </Link>
            <p className="text-sm leading-6 text-gray-600">
              Learn Vedic chanting and Sahasranamam with proper intonations and modulations.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://wa.me/919611265066"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Navigation</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900">Contact</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    href="https://wa.me/919611265066"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    WhatsApp: Click to chat
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                    Book a Class
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-900/10 pt-8">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Nadassandhanam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
