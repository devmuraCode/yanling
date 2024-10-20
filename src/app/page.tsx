import { AboutComponent } from "@/components/Home/AboutComponent/AboutComponent";
import { ContactUsComponent } from "@/components/Home/ContactUs/ContactUsComponent";
import { Header } from "@/components/Home/Header/Header";
import { NewsComponent } from "@/components/Home/NewsComponent/NewsComponent";
import RecommendedProducts from "@/components/Home/RecommendedPrdoducts/RecommendedProducts";
import { Solition } from "@/components/Home/Solution/Solition";
import Link from "next/link";

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