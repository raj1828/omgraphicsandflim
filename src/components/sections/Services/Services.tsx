import ServiceCard from "./ServiceCard";
import FlowerOne from "../../../../public/images/flower_image1.png";
import FlowerTwo from "../../../../public/images/flower_image2.png";
import FlowerThree from "../../../../public/images/flower_image3.png";

export default function Services() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-[#c9b9a8] mb-4">
            SERVICES
          </p>
          <h2 className="font-playfair text-4xl font-medium">What I Offer</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <ServiceCard title="Wedding" price="2999" imageSrc={FlowerOne.src} />

          <ServiceCard title="Portrait" price="399" imageSrc={FlowerTwo.src} />

          <ServiceCard
            title="Engagement"
            price="1999"
            imageSrc={FlowerThree.src}
          />
        </div>
      </div>
    </section>
  );
}
