import Container from "@/components/Container";
import styles from "./OemOdmServiceSection.module.scss";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import oem from '@/assets/oem.jpg'
import Image from "next/image";
export const OemOdmServiceSection = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div>
          <h2 className={styles.title}>
            <MdMiscellaneousServices />
            OEM/ODM Service
          </h2>
          <div>
            <p className={styles.description}>
              YANLING Technology focuses on Mini PC, Industrial PC industry over
              15+ years for Now, we have our own experienced R & D team and
              factory, can offer customized design and manufacturing services
              from PCB development, chassis design to manufacturing machine
              according to your requirements .
            </p>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>
            <FaComputer />
            What We Can Do OEM/ODM？
          </h2>
          <div>
            <ul className={styles.description}>
              <li>1. Customize your LOGO on the product.</li>
              <li>2. Customize your booting LOGO.</li>
              <li>3. Customize the color of your product.</li>
              <li>4. Software compatible testing on our machine.</li>
              <li>5. Customize industrial grade like IP65, IP67.</li>
              <li>6. Customize your packing according to your requirements.</li>
              <li>7. Brand new customization for PCB and chassis.</li>
            </ul>
          </div>
        </div>
        <div>
            <h2 className={styles.title}>Customized Process </h2>
            <div><Image src={oem} alt="" className={styles.img} /></div>
        </div>
        
      </Container>
    </div>
  );
};
