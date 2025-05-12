"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function useTypewriter(text: string, speed = 50, onDone?: () => void, start = true) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!start) {
      setDisplayed("");
      return;
    }
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        if (onDone) onDone();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, onDone, start]);
  return displayed;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const firstLine = useTypewriter("YEEZY COMING SOON", 50, () => setShowSecond(true), true);
  const secondLine = useTypewriter("BY ETERNAL LABS", 50, undefined, showSecond);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Hamburger Icon - Right */}
      <button
        className="absolute top-6 right-6 z-20 flex flex-col gap-1 w-8 h-8 justify-center items-center"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-7 h-0.5 bg-black rounded"></span>
        <span className="block w-7 h-0.5 bg-black rounded"></span>
        <span className="block w-7 h-0.5 bg-black rounded"></span>
      </button>

      {/* Centered Text with Typewriter Effect */}
      <div className="flex flex-col items-center">
        <span className="text-center text-sm text-black font-light tracking-wide select-none min-h-[1.5em]">
          {firstLine || "YEEZY COMING SOON"}
        </span>
        <span className="text-center text-xs text-gray-400 font-light mt-2 select-none min-h-[1.5em]">
          {showSecond ? (secondLine || "BY ETERNAL LABS") : ""}
        </span>
      </div>

      {/* Drawer Menu - Right */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 flex justify-end">
          <nav className="bg-white w-64 h-full shadow-lg p-8 flex flex-col gap-6 animate-slide-in-right">
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
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.2s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}
