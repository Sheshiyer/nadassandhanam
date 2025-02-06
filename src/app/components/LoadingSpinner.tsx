"use client";

import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-saffron animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-indigo animate-spin"></div>
        </div>
      </div>
      <p className="ml-4 text-lg font-medium text-gray-600">Loading...</p>
    </div>
  );
}
