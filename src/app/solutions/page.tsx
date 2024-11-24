import { Header } from "@/components/Header/Header";
import { Layout } from "@/app/solutions/ui/Layout/Layout";
import bgSolution from '../../assets/solutionheader.jpg'

const Solutions = () => {
  return (
    <div>
      <Header title="Solutions" description="YANLING provides solutions for Automation, Kiosk, Medical,
              Firewall, Transportation etc." image={bgSolution}/>
      <Layout/>
    </div>
  )
};
export default Solutions;
