"use client";

import Image from "next/image";
import ServiceImage from "../../../../public/images/service.png"
import FlowerThree from "../../../../public/images/flower_image3.png";


export default function ServicesHighlight() {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-[520px] md:min-h-[640px]">
        
        {/* Background Image */}
        <Image
          src={ServiceImage}// replace with your image
          alt="Wedding couple on beach"
          fill
          priority
          className="object-cover"
        />

        {/* Content Card */}
        <div
          className="
            relative
            md:absolute
            md:right-24
            md:top-1/2
            md:-translate-y-1/2
            bg-white/95
            max-w-md
            mx-6 md:mx-0
            mt-10 md:mt-0
            p-10 md:p-12
            border
            border-[#e6ded5]
          "
        >
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <Image
              src={FlowerThree} // line-art icon
              alt="Leaf icon"
              width={32}
              height={32}
            />
          </div>

          {/* Title */}
          <h3 className="font-script text-3xl text-gray-700 text-center mb-6 leading-snug">
            Creative, Passionate,<br />Artistic
          </h3>

          {/* Description */}
          <p className="text-center text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi
            accumsan.
          </p>
        </div>
      </div>
    </section>
  );
}
