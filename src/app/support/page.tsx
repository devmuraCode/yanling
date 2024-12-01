import { Header } from "@/components/Header/Header"
import bgSupport from '../../assets/support_bg.jpg'
import { OemOdmServiceSection } from "./sections/OemOdmServiceSection/OemOdmServiceSection"
import { AfterSalesSection } from "./sections/AfterSalesSection/AfterSalesSection"

 const Support = () => {
  return (
    <div>
      <Header title="Support" description="We're here to help! Browse our resources or reach out to our team for assistance." image={bgSupport}/>
      {/* <OemOdmServiceSection/> */}
      <AfterSalesSection/>
    </div>
  )
}
export default Support
