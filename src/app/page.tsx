"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Hamburger Icon */}
      <button
        className="absolute top-6 left-6 z-20 flex flex-col gap-1 w-8 h-8 justify-center items-center"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-7 h-0.5 bg-black rounded"></span>
        <span className="block w-7 h-0.5 bg-black rounded"></span>
        <span className="block w-7 h-0.5 bg-black rounded"></span>
      </button>

      {/* Centered Text */}
      <span className="text-center text-sm text-black font-light tracking-wide select-none">
        YEEZY COMING SOON
      </span>

      {/* Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 flex">
          <nav className="bg-white w-64 h-full shadow-lg p-8 flex flex-col gap-6 animate-slide-in-left">
            <button
              className="self-end mb-8 text-2xl font-bold text-black"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              ×
            </button>
            <Link
              href="/products"
              className="text-lg text-black hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              PRODUCTS
            </Link>
          </nav>
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
