
import { AboutSection } from "./sections/AboutSection/AboutSection";
import { ClientsSection } from "./sections/ClientsSection/ClientsSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { Header } from "./sections/Header/Header";
import { LicensesSection } from "./sections/LicensesSection/LicensesSection";
import { NewsSection } from "./sections/NewsSection/NewsSection";
import { ProductsSection } from "./sections/ProductsSection/ProductsSection";
import { ServiceSection } from "./sections/ServiceSection/ServiceSection";


export default function Home() {
  return (
    <div>
      <Header />
      <AboutSection />
      <ClientsSection/>
      <LicensesSection/>
      <ProductsSection/>
      <ServiceSection/>
      <NewsSection/>
      <ContactSection/>
    </div>
  );
}
