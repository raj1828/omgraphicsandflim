"use client";

import Image from "next/image";
import HeroImage from "../../../../public/images/about_hero.png";

export default function About() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[600px] md:h-auto">
          <Image
            src={HeroImage}
            alt="Photographer"
            fill
            className="object-contain bg-[#e9e7e4]"
            priority
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center justify-center bg-white">
          <div className="max-w-md text-center px-6">
            <span className="block text-6xl text-[#e6ded5] leading-none mb-6">
              “
            </span>

            <h2 className="font-playfair text-3xl font-medium mb-6">
              Hello, My Name is Tessa
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
              tristique purus vehicula felis velit ac. Tempus velit morbi
              accumsan id sit interdum lacus turpis ac.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur. Integer malesuada sagittis
              placerat eget.
            </p>

            <div className="w-20 h-px bg-[#d8cfc6] mx-auto mb-6" />

            <p className="font-script text-3xl mb-8">Tessa.M</p>

            <button className="bg-[#e6ded5] px-8 py-3 text-sm uppercase tracking-wide hover:bg-[#d6ccc2] transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
