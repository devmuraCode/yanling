import { Header } from "@/components/Header/Header";
import { AboutSection } from "./sections/AboutSection/AboutSection";
import bgAbout from '../../assets/about_header.jpg'
const About = () => {
  return (
    <div>
      <Header title="ABOUT YANLING" description="Build a leading brand in the industrial computer industry!" image={bgAbout}/>
      <AboutSection/>
    </div>
  );
};
export default About;
