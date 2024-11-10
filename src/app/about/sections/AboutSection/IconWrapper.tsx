import React, { ReactNode } from "react";
import styles from "./AboutSection.module.scss";

interface IconWrapperProps {
  text: string;
  children: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ text, children }) => {
  return (
    <div className={styles.icon_wrapper}>
      <div className={styles.icon}>{children}</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default IconWrapper;
