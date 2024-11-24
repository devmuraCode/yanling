
import bgNews from '../../assets/about_header.jpg'
import { Header } from "@/components/Header/Header";
import { NewsSection } from "./sections/NewsSection/NewsSection";
const News = () => {
  return (
  <div>
    <Header title="NEWS CENTER" description="Let us share the future!" image={bgNews}/>
    <NewsSection/>
  </div>
  )
};

export default News;