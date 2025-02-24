// app/error.tsx
"use client";

import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 text-center">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
          alt="Error Icon"
          width={120}
          height={120}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold text-red-500 mb-2">
          Oops! Something went wrong.
        </h1>
        <p className="text-gray-600 mb-4">
          We are working to fix the issue. Please try again later.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
