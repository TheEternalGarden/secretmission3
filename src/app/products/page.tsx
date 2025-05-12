"use client";
import Link from "next/link";

export default function Products() {
  return (
    <div className="min-h-screen bg-white p-8">
      {/* Back button */}
      <Link href="/" className="inline-block mb-8 text-black hover:underline">
        ← Back
      </Link>

      {/* Product display */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-gray-100 aspect-square flex items-center justify-center">
            <div className="text-gray-400 text-sm">YEEZY BOOST 350 V2</div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">YEEZY BOOST 350 V2</h1>
            <p className="text-gray-600">The YEEZY BOOST 350 V2 features an upper composed of re-engineered Primeknit. The post-dyed monofilament side stripe is woven into the upper. Reflective threads are woven into the laces. The midsole utilizes adidas' innovative BOOST technology.</p>
            
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Details</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Primeknit upper</li>
                <li>BOOST midsole</li>
                <li>Rubber outsole</li>
                <li>Reflective laces</li>
              </ul>
            </div>

            <div className="mt-8">
              <button className="w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-colors">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 