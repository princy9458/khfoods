"use client";

import React from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-bold text-red-600">
        Something went wrong!
      </h2>

      <p className="mt-2 text-sm text-gray-600 max-w-md">
        {error?.message || "An unexpected error occurred. Please try again."}
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-md bg-black px-6 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
      >
        Try again
      </button>
    </div>
  );
}
