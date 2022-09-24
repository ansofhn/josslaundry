import React from "react";

export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen antialiased tracking-tighter text-gray-800">
      {children}
    </div>
  );
}
