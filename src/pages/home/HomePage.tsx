import About from "@/components/sections/About/About";
import Hero from "@/components/sections/Hero/Hero";
import Services from "@/components/sections/Services/Services";
import ServicesHighlight from "@/components/sections/Services/ServicesHighlight";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ServicesHighlight/>
    </main>
  );
}
