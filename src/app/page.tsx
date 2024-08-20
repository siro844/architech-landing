
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Pricing } from "@/components/Pricing";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <ProductShowcase />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}
