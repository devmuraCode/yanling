
import { LicensesSection } from '../(home)/sections/LicensesSection/LicensesSection';
import bgNews from '../../assets/about_header.jpg'
import { Header } from "@/components/Header/Header";
const Licenses = () => {
  return (
  <div>
    <Header title="Licenses" description="Let us share the future!" image={bgNews}/>
    <LicensesSection/>
  </div>
  )
};

export default Licenses;