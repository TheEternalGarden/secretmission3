"use client";
import Link from "next/link";

export default function Products() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Back button */}
      <Link href="/" className="inline-block mb-8 text-black hover:underline">
        ← Back
      </Link>

      {/* Products display */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product 1: GDNR 1 */}
          <div className="flex flex-col gap-4 border rounded-lg p-6 shadow-sm">
            <div className="bg-gray-100 aspect-square flex items-center justify-center rounded-md">
              <div className="text-gray-400 text-sm">GDNR 1 IMAGE</div>
            </div>
            <h1 className="text-xl font-bold mt-2">GDNR 1</h1>
            <p className="text-gray-600">The GDNR 1 is a visionary sneaker blending futuristic design with classic comfort. Limited edition drop.</p>
            <button className="mt-auto w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
              Coming Soon
            </button>
          </div>

          {/* Product 2: ETERNAL GARDEN // ZERO CAPSULE */}
          <div className="flex flex-col gap-4 border rounded-lg p-6 shadow-sm">
            <div className="bg-gray-100 aspect-square flex items-center justify-center rounded-md overflow-hidden">
              <video
                src="/codex.mp4"
                className="w-full h-full"
                autoPlay
                loop
                muted
                playsInline
                width={400}
                height={400}
                style={{ background: "#f3f4f6", objectFit: "cover" }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <h1 className="text-xl font-bold mt-2">ETERNAL GARDEN // ZERO CAPSULE</h1>
            <p className="text-gray-600">The ZERO CAPSULE collection from ETERNAL GARDEN features minimal, timeless pieces inspired by nature and urban life.</p>
            <button className="mt-auto w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 