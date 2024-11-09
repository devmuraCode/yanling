import { Solutions } from "./ui/Solution/Solution";
import { Header } from "@/app/(home)/ui/Header/Header";
import { NewsComponent } from "@/app/(home)/ui/NewsComponent/NewsComponent";
import { AboutComponent } from "@/app/(home)/ui/AboutComponent/AboutComponent";
import RecommendedProducts from "@/app/(home)/ui/RecommendedPrdoducts/RecommendedProducts";

export default function Home() {
  return (
    <div>
      <Header />
      <RecommendedProducts />
      <Solutions />
      <AboutComponent />
      <NewsComponent />
    </div>
  );
}
