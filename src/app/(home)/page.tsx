import { AboutComponent } from "@/app/(home)/ui/AboutComponent/AboutComponent";
import { Header } from "@/app/(home)/ui/Header/Header";
import { NewsComponent } from "@/app/(home)/ui/NewsComponent/NewsComponent";
import RecommendedProducts from "@/app/(home)/ui/RecommendedPrdoducts/RecommendedProducts";
import { ContactUsComponent } from "./ui/ContactUs/ContactUsComponent";
import { Solition } from "./ui/Solution/Solition";

export default function Home() {
  return (
    <div>
       <Header/>
       <RecommendedProducts/>
       <Solition/>
       <AboutComponent/>
       <NewsComponent/>
       <ContactUsComponent/>
    </div>
  );
}