import { AboutSection } from "./sections/AboutSection/AboutSection";
import { Header } from "./sections/Header/Header";
import { LicensesSection } from "./sections/LicensesSection/LicensesSection";
import { NewsSection } from "./sections/NewsSection/NewsSection";
import RecommendedProducts from "./sections/RecommendedPrdoducts/RecommendedProducts";
import { SolutionsSection } from "./sections/SolutionSection/SolutionSection";


export default function Home() {
  return (
    <div>
      <Header />
      <RecommendedProducts />
      <SolutionsSection />
      <AboutSection />
      <NewsSection />
      <LicensesSection/>
    </div>
  );
}
