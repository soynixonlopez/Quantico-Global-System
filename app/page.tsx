import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { CatalogBanner } from "@/components/CatalogBanner";
import { Brands } from "@/components/Brands";
import { ProductCatalog } from "@/components/ProductCatalog";
import { Stats } from "@/components/Stats";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <CatalogBanner />
      <Brands />
      <ProductCatalog />
      <Stats />
      <WhyUs />
      <Testimonials />
      <Contact />
    </>
  );
}
