import Image from "next/image";

type ServiceCardProps = {
  title: string;
  price: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function ServiceCard({
  title,
  price,
  imageSrc,
  imageAlt = title,
}: ServiceCardProps) {
  return (
    <div className="bg-[#f5f2ee] w-80 text-center gap-5 py-12 px-6 flex flex-col items-center">
      {/* Image Icon */}
      <div className="relative w-16 h-32 mb-6">
        <Image src={imageSrc} alt={imageAlt} fill className="object-contain" />
      </div>

      {/* Title */}
      <h3 className="font-script text-5xl mb-4 text-gray-700">{title}</h3>

      {/* Price */}
      <div>
        <p className="text-lg text-gray-500 mb-2">Per Session</p>
        <p className="font-playfair text-xl mb-6">${price}</p>
      </div>

      {/* Button */}
      <button className="bg-[#e6ded5] px-14 py-5 text-sm uppercase tracking-widest hover:bg-[#d6ccc2] transition">
        More Details
      </button>
    </div>
  );
}
